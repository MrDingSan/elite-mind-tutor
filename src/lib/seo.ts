export const SITE_NAME = "EliteMind Tutor";
export const DEFAULT_SITE_URL = "https://elite-mind-tutor.vercel.app";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL =
  configuredSiteUrl && /^https?:\/\//.test(configuredSiteUrl)
    ? configuredSiteUrl.replace(/\/+$/, "")
    : DEFAULT_SITE_URL;

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;
