import Footer from "@/components/Footer/Footer";
import "../globals.css";
import Header from "@/components/Header/Header";
import { Poppins, Lexend, IBM_Plex_Mono } from "next/font/google";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";
import TopBtn from "@/components/reusablecomponent/GoToTop";
import LanguageChanger from "@/components/LanguageChanger";
import ChatComponent from "@/components/ChatComponent";
import { Toaster } from "react-hot-toast";
import Modal from "@/components/Modal";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const pop = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lexend = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "home page link711",
  description:
    "Auf der Suche nach einem Webdesigner in Frankfurt? Bei Link711 erstellen erfahrene Fachleute beeindruckende Websites, die in Suchmaschinen gut ranken. Kontaktieren Sie uns jetzt!",
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
const i18Nemespaces = ["home", "common"];

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18Nemespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      {/* suppressHydrationWarning={true} gsdsddsddddd*/}

      <head>
        <Script>
          {`
            
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMPDSBHJ');
            `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SN64MZBKRG"
        ></Script>

        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SN64MZBKRG');

            `}
        </Script>
        {/* <Script src="/lang-config.js" strategy="beforeInteractive" />
        <Script src="/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className={`${lexend.className} overflow-x-hidden`}>
        <Script>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NMPDSBHJ"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
        </Script>
        <TranslationsProvider
          locale={locale}
          resources={resources}
          namespaces={i18Nemespaces}
        >
          <ClerkProvider
            appearance={{
              variables: { colorPrimary: "#ffc107" },
            }}
          >
            <Header />
            <main className=" mx-auto scroll-smooth">{children}</main>
            {<LanguageChanger />}
            <ChatComponent />
            <TopBtn />
            <Toaster />
            <Footer />
            <Modal />
          </ClerkProvider>
        </TranslationsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
