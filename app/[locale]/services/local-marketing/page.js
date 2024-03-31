"use client";

import { TypingText } from "@/components/reusablecomponent/CustomText";
import Title from "@/components/reusablecomponent/Title";
import {
  textVariant2,
  fadeIn,
  slideIn,
  staggerContainer,
} from "@/font_utils/motion";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IBM_Plex_Mono, Lato, Work_Sans } from "next/font/google";
import emailjs from "@emailjs/browser";
import { Disclosure, Tab } from "@headlessui/react";
import { BsWhatsapp } from "react-icons/bs";

import Description from "@/components/reusablecomponent/Description";
import Button from "@/components/reusablecomponent/Button";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
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
  const form = useRef();

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption, "test");
  const handleCheckboxChange = (name) => {
    setSelectedOption(name);
    console.log("Selected Option:", name);
  };

  const handleCheckboxChange1 = (name) => {
    setSelectedOption1(name);
    console.log("Selected Option:", name);
  };

  const handleCheckboxChange2 = (name) => {
    setSelectedOption2(name);
    console.log(name, "form");
  };

  const handleCheckboxChange3 = (name) => {
    setSelectedOption3(name);
    console.log(name, "form");
  };
  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (event) => {
    setAgreed(event.target.checked);
    console.log("Agreement Value:", event.target.checked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vcletm",
        "template_4vpdiga",
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
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t("localm")}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
            <span className="text-[#ffc006]"> {t("home")}</span> &gt;{" "}
            <span className="text-[#ffc006]">{t("services")} &gt; </span>
            {t("localm")}
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] flex flex-col-reverse tablet:flex tablet:flex-row gap-8  py-20 px-4 mx-auto ">
        <div
          className={`${plexmono.className} max-w-[1000px] uppercase  flex flex-col `}
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
          {/* <Link href={"/services/local-marketing"}>
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
          </Link> */}
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
        <div className="tablet:pl-[100px] overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.8, 1)}
            initial="hidden"
            whileInView="show"
            className=""
          >
            <TypingText
              textStyles={`${work_san.className}  uppercase   text-[28px]  leading-[28px] tablet:text-[40px]  tablet:leading-[40px] text-[#111]`}
              title={t("localm")}
            />
          </motion.div>

          <Description
            className="py-12 leading-[25px]  text-[18px] text-[#516469] "
            text={t("webdesignMaindes")}
          />

          <div className=" max-w-[1000px]  py-20 px-4 tablet:px-0  rounded-md">
            <div className="grid grid-cols-1items-center gap-8 tablet:grid-cols-3 ">
              <a href="#form">
                <Button className="w-[300px]  tablet:w-[300px] mx-auto py-4 min-h-[60px] focus:bg-[#111] px-4  border border-[#ffc107] duration-300 delay-100 ease-linear  outline-none focus:outline-none hover:border-0 focus:border-0 hover:text-[#fff]">
                  <span className="text-[18px] font-semibold">
                    {t("freeinitialconsultation")}
                  </span>
                </Button>
              </a>
              <a href="#form">
                <Button className="w-[300px]  tablet:w-[300px]  mx-auto py-4 min-h-[60px] focus:bg-[#111] px-4  border border-[#ffc107] duration-300 delay-100 ease-linear  outline-none focus:outline-none hover:border-0 focus:border-0 hover:text-[#fff]">
                  <span className="text-[18px] font-semibold">
                    {t("terminvereinbaren")}
                  </span>
                </Button>{" "}
              </a>
            </div>
          </div>

          <div className="">
            <Description
              className={`${work_san.className} uppercase   text-[28px]  leading-[28px] tablet:text-[35px]  tablet:leading-[40px] text-[#111] `}
              text={t("webh2")}
            />
            <ul className="px-4 pt-8  list-disc">
              <li
                className={`${plexmono.className} leading-[25px]  text-[18px] text-[#516469] `}
              >
                {t("webbullet1")}
              </li>
              <li
                className={`${plexmono.className} py-2 leading-[25px]  text-[18px] text-[#516469] `}
              >
                {t("webbullet2")}
              </li>
              <li
                className={`${plexmono.className}  leading-[25px]  text-[18px] text-[#516469] `}
              >
                {t("webbullet3")}
              </li>
              <li
                className={`${plexmono.className} py-2  leading-[25px]  text-[18px] text-[#516469]`}
              >
                {t("webbullet4")}
              </li>
              <li
                className={`${plexmono.className} leading-[25px]  text-[18px] text-[#516469] `}
              >
                {t("webbullet5")}
              </li>
              <li
                className={`${plexmono.className} py-2  leading-[25px]  text-[18px] text-[#516469] `}
              >
                {t("webbullet6")}
              </li>
            </ul>

            <Description
              className="py-8 leading-[25px]  text-[18px] text-[#516469] "
              text={t("webdes2")}
            />
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=4915213599612"
            >
              <Button className="w-[300px] py-4 min-h-[60px] focus:bg-[#111] px-4  border border-[#ffc107] duration-300 delay-100 ease-linear  outline-none focus:outline-none hover:border-0 focus:border-0 hover:text-[#fff]">
                <div className=" absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                  <p className="text-[18px] flex justify-between items-center gap-4 font-semibold">
                    <BsWhatsapp className="min-w-[50px]" />
                    {t("servicewhats")}
                  </p>
                </div>
              </Button>{" "}
            </a>
          </div>
          <div className="py-24">
            <Description
              className={`${work_san.className} uppercase   text-[28px]  leading-[28px] tablet:text-[35px]  tablet:leading-[40px] text-[#111] `}
              text={t("webh23")}
            />
            <Description
              className="py-12 leading-[25px]  text-[18px] text-[#516469] "
              text={t("webh23des")}
            />
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=4915213599612"
            >
              <Button className="w-[300px] py-4 min-h-[60px] focus:bg-[#111] px-4  border border-[#ffc107] duration-300 delay-100 ease-linear  outline-none focus:outline-none hover:border-0 focus:border-0 hover:text-[#fff]">
                <div className=" absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                  <p className="text-[18px] flex justify-between items-center gap-4 font-semibold">
                    <BsWhatsapp className="min-w-[50px]" />
                    {t("servicewhats")}
                  </p>
                </div>
              </Button>{" "}
            </a>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 1.8, 1)}
            initial="hidden"
            whileInView="show"
            className=""
          >
            <Image
              src={"/images/responsiveImage1.png"}
              alt="design"
              width={600}
              height={400}
              className="py-8 w-full tablet:w-auto"
            />{" "}
          </motion.div>

          <div className="py-24">
            <Description
              className={`${work_san.className} uppercase   text-[28px]  leading-[28px] tablet:text-[35px]  tablet:leading-[40px] text-[#111] `}
              text={t("webh24")}
            />
            <Description
              className="py-12 leading-[25px]  text-[18px] text-[#516469] "
              text={t("webh24des")}
            />
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=4915213599612"
            >
              <Button className="w-[300px] py-4 min-h-[60px] focus:bg-[#111] px-4  border border-[#ffc107] duration-300 delay-100 ease-linear  outline-none focus:outline-none hover:border-0 focus:border-0 hover:text-[#fff]">
                <div className=" absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                  <p className="text-[18px] flex justify-between items-center gap-4 font-semibold">
                    <BsWhatsapp className="min-w-[50px]" />
                    {t("servicewhats")}
                  </p>
                </div>
              </Button>{" "}
            </a>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 1.8, 1)}
            initial="hidden"
            whileInView="show"
            className=""
          >
            <Image
              src={"/images/7580918.jpg"}
              alt="design"
              width={600}
              height={400}
              className="py-8 w-full tablet:w-auto"
            />
          </motion.div>

          <Description
            className={`${work_san.className} uppercase pt-20 mt-8 pb-4  text-[25px]  leading-[28px] tablet:text-[30px]  tablet:leading-[40px] text-[#111] `}
            text={t("DigitalerErfolg")}
          />

          <Description
            className={`${work_san.className} uppercase py-4  text-[20x]  leading-[28px] tablet:text-[25px]  tablet:leading-[40px] text-[#111] `}
            text={t("Ergreifejetzt")}
          />
          <div className=" relative contact w-full  overflow-hidden  h-[1750px] tablet:h-auto  min-h-[1350px]   max-w-[1050px] mx-auto my-20   rounded-md">
            {/* style={{backgroundImage: 'url(/images/contact.png)'}} */}
            <Image
              src={"/images/contact.png"}
              alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
              layout="fill"
              objectFit="cover"
            />
            <div className="px-4 tablet:px-10 py-16  absolute top-0 left-0 w-full h-full z-50">
              <Title
                text={t("serviceFormTitle")}
                className=" font-extrabold capitalize text-[40px] leading-[40px] tablet:text-[50px]  tablet:leading-[40px] text-[#18191c]"
              />

              <p className="text-[#18191c] py-5 text-[18px]">
                {t("serviceFormTdes")}
              </p>
              <p className="py-3  leading-[25px] text-[18px] text-[#18191c]">
                {t("Service-Details")}:
              </p>
              <div className="overflow-hidden">
                <motion.form
                  variants={slideIn("down", "tween", 0.3, 1)}
                  initial="hidden"
                  whileInView="show"
                  id="con"
                  className="tablet:flex z-[100000000000]  gap-8 mt-8 py-8  h-full px-6 rounded-sm bg-[#fff] max-w-[650px]  "
                  ref={form}
                  onSubmit={sendEmail}
                  action=""
                >
                  <div
                    id="form"
                    className="py-6 tablet:py-0 max-w-[350px]"
                  ></div>
                  <div className="pb-20">
                    <div className="tablet:flex gap-8 items-center">
                      <div className="tablet:flex gap-8 items-center">
                        <div className="">
                          <label
                            className="text-[#063255] text-[18px] py-4"
                            htmlFor="surename"
                          >
                            When is the service needed?
                          </label>
                          <div className="grid grid-cols-2 items-center gap-2 py-4">
                            <div className="flex gap-4">
                              <input
                                type="checkbox"
                                name="immediately"
                                value="immediately"
                                id="option1"
                                checked={selectedOption === "Immediately"}
                                onChange={() =>
                                  handleCheckboxChange("Immediately")
                                }
                              />
                              <label className="text-[14px]" htmlFor="option1">
                                Immediately
                              </label>
                            </div>
                            <div className="flex gap-4">
                              <input
                                type="checkbox"
                                name="within_the_next_month"
                                value="within the next month"
                                id="option2"
                                checked={
                                  selectedOption === "Within the next month"
                                }
                                onChange={() =>
                                  handleCheckboxChange("Within the next month")
                                }
                              />
                              <label className="text-[14px]" htmlFor="option2">
                                Within the next month
                              </label>
                            </div>
                            <div className="flex gap-4">
                              <input
                                type="checkbox"
                                name="one_to_three_months"
                                value="one to three months"
                                id="option3"
                                checked={selectedOption === "1-3 months"}
                                onChange={() =>
                                  handleCheckboxChange("1-3 months")
                                }
                              />
                              <label className="text-[14px]" htmlFor="option3">
                                1-3 month
                              </label>
                            </div>
                            <div className="flex gap-4">
                              <input
                                type="checkbox"
                                name="not_sure_yet"
                                value="not sure yet"
                                id="option4"
                                checked={selectedOption === "Not sure yet"}
                                onChange={() =>
                                  handleCheckboxChange("Not sure yet")
                                }
                              />
                              <label className="text-[14px]" htmlFor="option4">
                                Not sure yet
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tablet:flex gap-8 items-center">
                      <div className="">
                        <label
                          className="text-[#063255] text-[18px] py-4"
                          htmlFor="similar_service"
                        >
                          Are you currently using a similar service from a
                          different provider?
                        </label>
                        <div className="grid grid-cols-2 items-center gap-2 py-4">
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="Yes"
                              value="Yes"
                              id="similar_service_yes"
                              checked={selectedOption1 === "option3"}
                              onChange={() => handleCheckboxChange1("option3")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="similar_service_yes"
                            >
                              Yes
                            </label>
                          </div>

                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="No"
                              value="No"
                              id="similar_service_no"
                              checked={selectedOption1 === "option4"}
                              onChange={() => handleCheckboxChange1("option4")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="similar_service_no"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tablet:flex gap-8 items-center">
                      <div className="">
                        <label
                          className="text-[#063255] text-[18px] py-4"
                          htmlFor="budget"
                        >
                          What is your budget for this service?
                        </label>
                        <div className="grid grid-cols-2 items-center gap-2 py-4">
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="Under$500"
                              value="Under $500"
                              id="budget_under_500"
                              checked={selectedOption2 === "option1"}
                              onChange={() => handleCheckboxChange2("option1")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="budget_under_500"
                            >
                              Under $500
                            </label>
                          </div>
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="Under$1000"
                              value="$500 - $1000"
                              id="budget_500_to_1000"
                              checked={selectedOption2 === "option2"}
                              onChange={() => handleCheckboxChange2("option2")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="budget_500_to_1000"
                            >
                              $500 - $1000
                            </label>
                          </div>

                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="Under$1500"
                              value=" $1000 - $5000"
                              id="budget_1000_to_5000"
                              checked={selectedOption2 === "option3"}
                              onChange={() => handleCheckboxChange2("option3")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="budget_1000_to_5000"
                            >
                              $1000 - $5000{" "}
                            </label>
                          </div>

                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="Under$5000"
                              value="$5000+"
                              id="budget_over_5000"
                              checked={selectedOption2 === "option4"}
                              onChange={() => handleCheckboxChange2("option4")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="budget_over_5000"
                            >
                              $5000+
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tablet:flex gap-8 items-center">
                      <div className="">
                        <label
                          className="text-[#063255] text-[18px] py-4"
                          htmlFor="project_timeframe"
                        >
                          How much time do you have to execute this project?
                        </label>
                        <div className="grid grid-cols-2 items-center gap-2 py-4">
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="urgent"
                              value="Urgent (less than a month)"
                              id="project_timeframe_urgent"
                              checked={selectedOption3 === "option1"}
                              onChange={() => handleCheckboxChange3("option1")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="project_timeframe_urgent"
                            >
                              Urgent (less than a month)
                            </label>
                          </div>
                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="1-3-months"
                              value="1-3 months"
                              id="project_timeframe_1_to_3_months"
                              checked={selectedOption3 === "option2"}
                              onChange={() => handleCheckboxChange3("option2")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="project_timeframe_1_to_3_months"
                            >
                              1-3 months
                            </label>
                          </div>

                          <div className="flex gap-4">
                            <input
                              type="checkbox"
                              name="Flexible"
                              value="Flexible"
                              id="project_timeframe_flexible"
                              checked={selectedOption3 === "option3"}
                              onChange={() => handleCheckboxChange3("option3")}
                            />
                            <label
                              className="text-[14px]"
                              htmlFor="project_timeframe_flexible"
                            >
                              Flexible
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tablet:flex gap-8 items-center">
                      <div className="">
                        <label
                          className="text-[#063255] py-4"
                          htmlFor="surename"
                        >
                          {t("Surname")}
                        </label>
                        <input
                          type="text"
                          className="placeholder:text-[#063255] bg-[#f6f6f6] outline-none mb-4  text-[#063255] placeholder:text-[12px] py-3 px-6 rounded-sm  w-full "
                          name="user_name"
                          id="surename"
                          placeholder="name"
                        />
                      </div>{" "}
                      <div className="">
                        <label className="text-[#063255] py-4" htmlFor="email">
                          {t("Email")} <span className="text-[red]">*</span>
                        </label>

                        <input
                          type="email"
                          className="placeholder:text-[#063255] bg-[#f6f6f6] outline-none mb-4  text-[#063255] placeholder:text-[12px] py-3 px-6 rounded-sm  w-full "
                          name="user_email"
                          placeholder="email"
                          id="email"
                        />
                      </div>
                    </div>

                    <label className="text-[#063255] py-4" htmlFor="phone">
                      {t("Telephone ")} <span className="text-[red]">*</span>
                    </label>

                    <input
                      type="text"
                      className="placeholder:text-[#063255] bg-[#f6f6f6] outline-none mb-4  text-[#063255] placeholder:text-[12px] py-3 px-6 rounded-sm  w-full "
                      name="phone"
                      id="phone"
                      placeholder="phone"
                    />
                    <label className="text-[#063255] py-4" htmlFor="news">
                      {t("News")}
                    </label>
                    <textarea
                      className="w-full px-6 max-h-[300px] resize-none bg-[#f6f6f6] outline-none  placeholder:text-[#063255] text-[#063255] rounded-md placeholder:text-[12px] py-6 "
                      id="news"
                      cols="30"
                      rows="4"
                      placeholder="Please describe your project or service needs in few sentences "
                      name="message"
                    ></textarea>
                    <div className="">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            checked={agreed}
                            className="mr-3"
                            onChange={handleAgreementChange}
                          />
                          I agree to the privacy policy and terms of service
                        </label>
                      </div>

                      <Button
                        onClick={sendEmail}
                        className="w-[180px] group mt-4"
                      >
                        <button
                          className={
                            "text-black group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2" +
                            (agreed ? "" : " opacity-50 pointer-events-none")
                          }
                        >
                          {t("SendMessage")}
                        </button>
                      </Button>
                    </div>
                  </div>
                </motion.form>
              </div>
              <motion.div
                variants={slideIn("right", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="absolute hidden tablet:block min-h-[400px] z-50 bottom-0 right-0"
              >
                <Image
                  src={"/images/contacts.png"}
                  alt="contact"
                  width={360}
                  height={400}
                  className=""
                />
              </motion.div>
            </div>{" "}
            <Toaster
              position="bottom-center" // Positions the toast at the bottom-center
              reverseOrder={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
