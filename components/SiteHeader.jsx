import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Problems We Solve", "/problem"],
  ["Platform Solution", "/solution"],
  ["Pilot Program", "/pilot"],
  ["Technology", "/technology"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container row">
        <Link href="/" className="brand">Healthcare Revenue Intelligence</Link>
        <nav className="nav">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className="btn" href="/contact">Book Assessment</Link>
      </div>
    </header>
  );
}
