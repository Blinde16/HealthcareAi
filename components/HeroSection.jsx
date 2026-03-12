import Link from "next/link";

export default function HeroSection({ title, subtitle, cta, ctaHref = "/contact", secondary, secondaryHref }) {
  return (
    <section className="section alt">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginTop: "1rem" }}>
          {cta && <Link href={ctaHref} className="btn">{cta}</Link>}
          {secondary && <Link href={secondaryHref || "/solution"} className="btn secondary">{secondary}</Link>}
        </div>
      </div>
    </section>
  );
}
