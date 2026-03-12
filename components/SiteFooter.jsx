import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.5rem", alignItems: "flex-start" }}>
        <div>
          <strong>Healthcare Revenue Intelligence</strong>
          <p style={{ margin: ".4rem 0 0", maxWidth: 360 }}>
            AI-powered denial analytics, underbilling detection, and payer performance intelligence
            for clinics and health systems.
          </p>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: ".4rem", fontSize: ".88rem" }}>
          <strong style={{ fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em", color: "#94a3b8" }}>Platform</strong>
          <Link href="/problem">The Problem</Link>
          <Link href="/solution">Our Solution</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/pilot">Pilot Program</Link>
        </nav>
        <nav style={{ display: "flex", flexDirection: "column", gap: ".4rem", fontSize: ".88rem" }}>
          <strong style={{ fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em", color: "#94a3b8" }}>Company</strong>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/hipaa-security">HIPAA Security</Link>
        </nav>
        <nav style={{ display: "flex", flexDirection: "column", gap: ".4rem", fontSize: ".88rem" }}>
          <strong style={{ fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".05em", color: "#94a3b8" }}>Legal</strong>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </div>
      <div className="container" style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #e2e8f0", fontSize: ".82rem", color: "#94a3b8" }}>
        © {new Date().getFullYear()} Healthcare Revenue Intelligence. All rights reserved.
      </div>
    </footer>
  );
}
