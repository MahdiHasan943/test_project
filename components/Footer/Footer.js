"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Button from "../reusablecomponent/Button";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  footerVariants,
  textVariant2,
  textVariant3,
  textVariant4,
} from "@/font_utils/motion";

const Footer = () => {
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
          toast.success("Successfully subscribed");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="bg-[#18191d]"
    >
      <div className="max-w-[1500px] tablet:flex justify-between  text-[#fff] py-12 mx-auto px-4 largeMonitor:px-20 largestMonitor:px-[150px]">
        <div className="py-8 tablet:py-0">
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="font-bold text-[22px] mb-4"
          >
            {t("AboutUs")}
          </motion.h2>
          <motion.p
            variants={textVariant3}
            initial="hidden"
            whileInView="show"
            className="text-[16px] max-w-[800px] leading-[25px]"
          >
            {t("footer_des")}
          </motion.p>

          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="py-6 tablet:flex gap-4"
          >
            <input
              name="user_email"
              className="py-3 my-4 tablet:my-0 px-4 bg-[#fafaf] rounded-sm text-[#111] outline-none"
              type="email"
              placeholder="Email Address"
            />
            <Button className={"w-[230px] group "}>
              <button className="text-black group-hover:text-[#fff] text-[15px] absolute top-1/2 left-[25px] transform translate-x-1/2  -translate-y-1/2">
                {" "}
                {t("Subscribe")}{" "}
              </button>
            </Button>{" "}
          </form>
        </div>
        <div className="">
          <h2 className="font-bold text-right text-[22px] mb-4">
            {" "}
            {t("NAVIGATION")}{" "}
          </h2>
          <p className="text-right py-2">
            <Link
              href="/blog"
              className="hover:text-[#fec63f] text-[18px] text-[#fff] "
            >
              {" "}
              {t("blog")}{" "}
            </Link>
          </p>

          <p className="text-right">
            <Link
              href="/about"
              className="hover:text-[#fec63f] text-[#fff]  text-[18px]"
            >
              {" "}
              {t("AboutUs")}
            </Link>
          </p>
          <p className="py-2 text-right">
            {" "}
            <Link
              href="/carrer"
              className="hover:text-[#fec63f] text-[#fff] text-[18px]"
            >
              {" "}
              {t("Career")}{" "}
            </Link>
          </p>
          <p className="text-right">
            {" "}
            <Link
              href="/services"
              className="hover:text-[#fec63f] text-[#fff] text-[18px]"
            >
              {" "}
              {t("services")}{" "}
            </Link>
          </p>
          <p className="py-2 text-right">
            {" "}
            <Link
              href="/contact"
              className="hover:text-[#fec63f] text-[#fff] text-[18px]"
            >
              {" "}
              {t("contact")}{" "}
            </Link>
          </p>

          <p className="py-2 text-right">
            {" "}
            <Link
              href="/privacy-policy"
              className="hover:text-[#fec63f] text-[#fff] text-[18px]"
            >
              {" "}
              {t("privacy_policy")}{" "}
            </Link>
          </p>
          <p className="text-right">
            {" "}
            <Link
              href="/SocialMediaAgencyFrankfurt"
              className="hover:text-[#fec63f] text-[#fff] text-[18px]"
            >
              {" "}
              {t("SocialMediaAgencyFrankfurt")}{" "}
            </Link>
          </p>
        </div>
      </div>

      <div className="w-[100%] border border-b-0 border-l-0 border-r-0 border-t-1 border-[#6a6969] py-6">
        <div className="max-w-[1500px] tablet:flex justify-between  mx-auto px-4 largeMonitor:px-20 largestMonitor:px-[150px]">
          <p className="text-[#fec63f] hover:text-[#fff] text-[16px]">
            {t("copy")}
          </p>
          <div className="flex justify-center py-4 tablet:py-0 gap-4 items-center">
            <a className="py-2 px-2 border border-[#fec63f] rounded-md" href="">
              <svg
                className="kadence-svg-icon text-[#fec63f]  hover:text-[#fff] kadence-facebook-svg"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 32 32"
              >
                <title>Facebook</title>
                <path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
              </svg>
            </a>
            <a className="py-2 px-2 border border-[#fec63f] rounded-md" href="">
              <svg
                className="kadence-svg-icon text-[#fec63f]  hover:text-[#fff] kadence-facebook-svg"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 26 28"
              >
                <title>Twitter</title>
                <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
              </svg>
            </a>
            <a className="py-2 px-2 border border-[#fec63f] rounded-md" href="">
              <svg
                className="kadence-svg-icon text-[#fec63f]  hover:text-[#fff] kadence-facebook-svg"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 32 32"
              >
                <title>Instagram</title>
                <path d="M21.138 0.242c3.767 0.007 3.914 0.038 4.65 0.144 1.52 0.219 2.795 0.825 3.837 1.821 0.584 0.562 0.987 1.112 1.349 1.848 0.442 0.899 0.659 1.75 0.758 3.016 0.021 0.271 0.031 4.592 0.031 8.916s-0.009 8.652-0.030 8.924c-0.098 1.245-0.315 2.104-0.743 2.986-0.851 1.755-2.415 3.035-4.303 3.522-0.685 0.177-1.304 0.26-2.371 0.31-0.381 0.019-4.361 0.024-8.342 0.024s-7.959-0.012-8.349-0.029c-0.921-0.044-1.639-0.136-2.288-0.303-1.876-0.485-3.469-1.784-4.303-3.515-0.436-0.904-0.642-1.731-0.751-3.045-0.031-0.373-0.039-2.296-0.039-8.87 0-2.215-0.002-3.866 0-5.121 0.006-3.764 0.037-3.915 0.144-4.652 0.219-1.518 0.825-2.795 1.825-3.833 0.549-0.569 1.105-0.975 1.811-1.326 0.915-0.456 1.756-0.668 3.106-0.781 0.374-0.031 2.298-0.038 8.878-0.038h5.13zM15.999 4.364v0c-3.159 0-3.555 0.014-4.796 0.070-1.239 0.057-2.084 0.253-2.824 0.541-0.765 0.297-1.415 0.695-2.061 1.342s-1.045 1.296-1.343 2.061c-0.288 0.74-0.485 1.586-0.541 2.824-0.056 1.241-0.070 1.638-0.070 4.798s0.014 3.556 0.070 4.797c0.057 1.239 0.253 2.084 0.541 2.824 0.297 0.765 0.695 1.415 1.342 2.061s1.296 1.046 2.061 1.343c0.74 0.288 1.586 0.484 2.825 0.541 1.241 0.056 1.638 0.070 4.798 0.070s3.556-0.014 4.797-0.070c1.239-0.057 2.085-0.253 2.826-0.541 0.765-0.297 1.413-0.696 2.060-1.343s1.045-1.296 1.343-2.061c0.286-0.74 0.482-1.586 0.541-2.824 0.056-1.241 0.070-1.637 0.070-4.797s-0.015-3.557-0.070-4.798c-0.058-1.239-0.255-2.084-0.541-2.824-0.298-0.765-0.696-1.415-1.343-2.061s-1.295-1.045-2.061-1.342c-0.742-0.288-1.588-0.484-2.827-0.541-1.241-0.056-1.636-0.070-4.796-0.070zM14.957 6.461c0.31-0 0.655 0 1.044 0 3.107 0 3.475 0.011 4.702 0.067 1.135 0.052 1.75 0.241 2.16 0.401 0.543 0.211 0.93 0.463 1.337 0.87s0.659 0.795 0.871 1.338c0.159 0.41 0.349 1.025 0.401 2.16 0.056 1.227 0.068 1.595 0.068 4.701s-0.012 3.474-0.068 4.701c-0.052 1.135-0.241 1.75-0.401 2.16-0.211 0.543-0.463 0.93-0.871 1.337s-0.794 0.659-1.337 0.87c-0.41 0.16-1.026 0.349-2.16 0.401-1.227 0.056-1.595 0.068-4.702 0.068s-3.475-0.012-4.702-0.068c-1.135-0.052-1.75-0.242-2.161-0.401-0.543-0.211-0.931-0.463-1.338-0.87s-0.659-0.794-0.871-1.337c-0.159-0.41-0.349-1.025-0.401-2.16-0.056-1.227-0.067-1.595-0.067-4.703s0.011-3.474 0.067-4.701c0.052-1.135 0.241-1.75 0.401-2.16 0.211-0.543 0.463-0.931 0.871-1.338s0.795-0.659 1.338-0.871c0.41-0.16 1.026-0.349 2.161-0.401 1.073-0.048 1.489-0.063 3.658-0.065v0.003zM16.001 10.024c-3.3 0-5.976 2.676-5.976 5.976s2.676 5.975 5.976 5.975c3.3 0 5.975-2.674 5.975-5.975s-2.675-5.976-5.975-5.976zM16.001 12.121c2.142 0 3.879 1.736 3.879 3.879s-1.737 3.879-3.879 3.879c-2.142 0-3.879-1.737-3.879-3.879s1.736-3.879 3.879-3.879zM22.212 8.393c-0.771 0-1.396 0.625-1.396 1.396s0.625 1.396 1.396 1.396 1.396-0.625 1.396-1.396c0-0.771-0.625-1.396-1.396-1.396v0.001z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-center" // Positions the toast at the bottom-center
        reverseOrder={false}
      />
    </motion.footer>
  );
};

export default Footer;
