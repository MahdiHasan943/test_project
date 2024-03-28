// "use client";
// import { hasCookie, setCookie } from "cookies-next";
// import { Work_Sans } from "next/font/google";
// import Link from "next/link";

// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import Button from "./reusablecomponent/Button";
// const work_san = Work_Sans({
//   weight: "300",
//   subsets: ["latin"],
//   display: "swap",
// });
// const Modal = () => {
//   const { t } = useTranslation();
//   const [showConsent, setShowConsent] = useState(true);
//   useEffect(() => {
//     setShowConsent(hasCookie("localConsent"));
//   }, []);
//   const acceptCookie = () => {
//     setShowConsent(true);
//     setCookie("localConsent", "true", { domain: ".link711.com" });
//   };
//   if (showConsent) {
//     return null;
//   }

//   return (
//     <>
//       <div
//         className={`${work_san.className} fixed inset-0   bg-slate-700  bg-opacity-70 z-[50000000000000000000]`}
//       >
//         <div className="fixed bottom-0  w-full  left-0 flex items-center justify-between px-4 py-8 bg-[#fff]  text-[#111] ">
//           <span>
//             <Link
//               className="text-[15px] tablet:text-[22px] text-[#111] hover:text-[#ffc107] "
//               href={"/privacy-policy"}
//             >
//               Privacy policy
//             </Link>
//           </span>
//           <Button
//             className={
//               "w-[200px] tablet:w-[250px] h-[80px] flex  mx-auto  group tablet:mx-0 tablet:mt-3"
//               // border-l-[4px] border-[#dcac3a] ease-linear delay-200 hover:border-0
//             }
//             onClick={() => acceptCookie()}
//           >
//             <Link
//               href={"contact"}
//               className="text-black mt-p py-4 group-hover:text-[#fff] text-[15px] tablet:text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2"
//             >
//               {t("acceptC")}
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;

"use client";
import { Work_Sans } from "next/font/google";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./reusablecomponent/Button";
const work_san = Work_Sans({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

import { setCookie, getCookie } from "cookies-next";
import { Tab } from "@headlessui/react";

const Modal = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(true);
  const [selectedTab, setSelectedTab] = useState("0"); // State to track the selected tab

  useEffect(() => {
    const consentCookie = getCookie("localConsent");
    if (consentCookie === "true") {
      setShowConsent(false); // Hide the modal if the cookie exists
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", {
      domain: ".test-project-henna-zeta.vercel.app",
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year expiration
    });
  };

  if (showConsent) {
    return (
      <>
        <div
          className={`${work_san.className} fixed inset-0   bg-slate-700  bg-opacity-70 z-[50000000000000000000]`}
        >
          <div className="fixed bottom-0  w-full h-full   left-0 flex items-center  ">
            <div className="w-full mx-auto px-4 py-8 max-w-[1000px] tablet:w-[1000px] bg-slate-100 rounded-md tablet:h-[550px]">
              <Tab.Group>
                <Tab.List className="flex border-b border-gray-200">
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "w-full py-3 text-center outline-none text-[22px] font-medium text-[#111] hover:text-gray-700 focus:outline-none focus:border-[#ffc107] focus:border-b-[5px] focus:border focus:border-t-0 focus:border-l-0 focus:border-r-0"
                        : "w-full py-3 text-center outline-none text-[22px] font-medium text-[#111] hover:text-gray-700 focus:outline-none focus:border-b-[5px] focus:border focus:border-t-0 focus:border-l-0 focus:border-r-0"
                    }
                  >
                    Zustimmung 
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "w-full py-3 text-center outline-none text-[22px] font-medium text-[#111] hover:text-gray-700 focus:outline-none focus:border-[#ffc107] focus:border-b-[5px] focus:border focus:border-t-0 focus:border-l-0 focus:border-r-0"
                        : "w-full py-3 text-center outline-none text-[22px] font-medium text-[#111] hover:text-gray-700 focus:outline-none focus:border-b-[5px] focus:border focus:border-t-0 focus:border-l-0 focus:border-r-0"
                    }
                  >
                    Details
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "w-full py-3 text-center outline-none text-[22px] font-medium text-[#111] hover:text-gray-700 focus:outline-none focus:border-[#ffc107] focus:border-b-[5px] focus:border focus:border-t-0 focus:border-l-0 focus:border-r-0"
                        : "w-full py-3 text-center outline-none text-[22px] font-medium text-[#111] hover:text-gray-700 focus:outline-none focus:border-b-[5px] focus:border focus:border-t-0 focus:border-l-0 focus:border-r-0"
                    }
                  >
                    Über Cookies
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="p-4">
                    <div className="min-h-[300px] w-full shadow-sm">
                      <p className="text-[20px]">
                        Cookies sind kleine Textdateien, die von Webseiten
                        verwendet werden, um die Benutzererfahrung effizienter
                        zu gestalten. Laut Gesetz können wir Cookies auf Ihrem
                        Gerät speichern, wenn diese für den Betrieb dieser Seite
                        unbedingt notwendig sind. Für alle anderen Cookie-Typen
                        benötigen wir Ihre Erlaubnis. Diese Seite verwendet
                        unterschiedliche Cookie-Typen. Einige Cookies werden von
                        Drittparteien platziert, die auf unseren Seiten
                        erscheinen. Sie können Ihre Einwilligung jederzeit von
                        der Cookie-Erklärung auf unserer Website ändern oder
                        widerrufen. Erfahren Sie in unserer
                        Datenschutzrichtlinie mehr darüber, wer wir sind, wie
                        Sie uns kontaktieren können und wie wir personenbezogene
                        Daten verarbeiten.
                      </p>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="p-4">
                    {" "}
                    <div className="min-h-[300px] w-full shadow-sm">
                      <p className="text-[20px]">
                        Notwendige Cookies helfen dabei, eine Webseite nutzbar
                        zu machen, indem sie Grundfunktionen wie
                        Seitennavigation und Zugriff auf sichere Bereiche der
                        Webseite ermöglichen. Die Webseite kann ohne diese
                        Cookies nicht richtig funktionieren.
                      </p>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="p-4">
                    {" "}
                    <div className="min-h-[300px] w-full shadow-sm">
                      <p className="text-[20px]">
                        Cookies sind kleine Textdateien, die von Webseiten
                        verwendet werden, um die Benutzererfahrung effizienter
                        zu gestalten. Laut Gesetz können wir Cookies auf Ihrem
                        Gerät speichern, wenn diese für den Betrieb dieser Seite
                        unbedingt notwendig sind. Für alle anderen Cookie-Typen
                        benötigen wir Ihre Erlaubnis. Diese Seite verwendet
                        unterschiedliche Cookie-Typen. Einige Cookies werden von
                        Drittparteien platziert, die auf unseren Seiten
                        erscheinen. Sie können Ihre Einwilligung jederzeit von
                        der Cookie-Erklärung auf unserer Website ändern oder
                        widerrufen. Erfahren Sie in unserer
                        Datenschutzrichtlinie mehr darüber, wer wir sind, wie
                        Sie uns kontaktieren können und wie wir personenbezogene
                        Daten verarbeiten.
                      </p>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
              <div className="flex justify-between items-center">
                <span>
                  <Link
                    className="text-[15px] tablet:text-[22px] text-[#111] hover:text-[#ffc107] "
                    href={"/privacy-policy"}
                  >
                    Privacy policy
                  </Link>
                </span>
                <Button
                  className={
                    "w-[200px] ml-auto tablet:w-[250px] h-[80px] flex  mx-auto  group tablet:mx-0 tablet:mt-3"
                  }
                  onClick={() => acceptCookie()}
                >
                  <span className="text-black mt-p py-4 group-hover:text-[#fff] text-[15px] tablet:text-[20px]  absolute top-1/2 left-1/1 transform  -translate-y-1/2">
                    {t("acceptC")}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};
export default Modal;
