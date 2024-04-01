"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const SwipperNewBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns   tablet:ml-[-200px] h-[300px] ">
      <div className="flex  tablet:flex-col gap-4 relative justify-between tablet:justify-center">
        <span
          className=" animated-button  group rounded-full flex   relative  overflow-hidden justify-center items-center w-[40px] h-[40px]"
          onClick={() => swiper.slidePrev()}
        >
          <BsArrowLeft className="text-[#111] group-hover:text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px]" />
        </span>
        <span
          className="bg-[#000]  tablet:hidden rounded-full animated-button group flex relative justify-center items-center w-[40px] h-[40px]"
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRight className="text-[#111] group-hover:text-[#fff]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[16px]" />
        </span>
      </div>
    </div>
  );
};

export const SwipperNewBtn1 = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns hidden tablet:block   tablet:ml-[-200px] h-[300px] ">
      <div className="flex flex-col gap-4 relative justify-end">
        {/* <span
          className=" animated-button  group rounded-full flex   relative  overflow-hidden justify-center items-center w-[40px] h-[40px]"
          onClick={() => swiper.slidePrev()}
        >
          <BsArrowLeft className="text-[#111] group-hover:text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[16px]" />
        </span> */}
        <span
          className="bg-[#000] mx-auto rounded-full animated-button group flex relative justify-end items-end w-[40px] h-[40px]"
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRight className="text-[#111] group-hover:text-[#fff]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px]" />
        </span>
      </div>
    </div>
  );
};
