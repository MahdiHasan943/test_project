"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../reusablecomponent/Title";
import { slideIn, textVariant2 } from "@/font_utils/motion";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TypingText } from "../reusablecomponent/CustomText";
import { Work_Sans } from "next/font/google";
const work_sans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const WhyLINK711 = () => {
  const { t } = useTranslation();
  const whylinks = [
    {
      titles: "Experiencethatcounts",
      des: "exprienceDes",
    },
    {
      titles: "Proventrackrecord",
      des: "ProventrackrecordDes",
    },
    {
      titles: "Customersatisfaction",
      des: "CustomersatisfactionDes",
    },
    {
      titles: "TailoredStratigies",
      des: "TailoredStratigiesDes",
    },
    {
      titles: "Stayahead",
      des: "StayaheadDes",
    },
    {
      titles: "Highlyqualified",
      des: "HighlyqualifiedDes",
    },
  ];
  const swiperRef = useRef(null);

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  };

  return (
    <div className=" max-w-[1400px] mx-auto tablet:px-10 pt-[150px] pb-[100px]">
      <motion.div
        variants={slideIn("left", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="w-[200px] my-12 ml-4 tablet:ml-0  h-40px] bg-[#ffc107] flex items-center px-4"
      >
        <TypingText
          textStyles={`${work_sans.className} text-[#111] uppercase font-extrbold text-[24px]`}
          title={t("WarumLINK711")}
        />
      </motion.div>
      <Swiper
        ref={swiperRef}
        watchSlidesProgress={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          speed: 3000, // Adjusted speed to slow down the transition
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        className="mySwiper min-h-[470px]  mx-auto "
        breakpoints={breakpoints}
      >
        {whylinks.map((warum, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="group mx-4 relative dialogMain   service_card2 group ease-linear delay-75 duration-300 px-8 py-8"
            >
              <div class=" absolute translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500 delay-100 top-0 right-0 bg-white opacity-[0.1] h-full w-full"></div>

              <div className="w-[80px] h-[80px] iconbg flex justify-center items-center">
                <svg
                  className="w-[30px] text-[#111] group-hover:text-[#fff] h-[30px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
              </div>
              <div className="py-4 w-full h-auto">
                <h3 className="text-[18px] py-4  font-bold group-hover:text-[#fff]   text-[#18191c]">
                  {t(`${warum.titles}`)}
                </h3>
                <p className="text-[16px]   text-[#18191c] group-hover:text-[#fff] ">
                  {t(`${warum.des}`)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyLINK711;
