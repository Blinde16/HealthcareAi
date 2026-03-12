import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "Revenue Opportunity Assessment",
  description:
    "A 3–4 week healthcare revenue opportunity assessment covering denial patterns, underpayments, workflow leakage, and implementation planning."
});

export default function RevenueOpportunityAssessmentPage() {
  return (
    <>
      <HeroSection
        label="Flagship Entry Offer"
        title="Revenue Opportunity Assessment"
        subtitle="The first engagement for healthcare teams that want quantified value, practical implementation steps, and executive alignment before a larger commitment."
        cta="Book the Assessment"
        ctaHref="/contact"
      />

      <section className="section">
        <div className="container grid-3">
          <div className="card"><h3>Ideal buyer</h3><p>CFO, RCM director, operations leader, or owner-operator with measurable leakage exposure.</p></div>
          <div className="card"><h3>Best-fit organizations</h3><p>Clinics, specialty surgical practices, multi-location groups, and small health systems.</p></div>
          <div className="card"><h3>Timeline and price</h3><p>3–4 weeks · Typical range $7,500–$15,000.</p></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Timeline by week</h2>
          <div className="grid-4">
            <div className="card"><h3>Week 1</h3><p>Scoping, data inventory, stakeholder alignment.</p></div>
            <div className="card"><h3>Week 2</h3><p>Claims, ERA, payer, and workflow analysis.</p></div>
            <div className="card"><h3>Week 3</h3><p>Opportunity modeling, dashboard prototype, use case prioritization.</p></div>
            <div className="card"><h3>Week 4</h3><p>Leadership workshop and phased implementation roadmap.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Required client inputs</h3>
            <ul>
              <li>Recent claims and ERA extracts</li>
              <li>Payer mix and denial reason reporting</li>
              <li>Current workflows and escalation paths</li>
              <li>Existing dashboards / operational KPIs</li>
            </ul>
          </div>
          <div className="card">
            <h3>Deliverables and final outputs</h3>
            <ul>
              <li>Revenue leakage and denial pattern analysis</li>
              <li>Underbilling opportunity review</li>
              <li>Prototype analytics view</li>
              <li>AI use case prioritization matrix</li>
              <li>Implementation roadmap and leadership review summary</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="What happens after the assessment?"
        text="Most clients proceed to a fixed-fee implementation, then transition into an advisory retainer for ongoing optimization and expansion."
        cta="Discuss Next Steps"
        href="/contact"
      />
    </>
  );
}
