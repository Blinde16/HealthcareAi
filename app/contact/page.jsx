import HeroSection from "components/HeroSection";
import ContactForm from "components/ContactForm";

export const metadata = {
  title: "Contact | Book a Healthcare Revenue Intelligence Consultation",
  description:
    "Book a consultation to evaluate denial analytics, underbilling opportunities, and AI revenue cycle optimization for your clinic or health system."
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Let's find your highest-value revenue opportunities."
        subtitle="Book a consultation to discuss denial trends, payer performance, and underbilling risk."
        cta="Book a Revenue Opportunity Assessment"
      />
      <section className="section">
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2>Get in Touch</h2>
            <p style={{ marginBottom: "1.5rem", color: "#64748b" }}>
              Fill out the short form with your organization type and top revenue challenge. A member
              of our team will follow up within 1 business day.
            </p>
            <ContactForm />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="card">
              <h3>What to Expect</h3>
              <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.8 }}>
                <li>A short discovery call to understand your RCM environment</li>
                <li>Review of your denial rates, payer mix, and billing workflow</li>
                <li>Initial assessment of your revenue recovery potential</li>
                <li>Proposal for a full Revenue Opportunity Assessment if a fit exists</li>
              </ul>
            </div>
            <div className="card">
              <h3>Prefer to Schedule Directly?</h3>
              <p>
                Book a 30-minute discovery call at a time that works for you. NDA available for
                data-sharing discussions.
              </p>
              <a
                href="/pilot"
                className="btn"
                style={{ display: "inline-block", marginTop: "1rem" }}
              >
                Learn About the Pilot Program
              </a>
            </div>
            <div className="card">
              <h3>Security & Compliance</h3>
              <p>
                We execute a BAA before any PHI is shared. See our{" "}
                <a href="/hipaa-security" style={{ color: "#14b8a6" }}>HIPAA Security page</a>{" "}
                for details on our compliance program.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
