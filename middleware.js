import { authMiddleware } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";
import i18nConfig from "./i18nConfig";

export const intlMiddleware = createMiddleware(i18nConfig);

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: [
    "/",
    "/api/webhooks/clerk",
    "/de",

    "/en",

    "/fr",

    "/home",
    "/blog",
    "/contact",
    "/about",
    "/credentials",
    "/services",
    "/services/webdesign",
    "/services/socialmedia",
    "/services/online-marketing",
    "/services/seo-marketing",
    "/services/local-marketing",
    "/services/search-engine-advertising-sea",
    "/services/software-development",
    "/services/ai-services",
    "/services/app-development",
    "/services/e-commerce",
    "/services/web-analyse",
    "/services/affiliate-marketing",

    "/portfolio",
    "/team_members",
    "/testimonial",
    "/trends",

    "/en/home",
    "/en/blog",
    "/en/contact",
    "/en/about",
    "/en/credentials",
    "/en/services",
    "/en/services/webdesign",
    "/en/services/socialmedia",
    "/en/services/online-marketing",
    "/en/services/seo-marketing",
    "/en/services/local-marketing",
    "/en/services/search-engine-advertising-sea",
    "/en/services/software-development",
    "/en/services/ai-services",
    "/en/services/app-development",
    "/en/services/e-commerce",
    "/en/services/web-analyse",
    "/en/services/affiliate-marketing",
    "/en/trends",
    "/en/portfolio",
    "/en/team_members",
    "/en/testimonial",

    "/de/home",
    "/de/blog",
    "/de/contact",
    "/de/about",
    "/de/credentials",
    "/de/services",
    "/de/services/webdesign",
    "/de/services/socialmedia",
    "/de/services/online-marketing",
    "/de/services/seo-marketing",
    "/de/services/local-marketing",
    "/de/services/search-engine-advertising-sea",
    "/de/services/software-development",
    "/de/services/ai-services",
    "/de/services/app-development",
    "/de/services/e-commerce",
    "/de/services/web-analyse",
    "/de/services/affiliate-marketing",
    "/de/trends",
    "/de/portfolio",
    "/de/team_members",
    "/de/testimonial",

    "/fr/home",
    "/fr/blog",
    "/fr/contact",
    "/fr/about",
    "/fr/credentials",
    "/fr/services",
    "/fr/services/webdesign",
    "/fr/services/socialmedia",
    "/fr/services/online-marketing",
    "/fr/services/seo-marketing",
    "/fr/services/local-marketing",
    "/fr/services/search-engine-advertising-sea",
    "/fr/services/software-development",
    "/fr/services/ai-services",
    "/fr/services/app-development",
    "/fr/services/e-commerce",
    "/fr/services/web-analyse",
    "/fr/services/affiliate-marketing",
    "/fr/trends",
    "/fr/portfolio",
    "/fr/team_members",
    "/fr/testimonial",
  ],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/sign-in",
    "/en/sign-in",
    "/de/sign-in",
    "/fr/sign-in",
  ],
};
