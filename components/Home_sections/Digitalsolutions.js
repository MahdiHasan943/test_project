"use client";
import React from "react";
import Title from "../reusablecomponent/Title";
import Button from "../reusablecomponent/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  textVariant,
  zoomIn,
  fadeIn,
  slideIn,
  textContainer,
  textVariant2,
  staggerContainer,
  textVariant3,
} from "@/font_utils/motion";
import Image from "next/image";
import Link from "next/link";
const Digitalsolutions = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        className="overflow-hidden hidden desktop:block"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="w-full relative overflow-hidden largeMonitor:max-w-[1400px] h-[1800px] mx-auto  px-4 desktop:px-12  py-12 rounded-sm">
          <Image
            src={"/images/contact.png"}
            alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
            layout="fill"
            objectFit="cover"
          />
          <div className="px-4 tablet:px-10 py-16   absolute top-0 left-0 w-full h-full z-50">
            <div className=" py-6 tablet:py-0  desktop:flex justify-between">
              <div className="">
                <Title
                  text={t("digitalsolutionsdest1")}
                  className="capitalize"
                />
                <Title
                  text={t("digitalsolutionsdest2")}
                  className="capitalize"
                />

                <motion.p
                  variants={textVariant3}
                  initial="hidden"
                  whileInView="show"
                  className="py-2 leading-[25px] text-[18px] text-[#111] "
                >
                  {t("digitalsolutionssub")}
                </motion.p>
              </div>
              <motion.p
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="max-w-[600px] text-[16px] text-[#111]"
              >
                {" "}
                {t("digitalsolutionsdes")}
              </motion.p>
            </div>

            <div className="w-full grid pt-8 desktop:pt-20  pb-8 grid-cols-1 desktop:grid-cols-3 gap-4 items-center">
              <motion.div
                variants={fadeIn("right", "bounce", 0.2, 1)}
                className="w-full bg-[#fafafa] py-16 px-4 shadow-xl rounded-sm"
              >
                <h3 className="font-extrabold text-[30px] leading-[40px] tablet:text-[35px] py-6 text-center tablet:leading-[40px] text-[#18191c]">
                  {" "}
                  {t("Simplyp")}
                  <br className="" />
                  Package
                </h3>
                <div className="flex py-4 flex-col items-start ml-[10px]        desktop:ml-[40px]">
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("simpleP1")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP2")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP3")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP4")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP5")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP6")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP7")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP8")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP9")}</p>
                  </div>
                </div>
                <h3 className="font-extrabold text-[35px] leading-[35px] tablet:text-[45px] text-center tablet:leading-[45px] text-[#18191c]">
                  1800€{" "}
                </h3>

                <Button
                  className={
                    "w-[250px] group mx-auto mt-4"
                    // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                  }
                >
                  <Link
                    href={"/contact"}
                    className="text-[#111]  group-hover:text-[#fff] text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                  >
                    Begin
                  </Link>
                </Button>
              </motion.div>
              {/* 2 */}
              <motion.div
                variants={fadeIn("down", "bounce", 0.2, 1)}
                className="w-full bg-[#fafafa] py-16 px-4 shadow-xl rounded-sm"
              >
                <h3 className="font-extrabold text-[30px] leading-[40px] tablet:text-[35px] py-6 text-center tablet:leading-[40px] text-[#18191c]">
                  {t("Standardp")}
                  <br className="" />
                  Package
                </h3>
                <div className="flex py-4 flex-col items-start ml-[10px]        desktop:ml-[40px]">
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("simpleP1")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP4")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP6")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP7")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP1")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP9")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP3")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP2")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP2")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP3")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP4")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP5")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP6")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP7")}</p>
                  </div>
                </div>
                <h3 className="font-extrabold text-[35px] leading-[35px] tablet:text-[45px] text-center tablet:leading-[45px] text-[#18191c]">
                  2600€
                </h3>

                <Button
                  className={
                    "w-[250px] group mx-auto mt-4"
                    // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                  }
                >
                  <Link
                    href={"/contact"}
                    className="text-[#111]  group-hover:text-[#fff] text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                  >
                    Begin
                  </Link>
                </Button>
              </motion.div>

              {/* 3 */}

              <motion.div
                variants={fadeIn("left", "bounce", 0.2, 1)}
                className="w-full bg-[#fafafa] py-16 px-4 shadow-xl rounded-sm"
              >
                <h3 className="font-extrabold text-[30px] leading-[40px] tablet:text-[35px] py-6 text-center tablet:leading-[40px] text-[#18191c]">
                  {" "}
                  {t("Premiump")}
                  <br className="" />
                  Package
                </h3>
                <div className="flex py-4 flex-col items-start ml-[10px]        desktop:ml-[40px]">
                  <div className="flex justify-center py-0 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("simpleP1")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("premimumP6")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("simpleP6")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("simpleP4")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p className=" max-w-[300px]">{t("simpleP8")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP2")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP9")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP7")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("premimumP1")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("premimumP2")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP2")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("simpleP3")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP3")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP4")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP5")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP6")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("standerdP7")}</p>
                  </div>
                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("premimumP7")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("premimumP3")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("premimumP4")}</p>
                  </div>

                  <div className="flex justify-center py-2 items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <p>{t("premimumP5")}</p>
                  </div>
                </div>
                <h3 className="font-extrabold text-[35px] leading-[35px] tablet:text-[45px] text-center tablet:leading-[45px] text-[#18191c]">
                  3600€
                </h3>

                <Button
                  className={
                    "w-[250px] group mx-auto mt-4"
                    // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                  }
                >
                  <Link
                    href={"/contact"}
                    className="text-[#111]  group-hover:text-[#fff] text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                  >
                    Begin
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="overflow-hidden block desktop:hidden">
        <div className="w-full desktop:smax-w-[1200px] bg-[#ffcb4b] mx-auto px-4 desktop:px-12  py-12 rounded-sm">
          <div className=" py-6 tablet:py-0 desktop:flex justify-between">
            <div className="mx-auto tablet:text-center">
              <Title text={t("digitalsolutionsdest1")} className="capitalize" />
              <Title text={t("digitalsolutionsdest2")} className="capitalize" />

              <motion.p
                variants={textVariant3}
                initial="hidden"
                whileInView="show"
                className="py-6 leading-[25px] text-[18px] text-[#111] "
              >
                {t("digitalsolutionssub")}
              </motion.p>
            </div>
            <motion.p
              variants={textVariant3}
              initial="hidden"
              whileInView="show"
              className="max-w-[600px] tablet:mx-auto py-2 text-[16px] text-[#111]"
            >
              {" "}
              {t("digitalsolutionsdes")}
            </motion.p>
          </div>

          <div className="w-full grid pt-8 desktop:pt-20  pb-8 grid-cols-1 desktop:grid-cols-3 gap-4 items-center">
            <motion.div
              variants={fadeIn("right", "bounce", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="w-full bg-[#fafafa]  tablet:max-w-[400px] mx-auto  py-16 px-4 shadow-xl rounded-sm"
            >
              <h3 className="font-extrabold text-[30px] leading-[40px] tablet:text-[35px] py-6 text-center tablet:leading-[40px] text-[#18191c]">
                {" "}
                {t("Simplyp")}
                <br className="" />
                Package
              </h3>
              <div className="flex py-4 flex-col items-start ml-[10px]        desktop:ml-[40px]">
                <div className="flex justify-center py-2 items-center gap-4">
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <p>{t("simpleP1")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP2")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP3")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP4")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>

                  <p>{t("simpleP5")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP6")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP7")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP8")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP9")}</p>
                </div>
              </div>
              <h3 className="font-extrabold text-[35px] leading-[35px] tablet:text-[45px] text-center tablet:leading-[45px] text-[#18191c]">
                1800€{" "}
              </h3>

              <Button
                className={
                  "w-[250px] group mx-auto mt-4"
                  // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                }
              >
                <Link
                  href={"/contact"}
                  className="text-[#111]  group-hover:text-[#fff] text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                >
                  Begin
                </Link>
              </Button>
            </motion.div>
            {/* 2 */}
            <motion.div
              variants={fadeIn("left", "bounce", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="w-full tablet:max-w-[400px] mx-auto  bg-[#fafafa] py-16 px-4 shadow-xl rounded-sm"
            >
              <h3 className="font-extrabold text-[30px] leading-[40px] tablet:text-[35px] py-6 text-center tablet:leading-[40px] text-[#18191c]">
                {" "}
                {t("Standardp")}
                <br className="" />
                Package
              </h3>
              <div className="flex py-4 flex-col items-start ml-[10px]        desktop:ml-[40px]">
                <div className="flex justify-center py-2 items-center gap-4">
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <p className=" ">{t("simpleP1")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP4")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP6")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP7")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP1")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP9")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP3")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP2")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP2")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP3")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP4")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP5")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP6")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP7")}</p>
                </div>
              </div>
              <h3 className="font-extrabold text-[35px] leading-[35px] tablet:text-[45px] text-center tablet:leading-[45px] text-[#18191c]">
                2600€
              </h3>

              <Button
                className={
                  "w-[250px] group mx-auto mt-4"
                  // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                }
              >
                <Link
                  href={"/contact"}
                  className="text-[#111]  group-hover:text-[#fff] text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                >
                  Begin
                </Link>
              </Button>
            </motion.div>

            {/* 3 */}

            <motion.div
              variants={fadeIn("right", "bounce", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="w-full tablet:max-w-[400px] mx-auto  bg-[#fafafa] py-16 px-4 shadow-xl rounded-sm"
            >
              <h3 className="font-extrabold text-[30px] leading-[40px] tablet:text-[35px] py-6 text-center tablet:leading-[40px] text-[#18191c]">
                {" "}
                {t("Premiump")}
                <br className="" />
                Package
              </h3>
              <div className="flex py-4 flex-col items-start ml-[10px]        desktop:ml-[40px]">
                <div className="flex justify-center py-0 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p className=" max-w-[300px]">{t("simpleP1")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p className=" max-w-[300px]">{t("premimumP6")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p className=" max-w-[300px]">{t("simpleP6")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p className=" max-w-[300px]">{t("simpleP4")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p className=" max-w-[300px]">{t("simpleP8")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP2")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP9")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP7")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("premimumP1")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("premimumP2")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP2")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("simpleP3")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP3")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP4")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP5")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP6")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("standerdP7")}</p>
                </div>
                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("premimumP7")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("premimumP3")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("premimumP4")}</p>
                </div>

                <div className="flex justify-center py-2 items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-[20p]        delay-75 duration-200 ease-linear text-[#111] h-[20px]"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <p>{t("premimumP5")}</p>
                </div>
              </div>
              <h3 className="font-extrabold text-[35px] leading-[35px] tablet:text-[45px] text-center tablet:leading-[45px] text-[#18191c]">
                3600€
              </h3>

              <Button
                className={
                  "w-[250px] group mx-auto mt-4"
                  // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                }
              >
                <Link
                  href={"/contact"}
                  className="text-[#111]  group-hover:text-[#fff] text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
                >
                  Begin
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Digitalsolutions;
