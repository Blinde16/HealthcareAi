import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "6rem 1rem" }}>
      <div className="container">
        <p style={{ fontSize: "5rem", fontWeight: 800, color: "#dbeafe", lineHeight: 1 }}>404</p>
        <h1 style={{ marginTop: "1rem" }}>Page not found</h1>
        <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: 480, margin: "1rem auto 2rem" }}>
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
