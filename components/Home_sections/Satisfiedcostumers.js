"use client";
import React, { useEffect, useRef, useState } from "react";
import { Lato } from "next/font/google";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Title from "../reusablecomponent/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import {
  fadeIn,
  planetVariants,
  slideIn,
  textVariant2,
  staggerContainer,
  zoomIn,
} from "@/font_utils/motion";
import Description from "../reusablecomponent/Description";

const lato = Lato({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
function Counter({ from, to }) {
  const nodeRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const node = nodeRef.current;
            animate(from, to, {
              duration: 1,
              onUpdate(value) {
                node.textContent = value.toFixed(0);
              },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const node = nodeRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [from, to, hasAnimated]);

  return <p ref={nodeRef} />;
}
const Satisfiedcostumers = () => {
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
    <div className="">
      <div className="bg-[#17181c] py-24">
        <div className=" max-w-[1050px] mx-auto">
          <Title
            text={t("satisfiedh")}
            className="capitalize font-extrabold px-4 text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#fff]"
          />

          <div className="grid grid-cols-1 tablet:grid-cols-4 px-6 gap-8 py-8">
            <div className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]"
              >
                <motion.div variants={planetVariants("left")} className="">
                  <svg
                    variants={zoomIn(0.1, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[50p] hover:rotate-180 delay-75 duration-200 ease-linear text-[#fec63f] h-[50px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </motion.div>
                <div
                  className={`${lato.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#fff]`}
                >
                  <Counter from={0} to={13} />
                </div>
                <motion.p
                  variants={textVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="text-center text-[#fec63f] text-[18px]"
                >
                  {" "}
                  {t("Comp")}
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]"
            >
              <motion.div variants={planetVariants("right")} className="">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-[50p] delay-75 duration-200 ease-linear text-[#fec63f]  h-[50px]"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </motion.div>
              <div
                className={`${lato.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#fff]`}
              >
                <Counter from={0} to={5} />
              </div>
              <motion.p
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="text-center text-[#fec63f] text-[18px]"
              >
                {t("Comp1")}
              </motion.p>
            </motion.div>
            <div className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]"
              >
                <motion.div variants={planetVariants("right")} className="">
                  <svg
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[50p] hover:rotate-180 delay-75 duration-200 ease-linear text-[#fec63f]  h-[50px]"
                  >
                    <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
                  </svg>
                </motion.div>
                <div
                  className={`${lato.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#fff]`}
                >
                  <Counter from={0} to={20} />
                </div>
                <motion.p
                  variants={textVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="text-center text-[#fec63f] text-[18px]"
                >
                  {t("Comp2")}
                </motion.p>
              </motion.div>
            </div>{" "}
            <div className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="bg-[#313131] rounded-md flex flex-col justify-center items-center gap-5 py-4 px-10 min-h-[260px]"
              >
                <motion.div variants={planetVariants("right")} className="">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-[50p] hover:rotate-180 delay-75 duration-200 ease-linear text-[#fec63f]  h-[50px]"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                </motion.div>
                <div
                  className={`${lato.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#fff]`}
                >
                  <Counter from={0} to={15} />
                </div>
                <motion.p
                  variants={textVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="text-center text-[#fec63f] text-[18px]"
                >
                  {t("Comp3")}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satisfiedcostumers;
