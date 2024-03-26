import Image from "next/image";
import { Poppins } from "next/font/google";
import Hero from "@/components/Home_sections/Hero";
import AfterHero from "@/components/Home_sections/AfterHero";
import Webdesig from "@/components/Home_sections/Webdesig";
import Contact from "@/components/Home_sections/Contact";
import Satisfiedcostumers from "@/components/Home_sections/Satisfiedcostumers";
import WhyLINK711 from "@/components/Home_sections/WhyLINK711";
import Digitalsolutions from "@/components/Home_sections/Digitalsolutions";
import Customerssay from "@/components/Home_sections/Customerssay";
import Work from "@/components/Home_sections/Work";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

const pop = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
// const i18Nemespaces = ['home', 'common'];
export default async function Home({ params: { locale } }) {
  // const { t,resources} = await initTranslations(locale,i18Nemespaces );
  return (
    <section className="">
      <Hero />
      <AfterHero />
      <Webdesig />
      <Satisfiedcostumers />
      <Work />
      <Digitalsolutions />
      <WhyLINK711 />
      <Customerssay />
      <Contact />
    </section>
  );
}
