import HeroSection from "components/HeroSection";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "FAQs",
  description:
    "Frequently asked questions about healthcare AI consulting engagements, assessment timeline, required data, HIPAA approach, and implementation model."
});

const faqs = [
  ["What organizations are the best fit?", "Healthcare organizations with recurring denial, underpayment, or workflow leakage issues and leadership readiness to implement."],
  ["What data do you need first?", "Usually claims, ERA, payer reporting, current dashboard exports, and process documentation."],
  ["Do you require PHI?", "Not initially. De-identified extracts can be used first; BAA is required before PHI handling."],
  ["How long does the assessment take?", "Most assessments are completed in 3–4 weeks."],
  ["What happens after the assessment?", "Clients typically move to fixed-fee implementation, then monthly advisory support."],
  ["Is this software, consulting, or both?", "Consulting-first today with engineered systems; productized access is future-facing."],
  ["Can you work with our billing team or IT stakeholders?", "Yes, cross-functional collaboration is expected in both assessment and implementation."],
  ["How do you approach HIPAA and security?", "BAA-first, minimum necessary data standards, encryption, RBAC, and audit logging."]
];

export default function FaqPage() {
  return (
    <>
      <HeroSection
        label="FAQ"
        title="Common questions before starting"
        subtitle="Straight answers for finance, RCM, operations, IT, and compliance stakeholders evaluating engagement fit."
        cta="Book a Conversation"
        ctaHref="/contact"
      />
      <section className="section">
        <div className="container grid-1">
          {faqs.map(([q, a]) => (
            <div key={q} className="card"><h3>{q}</h3><p>{a}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
