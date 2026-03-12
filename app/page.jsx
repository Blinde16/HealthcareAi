import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";
import Link from "next/link";
import { brandConfig } from "lib/brand";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "Healthcare Revenue Intelligence + AI Process Optimization",
  description:
    "Consulting-first healthcare AI services to identify denied revenue, underpayments, workflow leakage, and practical implementation opportunities."
});

const faqItems = [
  {
    q: "What organizations are the best fit?",
    a: "Clinics, multi-location practices, specialty surgical groups, and small health systems with meaningful denial, underpayment, or workflow leakage exposure."
  },
  {
    q: "Is this software, consulting, or both?",
    a: "Today it is consulting-first with engineered implementation. Productized platform access is a later-stage option after operational baselines are established."
  },
  {
    q: "Do you require PHI to start?",
    a: "No. We can begin with de-identified and aggregate extracts. A BAA is executed before any PHI exchange."
  }
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandConfig.siteName,
    description: brandConfig.positioningShort,
    url: brandConfig.siteUrl
  };

  return (
    <>
      <HeroSection
        label={`${brandConfig.heroBranding} · ${brandConfig.heroLabel}`}
        title="Revenue is leaking through your systems. We help healthcare teams find it, fix it, and build smarter operations."
        subtitle={`${brandConfig.categoryLine}. Consulting-first AI delivery for finance, RCM, and operations leaders who need measurable impact, not generic AI decks.`}
        cta="Book a Revenue Opportunity Assessment"
        ctaHref="/contact"
        secondary="See What the Assessment Includes"
        secondaryHref="/revenue-opportunity-assessment"
      />

      <section className="section slim">
        <div className="container chips">
          {["HIPAA-aware architecture", "Consulting-first delivery", "Built for claims, ERA, and payer data", "Designed for finance, RCM, and operations leaders"].map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who we serve</h2>
          <div className="grid-3">
            {["Healthcare CFO / Finance Leader", "Revenue Cycle Director", "Clinic or Operations Leader", "Specialty Practice Administrator", "IT / Compliance Stakeholder"].map((role) => (
              <div key={role} className="card">
                <h3>{role}</h3>
                <p className="muted">Aligned to organizations where denied or underpaid claims create material financial drag.</p>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: "1rem" }}>
            Best fit: clinics, specialty surgical and interventional groups, multi-location practices, and small health systems.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>What we solve</h2>
          <div className="grid-2">
            <div className="card"><h3>Denials buried in spreadsheets</h3><p>Move from retrospective reporting to clustered root-cause intelligence.</p></div>
            <div className="card"><h3>Underpayments and underbilling</h3><p>Flag reimbursement mismatches and missed capture patterns worth focused review.</p></div>
            <div className="card"><h3>Payer visibility gaps</h3><p>Understand payer behavior by location, workflow, and service line.</p></div>
            <div className="card"><h3>Prior auth workflow leakage</h3><p>Identify avoidable handoff failures that drive denials and delayed cash.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Flagship Offer: Revenue Opportunity Assessment</h2>
          <p className="lead">A structured 3–4 week engagement designed to quantify opportunity before full implementation.</p>
          <div className="grid-4">
            <div className="card"><h3>Timeline</h3><p>3–4 weeks</p></div>
            <div className="card"><h3>Price Range</h3><p>$7,500–$15,000</p></div>
            <div className="card"><h3>Primary Buyer</h3><p>Finance / RCM / Operations leadership</p></div>
            <div className="card"><h3>Output</h3><p>Executive-ready implementation roadmap</p></div>
          </div>
          <div className="grid-3" style={{ marginTop: "1rem" }}>
            {[
              "Revenue leakage analysis",
              "Denial pattern analysis",
              "Underbilling opportunity review",
              "Dashboard prototype / analytics view",
              "AI use case prioritization",
              "Phased implementation roadmap",
              "Leadership review workshop"
            ].map((d) => (
              <div key={d} className="card"><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Services built for the engagement lifecycle</h2>
          <div className="grid-2">
            <div className="card"><h3>Denial & Underpayment Intelligence</h3><p>Surfaces avoidable claim loss and recovery opportunities.</p></div>
            <div className="card"><h3>Payer Contract Modeling & Charge Optimization</h3><p>Improves contract-aware reimbursement planning and charge strategy.</p></div>
            <div className="card"><h3>Prior Authorization & Workflow Automation</h3><p>Reduces preventable delays and denial triggers in front-end workflows.</p></div>
            <div className="card"><h3>Operational Analytics & Executive Dashboards</h3><p>Turns fragmented reporting into decision-grade operating views.</p></div>
            <div className="card"><h3>Fractional Systems & AI Officer Advisory</h3><p>Provides senior systems guidance for leaders scaling execution capacity.</p></div>
          </div>
          <Link className="btn secondary" href="/services" style={{ marginTop: "1rem" }}>View Full Services</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="timeline">
            {["Assess: review claims, ERA, payer, workflow, and reporting environment", "Model: normalize data and structure revenue intelligence logic", "Surface: prioritize denial, underpayment, and operational opportunities", "Implement: deploy dashboards, automations, and workflows", "Advise: monitor, refine, and expand through monthly support"].map((step) => (
              <div className="timeline-item" key={step}><p>{step}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Engagement ladder</h2>
          <div className="grid-4">
            <div className="card"><h3>1. Assessment</h3><p>3–4 weeks. Quantify leakage and prioritize action.</p></div>
            <div className="card"><h3>2. Implementation</h3><p>Fixed-fee build of workflows, dashboards, and operating playbooks.</p></div>
            <div className="card"><h3>3. Advisory Retainer</h3><p>Monthly strategic refinement and expansion support.</p></div>
            <div className="card"><h3>4. Future Productized Tools</h3><p>Designed to become more standardized over time as repeatable delivery patterns emerge.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Sample outputs (illustrative)</h2>
          <div className="grid-2">
            <div className="card"><h3>Sample finding</h3><p>Modifier-related underbilling pattern concentrated in two service lines.</p></div>
            <div className="card"><h3>Sample finding</h3><p>Payer-specific denial cluster repeated across three locations.</p></div>
            <div className="card"><h3>Sample finding</h3><p>Prior auth lapse sequence causing avoidable claim loss and rework.</p></div>
            <div className="card"><h3>Sample finding</h3><p>Work queue reprioritization model that improves collection velocity.</p></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Security and compliance, surfaced early</h2>
          <div className="grid-2">
            <div className="card"><p>BAA before PHI</p><p>Minimum necessary data approach</p></div>
            <div className="card"><p>Encryption in transit and at rest</p><p>RBAC and audit logging</p><p>HIPAA-aware vendor management</p></div>
          </div>
          <Link href="/security" className="btn secondary" style={{ marginTop: "1rem" }}>Review Security Approach</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Founder and advisory credibility</h2>
          <div className="grid-2">
            <div className="card">
              <h3>{brandConfig.founder.name}, {brandConfig.founder.title}</h3>
              <p>Systems architect and AI infrastructure strategist focused on measurable operating leverage for healthcare organizations.</p>
            </div>
            <div className="card">
              <h3>{brandConfig.advisor.name}, {brandConfig.advisor.title}</h3>
              <p>Healthcare domain advisor supporting payer, contract, and operational strategy validation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="grid-1">
            {faqItems.map((item) => (
              <div key={item.q} className="card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start with a structured, low-regret first step"
        text="Book a Revenue Opportunity Assessment to quantify opportunity, align stakeholders, and define an engineered implementation path."
        cta="Book a Revenue Opportunity Assessment"
        href="/contact"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
