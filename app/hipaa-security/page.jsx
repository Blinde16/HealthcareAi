import CTASection from "components/CTASection";

export const metadata = {
  title: "HIPAA Security & Compliance | Healthcare Revenue Intelligence",
  description:
    "Our HIPAA-aligned security program, Business Associate Agreement availability, encryption standards, and data handling practices for healthcare revenue cycle data."
};

export default function HipaaSecurityPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>HIPAA Security & Compliance</h1>
          <p style={{ fontSize: "1.1rem", maxWidth: 680 }}>
            We treat healthcare data with the same rigor as the clinics and health systems we serve.
            Our security program is designed around HIPAA requirements and practical data minimization.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-2">
          <div className="card">
            <h3>Business Associate Agreement (BAA)</h3>
            <p>
              We execute a BAA with all clients before any Protected Health Information (PHI) is
              shared. The BAA defines permitted uses, data handling responsibilities, breach
              notification obligations, and termination requirements in accordance with 45 CFR § 164.
            </p>
          </div>
          <div className="card">
            <h3>Encryption in Transit & at Rest</h3>
            <p>
              All data transmitted between client systems and our platform is encrypted using TLS 1.2+.
              Data stored in our environment is encrypted at rest using AES-256. Encryption keys are
              managed with strict access controls and rotation policies.
            </p>
          </div>
          <div className="card">
            <h3>Minimum Necessary Standard</h3>
            <p>
              We apply the HIPAA Minimum Necessary standard to all data requests and integrations.
              Our ingestion pipelines are designed to collect only the claim, ERA, and billing data
              required for revenue intelligence — not full clinical records.
            </p>
          </div>
          <div className="card">
            <h3>Role-Based Access Controls</h3>
            <p>
              Access to client data is granted on a least-privilege basis. Internal team members
              access only the data required for their role. All access is logged and reviewed
              periodically via our access control audit program.
            </p>
          </div>
          <div className="card">
            <h3>Audit Logging</h3>
            <p>
              We maintain comprehensive audit logs for all data access, processing events, and
              configuration changes. Logs are retained according to HIPAA requirements and are
              available for review upon client request.
            </p>
          </div>
          <div className="card">
            <h3>Breach Notification</h3>
            <p>
              In the event of a security incident involving PHI, we follow the HIPAA Breach
              Notification Rule (45 CFR §§ 164.400–414), including timely notification to affected
              covered entities and, where required, to HHS and affected individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Security Principles</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Segmentation</h3>
              <p>
                Client data environments are logically separated. No cross-client data commingling
                occurs within our analytics infrastructure.
              </p>
            </div>
            <div className="card">
              <h3>Least Privilege</h3>
              <p>
                Every service, integration, and team member operates with the minimum access
                required. Privilege escalation requires documented justification and approval.
              </p>
            </div>
            <div className="card">
              <h3>Continuous Review</h3>
              <p>
                We conduct periodic security reviews of our infrastructure, integrations, and
                access controls. Findings are triaged and remediated on a risk-prioritized basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Subcontractors & Third Parties</h2>
          <p>
            Any subcontractors or cloud service providers who may handle PHI on our behalf are
            vetted for HIPAA compliance and are required to execute a BAA before being granted
            access to protected data. We maintain a subcontractor register available to clients
            upon request under NDA.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Infrastructure</h2>
          <p>
            Our platform is hosted on HIPAA-eligible cloud infrastructure with signed BAAs in place
            with our cloud provider. We leverage managed services with built-in redundancy,
            automated patching, and availability guarantees to support operational continuity.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Questions or Security Concerns</h2>
          <p>
            For security inquiries, to request our BAA, or to report a vulnerability, contact us at{" "}
            <a href="mailto:security@healthcarerevenueai.com" style={{ color: "#14b8a6" }}>
              security@healthcarerevenueai.com
            </a>.
          </p>
        </div>
      </section>

      <CTASection
        title="Want to review our security architecture with your IT and compliance team?"
        text="We offer a technical review session covering integration architecture, data flows, and security controls."
        cta="Schedule a Technical Review"
        href="/contact"
      />
    </>
  );
}
