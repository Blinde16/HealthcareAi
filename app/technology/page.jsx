import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";

export const metadata = {
  title: "HIPAA-Compliant Healthcare AI Architecture for Revenue Cycle Intelligence",
  description:
    "Explore the secure architecture behind our healthcare revenue intelligence platform: HIPAA-aligned cloud, encrypted integrations, AI claim analytics, and audit-ready controls."
};

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        title="Healthcare-grade architecture for revenue intelligence."
        subtitle="Built for secure data handling, scalable analytics, and operational trust."
        cta="Schedule a Technical Review"
      />
      <section className="section">
        <div className="container grid-2">
          <div className="card"><h3>HIPAA-Aligned Cloud</h3><p>Secure cloud architecture with segmentation and strict boundaries.</p></div>
          <div className="card"><h3>Secure Integrations</h3><p>Controlled data pipelines from EHR, billing systems, and clearinghouses.</p></div>
          <div className="card"><h3>AI Models on Claims + ERA</h3><p>Detection for denial patterns, underbilling signals, and payer trends.</p></div>
          <div className="card"><h3>Revenue Data Warehouse</h3><p>Normalized model for consistent, cross-source analytics and reporting.</p></div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Security Principles</h2>
          <ul>
            <li>Encryption in transit and at rest</li>
            <li>Role-based access controls</li>
            <li>Audit logs for data access and critical actions</li>
            <li>Least-privilege access design</li>
            <li>Monitoring and incident response procedures</li>
          </ul>
        </div>
      </section>
      <CTASection
        title="Need a technical deep dive with your IT and revenue cycle leads?"
        text="We can walk through architecture, security controls, and integration approach with your stakeholders."
        cta="Schedule a Technical Review"
      />
    </>
  );
}
