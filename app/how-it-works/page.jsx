import HeroSection from "components/HeroSection";
import { buildPageMetadata } from "lib/seo";

export const metadata = buildPageMetadata({
  title: "How It Works",
  description:
    "A consulting-first healthcare AI delivery model that combines discovery, implementation playbooks, ongoing advisory, and repeatable systems."
});

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection
        label="Delivery Model"
        title="Consulting-first. Engineered for repeatability."
        subtitle="We combine strategic assessment with practical implementation so operating teams can execute faster, then scale through reusable playbooks."
        cta="Book a Revenue Opportunity Assessment"
        ctaHref="/contact"
      />
      <section className="section">
        <div className="container timeline">
          <div className="timeline-item"><h3>Discovery and Assessment</h3><p>Define baseline metrics, business constraints, and highest-value opportunities.</p></div>
          <div className="timeline-item"><h3>Implementation Playbooks</h3><p>Deploy dashboards, automations, and workflow changes with measurable owners.</p></div>
          <div className="timeline-item"><h3>Ongoing Advisory</h3><p>Refine outputs monthly, add additional use cases, and improve stakeholder adoption.</p></div>
          <div className="timeline-item"><h3>Responsible AI Operations</h3><p>Use controls, governance, and practical scope boundaries to avoid hype-driven delivery.</p></div>
          <div className="timeline-item"><h3>Build Once, Deploy Many</h3><p>Convert successful workflows into reusable components for faster future rollouts.</p></div>
        </div>
      </section>
    </>
  );
}
