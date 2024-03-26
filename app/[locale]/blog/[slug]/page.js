import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import BlogCard from "@/components/cards/BlogCard";
import Title from "@/components/reusablecomponent/Title";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Work_Sans, IBM_Plex_Sans } from "next/font/google";
const lato = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
// import PortableText from 'react-portable-text';
import PortableText from "@sanity/block-content-to-react"; // Ensure you're importing from the correct package
const serializers = {
  types: {
    image: ({ node }) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null;
      }

      // Use the urlForImage function to get the URL for the image
      const imageUrl = urlForImage(node.asset._ref);

      // Here we use Next.js's Image component for optimal loading, but you can use a regular <img> tag as well
      return (
        <Image
          src={imageUrl}
          className="py-4"
          alt={node.alt}
          width={800} // Adjust this value to change the width
          height={400} // Adjust this value to change the height
        />
      );
    },

    strong: ({ children }) => (
      <strong className="text-[18px]">{children}</strong>
    ),
    block: (props) => {
      // Customizing styling for different block types (headings, paragraphs)
      switch (props.node.style) {
        case "h1":
          return (
            <h1 className="text-[40px] leading-[45px]  mb-2">
              {props.children}
            </h1>
          );

        case "h2":
          return (
            <h2 className="text-[28px] leading-[35px]  mb-4">
              {props.children}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-[24px]  leading-[33px] mb-4">
              {props.children}
            </h3>
          );

        default:
          // Applying Tailwind classes for paragraph text
          return (
            <p className="text-[19px] text-[#111] pt-2 pb-4 max-w-[1000px]  leading-[30.2px]">
              {props.children}
            </p>
          );
      }
    },
    list: ({ type, children }) => {
      return type === "bullet" ? (
        <ul className="list-disc pl-5 mb-4">{children}</ul>
      ) : (
        <ol className="list-decimal pl-5 mb-4">{children}</ol>
      );
    },
    listItem: ({ children }) => (
      <li className="text-[18px] leading-[25px] mb-2">{children}</li>
    ),
  },

  marks: {
    // Handling links with Tailwind CSS
    link: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a
          href={href}
          className="text-blue-500 text-[18px] leading-[25px] hover:text-blue-700 transition duration-300"
        >
          {children}
        </a>
      );
    },
    em: ({ children }) => (
      <em className=" text-[18px] leading-[25px]">{children}</em>
    ), // Styling for emphasized text
  },
};

const page = async ({ params }) => {
  const query = groq`*[_type == "post" && slug.current == $slug] | order(_createdAt desc)`;
  const data = await client.fetch(query, { slug: params.slug });
  console.log(data, "from slug");
  const { title, mainImage, body, slug, description } = data;
  const postData = data[0];
  return (
    <div className={`${lato.className} `}>
      <div
        className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/credential.png)" }}
      >
        <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
        <div className="absolute  w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
          <Title
            text={data[0].title}
            className="text-[#fff] text-center max-w-[1200px] mx-auto tablet:text-[40px] tablet:leading-[45px]py-4"
          />
          <p className="text-[14px] text-center my-4 text-[#fff]">
            <span className="text-[#ffc006]"> Home</span> &gt; Blog Detials
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] overflow-hidden portable mx-auto px-4 tablet:px-8 py-8">
        {postData?.body && (
          <PortableText blocks={postData.body} serializers={serializers} />
        )}
      </div>
    </div>
  );
};

export default page;
