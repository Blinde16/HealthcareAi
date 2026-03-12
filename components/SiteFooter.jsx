import Link from "next/link";
import { brandConfig } from "lib/brand";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{brandConfig.footerIdentity}</strong>
          <p className="muted" style={{ marginTop: ".6rem", maxWidth: 380 }}>
            {brandConfig.categoryLine}. Consulting-first delivery for healthcare finance,
            RCM, operations, and compliance stakeholders.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Site links">
          <strong>Navigate</strong>
          <Link href="/revenue-opportunity-assessment">Assessment</Link>
          <Link href="/services">Services</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/security">Security</Link>
        </nav>

        <nav className="footer-nav" aria-label="Company links">
          <strong>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {brandConfig.footerIdentity}. Temporary brand identity; final
        name and logo update pending.
      </div>
    </footer>
  );
}
