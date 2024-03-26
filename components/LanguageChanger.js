"use client";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../font_utils/motion";
export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Construct the new path with the selected locale and preserve the additional path
    let newPathname = currentPathname;
    const additionalPath = newPathname.replace(`/${currentLocale}`, "");
    if (newLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      // If the new locale is the default locale and prefixDefault is false, remove the locale prefix
      newPathname = additionalPath;
    } else {
      if (i18nConfig.prefixDefault || newLocale !== i18nConfig.defaultLocale) {
        // Add the new locale prefix to the path
        newPathname = `/${newLocale}${additionalPath}`;
      }
    }

    // Navigate to the new path
    router.push(newPathname);
  };

  const getFlagUrl = (locale) => {
    switch (locale) {
      case "de":
        return "/flag-for-flag-germany-svgrepo-com.svg";
      case "en":
        return "/flag-for-flag-united-kingdom.svg"; // Update path to your flag images
      case "fr":
        return "/flag-for-flag-france-svgrepo-com.svg";

      default:
        return "/flag-for-flag-united-kingdom.svg"; // Update path to your flag images
    }
  };

  console.log("Current Locale:", currentLocale);
  console.log("Current Pathname:", currentPathname);
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex  justify-center overflow-hidden fixed top-[83%]  tablet:top-[80%] px-3    transition  delay-500  z-[999999999!important] right-0 "
      >
        <motion.div variants={slideIn("up", "tween", 0.2, 1)} className="">
          <label htmlFor="languageSelect" className="sr-only">
            Choose Language
          </label>

          <select
            id="languageSelect"
            style={{
              backgroundImage: `url(${getFlagUrl(currentLocale)})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: " center",
              backgroundSize: "cover", // Adjust size as needed
              WebkitAppearance: "none", // Hides the default arrow in WebKit browsers
              MozAppearance: "none", // Hides the default arrow in Firefox
              appearance: "none", // Standard property for hiding the default arrow, not fully supported yet
            }}
            className="w-[40px] h-[30px] text-transparent "
            onChange={handleChange}
            value={currentLocale}
          >
            <option value="de" className="option text-start">
              German
            </option>
            <option value="en" className="option text-start">
              English
            </option>
            <option value="fr" className="option text-start">
              French
            </option>
          </select>
        </motion.div>
      </motion.div>
    </>
  );
}

// "use client";
// import { useRouter, usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
// import i18nConfig from "@/i18nConfig";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { slideIn, staggerContainer } from "../font_utils/motion";
// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = (e) => {
//     const newLocale = e.target.value;

//     // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

//     // Construct the new path without the locale prefix
//     let newPathname = currentPathname;
//     if (newPathname.startsWith(`/${currentLocale}`)) {
//       newPathname = newPathname.replace(`/${currentLocale}`, "");
//     }

//     // Add the new locale prefix to the path
//     if (i18nConfig.prefixDefault || newLocale !== i18nConfig.defaultLocale) {
//       newPathname = `/${newLocale}${newPathname}`;
//     }

//     // Navigate to the new path
//     router.push(newPathname);
//   };

//   const getFlagUrl = (locale) => {
//     switch (locale) {
//       case "de":
//         return "/flag-for-flag-germany-svgrepo-com.svg";
//       case "en":
//         return "/flag-for-flag-united-kingdom.svg"; // Update path to your flag images
//       case "fr":
//         return "/flag-for-flag-france-svgrepo-com.svg";

//       default:
//         return "/flag-for-flag-united-kingdom.svg"; // Update path to your flag images
//     }
//   };

//   console.log("Current Locale:", currentLocale);
//   console.log("Current Pathname:", currentPathname);
//   return (
//     <>
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         className="flex  justify-center overflow-hidden fixed top-[83%]  tablet:top-[80%] px-3    transition  delay-500  z-[999999999!important] right-0 "
//       >
//         <motion.div variants={slideIn("up", "tween", 0.2, 1)} className="">
//           <label htmlFor="languageSelect" className="sr-only">
//             Choose Language
//           </label>

//           <select
//             id="languageSelect"
//             style={{
//               backgroundImage: `url(${getFlagUrl(currentLocale)})`,
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: " center",
//               backgroundSize: "cover", // Adjust size as needed
//               WebkitAppearance: "none", // Hides the default arrow in WebKit browsers
//               MozAppearance: "none", // Hides the default arrow in Firefox
//               appearance: "none", // Standard property for hiding the default arrow, not fully supported yet
//             }}
//             className="w-[40px] h-[30px] text-transparent "
//             onChange={handleChange}
//             value={currentLocale}
//           >
//             <option value="de" className="option text-start">
//               German
//             </option>
//             <option value="en" className="option text-start">
//               English
//             </option>
//             <option value="fr" className="option text-start">
//               French
//             </option>
//           </select>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }
