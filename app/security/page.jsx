import HeroSection from "components/HeroSection";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "Security",
  description:
    "HIPAA-aware AI consulting security approach with BAA-first policy, minimum necessary data handling, encryption, RBAC, audit logging, and subcontractor controls."
});

export default function SecurityPage() {
  return (
    <>
      <HeroSection
        label="Security & Compliance"
        title="Healthcare-first safeguards for data, systems, and delivery"
        subtitle="Built for finance, IT, and compliance stakeholders who require practical controls before sensitive data is shared."
        cta="Request a Technical Review"
        ctaHref="/contact"
      />
      <section className="section">
        <div className="container grid-3">
          <div className="card"><h3>BAA before PHI</h3><p>Business Associate Agreements are executed before PHI exchange.</p></div>
          <div className="card"><h3>Minimum necessary standard</h3><p>Access is scoped to the least amount of information required for the engagement.</p></div>
          <div className="card"><h3>Encryption</h3><p>Data is protected in transit and at rest using modern encryption controls.</p></div>
          <div className="card"><h3>Role-based access control</h3><p>Role-specific access with principle-of-least-privilege enforcement.</p></div>
          <div className="card"><h3>Audit logging</h3><p>Access and operational events are logged and reviewable.</p></div>
          <div className="card"><h3>Subcontractor controls</h3><p>HIPAA-aware vendor management and contractual controls for subprocessors.</p></div>
        </div>
      </section>
      <section className="section alt">
        <div className="container reading-width">
          <h2>Security review readiness</h2>
          <p>
            A deeper security review package can be shared under NDA as appropriate, including
            architecture discussions, data-flow walkthroughs, and control documentation.
          </p>
        </div>
      </section>
    </>
  );
}
