"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Lato, Work_Sans } from "next/font/google";
import Image from "next/image";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Title from "../reusablecomponent/Title";
import Description from "../reusablecomponent/Description";
import MSlideContainer from "../reusablecomponent/MSlideContainer";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant2,
  useAnimation,
  zoomIn,
} from "@/font_utils/motion";
import Link from "next/link";
import { TypingText } from "../reusablecomponent/CustomText";

const lato = Lato({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
const work_sans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const Work = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" py-[150px]"
    >
      <div className="px-4 pb-20 max-w-[1050px] mx-auto ">
        {/* <Description
          text={t("OURPORTFOLIO")}
          className="py-4  leading-[25px] text-[18px] text-[#516469] "
        /> */}
        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="w-[250px] my-8 tablet:ml-0  h-[40px] bg-[#ffc107] flex items-center px-4"
        >
          <TypingText
            textStyles={`${work_sans.className} uppercase text-[#111] font-extrbold text-[24px]`}
            title={t("OURPORTFOLIO")}
          />
        </motion.div>
        <Title
          text={t("OurRecentWork")}
          className=" font-extrabold text-[30px] capitalize  leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#18191c]"
        />
      </div>

      <Swiper
        ref={swiperRef}
        watchSlidesProgress={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 4500,
          speed: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        className="mySwiper max-h-[400px] max-w-[1400px]  my-16"
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <Link target="_blank" href="https://realestateinghana.com/">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="relative h-[400px] w-full tablet:w-[400px] group tablet:mx-6 overflow-hidden"
            >
              <Image
                src={"/images/real.png"}
                alt="work"
                width={400}
                height={447}
                className="w-full  group-hover:scale-105   w-[full"
              />
              <div className="absolute top-0 left-0 h-full w-full z-20"></div>
              <div className="absolute hidden tablet:hidden top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">
                        Real Estate <br /> inghana
                      </p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </div>
              <motion.div
                variants={slideIn("left", "tween", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute top-0 left-0 h-full w-full z-50  ease-in-out duration-500 "
              >
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">
                        Real Estate <br /> inghana
                      </p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link target="_blank" href="https://concnews.com/">
            <motion.div
              variants={fadeIn("up", "tween", 1, 1)}
              initial="hidden"
              whileInView="show"
              className="relative group h-[400px] w-full tablet:w-[400px] overflow-hidden"
            >
              <Image
                src={"/images/news.png"}
                alt="work"
                width={400}
                height={447}
                className="w-full  group-hover:scale-105   w-[full"
              />
              <div className="absolute top-0 left-0 h-full w-full z-20"></div>
              <div className="absolute hidden tablet:hidden top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">ConsNews</p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </div>
              <motion.div
                variants={slideIn("left", "tween", 0.6, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute block tablet:block top-0 left-0 h-full w-full z-50  ease-in-out duration-500 "
              >
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">ConsNews</p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link target="_blank" href="https://ownhm.com/">
            <motion.div
              variants={fadeIn("up", "tween", 1.4, 1)}
              initial="hidden"
              whileInView="show"
              className="relative h-[400px] w-full tablet:w-[400px] group overflow-hidden"
            >
              <Image
                src={"/images/ownhome.png"}
                alt="work"
                width={400}
                height={447}
                className="w-full  group-hover:scale-105   w-[full"
              />
              <div className="absolute top-0 left-0 h-full w-full z-20"></div>
              <div className="absolute hidden tablet:hidden top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">
                        Ownhm
                        <br />
                      </p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </div>
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.3)}
                initial="hidden"
                whileInView="show"
                className="absolute block tablet:block top-0 left-0 h-full w-full z-50  ease-in-out duration-500 "
              >
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">
                        Ownhm <br />
                      </p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link target="_blank" href="https://cleartouch.design/">
            <motion.div
              variants={fadeIn("up", "tween", 1.8, 1)}
              initial="hidden"
              whileInView="show"
              className="relative h-[400px] w-full tablet:w-[400px] group tablet:mx-6 overflow-hidden"
            >
              <Image
                src={"/images/cleartouch.png"}
                alt="work"
                width={400}
                height={447}
                className="w-full  group-hover:scale-105   w-[full"
              />
              <div className="absolute top-0 left-0 h-full w-full z-20"></div>
              <div className="absolute hidden tablet:hidden top-0 left-0 h-full w-full z-50  translate-x-[-100%]  group-hover:translate-x-[0] ease-in-out duration-500 ">
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">
                        cleartouch.
                        <br /> design
                      </p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </div>
              <motion.div
                variants={slideIn("left", "tween", 1, 1.5)}
                initial="hidden"
                whileInView="show"
                className="absolute block tablet:block top-0 left-0 h-full w-full z-50  ease-in-out duration-500 "
              >
                <div className="shape z-50 flex flex-col items-center justify-center overflow-hidden">
                  <div className="ml-[80px] text-container">
                    <MSlideContainer>
                      <BsArrowRight className="text-[#fff]  duration-200 ease-linear text-[30px] h-[50px] w-[50px] bg-[#111] py-2 px-3 rounded-full hover:bg-[#fff] hover:text-[#111] font-bold" />
                      <p className="py-8 font-bold text-[22px]">
                        cleartouch.
                        <br /> design
                      </p>{" "}
                    </MSlideContainer>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/*               
             

          {/* </div> */}
    </motion.div>
  );
};

export default Work;
