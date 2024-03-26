"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/font_utils/motion";

const Slidebtn = ({ className, children, ...props }) => {
  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`animated-button_2 h-[48px] w-[160px] relative flex justify-center items-center overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Slidebtn;
