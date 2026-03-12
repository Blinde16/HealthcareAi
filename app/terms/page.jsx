import { brandConfig } from "lib/brand";
export const metadata = {
  title: `Terms of Service | ${brandConfig.siteName}`,
  description:
    `Terms of service governing use of the ${brandConfig.siteName} website and consulting services.`
};

export default function TermsPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h1>Terms of Service</h1>
          <p style={{ color: "#64748b", marginBottom: "2rem" }}>
            Effective Date: March 12, 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the {brandConfig.siteName} website ("Site") or our revenue
            cycle analytics services ("Services"), you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, do not use the Site or Services.
          </p>

          <h2>2. Services Overview</h2>
          <p>
            {brandConfig.siteName} provides consulting-led revenue cycle analytics,
            including denial pattern detection, underbilling signal identification, and payer
            performance intelligence. Our services are intended for healthcare organizations,
            including clinics, multi-location practices, and health systems.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years of age and authorized to enter into agreements on behalf
            of your organization to use our Services. By using the Services, you represent and
            warrant that you meet these requirements.
          </p>

          <h2>4. Accounts & Engagements</h2>
          <p>
            Access to our analytics platform is provided under a separate engagement agreement,
            Statement of Work, or service contract. These Terms apply to your use of this Site and
            any web-based tools we make available. The terms of any signed engagement agreement
            will govern in the event of conflict with these Terms.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this Site, including text, graphics, logos, and software, is the property
            of {brandConfig.siteName} or its licensors and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, or create derivative works
            without our express written permission.
          </p>

          <h2>6. Permitted Use</h2>
          <p>You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates applicable laws or regulations.</li>
            <li>Attempt to gain unauthorized access to any part of our systems or data.</li>
            <li>Submit false, misleading, or fraudulent information through our forms or contact channels.</li>
            <li>Use automated tools to scrape, crawl, or extract data from the Site.</li>
          </ul>

          <h2>7. Healthcare Data & HIPAA</h2>
          <p>
            Our Site does not collect Protected Health Information (PHI). If you engage us for a
            revenue cycle assessment or implementation services involving PHI, such engagement is
            governed by a separate Business Associate Agreement (BAA). See our{" "}
            <a href="/hipaa-security" style={{ color: "#14b8a6" }}>HIPAA Security page</a> for more
            information about our compliance program.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            The Site and Services are provided on an "as is" and "as available" basis without
            warranties of any kind, express or implied. We do not warrant that the Site will be
            uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
          <p>
            Revenue opportunity estimates and analytics outputs are provided for informational and
            planning purposes. They do not constitute guarantees of specific financial outcomes.
            Actual results will vary based on payer contracts, coding practices, and billing workflows.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {brandConfig.siteName} shall not be
            liable for any indirect, incidental, special, consequential, or punitive damages arising
            from your use of the Site or Services, even if advised of the possibility of such damages.
            Our total liability for any claim related to the Site shall not exceed the amount paid by
            you for the specific Service giving rise to the claim in the three months preceding the claim.
          </p>

          <h2>10. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. These links are provided for
            convenience only. We do not endorse or assume responsibility for the content, privacy
            practices, or terms of third-party sites.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will post the updated Terms on this page
            with a revised effective date. Continued use of the Site after changes are posted
            constitutes your acceptance of the updated Terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States applicable to agreements
            entered into and performed within the United States. Any disputes arising under these
            Terms shall be resolved in accordance with applicable law.
          </p>

          <h2>13. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:legal@healthcarerevenueai.com" style={{ color: "#14b8a6" }}>
              legal@healthcarerevenueai.com
            </a>{" "}
            or visit our{" "}
            <a href="/contact" style={{ color: "#14b8a6" }}>Contact page</a>.
          </p>
        </div>
      </section>
    </>
  );
}
