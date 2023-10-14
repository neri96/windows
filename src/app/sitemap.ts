import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.windows-4u.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ourwork`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/materials`,

      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacts`,

      lastModified: new Date(),
    },
  ];
}
