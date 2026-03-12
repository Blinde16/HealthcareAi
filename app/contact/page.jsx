import HeroSection from "components/HeroSection";
import ContactForm from "components/ContactForm";
import { brandConfig } from "lib/brand";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Book a Revenue Opportunity Assessment, request a technical security review, or schedule a strategic advisory conversation."
});

export default function ContactPage() {
  return (
    <>
      <HeroSection
        label={brandConfig.contactLabel}
        title="Start the right conversation"
        subtitle="Use this intake for Revenue Opportunity Assessment requests, security and technical review, or strategic advisory planning."
        cta="Submit Intake"
        ctaHref="#contact-form"
      />
      <section className="section">
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <div id="contact-form">
            <h2>Who should fill this out</h2>
            <p className="muted">Finance, RCM, operations, IT, and compliance stakeholders evaluating a near-term engagement.</p>
            <ContactForm />
          </div>
          <div className="stack">
            <div className="card">
              <h3>What happens after submission</h3>
              <ul>
                <li>Response within 1 business day</li>
                <li>Brief qualification and context call</li>
                <li>Recommended path: Assessment, Security Review, or Advisory conversation</li>
              </ul>
            </div>
            <div className="card">
              <h3>Conversation paths</h3>
              <ul>
                <li>Revenue Opportunity Assessment</li>
                <li>Technical / Security Review</li>
                <li>Strategic / Advisory Conversation</li>
              </ul>
            </div>
            <div className="card">
              <h3>NDA and security reassurance</h3>
              <p>NDA available on request. BAA required before any PHI is exchanged.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
