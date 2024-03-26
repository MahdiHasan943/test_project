"use client";
import {
  fadeIn,
  slideIn,
  textVariant2,
  useAnimation,
} from "@/font_utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../reusablecomponent/Title";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

const AfterHero = () => {
  const { t } = useTranslation();

  const swiperRef = useRef(null);

  const breakpoints = {
    300: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  return (
    <div className="mt-10  py-10 tablet:py-0 tablet:mt-[-100px] pb-12  tablet:px-0 z-[100000000] relative max-w-[1050px] mx-auto  ">
      <Swiper
        ref={swiperRef}
        watchSlidesProgress={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 4500,
          speed: 3000, // Adjusted speed to slow down the transition
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper  mx-auto min-h-[320px]"
        breakpoints={breakpoints}
      >
        {/* 1 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("up", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px]  min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero1.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold group-hover:text-[#000]  text-center text-[16px] ">
                  {t("afterhe1t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe1d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="absolute   left-0 w-full   z-50   ease-in-out duration-500  bg-[#ffc107] h-full"
            >
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center  rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero1.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111] text-center text-[16px] ">
                    {t("afterhe1t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe1d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("down", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px]  mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero2.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold text-[#000]  text-center text-[16px] ">
                  {t("afterhe2t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe2d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("down", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50    ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero2.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111] text-center text-[16px] ">
                    {t("afterhe2t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe2d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* 3 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("up", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero3.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4 overflow-hidden ">
                <h2 className="font-bold group-hover:text-[#000] flex flex-wrap  text-center text-[16px] ">
                  {t("afterhe3t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe3d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50   ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero3.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111]  text-center text-[16px] ">
                    {t("afterhe3t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe3d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        {/* 4 */}

        <SwiperSlide>
          <motion.div
            variants={fadeIn("down", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero2.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold group-hover:text-[#000]  text-center text-[16px] ">
                  {t("afterhe4t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe4d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("down", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50  ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero2.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111] text-center text-[16px] ">
                    {t("afterhe4t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe4d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("up", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero1.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold group-hover:text-[#000]  text-center text-[16px] ">
                  {t("afterhe5t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe5d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50   ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero1.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111]  text-center text-[16px] ">
                    {t("afterhe5t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe5d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        {/* 6 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("down", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero2.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold text-[#000]  text-center text-[16px] ">
                  {t("afterhe6t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe6d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("down", "tween", 1, 2)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50  ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero2.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111]  text-center text-[16px] ">
                    {t("afterhe6t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe6d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        {/* 7 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("up", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero1.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold group-hover:text-[#000]  text-center text-[16px] ">
                  {t("afterhe7t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe7d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("up", "tween", 1.4, 2)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50  ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero1.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111]  text-center text-[16px] ">
                    {t("afterhe7t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe7d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* 8 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("down", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero2.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold group-hover:text-[#000]  text-center text-[16px] ">
                  {t("afterhe8t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe8d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("down", "tween", 1.8, 2)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50   ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero2.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111]  text-center text-[16px] ">
                    {t("afterhe8t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe8d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        {/* 9 */}
        <SwiperSlide>
          <motion.div
            variants={fadeIn("up", "bounce", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className="max-w-[200px] min-h-[270px] mx-1 tablet:mx-0 overflow-hidden group relative rounded-sm shadow-lg bg-[#fff]"
          >
            <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
              <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                <Image
                  src="/images/batch_one/afterhero1.png"
                  alt="digital service"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-4">
                <h2 className="font-bold group-hover:text-[#000]  text-center text-[16px] ">
                  {t("afterhe9t")}
                </h2>
                <p className="text-center text-[#000] text-[15px]">
                  {t("afterhe9d")}
                </p>
              </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full   z-10  hidden tablet:block translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500 bg-[#ffc107] h-full"></div> */}
            <motion.div
              variants={slideIn("up", "tween", 2, 2)}
              initial="hidden"
              whileInView="show"
              className="absolute  left-0 w-full   z-50  ease-in-out duration-500 bg-[#ffc107] h-full"
            >
              {" "}
              <div className="max-w-[200px] min-h-[270px] gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                <div className="w-[70px] flex justify-center items-center rounded-full h-[70px] bg-[#f4f5f8]">
                  <Image
                    src="/images/batch_one/afterhero1.png"
                    alt="digital service"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="px-4">
                  <h2 className="font-bold text-[#111]  text-center text-[16px] ">
                    {t("afterhe9t")}
                  </h2>
                  <p className="text-center text-[#111] text-[15px]">
                    {t("afterhe9d")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AfterHero;
