import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";

export const metadata = {
  title: "Healthcare Revenue Cycle Problems: Denials, Underbilling & A/R Delays | Healthcare Revenue Intelligence",
  description:
    "Denials, payer opacity, and manual reporting drive healthcare revenue leakage. Learn why clinics lose 3–10% revenue and how to surface hidden RCM issues."
};

export default function ProblemPage() {
  return (
    <>
      <HeroSection
        title="Your revenue cycle has blind spots. They’re costing more than you think."
        subtitle="Most clinics and health systems operate with fragmented revenue data, delayed insight, and reactive denial management."
        cta="Assess My Revenue Opportunity"
      />
      <section className="section">
        <div className="container grid-2">
          <div className="card"><h3>Denials Drain Margin</h3><p>Denial rates between 5–15% are still common and recurring root causes stay unresolved.</p></div>
          <div className="card"><h3>Manual Reporting Slows Decisions</h3><p>Spreadsheet-heavy workflows delay visibility into preventable issues.</p></div>
          <div className="card"><h3>Payer Opacity</h3><p>Without payer-level denial analytics, teams can’t optimize performance or contracts.</p></div>
          <div className="card"><h3>Long A/R Cycles</h3><p>High-value recoverable accounts are often deprioritized.</p></div>
        </div>
      </section>
      <CTASection
        title="Revenue leakage is often hidden in plain sight."
        text="Avoidable denials, underbilling, and fragmented systems can represent 3–10% of total revenue."
        cta="Book a Revenue Opportunity Assessment"
      />
    </>
  );
}
