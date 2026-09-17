import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://breakforanime.top";

  // Static paths that always exist: home, 6 content category overviews, legal & about pages
  const staticPaths = [
    "/",
    "/guide",
    "/mechanics",
    "/progression",
    "/codes",
    "/characters",
    "/tips",
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  const isCategoryOverview = new Set([
    "/guide",
    "/mechanics",
    "/progression",
    "/codes",
    "/characters",
    "/tips",
  ]);

  const isLegalPage = new Set([
    "/privacy-policy",
    "/terms-of-service",
    "/copyright",
    "/about",
  ]);

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority:
        path === "/"
          ? 1
          : isCategoryOverview.has(path)
            ? 0.8
            : isLegalPage.has(path)
              ? 0.3
              : 0.6,
    })),
  );
}
