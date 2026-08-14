Exit code: 0
Wall time: 2 seconds
Output:
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://greglabs.nl/sitemap.xml",
  };
}

