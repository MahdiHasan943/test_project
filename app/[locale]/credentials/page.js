"use client";
import Title from "@/components/reusablecomponent/Title";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  const images = ["/images/Cslide1.webp", "/images/Cslide2.webp"]; // Array of image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images2 = ["/images/Cslide3.webp", "/images/Cslide4.webp"];
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const images3 = ["/images/Cslide5.webp", "/images/Cslide6.webp"];
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
  
  const images4 = ["/images/Cslide7.webp", "/images/Cslide8.webp"];
  const [currentImageIndex4, setCurrentImageIndex4] = useState(0);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Go to the next image or loop back to the first image
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); // Go to the previous image or loop back to the last image
  };
  const handleNextImage2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const handlePreviousImage2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
  };

  const handleNextImage3 = () => {
    setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % images3.length);
  };
  
  const handlePreviousImage3 = () => {
    setCurrentImageIndex3(
      (prevIndex) => (prevIndex - 1 + images3.length) % images3.length
    );
  };
  
  const handleNextImage4 = () => {
    setCurrentImageIndex4((prevIndex) => (prevIndex + 1) % images4.length);
  };
  
  const handlePreviousImage4 = () => {
    setCurrentImageIndex4(
      (prevIndex) => (prevIndex - 1 + images4.length) % images4.length
    );
  };

  return (
    <div className="w-full h-auto">
      <div
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t('credentials')}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
         <span className='text-[#ffc006]'> {t('home')}</span> &gt; {t('credentials')}
          </p>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto px-4 py-10 ">
        <div className="tablet:flex w-full  items-center gap-12">
          <div className="relative min-w-[300px] ">
            <img
              src={images[currentImageIndex]}
              alt="monitor"
              width={350}
              height={300}
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={handleNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePreviousImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
                className="rotate-180"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
          </div>
          <a href="https://ownhm.com/" target="_blank">
          <div className=" desktop:max-w-[800px]  mt-4 tablet:mt-0  border-2 border-[#FEC63F] py-5 px-5">
            <Title
              text={t('ct1')}
              className="tablet:text-[28px]"
            />
           <p className="  text-[#111]   py-4 text-[19px]">
           {t('cdes1')}
            </p>
          </div> </a>
        </div>

        <div className="tablet:flex w-full py-16  items-center gap-12">
        <a href="https://ownhm.com/" target="_blank">
          <div className=" desktop:max-w-[800px]  mt-4 tablet:mt-0  border-2 border-[#FEC63F] py-5 px-5">
            <Title
                text={t('c2')}
              className="tablet:text-[28px]"
            />
           <p className="  text-[#111]   py-4 text-[19px]">
           {t('cdes2')}

            </p>
          </div> </a>

          <div className="relative min-w-[300px] mt-4 tablet:mt-0">

            <img
              src={images2[currentImageIndex2]}
              alt="monitor"
              width={350}
              height={300}
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={handleNextImage2}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePreviousImage2}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
                className="rotate-180"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="tablet:flex w-full  items-center gap-12">
          <div className="relative min-w-[300px] ">
            <img
              src={images3[currentImageIndex3]}
              alt="monitor"
              width={350}
              height={300}
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={handleNextImage3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePreviousImage3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
                className="rotate-180"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
          </div>
          <a href="https://ownhm.com/" target="_blank">
          <div className=" desktop:max-w-[800px]  mt-4 tablet:mt-0  border-2 border-[#FEC63F] py-5 px-5">
            <Title
              text={t('c3')}
              className="tablet:text-[28px]"
            />
           <p className="  text-[#111]   py-4 text-[19px]">
           {t('cdes3')}
            </p>
          </div> </a>
        </div>

        <div className="tablet:flex w-full py-16  items-center gap-12">
        <a href="https://ownhm.com/" target="_blank">
          <div className=" desktop:max-w-[800px]  mt-4 tablet:mt-0  border-2 border-[#FEC63F] py-5 px-5">
            <Title
              text={t('c4')}
              className="tablet:text-[28px]"
            />
           <p className="  text-[#111]   py-4 text-[19px]">
           {t('cdes4')}
            </p>
          </div> </a>

          <div className="relative min-w-[300px]  mt-4 tablet:mt-0">
            <img
              src={images4[currentImageIndex4]}
              alt="monitor"
              width={350}
              height={300}
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={handleNextImage4}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePreviousImage4}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                focusable="false"
                className="rotate-180"
              >
                <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
