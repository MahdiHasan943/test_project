"use client";

import { textContainer, textVariant8, textVariant2 } from "@/font_utils/motion";
import { motion } from "framer-motion";
import { Work_Sans } from "next/font/google";
const lexend = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
export const TypingText = ({ title, textStyles }) => (
  <motion.h2
    variants={textContainer}
    className={` ${lexend.className}  ${textStyles}  `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant8} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h2>
);

export const TypingText1 = ({ title, textStyles }) => (
  <motion.h1
    variants={textContainer}
    className={` ${lexend.className}  ${textStyles}  `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant8} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={` ${textStyles}`}
  >
    {title}
  </motion.h2>
);
