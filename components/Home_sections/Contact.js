"use client";
import React, { use } from "react";
import { useEffect, useRef, useState } from "react";
import Button from "../reusablecomponent/Button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Title from "../reusablecomponent/Title";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  textVariant2,
  useAnimation,
} from "@/font_utils/motion";
import toast, { Toaster } from "react-hot-toast";

const pop = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const Contact = () => {
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
    <div className=" relative contact w-full  overflow-hidden  h-[1250px] tablet:h-auto  min-h-[850px]   max-w-[1050px] mx-auto my-20   rounded-md">
      {/* style={{backgroundImage: 'url(/images/contact.png)'}} */}
      <Image
        src={"/images/contact.png"}
        alt="A diverse group of professionals standing together, wearing business attire and smiling at the camera. They appear confident and engaged in their work."
        layout="fill"
        objectFit="cover"
      />
      <div className="px-4 tablet:px-10 py-16  absolute top-0 left-0 w-full h-full z-50">
        <Title
          text={t("Contactus")}
          className=" font-extrabold capitalize text-[40px] leading-[30px] tablet:text-[50px]  tablet:leading-[40px] text-[#18191c]"
        />
        <p className="py-3  leading-[25px] text-[18px] text-[#18191c]">
          {t("Contactussub")}
        </p>
        <p className="text-[#18191c] text-[18px]">{t("Contactusdes")}</p>
        <div className="overflow-hidden">
          <motion.form
            variants={slideIn("down", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            id="con"
            className="tablet:flex z-[100000000000]  gap-8 mt-8 py-8 tablet:max-h-[500px] px-6 rounded-sm bg-[#fff] max-w-[650px]  "
            ref={form}
            onSubmit={sendEmail}
            action=""
          >
            <div className="py-6 tablet:py-0 max-w-[350px]"></div>
            <div className="pb-20">
              <div className="tablet:flex gap-8 items-center">
                <div className="">
                  <label className="text-[#063255] py-4" htmlFor="surename">
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
                placeholder="message"
                name="message"
              ></textarea>
              <div className="">
                <Button
                  className={
                    "w-[180px] group mt-4"
                    // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
                  }
                >
                  <button className="text-black group-hover:text-[#fff] text-[15px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
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
  );
};

export default Contact;
