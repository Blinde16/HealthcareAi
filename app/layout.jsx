import "./globals.css";
import SiteHeader from "components/SiteHeader";
import SiteFooter from "components/SiteFooter";
import { brandConfig } from "lib/brand";

export const metadata = {
  metadataBase: new URL("https://healthcare-ai-pi.vercel.app"),
  title: {
    default: brandConfig.metadata.defaultTitle,
    template: brandConfig.metadata.titleTemplate
  },
  description: brandConfig.metadata.description,
  openGraph: {
    title: brandConfig.metadata.ogTitle,
    description: brandConfig.metadata.ogDescription,
    siteName: brandConfig.metadata.ogSiteName,
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
