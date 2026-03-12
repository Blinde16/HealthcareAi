import { brandConfig } from "./brand";

export function buildPageMetadata({ title, description, path = "/" }) {
  const resolvedTitle = title || brandConfig.metadata.defaultTitle;

  return {
    title: resolvedTitle,
    description: description || brandConfig.metadata.description,
    openGraph: {
      title: resolvedTitle,
      description: description || brandConfig.metadata.ogDescription,
      siteName: brandConfig.metadata.ogSiteName,
      type: "website",
      url: `https://healthcare-ai-pi.vercel.app${path}`
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: description || brandConfig.metadata.ogDescription
    }
  };
}
