import Link from "next/link";

export default function CTASection({ title, text, cta, href = "/contact" }) {
  return (
    <section className="section alt">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn" href={href}>{cta}</Link>
      </div>
    </section>
  );
}
