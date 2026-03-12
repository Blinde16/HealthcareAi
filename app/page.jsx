import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";

export const metadata = {
  title: "Healthcare Revenue Cycle AI for Denials & Underbilling | Healthcare Revenue Intelligence Platform",
  description:
    "AI-powered healthcare revenue intelligence for clinics and health systems. Detect denial patterns, uncover underbilling, and prioritize high-value A/R opportunities."
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={"Healthcare revenue is leaking through your systems. AI can find it."}
        subtitle={"AI-powered revenue intelligence for clinics, multi-location practices, and health systems."}
        cta="Book a Revenue Opportunity Assessment"
        secondary="View How the Platform Works"
        secondaryHref="/solution"
      />

      <section className="section">
        <div className="container">
          <p><strong>Built for healthcare revenue cycle leaders</strong></p>
          <div className="chips">
            {['Healthcare CFO','Revenue Cycle Director','Clinic Owner','Healthcare COO'].map((p) => <span key={p} className="chip">{p}</span>)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Find hidden revenue opportunities your team doesn’t have time to surface manually.</h2>
          <div className="grid-2">
            <div className="card"><h3>Detect Underbilling Opportunities</h3><p>Surface CPT, modifier, and reimbursement patterns where revenue may be left uncollected.</p></div>
            <div className="card"><h3>Identify Denial Patterns Faster</h3><p>Use denial analytics to spot root causes by payer, location, service line, and workflow.</p></div>
            <div className="card"><h3>Improve Payer Transparency</h3><p>See payer performance trends, denial behavior, turnaround times, and appeal outcomes.</p></div>
            <div className="card"><h3>Prioritize High-Value A/R Work</h3><p>Generate ranked work queues so billing teams focus first on highest-recovery opportunities.</p></div>
          </div>
        </div>
      </section>

      <CTASection
        title="See where revenue is leaking—and what to do first."
        text="Start with a structured assessment to quantify leakage and define a practical AI roadmap."
        cta="Book a Revenue Opportunity Assessment"
      />
    </>
  );
}
