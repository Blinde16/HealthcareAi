import Link from "next/link";

export default function CTASection({ title, text, cta, href = "/contact" }) {
  return (
    <section className="section cta-band">
      <div className="container reading-width">
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <Link className="btn" href={href}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
