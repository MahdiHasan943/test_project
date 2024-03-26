import React from "react";
import PaginationControls from "@/components/PaginationControls";
import BlogCard from "@/components/cards/BlogCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Title from "@/components/reusablecomponent/Title";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import i18nConfig from "@/i18nConfig";
const query = groq`*[_type=="post"]|order(_createdAt desc)`;

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
const i18Nemespaces = ["home", "common"];

async function Page({ searchParams, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18Nemespaces);
  const data = await client.fetch(query);
  console.log(data);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";

  // Calculate the indices for slicing the data array
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = data?.slice(start, end);

  return (
    <>
      <TranslationsProvider
        locale={locale}
        resources={resources}
        namespaces={i18Nemespaces}
      >
        <div
          className="w-full relative h-[300px] min-h-[300px] bg-center  bg-cover bg-no-repeat"
          style={{ backgroundImage: "url(/images/credential.png)" }}
        >
          <div className="absolute w-full top-0 left-0 h-full bg-[#000] opacity-[0.5]"></div>
          <div className="absolute w-full h-full top-0 left-0 z-50 flex flex-col justify-center items-center">
            <Title
              className="text-[#fff] tablet:text-[40px] tablet:leading-[40px]py-4"
              text={t("blog")}
            />
            <p className="text-[14px] text-center my-4 text-[#fff]">
              <span className="text-[#ffc006]"> {t("home")}</span> &gt;{" "}
              {t("blog")}
            </p>
          </div>
        </div>

        <div className="py-20 max-w-[1400px] mx-auto tablet:px-24">
          <div className="grid px-4 tablet:px-0 grid-cols-1 tablet:grid-cols-3 justify-center  gap-4">
            {entries?.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          <div className="flex justify-center py-8">
            <PaginationControls
              hasNextPage={end < data?.length}
              hasPrevPage={start > 0}
            />
          </div>
        </div>
      </TranslationsProvider>
    </>
  );
}

export default Page;
