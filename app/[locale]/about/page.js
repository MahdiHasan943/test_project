"use client";
import Button from "@/components/reusablecomponent/Button";
import Description from "@/components/reusablecomponent/Description";
import Title from "@/components/reusablecomponent/Title";
import { textVariant2 } from "@/font_utils/motion";
import { motion } from "framer-motion";
import { Lato, Work_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const lato = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
const page = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
            text={t("About")}
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
            <span className="text-[#ffc006]"> {t("home")}</span> &gt;{" "}
            {t("About")}
          </p>
        </div>
      </div>

      <div className="px-4 py-8 max-w-[1050px] mx-auto overflow-hidden h-auto pb-8  tablet:py-24 flex flex-col-reverse tablet:flex-none tablet:grid  tablet:grid-cols-2 items-center gap-8">
        <div className="min-h-[400px] py-8 tablet:py-0">
          <h2
            className={`${lato.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px]  tablet:leading-[40px] text-[#18191c]`}
          >
            {t("aboutT")}
          </h2>
          <p className="py-4 leading-[25px] text-[18px] text-[#516469] ">
            {t("aboutSubT")}
          </p>
          <p className="py-4 leading-[25px] text-[14px] text-[#516469] ">
            {t("aboutDes")}
          </p>
          <Button
            className={
              "w-[240px] group"
              // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
            }
          >
            <Link
              href={"/contact"}
              className="text-black group-hover:text-[#fff]  text-[15px]  absolute top-1/2 left-[20px] transform capitalize -translate-y-1/2"
            >
              {t("DiscoverOurServices")}
            </Link>
          </Button>
        </div>
        <div className="py-6 relative  min-h-[400px] tablet:h-full w-full tablet:py-0 ">
          <div className="absolute  z-50 top-0 left-0">
            <Image
              src="/images/Group-2066-1.webp"
              alt="hero_image"
              width={400}
              height={500}
              className=" h-[400px] tablet:h-[450px]"
            />
          </div>
          <Image
            src="/images/icon-circle.png"
            alt="hero_image"
            width={350}
            height={400}
            className="absolute z-10 hidden tablet:block bottom-[50px] left-[20px]"
          />
          <Image
            src="/images/marketbg.png"
            alt="hero_image"
            width={150}
            height={200}
            className="absolute hidden tablet:block h-[300px] z-10 bottom-[100px] right-[10px] "
          />
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="absolute bottom-0 right-0 h-[200px] w-[300px]"
          >
            <Image
              src="/images/market2.png"
              alt="hero_image"
              width={350}
              height={200}
              className="absolute rounded-sm  border-[8px] border-[#fafafa] z-50  hidden tablet:block bottom-[0px] tablet:bottom-0 right-0 "
            />{" "}
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1050px] py-10 mx-auto">
        <div className="border border-[#ffc006] rounded-md py-5 px-4 tablet:py-8 tablet:px-8">
          <Title
            text={t("task")}
            className="tablet:text-[70px] tablet:leading-[70px]"
          />
          <p className="text-[15px] font-normal py-4 leading-[25px]">
            {t("taskDes")}
          </p>

          <Button
            className={
              "w-[200px] group"
              // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
            }
          >
            <Link
              href={"/contact"}
              className="text-black group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform capitalize -translate-y-1/2"
            >
              {t("Contactus")}
            </Link>
          </Button>
        </div>

        <div className="py-8">
          <Description
            text={t("meetp")}
            className="text-[#777] py-4 text-[12px] text-center"
          />

          <Title
            text={t("meetpSub")}
            className="text-center text-[24px] tablet:text-[40px]"
          />
        </div>

        <div className="py-8 grid grid-cols-1 min-h-[470px] tablet:grid-cols-3 gap-4 px-4">
          <div className="group h-[430px] rounded-2xl relative overflow-hidden ">
            <div className="bg-[#111] z-10 rounded-2xl absolute top-0 left-0 h-[80%] w-full translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500"></div>
            <div className="bg-[#f2f3f6] rounded-2xl  absolute top-0 left-0 h-[80%] w-full   "></div>

            <div className="absolute  w-full h-full top-0 left-0 z-50">
              <div className="flex pt-8 flex-col w-full h-full justify-between items-center">
                <h3 className="text-[20px] text-[#111] group-hover:text-[#fff] font-bold py-2">
                  Mike Henderson
                </h3>
                <p className="text-[12px] text-[#777] group-hover:text-[#fff]  pb-4 font-normal">
                  Managing Director
                </p>
                <Image
                  src="/member1.png"
                  alt="team member"
                  width={300}
                  height={300}
                  className="rounded-2xl  h-[300px] w-[90%] mx-auto"
                />
                <div className="w-[50px] h-[50px] absolute  bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffc006] flex justify-center items-center rounded-full">
                  <p className="text-[20px]">+</p>
                </div>
                <div className="absolute w-[50px] h-[150px] translate-y-[140%]  group-hover:translate-y-[0] ease-in-out duration-500  bottom-[60px] left-1/2 transform -translate-x-1/2 z-40  flex justify-center items-center rounded-full">
                  <div className="bg-[#111] rounded-md w-full flex flex-col items-center justify-center gap-4 h-full">
                    <BsTwitter className="text-[#fff] hover:text-[#ffc006]" />
                    <BsFacebook className="text-[#fff] hover:text-[#ffc006]" />
                    <BsLinkedin className="text-[#fff] hover:text-[#ffc006]" />
                    <BsInstagram className="text-[#fff] hover:text-[#ffc006]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group rounded-2xl h-[430px] relative overflow-hidden ">
            <div className="bg-[#111] z-10 rounded-2xl absolute top-0 left-0 h-[80%] w-full translate-y-[-100%]  group-hover:translate-y-[0] ease-in-out duration-500"></div>
            <div className="bg-[#f2f3f6] rounded-2xl  absolute top-0 left-0 h-[80%] w-full   "></div>

            <div className="absolute  w-full h-full top-0 left-0 z-50">
              <div className="flex pt-8 flex-col w-full h-full justify-between items-center">
                <h3 className="text-[20px] text-[#111] group-hover:text-[#fff] font-bold py-2">
                  Kevin Martin
                </h3>
                <p className="text-[12px] text-[#777] group-hover:text-[#fff]  pb-4 font-normal">
                  Chief Executive Officer
                </p>
                <Image
                  src="/member2.png"
                  alt="team member"
                  width={300}
                  height={300}
                  className="rounded-2xl  h-[300px] w-[90%] mx-auto"
                />
                <div className="w-[50px] h-[50px] absolute  bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffc006] flex justify-center items-center rounded-full">
                  <p className="text-[20px]">+</p>
                </div>
                <div className="absolute w-[50px] h-[150px] translate-y-[140%]  group-hover:translate-y-[0] ease-in-out duration-500  bottom-[60px] left-1/2 transform -translate-x-1/2 z-40  flex justify-center items-center rounded-full">
                  <div className="bg-[#111] rounded-md w-full flex flex-col items-center justify-center gap-4 h-full">
                    <BsTwitter className="text-[#fff] hover:text-[#ffc006]" />
                    <BsFacebook className="text-[#fff] hover:text-[#ffc006]" />
                    <BsLinkedin className="text-[#fff] hover:text-[#ffc006]" />
                    <BsInstagram className="text-[#fff] hover:text-[#ffc006]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group rounded-2xl h-[430px] relative overflow-hidden ">
            <div className="bg-[#111] z-10 rounded-2xl absolute top-0 left-0 h-[80%] w-full translate-y-[-110%]  group-hover:translate-y-[0] ease-in-out duration-500"></div>
            <div className="bg-[#f2f3f6] rounded-2xl  absolute top-0 left-0 h-[80%] w-full   "></div>

            <div className="absolute  w-full h-full top-0 left-0 z-50">
              <div className="flex pt-8 flex-col w-full h-full justify-between items-center">
                <h3 className="text-[20px] text-[#111] group-hover:text-[#fff] font-bold py-2">
                  Jason Cleaver
                </h3>
                <p className="text-[12px] text-[#777] group-hover:text-[#fff]  pb-4 font-normal">
                  Human Resource Manager
                </p>
                <Image
                  src="/member3.png"
                  alt="team member"
                  width={300}
                  height={300}
                  className="rounded-2xl  h-[300px] w-[90%] mx-auto"
                />
                <div className="w-[50px] h-[50px] absolute  bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffc006] flex justify-center items-center rounded-full">
                  <p className="text-[20px]">+</p>
                </div>
                <div className="absolute w-[50px] h-[150px] translate-y-[140%]  group-hover:translate-y-[0] ease-in-out duration-500  bottom-[60px] left-1/2 transform -translate-x-1/2 z-40  flex justify-center items-center rounded-full">
                  <div className="bg-[#111] rounded-md w-full flex flex-col items-center justify-center gap-4 h-full">
                    <BsTwitter className="text-[#fff] hover:text-[#ffc006]" />
                    <BsFacebook className="text-[#fff] hover:text-[#ffc006]" />
                    <BsLinkedin className="text-[#fff] hover:text-[#ffc006]" />
                    <BsInstagram className="text-[#fff] hover:text-[#ffc006]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
