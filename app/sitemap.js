import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
const query = groq`*[_type=="post"]|order(_createdAt desc)`;

export default async function sitemap() {
  try {
    const data = await client.fetch(query);

    const pages = [
      {
        url: "https://www.link711.com/",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.link711.com/home",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.link711.com/about",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/credentials",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/services",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/contact",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/trends",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/SocialMediaAgencyFrankfurt",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.link711.com/portfolio",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.link711.com/carrer",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/testimonial",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: "https://www.link711.com/team_members",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },

      {
        url: "https://www.link711.com/blog",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      // Add dynamic works pages to the sitemap
      ...data.map((blog) => ({
        url: `https://www.link711.com/blog/${blog?.slug?.current}`, // Assuming _id is the unique identifier for each work
        lastModified: blog?.updatedAt || blog?.createdAt, // Use updatedAt if available, otherwise use createdAt
        changeFrequency: "daily", // Adjust as needed
        priority: 0.5, // Adjust as needed
      })),
    ];

    return pages;
  } catch (error) {
    console.error("Failed to fetch works for sitemap:", error);
    return [];
  }
}
