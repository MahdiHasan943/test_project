"use client";
import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Description from "@/components/reusablecomponent/Description";
import { Line, Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Dialog, Transition } from "@headlessui/react";

import { useTranslation } from "react-i18next";
import { Work_Sans } from "next/font/google";
import { TypingText } from "@/components/reusablecomponent/CustomText";
import { motion } from "framer-motion";
import { staggerContainer, textVariant3 } from "@/font_utils/motion";
import Link from "next/link";
import RealtimeTrends from "@/components/RealtimeTrends";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const InterestOverTimeChart = ({ interestData: data }) => {
  const labels = data?.map((item) => item?.formattedTime);
  const values = data.map((item) => item.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Interest Over Time",
        data: values,
        // backgroundColor: 'rgba(53, 162, 235, 0.5)',;
        backgroundColor: "#fec63f", // Solid blue color without transparency
        borderColor: "#fec63f",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at zero
        min: 0, // Set the minimum value of the y-axis
        max: 100, // Set the maximum value of the y-axis
        ticks: {
          stepSize: 10, // Adjust based on your preference
        },
      },
    },
    maintainAspectRatio: false, // Consider if this should be true depending on your layout needs
    responsive: true,
  };

  return <Bar data={chartData} options={options} />;
};

const work_sans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const page = () => {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [toggledArticle, setToggledArticle] = useState(null); // State to keep track of toggled article

  // Function to handle toggling of the article content

  const handleToggle = ({ index, articleIndex }) => {
    setToggledArticle((prevToggledArticle) => {
      if (prevToggledArticle === null || prevToggledArticle.index !== index) {
        return {
          index: index,
          articleIndex: articleIndex,
        };
      } else {
        return null;
      }
    });
  };

  // Use only startDate for date handling
  const [startDate, setStartDate] = useState(new Date());
  const [geo, setGeo] = useState("");
  const [interestResults, setInterestResults] = useState("");
  const [dailyTrendsResults, setDailyTrendsResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [interestCount, setInterestCount] = useState(0);
  console.log(dailyTrendsResults);
  const fetchInterestOverTime = async () => {
    if (interestCount >= 3) {
      alert(
        "You have reached the maximum limit for searching interest over time."
      );
      return;
    }

    // Increment the count
    setInterestCount(interestCount + 1);
    if (!keyword) {
      alert("Keyword is required");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://trends-beta.vercel.app/interest-over-time?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const data = await response.json();
      console.log(data, "data");
      setSearchKeyword(keyword);
      // Filter for years 2015 to 2024
      const filteredData = data.filter((item) => {
        const year = new Date(item.formattedAxisTime).getFullYear();
        return year >= 2015 && year <= 2024;
      });

      // Reduce the data to include only the first occurrence of each year
      const reducedData = filteredData.reduce((acc, current) => {
        const year = new Date(current.formattedAxisTime).getFullYear();
        const existingItem = acc.find(
          (item) => new Date(item.formattedAxisTime).getFullYear() === year
        );
        if (!existingItem) {
          acc.push(current); // If the year hasn't been added yet, add the current item
        }
        return acc;
      }, []);

      // Format the reduced data
      const formattedData = reducedData.map((item) => ({
        formattedTime: item.formattedTime,
        value: item.value[0], // Assuming you want the first value in the value array
      }));

      setInterestResults(formattedData); // Update state with the formatted data
      setDailyTrendsResults([]); // Clear daily trends results when fetching interest over time
    } catch (error) {
      console.error("Error:", error);
      setInterestResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchDailyTrends = () => {
    const formattedDate = startDate.toISOString().split("T")[0]; // Get the selected date from the date picker

    setIsLoading(true);

    const storedData = localStorage.getItem("dailyTrends");
    const storedSearchParams = localStorage.getItem("dailyTrendsSearchParams");
    const storedSearchParamsObj = storedSearchParams
      ? JSON.parse(storedSearchParams)
      : {};

    if (
      storedData &&
      storedSearchParamsObj.date === formattedDate &&
      storedSearchParamsObj.country === (geo || "US")
    ) {
      // Data exists in local storage, set the state with existing data
      setDailyTrendsResults(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      fetch(
        `https://trends-beta.vercel.app/daily-trends?day=${encodeURIComponent(
          formattedDate
        )}&geo=${encodeURIComponent(geo || "US")}` // Use selected country or default to US if not provided
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "No data found for the selected day. Please select another day."
            );
          }
          return response.json();
        })
        .then((data) => {
          // Log to inspect the fetched data
          const formattedData = data.map((item, index) => ({
            index: index + 1,
            searchTerm: item.searchTerm,
            traffic: item.traffic,
            imageUrl: item.imageUrl,
            articles: item.articles,
          }));
          setDailyTrendsResults(formattedData);
          // Save the fetched data in local storage along with search parameters
          const searchParams = { date: formattedDate, country: geo || "US" };
          localStorage.setItem(
            "dailyTrendsSearchParams",
            JSON.stringify(searchParams)
          );
          localStorage.setItem("dailyTrends", JSON.stringify(formattedData));
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => setIsLoading(false));
    }
  };
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDateChange = (date) => {
    // Ensure that if only the date is selected, an error is displayed
    if (!geo) {
      alert("Please select a country.");
      return;
    }
    setStartDate(date);
    // Store the selected date in local storage
    localStorage.setItem("selectedDate", date.toISOString());
  };

  const handleCountryChange = (e) => {
    setGeo(e.target.value);
  };

  useEffect(() => {
    // Check if localStorage is available (i.e., running in the browser environment)
    if (typeof localStorage !== "undefined") {
      const storedData = localStorage.getItem("dailyTrends");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setDailyTrendsResults(parsedData);
        } catch (error) {
          console.error("Error parsing stored data:", error);
        }
      } else {
        // No existing data in local storage, fetch new data
        fetchDailyTrends();
      }
    }
  }, []);

  // news
  const [searchParams, setSearchParams] = useState({
    q: "",
    gl: "us",
    hl: "en",
    num: 100,
  });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const fetchData = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const requestData = JSON.stringify(searchParams);

    const config = {
      method: "post",
      url: "https://google.serper.dev/news",
      headers: {
        "X-API-KEY": "f5770be02acf9ff9a5da0c239f7fc46feaf73c80",
        "Content-Type": "application/json",
      },
      data: requestData,
    };

    try {
      const response = await axios(config);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: name === "num" ? parseInt(value, 10) : value,
    }));
  };
  const [selectedIndex, setSelectedIndex] = useState(() => {
    // Check if localStorage is available and retrieve the stored index
    if (typeof window !== "undefined" && window.localStorage) {
      const storedIndex = localStorage.getItem("selectedTabIndex");
      return storedIndex ? parseInt(storedIndex) : 0;
    } else {
      return 0; // Default value if localStorage is not available
    }
  });

  // Function to handle tab change
  const handleTabChange = (index) => {
    setSelectedIndex(index);
    // Store the selected index in localStorage
    localStorage.setItem("selectedTabIndex", index.toString());
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchDailyTrends();
    }
  };
  const [dailyTrendsSearchParams, setDailyTrendsSearchParams] = useState(null);

  useEffect(() => {
    // Retrieve search parameters from local storage
    const storedSearchParams = localStorage.getItem("dailyTrendsSearchParams");
    if (storedSearchParams) {
      setDailyTrendsSearchParams(JSON.parse(storedSearchParams));
    }
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <motion.h2
        variants={textVariant3}
        initial="hidden"
        whileInView="show"
        className={`${work_sans.className} relative px-4 py-10 tablet:px-0 max-w-[1000px] mx-auto font-extrabold text-[30px]   leading-[50px] tablet:text-[42px]  tablet:leading-[60px] text-[#18191c]`}
      >
        {" "}
        {t("trendstitle")}
      </motion.h2>

      <section
        className={`${work_sans.className} min-h-[500px] bg-[#f5faff] pt-12 pb-[100px] h-auto px-4`}
      >
        <motion.div className="container mx-auto tablet:px-4 bg-[#f5faff] font-sans leading-normal tracking-normal">
          <Tab.Group selectedIndex={selectedIndex} onChange={handleTabChange}>
            <Tab.List className="flex justify-between  tablet:justify-center px-2 tablet:px-0  h-[90px] max-w-[800px] mx-auto  gap-4 tablet:gap-8 items-center tablet:space-x-1  rounded-xl  ">
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-[#000] outline-none text-[11px] tablet:text-[16px]  py-4 px-5 font-bold text-[#fec63f] border border-[2] outline outline-2 outline-[#ffffff] rounded-md shadow-xl"
                    : "text-[#fff] bg-[#fec63f] outline-none text-[11px] tablet:text-[16px] py-4 px-5 font-bold border border-l-0 border-t-0 border-b-0 border-r-2"
                }
              >
                {t("DailyTrends")}
              </Tab>

              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-[#000] outline-none text-[11px] tablet:text-[16px] py-4 px-5 font-bold text-[#fec63f] border border-[2] outline outline-2 outline-[#ffffff] rounded-md shadow-xl"
                    : "text-[#fff] bg-[#fec63f] outline-none text-[11px] tablet:text-[16px] py-4 px-5 font-bold border border-l-0 border-t-0 border-b-0 border-r-2"
                }
              >
                {t("FindLatestNews")}
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-[#000] outline-none text-[11px] tablet:text-[16px] py-4 px-5 font-bold text-[#fec63f] border border-[2] outline outline-2 outline-[#ffffff] rounded-md shadow-xl"
                    : "text-[#fff] bg-[#fec63f] outline-none text-[11px] tablet:text-[16px] py-4 px-5 font-bold 2"
                }
              >
                {t("InterestOverTime")}
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="bg-white p-3 rounded-xl">
                {/* Daily Trends Form and Results */}
                <div className="shadow-md max-w-[550px] mx-auto rounded px-8 pt-6 pb-8 mb-4">
                  <h2 className="text-xl mb-2"> {t("DailyTrends")}</h2>
                  <div className="flex gap-2 items-center">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      onKeyPress={handleKeyPress}
                      placeholderText="Select a date" // Add placeholder text
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <select
                      className="shadow border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                      id="geoInput"
                      value={geo}
                      onChange={(e) => setGeo(e.target.value)}
                      onKeyPress={handleKeyPress}
                    >
                      <option className="" value="">
                        Select a country
                      </option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="IT">Italy</option>
                      <option value="JP">Japan</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="BR">Brazil</option>
                      <option value="PH">Philippines</option>
                      <option value="CN">China</option>
                      <option value="IN">India</option>
                      <option value="MX">Mexico</option>
                      <option value="RU">Russia</option>
                      <option value="ZA">South Africa</option>
                      <option value="KR">South Korea</option>
                      <option value="ES">Spain</option>
                      <option value="SE">Sweden</option>
                    </select>
                  </div>
                  <button
                    className="bg-[#fec63f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    onClick={fetchDailyTrends}
                  >
                    Search
                  </button>
                </div>
                <div className="bg-white rounded px-8 pt-6 pb-8 mb-8">
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      {dailyTrendsSearchParams && (
                        <div
                          className={`${work_sans.className} mb-4 gap-8 flex items-center max-w-[1000px] mx-auto text-center`}
                        >
                          <p className="text-[24px]">
                            Search Date:{" "}
                            {startDate.toISOString().split("T")[0] ||
                              dailyTrendsSearchParams.date}
                          </p>
                          <p className="text-[24px]">
                            Search Country:{" "}
                            {geo || dailyTrendsSearchParams.country}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 max-w-[1000px] mx-auto desktop:grid-cols-3 gap-4">
                        {dailyTrendsResults.map((item, index) => (
                          <div
                            key={index}
                            className={`${work_sans.className} bg-white max-w-[350px] shadow-md rounded overflow-hidden`}
                          >
                            {/* <Link href={`/trends/${index}`} > */}
                            <img
                              src={item.imageUrl}
                              alt="Trend Image"
                              className="w-full mx-auto h-[150px]"
                            />
                            {/* </Link> */}
                            <div className="p-4">
                              <h3
                                className={`${work_sans.className}  text-[26px] mb-2`}
                              >
                                {item.searchTerm}
                              </h3>
                              <p className="text-[20px]">
                                Traffic: {item.traffic} users
                              </p>
                              <p className="text-[18px]">
                                Time:{" "}
                                {startDate ? startDate.toDateString() : "N/A"}
                              </p>
                              <div>
                                <span className="text-[22px] pr-4">
                                  Articles:
                                </span>
                                <button
                                  className="text-[#ffc107] font-bold"
                                  onClick={() =>
                                    handleToggle({
                                      index,
                                      articleIndex: null,
                                    })
                                  }
                                >
                                  See More
                                </button>
                                {/* Render the unordered list if it is toggled */}
                                {toggledArticle &&
                                  toggledArticle.index === index && (
                                    <Transition
                                      appear
                                      as={Fragment}
                                      show={toggledArticle.index === index}
                                    >
                                      <Dialog
                                        as="div"
                                        className="relative z-10"
                                        onClose={() =>
                                          handleToggle({
                                            index,
                                            articleIndex: null,
                                          })
                                        }
                                      >
                                        <Transition.Child
                                          as={Fragment}
                                          enter="ease-out duration-300"
                                          enterFrom="opacity-0"
                                          enterTo="opacity-100"
                                          leave="ease-in duration-200"
                                          leaveFrom="opacity-100"
                                          leaveTo="opacity-0"
                                        >
                                          <div className="fixed inset-0 bg-black/25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                              as={Fragment}
                                              enter="ease-out duration-300"
                                              enterFrom="opacity-0 scale-95"
                                              enterTo="opacity-100 scale-100"
                                              leave="ease-in duration-200"
                                              leaveFrom="opacity-100 scale-100"
                                              leaveTo="opacity-0 scale-95"
                                            >
                                              <Dialog.Panel className="w-full min-h-[700px] max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                  as="h3"
                                                  className={`${work_sans.className} py-3 text-[30px] mb-2`}
                                                >
                                                  Trends Keyword{" "}
                                                  {item.searchTerm}
                                                </Dialog.Title>

                                                <div className="mt-2">
                                                  <img
                                                    src={item.imageUrl}
                                                    alt="Trend Image"
                                                    className="w-[300px]  h-[150px]"
                                                  />

                                                  <p className="text-[18px] py-2 flex items-center gap-4 tablet:gap-10">
                                                    Traffic: {item.traffic}{" "}
                                                    users
                                                    <span>
                                                      Time:{" "}
                                                      {startDate
                                                        ? startDate.toDateString()
                                                        : "N/A"}
                                                    </span>
                                                  </p>

                                                  <p className="text-[18px] text-[#ffc107] font-extrabold">
                                                    Articles:
                                                  </p>
                                                </div>

                                                {/* Render the article content inside the modal */}
                                                <ul className="space-y-2">
                                                  {item.articles &&
                                                    item.articles.map(
                                                      (
                                                        article,
                                                        articleIndex
                                                      ) => (
                                                        <li
                                                          key={articleIndex}
                                                          className="mt-1"
                                                        >
                                                          <div className="flex gap-2">
                                                            <span className="text-[#111] font-bold ">
                                                              {articleIndex + 1}
                                                              .
                                                            </span>
                                                            <div>
                                                              <a
                                                                href={
                                                                  article.url
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-[#111] text-[18px]"
                                                              >
                                                                {article.title}{" "}
                                                                <a
                                                                  href={
                                                                    article.url
                                                                  }
                                                                >
                                                                  visit article
                                                                </a>
                                                              </a>
                                                              <p className="text-[#111] text-[18px]">
                                                                Source:{" "}
                                                                {article.source}
                                                                , Publish Date:{" "}
                                                                {
                                                                  article.publishDate
                                                                }
                                                              </p>
                                                              <div className="mt-2">
                                                                {/* Render article content here */}
                                                                <p className="text-[#111] text-[18px]">
                                                                  {
                                                                    article.content
                                                                  }
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </li>
                                                      )
                                                    )}
                                                </ul>

                                                <div className="mt-4 absolute top-0 right-5 flex justify-end">
                                                  <button
                                                    type="button"
                                                    className={`${work_sans.className} text-[40px] text-[#ffc107]`}
                                                    onClick={() =>
                                                      handleToggle({
                                                        index,
                                                        articleIndex: null,
                                                      })
                                                    }
                                                  >
                                                    x
                                                  </button>
                                                </div>
                                              </Dialog.Panel>
                                            </Transition.Child>
                                          </div>
                                        </div>
                                      </Dialog>
                                    </Transition>
                                  )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </Tab.Panel>

              <Tab.Panel className="bg-white p-3 rounded-xl">
                {/* Latest News Form and Results */}
                <form
                  className="pb-8 my-4 shadow-md mx-auto"
                  onSubmit={fetchData}
                >
                  <div className="max-w-[550px] mx-auto">
                    <h2 className="text-xl mb-2"> {t("FindLatestNews")}</h2>
                    {/* Form fields for news search */}
                    <div className="mb-4">
                      <label
                        htmlFor="query"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Search Query
                      </label>
                      <input
                        type="text"
                        id="query"
                        name="q"
                        className="mt-1 px-4 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter search query"
                        value={searchParams.q}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country Code (e.g., US)
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="gl"
                          className="mt-1 px-4 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Country"
                          value={searchParams.gl}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="language"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Language (e.g., en)
                        </label>
                        <input
                          type="text"
                          id="language"
                          name="hl"
                          className="mt-1 px-4 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Language"
                          value={searchParams.hl}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="num"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Number of Results
                      </label>
                      <input
                        type="number"
                        id="num"
                        name="num"
                        className="mt-1 px-4 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Number of results (1-100)"
                        min="1"
                        max="100"
                        value={searchParams.num}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#fec63f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Search
                    </button>
                  </div>

                  {/* Display news results */}
                  <div
                    className="max-w-[1000px] mx-auto py-8 grid grid-cols-1 tablet:grid-cols-3 gap-4"
                    // style={{ overflow: "auto", maxHeight: "500px" }}
                  >
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {data?.news.map((item, index) => (
                      <div
                        key={index}
                        // style={{
                        //   marginBottom: "20px",
                        //   borderBottom: "1px solid #ccc",
                        //   paddingBottom: "20px",
                        // }}
                        className=" p-4 shadow-md rounded-md "
                      >
                        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {item.title}
                        </h2>
                        <p>{item.snippet}</p>
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-[150px]"
                          />
                        )}
                        <p>Date: {item.date}</p>
                        <p>Source: {item.source}</p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See more
                        </a>
                      </div>
                    ))}
                  </div>
                </form>
              </Tab.Panel>
              <Tab.Panel className="bg-white  p-3 rounded-md">
                {/* Interest Over Time Form and Results */}

                <div className="shadow-md max-w-[550px] mx-auto rounded px-8 pt-6 pb-8 mb-4">
                  <h2 className="text-xl mb-2"> {t("InterestOverTime")}</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent the default form submission
                      fetchInterestOverTime();
                    }}
                  >
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Enter keyword"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                      type="submit" // Make the button of type submit
                      className="bg-[#fec63f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    >
                      Search
                    </button>
                  </form>
                </div>

                <div className="">
                  {interestResults.length === 0 && (
                    <div className="w-full  max-w-[1400px] mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-8 overflow-hidden">
                      <div className="">
                        <img
                          src="/images/batch_one/AncEarbuds.png"
                          alt="chart"
                          width={800}
                          height={400}
                          className="w-full "
                        />
                      </div>
                      <div className="">
                        <img
                          src="/images/batch_one/automation.png"
                          alt="chart"
                          width={800}
                          height={400}
                          className="w-full "
                        />
                      </div>{" "}
                      <div className="">
                        <img
                          src="/images/batch_one/AncEarbuds1.png"
                          alt="chart"
                          width={400}
                          height={400}
                          className="w-full "
                        />
                      </div>{" "}
                      <div className="">
                        <img
                          src="/images/batch_one/ai.png"
                          alt="chart"
                          width={400}
                          height={400}
                          className="w-full "
                        />
                      </div>
                    </div>
                  )}
                  {interestResults.length > 0 && (
                    <div className="chart-container">
                      <h3>
                        {" "}
                        {t("InterestOverTime")}-{searchKeyword}
                      </h3>
                      <InterestOverTimeChart interestData={interestResults} />
                    </div>
                  )}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </section>
    </>
  );
};

export default page;
