import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";

export const metadata = {
  title: "AI Revenue Cycle Optimization Platform for Clinics & Health Systems | RCM Analytics Platform",
  description:
    "Our healthcare revenue cycle AI platform detects denial patterns, underbilling, and payer performance issues with actionable dashboards and prioritized work queues."
};

export default function SolutionPage() {
  return (
    <>
      <HeroSection
        title="Healthcare Revenue Intelligence, built for action."
        subtitle="A specialized RCM analytics platform that converts fragmented claims data into prioritized recovery opportunities."
        cta="Book a Platform Walkthrough"
      />
      <section className="section">
        <div className="container grid-2">
          <div className="card"><h3>AI Denial Pattern Detection</h3><p>Root-cause clustering by payer, code, provider, and location.</p></div>
          <div className="card"><h3>Underbilling Signal Detection</h3><p>Procedure/reimbursement variance and charge-capture anomaly signals.</p></div>
          <div className="card"><h3>Payer Performance Dashboards</h3><p>Denial rate, first-pass yield, response timeline, and appeal effectiveness.</p></div>
          <div className="card"><h3>Prioritized Work Queues</h3><p>Focus teams on the highest-value and highest-recoverability accounts first.</p></div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>How the platform works</h2>
          <p>Data Sources (EHR, Billing, Clearinghouse) → Secure Ingestion → AI Intelligence Layer → HIPAA-aligned Warehouse → Dashboards and Prioritized Actions.</p>
        </div>
      </section>
      <CTASection
        title="Turn revenue cycle complexity into clear, prioritized next steps."
        text="Deploy healthcare revenue cycle AI with operational dashboards your billing team can act on every week."
        cta="Book a Platform Walkthrough"
      />
    </>
  );
}
