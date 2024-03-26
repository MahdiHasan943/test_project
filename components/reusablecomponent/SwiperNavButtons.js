'use client'
import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { BsArrowLeft,BsArrowRight  } from "react-icons/bs";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns hidden tablet:block  tablet:ml-[-200px] h-[300px] ">
      <div className="flex flex-col gap-4 relative justify-end">
       
        <span className=" animated-button_2  group rounded-full flex animated-button_1  relative  overflow-hidden justify-center items-center w-[50px] h-[50px]" onClick={() => swiper.slidePrev()}>
        <BsArrowLeft  className="text-[#111] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[16px]" />

          
        </span>
        <span
className="bg-[#fff] rounded-full animated-button_1  flex relative justify-center items-center w-[50px] h-[50px]"      onClick={() => swiper.slideNext()}
        >
<BsArrowRight  className="text-[#111] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[16px]" />

        </span>
      </div>
    </div>
  );
};