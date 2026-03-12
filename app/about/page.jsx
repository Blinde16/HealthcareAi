import HeroSection from "components/HeroSection";
import { brandConfig } from "lib/brand";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Mission, founder perspective, advisory model, operating principles, and long-term vision for a healthcare-first AI consulting company built to scale."
});

const principles = [
  "Outcomes over output",
  "Build once, deploy many",
  "Earn the right to delegate",
  "Flexibility as architecture",
  "Revenue before fundraising"
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        label="About"
        title="Healthcare-first AI consulting, structured to scale"
        subtitle="Mission: deliver AI-powered operational intelligence to healthcare practices and beyond through repeatable systems and playbooks."
        cta="Book a Revenue Opportunity Assessment"
        ctaHref="/contact"
      />
      <section className="section">
        <div className="container reading-width">
          <h2>The inflection point</h2>
          <p>
            Every organization reaches a decision point: continue leaking value through fragmented
            operations, or build systems that capture it consistently.
          </p>

          <h2>Founder story</h2>
          <p>
            {brandConfig.founder.name} ({brandConfig.founder.title}) is building a consulting-first,
            healthcare-focused company grounded in systems thinking, automation, and measurable
            operating leverage.
          </p>

          <h2>Advisory model</h2>
          <p>
            {brandConfig.advisor.name} ({brandConfig.advisor.title}) supports healthcare domain
            validation across payer, contract, and operational realities to keep delivery practical.
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>What we believe</h2>
          <div className="grid-3">
            {principles.map((p) => (
              <div className="card" key={p}><h3>{p}</h3></div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: "1rem" }}>
            Long-term vision: healthcare is the beachhead and proving ground, not necessarily the ceiling.
          </p>
        </div>
      </section>
    </>
  );
}
