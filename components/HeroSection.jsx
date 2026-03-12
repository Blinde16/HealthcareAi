import Link from "next/link";

export default function HeroSection({
  label,
  title,
  subtitle,
  cta,
  ctaHref = "/contact",
  secondary,
  secondaryHref
}) {
  return (
    <section className="section hero">
      <div className="container reading-width">
        {label && <p className="eyebrow">{label}</p>}
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        <div className="action-row">
          {cta && (
            <Link href={ctaHref} className="btn">
              {cta}
            </Link>
          )}
          {secondary && (
            <Link href={secondaryHref || "/"} className="btn secondary">
              {secondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
