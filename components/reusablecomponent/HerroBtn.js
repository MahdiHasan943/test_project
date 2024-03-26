"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant3 } from "@/font_utils/motion";

const HerroBtn = ({ className, children, ...props }) => {
  return (
    <motion.div
      variants={textVariant3}
      initial="hidden"
      whileInView="show"
      className={`animated-button_1 h-[48px] w-[160px] relative flex justify-center items-center overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default HerroBtn;
