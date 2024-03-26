"use client";
import React, { useRef, useState } from "react";
import { IBM_Plex_Mono, Lato, Work_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  textVariant2,
  fadeIn,
  slideIn,
  staggerContainer,
} from "@/font_utils/motion";
import Image from "next/image";
import Button from "@/components/reusablecomponent/Button";
import Title from "@/components/reusablecomponent/Title";
import { Disclosure, Tab } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import Description from "@/components/reusablecomponent/Description";
import { BsWhatsapp } from "react-icons/bs";
import { TypingText } from "@/components/reusablecomponent/CustomText";
import emailjs from "@emailjs/browser";
const work_san = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const plexmono = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const page = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const { t } = useTranslation();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vcletm",
        "template_f2lydr6",
        form.current,
        "NRwXHbN7qICuTorEL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Successfully submitted form");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={`${work_san.className}  pb-8 `}>
      <div
        className="w-full  relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t("services")}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
            <span className="text-[#ffc006]"> {t("home")}</span> &gt;{" "}
            {t("services")}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  my-[80px] ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=""
        >
          <TypingText
            textStyles={`${work_san.className}  font-thin uppercase  text-[28px] py-8  leading-[28px] tablet:text-[40px]  tablet:leading-[45px] text-[#111]`}
            title={t("AllServices")}
          />
        </motion.div>
        <div
          className={`${plexmono.className} max-w-[1000px] uppercase gap-8 justify-centermx-auto grid grid-cols-1 ov tablet:grid-cols-3`}
        >
          <Link href={"/services/webdesign"}>
            <Button
              className={
                "w-[300px] mx-auto animated-button_3 mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              <motion.div
                variants={slideIn("left", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute  group uppercase left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black uppercase mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("heroTitle1")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("heroTitle1")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white uppercase bg-[#111] mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("heroTitle1")}
              </button>
            </Button>
          </Link>

          <Link href={"/services/socialmedia"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3 uppercase   mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              <motion.div
                variants={slideIn("left", "tween", 0.4, 1.3)}
                initial="hidden"
                whileInView="show"
                className="absolute  group left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black uppercase mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe7t")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe7t")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white uppercase mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("afterhe7t")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/online-marketing"}>
            <Button
              className={
                "w-[300px] mx-auto uppercase   animated-button_3  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              <motion.div
                variants={slideIn("left", "tween", 0.5, 1.4)}
                initial="hidden"
                whileInView="show"
                className="absolute  group left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black uppercase mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe5t")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe5t")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("afterhe5t")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/seo-marketing"}>
            <Button
              className={
                "w-[300px] mx-auto uppercase  animated-button_3  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              <motion.div
                variants={slideIn("left", "tween", 0.6, 1.5)}
                initial="hidden"
                whileInView="show"
                className="absolute  group left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full uppercase gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe8t")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe8t")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white uppercase mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("afterhe8t")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/local-marketing"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3 uppercase mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              <motion.div
                variants={slideIn("left", "tween", 0.7, 1.6)}
                initial="hidden"
                whileInView="show"
                className="absolute  group left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 uppercase z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black uppercase mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("localm")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("localm")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("localm")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/search-engine-advertising-sea"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3 uppercase  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              {" "}
              <motion.div
                variants={slideIn("left", "tween", 0.8, 1.7)}
                initial="hidden"
                whileInView="show"
                className="absolute group  left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 uppercase z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("searcheng")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("searcheng")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("searcheng")}
              </button>
            </Button>
          </Link>

          <Link href={"/services/software-development"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3  uppercase mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              {" "}
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.8)}
                initial="hidden"
                whileInView="show"
                className="absolute  group  left-0 top-0 w-full   z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("sofwared")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("sofwared")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("sofwared")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/ai-services"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3 uppercase mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              {" "}
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.8)}
                initial="hidden"
                whileInView="show"
                className="absolute  group left-0 top-0 w-full uppercase  z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 uppercase  absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe1t")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe1t")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("afterhe1t")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/app-development"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              {" "}
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.8)}
                initial="hidden"
                whileInView="show"
                className="absolute group  left-0 top-0 w-full  uppercase z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe2t")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe2t")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("afterhe2t")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/e-commerce"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              {" "}
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.8)}
                initial="hidden"
                whileInView="show"
                className="absolute group  left-0 top-0 w-full  uppercase z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe6t")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("afterhe6t")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("afterhe6t")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/web-analyse"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              {" "}
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.8)}
                initial="hidden"
                whileInView="show"
                className="absolute  group left-0 top-0 w-full uppercase  z-10   ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full h-full gap-6 z-50 absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("webanalysis")}
                  </button>
                </div>
                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("webanalysis")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("webanalysis")}
              </button>
            </Button>
          </Link>
          <Link href={"/services/affiliate-marketing"}>
            <Button
              className={
                "w-[300px] mx-auto  animated-button_3  mt-12 group tablet:mx-0 tablet:mt-3"
                // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
              }
            >
              <motion.div
                variants={slideIn("left", "tween", 0.9, 1.8)}
                initial="hidden"
                whileInView="show"
                className="absolute   left-0 top-0 w-full  uppercase z-10    ease-in-out duration-500  bg-[#ffc107] h-full"
              >
                <div className="w-full  h-full gap-6 z-50 uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("affilate")}
                  </button>
                </div>

                <div className="w-full translate-x-[-100%] group-hover:translate-x-0 duration-300 delay-75 ease-linear  group-hover:bg-[black] h-full gap-6 z-[99999] uppercase absolute left-0 top-0 flex flex-col items-center justify-center">
                  <button className="text-black mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("affilate")}
                  </button>
                </div>
              </motion.div>
              <button className="text-white mt-p uppercase group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                {t("affilate")}
              </button>
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-20">
        <div className="">
          <div className="text-center">
            <Title text={t("faqTitle")} />
          </div>

          <div className="w-full px-4 pt-8 max-w-[1400px] mx-auto">
            <Disclosure>
              <Disclosure.Button
                onClick={() => setOpen1(!open1)}
                className="faqBg  hover:border-l-[10px] border-[#ffc006]  border-r-0 border-t-0 border-b-0     ease-linear  duration-200 delay-75   text-[26px] leading-[30px] font-bold text-start relative shadow-t-md px-4  w-full rounded-sm py-8"
              >
                Creating a WordPress website{" "}
                {open1 ? (
                  <AiOutlineMinus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                ) : (
                  <AiOutlinePlus className="absolute top-[30px]  font-bold text-[35px]  right-2 desktop:right-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="faqBg shadow-md   text-gray-600  px-4  rounded-sm py-6">
                <p className="pb-4">
                  In today's digital age, a website that is both visually
                  appealing and user-friendly is crucial to building a strong
                  online presence. A well-designed website can help you attract
                  new customers, build relationships with existing customers,
                  and increase sales.
                </p>

                <p className="pb-4">
                  Our team of experienced web designers are experts at creating
                  beautiful WordPress websites that not only capture visitors'
                  attention but also effectively communicate your brand's
                  message. We emphasize seamless navigation, high-quality
                  graphics, and mobile-responsive layouts to ensure your website
                  delivers an exceptional user experience.
                </p>
                <p>
                  If you are looking for a team of experienced web designers to
                  help you create a beautiful and user-friendly website, contact
                  us today. We would be happy to discuss your project and help
                  you create a website that meets your needs.
                </p>
              </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
              <Disclosure.Button
                onClick={() => setOpen2(!open2)}
                className="  faqBg mt-4 hover:border-l-[10px] border-[#ffc006]  border-r-0 border-t-0 border-b-0      ease-linear  duration-200 delay-75   text-[26px] leading-[30px] font-bold text-start relative shadow-t-md px-4  w-full rounded-sm py-8"
              >
                SEO optimization{" "}
                {open2 ? (
                  <AiOutlineMinus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                ) : (
                  <AiOutlinePlus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="faqBg shadow-md   text-gray-600  px-4  rounded-sm py-6">
                <p className="pb-4">
                  Our SEO optimization services offer you the opportunity to
                  significantly increase your website visibility and increase
                  organic traffic. In today's digital world, it is crucial that
                  your website is found by potential customers, and effective
                  search engine optimization (SEO) can help you achieve this
                  goal.
                </p>

                <p className="pb-4">
                  Our experienced SEO specialists have extensive knowledge and
                  expertise in the industry. They use proven strategies to
                  improve your website's search engine ranking and attract more
                  targeted traffic. They take into account both on-page and
                  off-page optimization techniques.
                </p>
                <p className="pb-4">
                  During keyword research, we thoroughly analyze the most
                  relevant search terms and phrases that potential customers use
                  to search for products or services related to your business.
                  By carefully analyzing this information, we can optimize your
                  website to rank better for these relevant searches.
                </p>
                <p className="pb-4">
                  Our on-page optimization techniques include improving your
                  website's content, metadata, headings, internal linking and
                  page structure. By optimizing these elements, we ensure that
                  your website is attractive and easily accessible to search
                  engines. This not only improves the chances of your website
                  appearing in search results, but also improves your visitors'
                  user experience.
                </p>
                <p className="pb-4">
                  Additionally, we also use off-page optimization techniques to
                  increase the authority and relevance of your website. This
                  involves building high-quality backlinks from other trusted
                  websites that point to your content. This external reference
                  gives your website greater credibility in the eyes of search
                  engines and is more likely to rank higher.
                </p>
                <p className="pb-4">
                  Our goal is to help your website stand out from the
                  competition and attract more qualified traffic. By increasing
                  your visibility in search results, we increase the chances
                  that potential customers will come to your website and
                  discover your products or services. With our comprehensive SEO
                  optimization you can strengthen your online presence and
                  achieve long-term success.
                </p>
              </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
              <Disclosure.Button
                onClick={() => setOpen3(!open3)}
                className="  faqBg mt-4 hover:border-l-[10px] border-[#ffc006]  border-r-0 border-t-0 border-b-0       ease-linear  duration-200 delay-75   text-[26px] leading-[30px] font-bold text-start relative shadow-t-md px-4  w-full rounded-sm py-8"
              >
                Social media marketing{" "}
                {open3 ? (
                  <AiOutlineMinus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                ) : (
                  <AiOutlinePlus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="faqBg shadow-md   text-gray-600  px-4  rounded-sm py-6">
                <p className="pb-4">
                  Social media marketing has become a crucial tool for reaching
                  your target audience and effectively expanding your brand's
                  reach. Our social media marketing services offer you a
                  holistic strategy to exploit the full potential of powerful
                  platforms such as Facebook, Instagram, Twitter and LinkedIn.
                </p>

                <p className="pb-4">
                  Our experienced team of social media experts supports you in
                  the strategic planning of your social media activities. We
                  analyze your target group and develop tailor-made strategies
                  to address them effectively. We take into account the specific
                  features and special features of each platform in order to
                  provide you with the best possible results.
                </p>
                <p className="pb-4">
                  Creating engaging and relevant content is an essential part of
                  our social media marketing services. Our creative team works
                  closely with you to create high-quality content that best
                  showcases your brand and messaging. From engaging images and
                  videos to informative and entertaining copy, we ensure your
                  content captures your audience's attention and encourages
                  engagement.
                </p>
                <p className="pb-4">
                  We also take on campaign management on the various social
                  media platforms. We optimize your ads and content to achieve
                  the best possible results. Our team continually monitors the
                  performance of your campaigns and adjusts them to ensure you
                  achieve your desired goals. We analyze the data and use it to
                  continually improve your campaigns and achieve the best
                  possible ROI (return on investment).
                </p>
                <p className="pb-4">
                  Through our social media marketing services, we help you build
                  a strong social media presence. We increase brand awareness by
                  making your messages accessible to a broad audience while
                  driving meaningful customer interactions. By building an
                  engaged community around your brand, you can build trust,
                  increase customer loyalty, and ultimately increase sales.
                </p>
                <p className="pb-4">
                  Harness the power of social media platforms to achieve your
                  marketing goals. Our dedicated team is here to help you
                  optimize your social media strategy and maximize your brand’s
                  success on social media.
                </p>
              </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
              <Disclosure.Button
                onClick={() => setOpen4(!open4)}
                className="  faqBg mt-4   hover:border-l-[10px] border-[#ffc006]  border-r-0 border-t-0 border-b-0    ease-linear  duration-200 delay-75   text-[26px] leading-[30px] font-bold text-start relative shadow-t-md px-4  w-full rounded-sm py-8"
              >
                WEB DESIGN / E-COMMERCE
                {open4 ? (
                  <AiOutlineMinus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                ) : (
                  <AiOutlinePlus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="faqBg shadow-md  text-gray-600  px-4  rounded-sm py-6">
                <p className="pb-4">
                  Through so-called responsive web design, the content of your
                  online shop is displayed uniformly on different devices. The
                  layout of your website is designed so flexibly that it offers
                  consistent user-friendliness on computer desktops, smartphones
                  and tablets. No matter what device your customers use, they
                  always receive an optimal display and can easily access your
                  products.
                </p>

                <p className="pb-4">
                  The responsive web design ensures that your website is
                  mobile-optimized and automatically adapts to the screen size
                  and resolution of the respective device. This ensures a
                  seamless and pleasant user experience, regardless of the
                  device. Your customers can easily navigate your website, read
                  information and place orders without having to deal with
                  unreadable text, cluttered menus or inconvenient zoom
                  functions.
                </p>
                <p className="pb-4">
                  In addition to optimal adaptation to different devices,
                  responsive web design also offers the advantage that your
                  existing corporate design is fully implemented. Your brand
                  identity and style are maintained so your website has a
                  consistent look and feel. This strengthens the recognition of
                  your brand and conveys professionalism and trust.
                </p>
                <p className="pb-4">
                  In addition, responsive web design ensures high visibility of
                  your website in search engines. Search engines like Google
                  prefer mobile-optimized websites and reward them with better
                  placement in search results. The consistent display on
                  different devices and the positive user experience also reduce
                  the so-called bounce rates. This means that visitors stay on
                  your website longer and don't immediately leave, which can
                  have a positive impact on your conversion rates.
                </p>
                <p className="pb-4">
                  In summary, responsive web design allows you to be
                  mobile-optimized, provide a user-centered user experience, and
                  present a unique web design. At the same time, your corporate
                  design is preserved, while the visibility of your website is
                  increased and bounce rates are reduced. This helps you address
                  your target group effectively, increase sales and promote the
                  success of your online shop.
                </p>
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
              <Disclosure.Button
                onClick={() => setOpen5(!open5)}
                className="  faqBg mt-4   hover:border-l-[10px] border-[#ffc006]  border-r-0 border-t-0 border-b-0    ease-linear  duration-200 delay-75   text-[26px] leading-[30px] font-bold text-start relative shadow-t-md px-4  w-full rounded-sm py-8"
              >
                BRANDING. LOGOS & DESIGN
                {open5 ? (
                  <AiOutlineMinus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                ) : (
                  <AiOutlinePlus className="absolute top-[30px] font-bold text-[35px] right-2 desktop:right-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="faqBg shadow-md  text-gray-600  px-4  rounded-sm py-6">
                <p className="pb-4">
                  Every day as a web agency in Frankfurt we deal with a variety
                  of companies that are struggling with their marketing
                  activities. We see that many of these companies see their
                  biggest challenge in positioning their brand. They ask
                  themselves questions like: Is our brand falling behind? Isn't
                  it clearly defined? Are there general problems with our brand
                  identity?
                </p>

                <p className="pb-4">
                  The importance of a strong brand cannot be overemphasized. A
                  well-established brand helps companies stand out from the
                  competition, build customer trust and build long-term customer
                  loyalty. When companies feel like their brand isn't achieving
                  the desired level of success or they're struggling with their
                  brand identity, there can be a variety of reasons.
                </p>
                <p className="pb-4">
                  Often the problem is that the brand message is not clearly
                  defined. Companies need to have a clear idea of ​​who they
                  are, what they offer and how they differ from other companies.
                  A vague or unclear brand message can leave potential customers
                  confused and unable to identify with the company.
                </p>
                <p className="pb-4">
                  Another problem can be that the brand is not presented
                  consistently across different marketing channels. A successful
                  brand strategy requires consistent presentation of brand
                  values, design and messaging across all marketing activities,
                  be it on the website, social media, advertising or printed
                  materials. If there are inconsistencies here, it can lead to a
                  weakening of the brand.
                </p>
                <p className="pb-4">
                  Sometimes companies also lack a clear target group approach.
                  In order to build strong brand loyalty, it is important to
                  understand the needs, interests and preferences of the target
                  group and address them accordingly. If companies don't know
                  their target audience well or can't communicate effectively
                  with them, this can lead to weak brand perception.
                </p>
                <p className="pb-4">
                  As a web agency, we support companies in tackling these
                  challenges and strengthening their brands. We help you to
                  clearly define your brand identity, ensure consistent brand
                  presentation and develop an effective target group approach.
                  Through targeted marketing strategies and the use of digital
                  channels, we help companies improve their brand and achieve
                  their goals.
                </p>
                <p className="pb-4">
                  We understand that the fight for a strong brand is an ongoing
                  task and that companies need professional support. Our
                  experienced team of experts is ready to help companies in
                  Frankfurt and beyond build, strengthen and successfully
                  position their brand. Together we can overcome the challenges
                  and ensure the long-term success of your brand.
                </p>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
