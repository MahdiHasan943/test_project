"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Lato } from "next/font/google";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import Title from "@/components/reusablecomponent/Title";
import { useTranslation } from "react-i18next";
const page = () => {
  const swiperRef = useRef(null);
  const { t } = useTranslation();
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
    <>
      <div
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t("testimonial")}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
            <span className="text-[#ffc006]"> {t("home")}</span> &gt;{" "}
            {t("testimonial")}
          </p>
        </div>
      </div>

      <div className=" px-4 tablet:px-16 max-w-[1400px] py-20 mx-auto">
        <Swiper
          ref={swiperRef}
          watchSlidesProgress={true}
          autoplay={{
            delay: 4500,
            speed: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={3}
          className="mySwiper max-h-[500px] my-8"
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <div className="tablet:px-6 shadow-sm">
              <div className="w-full  relative ">
                <div
                  className="testmonial flex justify-center items-center h-[200px] w-full bg-auto bg-right-top bg-no-repeat"
                  style={{ backgroundImage: "url(/testmonialbg.png)" }}
                >
                  <p className="text-[15px] tablet:px-4 text-[#777]">
                    {t("testp")}
                  </p>
                </div>
                <div
                  className="h-[30px] w-full bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(/Screenshot_4-removebg-preview.png)",
                  }}
                ></div>
                <div className="flex py-8 gap-5 items-center">
                  <Image
                    src="/testimonial_1704656860.jpg"
                    alt="testimonial"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="">
                    <div className="flex items-center gap-2">
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                    </div>
                    <p className="font-bold py-2">Emily Johnson</p>
                    <p className="text-[#777]">co founder</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tablet:px-6 shadow-sm">
              <div className="w-full  relative ">
                <div
                  className="testmonial flex justify-center items-center h-[200px] w-full bg-auto bg-right-top bg-no-repeat"
                  style={{ backgroundImage: "url(/testmonialbg.png)" }}
                >
                  <p className="text-[15px] tablet:px-4 text-[#777]">
                    {t("testp")}
                  </p>
                </div>
                <div
                  className="h-[30px] w-full bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(/Screenshot_4-removebg-preview.png)",
                  }}
                ></div>
                <div className="flex py-8 gap-5 items-center">
                  <Image
                    src="/testimonial_17046568601.jpg"
                    alt="testimonial"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="">
                    <div className="flex items-center gap-2">
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                    </div>
                    <p className="font-bold py-2">Sophia Brown</p>
                    <p className="text-[#777]">Managing Director </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tablet:px-6 shadow-sm">
              <div className="w-full  relative ">
                <div
                  className="testmonial flex justify-center items-center h-[200px] w-full bg-auto bg-right-top bg-no-repeat"
                  style={{ backgroundImage: "url(/testmonialbg.png)" }}
                >
                  <p className="text-[15px] tablet:px-4 text-[#777]">
                    {t("testp")}
                  </p>
                </div>
                <div
                  className="h-[30px] w-full bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(/Screenshot_4-removebg-preview.png)",
                  }}
                ></div>
                <div className="flex py-8 gap-5 items-center">
                  <Image
                    src="/testimonial_17046568602.jpg"
                    alt="testimonial"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="">
                    <div className="flex items-center gap-2">
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                    </div>
                    <p className="font-bold py-2">Alexander Smith</p>
                    <p className="text-[#777]">Seo founder</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="tablet:px-6 shadow-sm">
              <div className="w-full  relative ">
                <div
                  className="testmonial flex justify-center items-center h-[200px] w-full bg-auto bg-right-top bg-no-repeat"
                  style={{ backgroundImage: "url(/testmonialbg.png)" }}
                >
                  <p className="text-[15px] tablet:px-4 text-[#777]">
                    {t("testp")}
                  </p>
                </div>
                <div
                  className="h-[30px] w-full bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url(/Screenshot_4-removebg-preview.png)",
                  }}
                ></div>
                <div className="flex py-8 gap-5 items-center">
                  <Image
                    src="/testimonial_1704656860.jpg"
                    alt="testimonial"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="">
                    <div className="flex items-center gap-2">
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                      <BsStarFill className="text-[#fec63f]" />
                    </div>
                    <p className="font-bold py-2">Emily Johnson</p>
                    <p className="text-[#777]">co founder</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default page;
