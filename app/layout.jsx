import "./globals.css";
import SiteHeader from "components/SiteHeader";
import SiteFooter from "components/SiteFooter";

export const metadata = {
  title: "Healthcare Revenue Intelligence Platform",
  description:
    "Healthcare revenue cycle AI platform for denial analytics, underbilling detection, and payer performance visibility."
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
