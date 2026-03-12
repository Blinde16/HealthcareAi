import { brandConfig } from "lib/brand";
export const metadata = {
  title: `Privacy Policy | ${brandConfig.siteName}`,
  description:
    `Learn how ${brandConfig.siteName} collects, uses, and protects your information.`
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h1>Privacy Policy</h1>
          <p style={{ color: "#64748b", marginBottom: "2rem" }}>
            Effective Date: March 12, 2026
          </p>

          <h2>1. Who We Are</h2>
          <p>
            {brandConfig.siteName} ("we," "our," or "us") operates this website and provides
            AI-powered revenue cycle analytics services to healthcare organizations. This Privacy Policy
            explains how we handle information collected through this website and our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information</strong> — name, work email, job title, and organization name
              submitted through our contact or assessment request forms.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, time spent, browser type, and referring URLs
              collected through standard web analytics.
            </li>
            <li>
              <strong>Communications</strong> — messages or inquiries you send us directly.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries and schedule consultations.</li>
            <li>To deliver our Revenue Opportunity Assessment and related services.</li>
            <li>To improve our website and marketing communications.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties.
          </p>

          <h2>4. Protected Health Information (PHI)</h2>
          <p>
            This website does not collect Protected Health Information (PHI). If you engage us for a
            revenue cycle assessment, any PHI shared as part of that engagement is governed by a
            separate Business Associate Agreement (BAA) and our HIPAA compliance program. See our{" "}
            <a href="/hipaa-security" style={{ color: "#14b8a6" }}>HIPAA Security page</a> for details.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We may share your information with trusted service providers (e.g., scheduling tools, CRM,
            analytics platforms) solely to operate our business. All such providers are contractually
            required to protect your data and use it only for the purposes we specify.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain contact and inquiry information for as long as necessary to fulfill the purposes
            described in this policy or as required by law. You may request deletion of your information
            at any time.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your information.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@healthcarerevenueai.com" style={{ color: "#14b8a6" }}>
              privacy@healthcarerevenueai.com
            </a>.
          </p>

          <h2>8. Cookies & Analytics</h2>
          <p>
            We use standard web analytics tools that may place cookies on your device to understand
            how visitors use our site. You can disable cookies in your browser settings; this will not
            affect your ability to view our website.
          </p>

          <h2>9. Security</h2>
          <p>
            We use industry-standard security measures including encryption in transit (TLS) to protect
            information submitted through this site. No internet transmission is completely secure, and
            we cannot guarantee absolute security.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. We will post the updated policy on this page with
            a revised effective date. Continued use of our website after changes constitutes acceptance
            of the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For privacy-related questions or requests, contact us at{" "}
            <a href="mailto:privacy@healthcarerevenueai.com" style={{ color: "#14b8a6" }}>
              privacy@healthcarerevenueai.com
            </a>{" "}
            or visit our{" "}
            <a href="/contact" style={{ color: "#14b8a6" }}>Contact page</a>.
          </p>
        </div>
      </section>
    </>
  );
}
