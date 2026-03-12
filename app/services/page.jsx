import HeroSection from "components/HeroSection";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Healthcare AI consulting and process optimization services spanning denial intelligence, underpayment analysis, payer modeling, workflow automation, and advisory."
});

const services = [
  {
    title: "Denial & Underpayment Intelligence",
    problem: "Hidden denial patterns and reimbursement gaps remain unresolved.",
    output: "Root-cause analysis, recovery opportunity map, and action queue design.",
    timing: "Begins in assessment, expands in implementation."
  },
  {
    title: "Payer Contract Modeling & Charge Optimization",
    problem: "Contract terms and charge behavior are not translated into operational decision support.",
    output: "Modeled payer performance scenarios and charge optimization playbooks.",
    timing: "Usually a follow-on implementation workstream."
  },
  {
    title: "Prior Authorization & Workflow Automation",
    problem: "Manual workflow handoffs create avoidable denials and delays.",
    output: "Process redesign and automation layers for high-friction steps.",
    timing: "Common in implementation after bottlenecks are quantified."
  },
  {
    title: "Operational Analytics & Executive Dashboards",
    problem: "Leadership lacks timely, actionable revenue intelligence.",
    output: "Decision-grade dashboards for finance, RCM, and operations.",
    timing: "Starts in assessment prototype, matures in implementation."
  },
  {
    title: "Fractional Systems & AI Officer Advisory",
    problem: "Teams need senior systems guidance without full-time headcount.",
    output: "Monthly governance, prioritization, and roadmap stewardship.",
    timing: "Typically starts after an initial project."
  },
  {
    title: "General AI Process Optimization",
    problem: "Adjacent workflows outside RCM lack repeatable operating systems.",
    output: "Healthcare-first AI process playbooks extendable to other functions.",
    timing: "Expansion capability after core revenue use cases are stable."
  }
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        label="Consulting-First Service Lines"
        title="Services mapped to financial and operational outcomes"
        subtitle="Each service is engineered to fit a clear stage of the engagement lifecycle: assess, implement, advise, and eventually productize."
        cta="Start with an Assessment"
        ctaHref="/revenue-opportunity-assessment"
      />
      <section className="section">
        <div className="container grid-2">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p><strong>Business problem:</strong> {service.problem}</p>
              <p><strong>Output:</strong> {service.output}</p>
              <p><strong>Recommended timing:</strong> {service.timing}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
