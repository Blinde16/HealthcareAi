import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";

export const metadata = {
  title: "Healthcare Revenue Opportunity Assessment (Pilot) | AI Revenue Cycle Optimization",
  description:
    "Launch a 3–4 week pilot to quantify denial reduction and underbilling opportunities. Includes leakage analysis, dashboards, and AI implementation roadmap."
};

export default function PilotPage() {
  return (
    <>
      <HeroSection
        title="Start with a focused pilot that proves financial opportunity."
        subtitle="Our consulting-first Healthcare Revenue Opportunity Assessment helps your team quantify leakage and prioritize AI use cases fast."
        cta="Book Pilot Discovery Call"
      />
      <section className="section">
        <div className="container grid-2">
          <div className="card"><h3>Investment</h3><p>$7,500 – $15,000</p></div>
          <div className="card"><h3>Timeline</h3><p>3–4 weeks</p></div>
          <div className="card"><h3>Deliverables</h3><p>Leakage analysis, denial report, underbilling opportunities, operational dashboard prototype.</p></div>
          <div className="card"><h3>Output</h3><p>AI implementation roadmap with phased priorities and leadership workshop.</p></div>
        </div>
      </section>
      <CTASection
        title="See your revenue opportunity before committing to full implementation."
        text="A practical pilot designed for clinics, multi-location practices, and small health systems."
        cta="Book Pilot Discovery Call"
      />
    </>
  );
}
