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

      <section className="section">
        <div className="container">
          <h2>From fragmented reporting to measurable RCM performance.</h2>
          <div className="grid-2">
            <div className="card"><h3>Denial Reduction Opportunities</h3><p>Identify categories where denial prevention can produce measurable margin impact.</p></div>
            <div className="card"><h3>Faster Root-Cause Visibility</h3><p>Surface recurring denial trends by payer, location, and workflow faster than manual reporting.</p></div>
            <div className="card"><h3>A/R Prioritization</h3><p>Rank worklists by recoverability and value so teams focus on the highest-impact accounts first.</p></div>
            <div className="card"><h3>Better Forecasting</h3><p>Use payer-level analytics to improve projections, staffing priorities, and cash planning.</p></div>
          </div>
          <p style={{ marginTop: "1rem", color: "#64748b" }}>
            Results vary by baseline operations, payer mix, data quality, and implementation scope.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>How it works</h2>
          <div className="grid-3">
            <div className="card"><h3>1) Connect Data Sources</h3><p>EHR, practice management, billing systems, and clearinghouse feeds.</p></div>
            <div className="card"><h3>2) Analyze with AI Revenue Cycle Models</h3><p>Detect denial, underbilling, and payer anomalies across claims and ERA data.</p></div>
            <div className="card"><h3>3) Operationalize Insights</h3><p>Deliver dashboards and prioritized action queues your revenue cycle team can execute weekly.</p></div>
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
