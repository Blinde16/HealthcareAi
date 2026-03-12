import Link from "next/link";
import { brandConfig } from "lib/brand";

const links = [
  ["Home", "/"],
  ["Revenue Opportunity Assessment", "/revenue-opportunity-assessment"],
  ["Services", "/services"],
  ["How It Works", "/how-it-works"],
  ["Security", "/security"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container row">
        <Link href="/" className="brand-wrap" aria-label="Homepage">
          <span className="brand">{brandConfig.wordmark}</span>
          <span className="brand-sub">{brandConfig.categoryLine}</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="btn" href="/contact">
          Book Assessment
        </Link>
      </div>
    </header>
  );
}
