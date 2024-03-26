"use client";
import { fadeIn } from "@/font_utils/motion";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  const { title, mainImage, body, slug, description } = blog;
  return (
    <Link
      className="text-[#f58a07] font-bold py-4 text-[20px] hover:scale-[1.1] duration-200 delay-75 ease-linear hover:text-[#063255]"
      href={`/blog/${slug?.current}`}
      prefetch={false}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="min-h-[520px] w-full px-4 tablet:w-[380px] mx-auto overflow-hidden rounded-md  shadow-lg  max-h-[550px]"
      >
        <div className="w-full  tablet:w-[380px] mx-auto ">
          <Image
            className="shadow-sm min-h-[230px] max-h-[230px]"
            src={urlForImage(mainImage?.asset?._ref)}
            alt="blog-image"
            width={350}
            height={280}
          />
        </div>
        <div className="w-[380px] px-6 py-4 ">
          <h2
            className={` font-extrabold text-[20px] leading-[20px]  text-[#063255]`}
          >
            {title}
          </h2>
          <p className="text-[#777] text-[16px] py-4">{description}</p>
          <button className="text-[#f58a07] font-bold py-4 text-[20px] hover:text-[#063255]">
            CONTINUE READING "
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
