import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "",
    },
    sitemap: "https://www.windows-4u.com/sitemap.xml",
  };
}
