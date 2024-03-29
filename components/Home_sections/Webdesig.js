"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "../reusablecomponent/Button";
import { Work_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant2,
  textVariant3,
  textVariant4,
  textVariant5,
  textVariant8,
  useAnimation,
} from "@/font_utils/motion";
import { useTranslation } from "react-i18next";
import Title from "../reusablecomponent/Title";
import Description from "../reusablecomponent/Description";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "../reusablecomponent/SwiperNavButtons";
import {
  SwipperNewBtn,
  SwipperNewBtn1,
} from "../reusablecomponent/SwipperNewBtn";
import { TypingText, TypingText1 } from "../reusablecomponent/CustomText";

const work_sans = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const plex_mono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Webdesig = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  };
  const typewriterWords = [t("webd"), t("internetMer"), t("socialM"), t("all")];
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-20 max-w-[1400px] mx-auto"
    >
      <div className="pt-[130px] max-w-[1000px]  mx-auto pb-[200px]">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="h-[1.5px] w-[180px] hidden tablet:block mb-[100px] mx-auto bg-[#ffc107]"
        ></motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="w-[200px] ml-4 tablet:ml-0  h-[40px] bg-[#ffc107] flex items-center px-4"
        >
          <TypingText
            textStyles={`${work_sans.className} text-[#111] font-extrbold text-[24px]`}
            title={t("WHOWEARE")}
          />
        </motion.div>

        <motion.h1
          variants={textVariant3}
          initial="hidden"
          whileInView="show"
          className={`${work_sans.className} relative uppercase  px-4 pt-10 tablet:px-0 max-w-[1000px] mx-auto font-extrabold text-[30px]   leading-[50px] tablet:text-[50px]  tablet:leading-[60px] text-[#18191c]`}
        >
          <Typewriter
            words={typewriterWords}
            loop={5}
            cursor
            cursorStyle="| "
            typeSpeed={70}
            deleteSpeed={90}
            delaySpeed={3000}
            onLoopDone={handleDone}
            onType={handleType}
          />
          {t("agency")}
        </motion.h1>
        <Description
          className="pt-3 pb-12 leading-[25px] px-4 tablet:px-0  text-[18px] text-[#516469] "
          text={t("professionDes")}
        />
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="h-[1.5px] mt-[100px] w-[180px] mx-auto bg-[#ffc107]"
        ></motion.div>
      </div>

      <div className=" max-w-[1000px]  mx-auto ">
        <div className="max-w-[1000px]  mx-auto m">
          <motion.div
            variants={slideIn("left", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="w-[400px] ml-4 tablet:ml-0  h-[40px] bg-[#ffc107] flex items-center px-4"
          >
            <TypingText
              textStyles={`${work_sans.className} uppercase  text-[#111] font-extrbold text-[24px]`}
              title={t("toolTitleHome")}
            />
          </motion.div>
          <motion.h2
            variants={textVariant8}
            initial="hidden"
            whileInView="show"
            className={`${work_sans.className} uppercase  relative px-4 pt-10 tablet:px-0 max-w-[1000px] mx-auto font-extrabold text-[30px]   leading-[50px] tablet:text-[50px]  tablet:leading-[60px] text-[#18191c]`}
          >
            {t("TrendsMainTitle")}
          </motion.h2>
          <Description
            className="pt-3 pb-12 leading-[25px] px-4 tablet:px-0  text-[18px] text-[#516469] "
            text={t("webdesignMainHeading")}
          />
        </div>
        {/* <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="h-[1.5px] mt-[100px] w-[180px] mx-auto bg-[#ffc107]"
        ></motion.div> */}
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 12000,
          speed: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper  max-w-[1400px] my-8 "
        breakpoints={breakpoints}
      >
        <motion.div
          variants={textVariant4}
          initial="hidden"
          whileInView="show"
          className="absolute w-[300px] tablet:w-auto max-w-[800px]  mx-auto tablet:h-[400px] z-50 top-[350px] tablet:top-auto tablet:bottom-[20px] left-[30px] tablet:left-[200px]"
        >
          <SwipperNewBtn />
        </motion.div>

        <motion.div
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="absolute  max-w-[800px]  mx-auto hidden tablet:block h-[400px] z-50 bottom-[20px] tablet:right-0"
        >
          <SwipperNewBtn1 />
        </motion.div>

        <SwiperSlide>
          <div className="px-4 max-w-[1050px] mx-auto overflow-hidden h-auto pb-8  tablet:py-24 flex flex-col tablet:flex-none tablet:grid  tablet:grid-cols-2 items-center gap-8">
            <div className="py-6 relative  min-h-[400px] tablet:h-full w-full tablet:py-0 ">
              <motion.div
                variants={slideIn("left", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute  z-50 top-0 left-0"
              >
                <Link
                  target="_blank"
                  href={
                    "https://realestateinghana.com/realestateimagegenerator"
                  }
                >
                  <Image
                    src="/images/aiImage.jpg"
                    alt="hero_image"
                    width={940}
                    height={788}
                    className="rounded-md"
                  />
                </Link>
              </motion.div>

              <Image
                src="/images/icon-circle.png"
                alt="hero_image"
                width={350}
                // 1875 x 625
                height={400}
                className="absolute z-10 hidden tablet:block bottom-0 left-[20px]"
              />
              <Image
                src="/images/marketbg.png"
                alt="hero_image"
                width={103}
                height={385}
                className="absolute   z-10 bottom-[30px] right-0"
              />
              <motion.div
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="absolute bottom-0 right-0 h-[200px] w-[300px]"
              >
                <Image
                  src="/images/beautiful-woman-human-robot-artificial-intelligenc-2023-11-27-05-01-16-utc.jpeg"
                  alt="hero_image"
                  width={350}
                  height={200}
                  className="absolute rounded-sm  border-[8px] border-[#fafafa] z-50  hidden tablet:block bottom-[0px] tablet:bottom-0 right-0 "
                />{" "}
              </motion.div>
            </div>

            <div className="min-h-[400px] flex flex-col justify-center items-center h-[500px] py-8 tablet:py-0">
              <motion.h2
                variants={textVariant4}
                initial="hidden"
                whileInView="show"
                className={`${work_sans.className} font-thin uppercase   text-[28px]  leading-[28px] tablet:text-[40px]  tablet:leading-[40px] text-[#111]`}
              >
                {" "}
                {t("aiDriven")}
              </motion.h2>
              <Description
                className="py-12 leading-[25px]  text-[18px] text-[#516469] "
                text={t("aiDes")}
              />

              <Button
                className={
                  "w-[200px] mx-auto  mt-12 group tablet:mx-0 tablet:mt-3"
                  // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                }
              >
                <Link
                  href={"contact"}
                  className="text-black mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                >
                  {t("hero_button")}
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="px-4 max-w-[1050px] mx-auto overflow-hidden h-auto pb-8  tablet:py-24 flex flex-col tablet:flex-none tablet:grid  tablet:grid-cols-2 items-center gap-8">
            <div className="py-6 relative  min-h-[400px] tablet:h-full w-full tablet:py-0 ">
              <motion.div
                variants={slideIn("left", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute  z-50 top-0 left-0"
              >
                <Link href="/trends">
                  <Image
                    src="/images/BusinessTOOLSnew.jpg"
                    alt="hero_image"
                    width={940}
                    height={788}
                    className="  rounded-md"
                  />{" "}
                </Link>
              </motion.div>
              <Image
                src="/images/icon-circle.png"
                alt="hero_image"
                width={350}
                height={400}
                className="absolute z-10 hidden tablet:block bottom-0 left-[20px]"
              />
              <Image
                src="/images/marketbg.png"
                alt="hero_image"
                width={103}
                height={385}
                className="absolute hidden tablet:block  z-10 bottom-[30px] right-0"
              />
              <motion.div
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="absolute bottom-0 right-0 h-[200px] w-[300px]"
              >
                <Image
                  src="/images/wepik-export-20240309152720x2oJ.jpeg"
                  alt="hero_image"
                  width={350}
                  height={200}
                  className="absolute rounded-sm  border-[8px] border-[#fafafa] z-50  hidden tablet:block bottom-[0px] tablet:bottom-[-40px] right-0 "
                />{" "}
              </motion.div>
            </div>

            <div className="min-h-[400px] flex flex-col items-center justify-center py-8 tablet:py-0">
              <motion.h2
                variants={textVariant4}
                initial="hidden"
                whileInView="show"
                className={`${work_sans.className} font-thin uppercase  text-[28px]  leading-[28px] tablet:text-[40px]  tablet:leading-[45px] text-[#111]`}
              >
                {t("TrendsTool")}
              </motion.h2>
              <Description
                className="py-4 leading-[25px] text-[18px] text-[#516469] "
                text={t("TrendsDes")}
              />

              <Button
                className={
                  "w-[200px] mx-auto  mt-12 group tablet:mx-0 tablet:mt-3"
                  // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                }
              >
                <Link
                  href={"contact"}
                  className="text-black  group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                >
                  {t("hero_button")}
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="px-4 max-w-[1050px] mx-auto overflow-hidden h-auto pb-8  tablet:py-24 flex flex-col tablet:flex-none tablet:grid  tablet:grid-cols-2 items-center gap-8">
            <div className="py-6 relative  min-h-[400px] tablet:h-full w-full tablet:py-0 ">
              <motion.div
                variants={slideIn("left", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute  z-50 top-0 left-0"
              >
                <Image
                  src="/images/tools.jpg"
                  alt="hero_image"
                  width={940}
                  height={788}
                  className="scale-y-[1.1] mt-8 rounded-md"
                />
              </motion.div>
              <Image
                src="/images/icon-circle.png"
                alt="hero_image"
                width={350}
                // 1875 x 625
                height={400}
                className="absolute z-10 hidden tablet:block bottom-0 left-[20px]"
              />
              <Image
                src="/images/marketbg.png"
                alt="hero_image"
                width={103}
                height={385}
                className="absolute hidden tablet:block  z-10 bottom-[30px] right-0"
              />
              <motion.div
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="absolute bottom-0  right-0 h-[200px] w-[300px]"
              >
                <Image
                  src="/images/market2.png"
                  alt="hero_image"
                  width={350}
                  height={200}
                  className="absolute rounded-sm  border-[8px] border-[#fafafa] z-50  hidden tablet:block bottom-[0px] tablet:bottom-[-100px] right-0 "
                />{" "}
              </motion.div>
            </div>

            <div className="min-h-[400px] mt-8 flex flex-col justify-center items-center py-8 tablet:py-0">
              <motion.h2
                variants={textVariant4}
                initial="hidden"
                whileInView="show"
                className={`${work_sans.className}   text-[28px]  uppercase leading-[28px] tablet:text-[35px]  tablet:leading-[40px] text-[#111]`}
              >
                {t("enhanceMent")}
              </motion.h2>
              <Description
                className="py-4 leading-[25px] tablet:text-[18px] text-[#516469] "
                text={t("enhanceMentDes")}
              />

              <Button
                className={
                  "w-[200px] mx-auto  mt-12 group tablet:mx-0 tablet:mt-3"
                  // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                }
              >
                <Link
                  href={"contact"}
                  className="text-black group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                >
                  {t("hero_button")}
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Webdesig;
