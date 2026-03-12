import HeroSection from "components/HeroSection";
import CTASection from "components/CTASection";

export const metadata = {
  title: "About Us | Healthcare Revenue Intelligence & AI RCM Analytics",
  description:
    "We help healthcare organizations recover lost revenue using AI-powered denial analytics, underbilling detection, and payer intelligence."
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Built by healthcare and AI practitioners focused on revenue impact."
        subtitle="We build practical AI revenue cycle optimization systems for finance and operations leaders."
        cta="Talk to Our Team"
      />
      <section className="section">
        <div className="container">
          <h2>Founder Background</h2>
          <p>
            Led by a healthcare systems architect, AI infrastructure strategist, and revenue cycle analytics expert focused on helping organizations recover lost revenue through operational intelligence.
          </p>
          <h2>Mission</h2>
          <p>
            Help healthcare organizations reduce denials, surface underbilling, and improve payer transparency through a purpose-built clinic revenue intelligence platform.
          </p>
        </div>
      </section>
      <CTASection
        title="Ready to turn RCM data into measurable outcomes?"
        text="Book a consultative conversation with our team."
        cta="Book a Consultation"
      />
    </>
  );
}
