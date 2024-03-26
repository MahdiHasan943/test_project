"use client";
import { useEffect, useState } from "react";
import Description from "./reusablecomponent/Description";
import { IBM_Plex_Mono, Work_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/font_utils/motion";
import { TypingText } from "./reusablecomponent/CustomText";
import Link from "next/link";
const work_sans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const lexend = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const RealtimeTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  // Mapping between short category names and full names
  const categoryNames = {
    s: "Sports",
    m: "Medicine",
    h: "Health",
    t: "Technology",
    e: "Entertainment",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = ["s", "m", "h", "t", "e"];
        const allTrends = {};

        for (const category of categories) {
          const response = await fetch(
            `https://trends-beta.vercel.app/realtime-trends?geo=US&category=${category}`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch ${category} trends`);
          }
          const data = await response.json();
          // Limit the number of trends displayed to 3
          allTrends[category] = data.slice(0, 3);
        }

        setTrends(allTrends);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Render loading state while fetching data
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-[1000px] flex items-center mx-auto text-center py-20"
      >
        <svg
          class=" animate-spin duration-300 delay-75 ease-in text-[#ffc107]  rounded-full w-5 h-5 mr-3 border border-[#ffc107] "
          viewBox="0 0 24 24"
        ></svg>
        <TypingText
          textStyles={`${work_sans.className} text-[#111] font-extrbold text-[24px]`}
          title={"Searching: Realtime Trends Categorie"}
        />
      </motion.div>
    );
  }
  const typewriterWords = [t("latestool")];
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="max-w-[1000px] py-20 bg-[#f5faff] mx-auto">
      {/* <Description
        text={t("latestool")}
        className={`${work_sans.className} text-[35px] py-4 leading-[40px]`}
      /> */}
      <h2
        className={`${work_sans.className} relative uppercase  px-4 pt-10 pb-6 tablet:px-0 max-w-[1000px] mx-auto font-extrabold text-[30px]   leading-[50px] tablet:text-[50px]  tablet:leading-[60px] text-[#18191c]`}
      >
        <Typewriter
          words={typewriterWords}
          loop={5}
          cursor
          cursorStyle="| "
          typeSpeed={120}
          deleteSpeed={200}
          delaySpeed={6000}
          onLoopDone={handleDone}
          onType={handleType}
        />
      </h2>

      <Description
        text={t("latestDes")}
        className="pt-3 pb-12 leading-[25px] px-4 tablet:px-0  text-[18px] text-[#516469] "
      />
      <Description
        text={t("realtime")}
        className={`${work_sans.className} text-[24px] py-4 leading-[40px]`}
      />
      {Object.entries(trends).map(([category, trends], index) => (
        <>
          <motion.div
            variants={fadeIn("up", "bounce", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            key={category}
          >
            <Description
              text={categoryNames[category]}
              className="text-[#ffc107] font-bold text-[28px] py-4"
            />

            <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 ">
              {trends.map((trend, trendIndex) => (
                <div
                  className="w-full tablet:w-[320px] min-h-[430px] shadow-md p-4 h-[430px] "
                  key={trendIndex}
                >
                  <img
                    className="w-full h-[200px] min-h-[200px]"
                    src={trend.imageUrl}
                    alt="Image"
                  />
                  <p
                    className={`${work_sans.className} text-[20px]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {trend.title}
                    <span>
                      <Link href="/trends/explore"> news</Link>
                    </span>
                  </p>
                  <p className="py-4 text-[18px]">Source: {trend.source}</p>
                </div>
              ))}
            </div>
            {index !== Object.entries(trends).length - 1 && (
              <hr className="my-8" />
            )}
          </motion.div>
        </>
      ))}
    </div>
  );
};

export default RealtimeTrends;
