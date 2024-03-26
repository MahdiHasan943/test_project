"use client";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Lato,
  Lexend,
  Quicksand,
  Rubik,
  Roboto_Mono,
  Work_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import { motion } from "framer-motion";
import Title from "../reusablecomponent/Title";
import {
  textVariant3,
  textVariant2,
  textVariant4,
  staggerContainer,
} from "@/font_utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "../reusablecomponent/SwiperNavButtons";
import Link from "next/link";
import HerroBtn from "../reusablecomponent/HerroBtn";
import { useTranslation } from "react-i18next";
import { TypingText } from "../reusablecomponent/CustomText";

const lato = Lato({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

// Helvetica Neue
const lexend = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  const { t } = useTranslation();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="mt-[-100px] relative  min-h-[600px]   tablet:min-h-[700px] tablet:max-h-[750px]  gap-6">
      <Swiper
        className="relative"
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 8000,
          speed: 3000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <motion.div
          variants={textVariant4}
          initial="hidden"
          whileInView="show"
          className="absolute  max-w-[800px] mx-auto z-50 bottom-[100px] right-[100px]"
        >
          <SwiperNavButtons />
        </motion.div>

        <SwiperSlide className="w-[100vw] ">
          <div className=" min-h-[600px]   tablet:min-h-[700px] tablet:max-h-[700px]  relative overflow-hidden ">
            <div className="bg-[#000] z-50  opacity-[0.2] absolute top-0 left-0 h-full w-full"></div>

            <Image
              src={"/images/link7111111/1.jpg"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
              className="hidden tablet:block"
            />
            <Image
              src={"/images/4.jpg"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              width={400}
              height={600}
              className="block  w-full tablet:hidden"
            />
            <div className="w-full px-4 absolute top-0 left-0 h-full z-[100000] max-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-w-[1000px] mx-auto flex flex-col items-center tablet:items-start gap-6 justify-center h-full"
              >
                <TypingText
                  title={t("heroTitle1")}
                  textStyles={`     mr-auto  tablet:px-0 text-start  uppercase  max-w-[600px] text-[#fff] mt-8 tablet:mt-0  text-[24px]  leading-[35px] tablet:text-[50px] tablet:leading-[64px] `}
                />

                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#fff] text-[14px] tablet:text-[18px]"
                >
                  {t("heroDestk1")}
                </motion.p>
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#fff] text-[14px] tablet:text-[18px]"
                >
                  {t("herosubDesk1")}
                </motion.p>

                <HerroBtn className={"mb-[-30px] py-4"}>
                  <Link
                    href={"contact"}
                    className="text-black   capitalize   text-[15px] absolute top-1/2 left-[25px] transform  -translate-y-1/2"
                  >
                    {" "}
                    {t("hero_button")}
                  </Link>
                </HerroBtn>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[100vw]  ">
          <div className="min-h-[600px]   tablet:min-h-[750px] tablet:max-h-[750px]  relative overflow-hidden ">
            <div className="bg-[#000] z-50 opacity-[0.4] absolute top-0 left-0  h-full w-full">
              {" "}
            </div>
            <Image
              src="/images/link7111111/2.jpg"
              layout="fill"
              objectFit="cover"
              className="hidden tablet:block"
              alt="A group of professionals from diverse backgrounds standing together, dressed in business attire. They are smiling at the camera, projecting confidence and collaboration."
            />
            <Image
              src="/images/5.jpg"
              width={400}
              height={600}
              className="block w-full tablet:hidden"
              alt="A group of professionals from diverse backgrounds standing together, dressed in business attire. They are smiling at the camera, projecting confidence and collaboration."
            />
            <div className="w-full  px-4 absolute top-0 left-0 h-full z-[100000] max-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-w-[1000px] mx-auto flex flex-col items-center tablet:items-start gap-6 justify-center h-full"
              >
                <TypingText
                  title={t("heroTitle2")}
                  textStyles={`     mr-auto  tablet:px-0 text-start w-[330px]   tablet:w-full  uppercase   max-w-[800px] text-[#fff] mt-8 tablet:mt-0  text-[24px]  leading-[35px] tablet:text-[50px] flex justify-start flex-wrap tablet:leading-[64px] `}
                />

                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#fff] text-[14px] tablet:text-[18px]"
                >
                  {t("heroDestk2")}
                </motion.p>
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#fff] text-[14px] tablet:text-[18px]"
                >
                  {t("herosubDesk2")}
                </motion.p>

                <HerroBtn className={"mb-[-30px] py-4"}>
                  <Link
                    href={"contact"}
                    className="text-black   capitalize   text-[15px] absolute top-1/2 left-[25px] transform  -translate-y-1/2"
                  >
                    {" "}
                    {t("hero_button")}
                  </Link>
                </HerroBtn>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[100vw]  ">
          <div className=" min-h-[600px]   tablet:min-h-[700px] tablet:max-h-[700px]  relative overflow-hidden ">
            <div className="bg-[#000] z-50 opacity-[0.4] absolute top-0 left-0  h-full w-full">
              {" "}
            </div>
            <Image
              src={"/images/link7111111/3.jpg"}
              alt="A group of five professionals from diverse backgrounds standing together, dressed in business attire. They are confidently facing the camera with professional demeanor, projecting a sense of collaboration and teamwork."
              layout="fill"
              objectFit="cover"
              className="hidden tablet:block"
            />
            <Image
              src={"/images/2.jpg"}
              alt="A group of five professionals from diverse backgrounds standing together, dressed in business attire. They are confidently facing the camera with professional demeanor, projecting a sense of collaboration and teamwork."
              width={400}
              height={600}
              className="block  w-full tablet:hidden"
            />
            <div className="w-full  px-4 absolute top-0 left-0 h-full z-[100000] max-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-w-[1000px] mx-auto flex flex-col  items-center tablet:items-start gap-6 justify-center h-full"
              >
                <TypingText
                  title={t("heroTitle3")}
                  textStyles={`     mr-auto  tablet:px-0 text-start uppercase   text-[#fff] mt-8 tablet:mt-0  text-[24px] leading-[35px] tablet:text-[50px] tablet:leading-[64px] `}
                />

                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#fff] text-[14px] tablet:text-[18px]"
                >
                  {t("heroDestk3")}
                </motion.p>
                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="text-[#fff] text-[14px] tablet:text-[18px]"
                >
                  {t("herosubDesk3")}
                </motion.p>

                <HerroBtn className={"mb-[-30px] py-4"}>
                  <Link
                    href={"contact"}
                    className="text-black   capitalize   text-[15px] absolute top-1/2 left-[25px] transform  -translate-y-1/2"
                  >
                    {" "}
                    {t("hero_button")}
                  </Link>
                </HerroBtn>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
