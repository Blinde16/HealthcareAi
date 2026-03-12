import HeroSection from "components/HeroSection";

export const metadata = {
  title: "Contact | Book a Healthcare Revenue Intelligence Consultation",
  description:
    "Book a consultation to evaluate denial analytics, underbilling opportunities, and AI revenue cycle optimization for your clinic or health system."
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Let’s find your highest-value revenue opportunities."
        subtitle="Book a consultation to discuss denial trends, payer performance, and underbilling risk."
        cta="Book a Revenue Opportunity Assessment"
      />
      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Quick Contact Form</h3>
            <p>First Name, Last Name, Work Email, Organization, Role, Challenge, Monthly Claim Volume, Message.</p>
            <p><strong>Response within 1 business day.</strong></p>
          </div>
          <div className="card">
            <h3>Calendar Booking</h3>
            <p>Embed your scheduling tool for a 30-minute discovery call.</p>
            <p>NDA available for data-sharing discussions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
