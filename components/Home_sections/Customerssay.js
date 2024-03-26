"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { textVariant2, textVariant4 } from "@/font_utils/motion";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { customerSyas } from "@/font_utils/infos";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Title from "../reusablecomponent/Title";
import { useTranslation } from "react-i18next";
const pop = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const customerssay = () => {
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
  const { t } = useTranslation();
  return (
    <div className="py-20  max-w-[1400px] mx-auto  overflow-hidden w-full px-4 desktop:px-16">
      {/* <Title text="Up to -40% 🎊 Order.uk exclusive deals" /> */}
      <div className="tablet:flex py-8 justify-between ">
        <div className=" py-6 tablet:py-0 max-w-[450px]">
          <Title text={t("HearWhatOurCustomer")} className="capitalize" />

          <motion.p
            variants={textVariant4}
            initial="hidden"
            whileInView="show"
            className="py-6 leading-[25px] text-[18px] text-[#063255] "
          >
            {t("Successstories")}
          </motion.p>
        </div>
        <motion.p
          variants={textVariant4}
          initial="hidden"
          whileInView="show"
          className="max-w-[600px] text-[16px] text-[#516469]"
        >
          {t("SuccessstoriesDes")}
        </motion.p>
      </div>
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
        className="mySwiper min-h-[480px]  mx-auto "
        breakpoints={breakpoints}
      >
        {customerSyas.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center  mx-4 ">
              <div className=" service_card dialogMain group relative w-full h-[450px] tablet:w-[500px] tablet:h-[400px] ease-linear delay-75 duration-300 ">
                <div className="absolute  top-0 left-0 text-center py-10 px-4 tablet:px-10  min-h-[400px]   tablet:mx-h-[400px]">
                  <h3 className="py-4 leading-[25px] font-extrabold text-[18px] text-[#fff]   group-hover:text-[#111]">
                    {t(`${content.title}`)}
                  </h3>
                  <p className="text-[16px] text-[#fff]  group-hover:text-[#111]">
                    {t(`${content.des}`)}
                  </p>
                  <p className="py-4 leading-[25px] font-extrabold text-[18px] text-[#fff]  group-hover:text-[#111]">
                    {t(`${content.smalltitle}`)}
                  </p>
                </div>

                <div class="diagonal-slide absolute top-0 right-0 bg-white opacity-20 h-full w-full"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default customerssay;
