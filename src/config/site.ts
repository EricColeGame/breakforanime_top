export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Break For Anime Wiki",
  shortName: "Break For Anime",
  logoText: "BFA",
  tagline: "Break Lucky Blocks, Anime RNG & Collection Guide",
  description: "Your ultimate guide to Break For Anime on Roblox! Explore active codes, lucky blocks, anime characters, RNG mechanics, tools, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://breakforanime.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://breakforanime.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/83337738588990/Break-For-Anime",
  heroVideoId: "9ctoiUZ_uvI", // Roblox Break For Anime gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
