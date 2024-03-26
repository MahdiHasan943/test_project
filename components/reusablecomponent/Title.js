"use client";
import React from "react";
import { Work_Sans } from "next/font/google";
const pop = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
import { motion } from "framer-motion";
import { textVariant2 } from "@/font_utils/motion";

const Title = ({ text, className }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`${pop.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px] tablet:leading-[40px] text-[#18191c] ${className}`}
    >
      {text}
    </motion.h2>
  );
};

export default Title;
