import LegalLayout from "@/components/legal-layout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 14, 2026">
      <p>
        Your privacy is important to us. It is Bharat Compliance's policy to respect your privacy regarding 
        any information we may collect from you across our website.
      </p>

      <section>
        <h3>1. Information We Collect</h3>
        <p>
          We may ask for personal information, such as your:
        </p>
        <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Phone number</li>
            <li>Business details required for registration/filing</li>
            <li>Payment information</li>
        </ul>
      </section>

      <section>
        <h3>2. How We Use Your Information</h3>
        <p>
          We use the information we collect in various ways, including to:
        </p>
        <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Process your registrations and filings with government authorities</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you emails regarding your application status</li>
            <li>Find and prevent fraud</li>
        </ul>
      </section>

      <section>
        <h3>3. Information Sharing</h3>
        <p>
          We do not share your personal information with third parties except as necessary to provide our services 
          (e.g., sharing data with government portals for registration) or when required by law.
        </p>
      </section>

      <section>
        <h3>4. Data Security</h3>
        <p>
          We use commercially acceptable means to protect your personal information to prevent loss and theft, 
          as well as unauthorized access, disclosure, copying, use, or modification.
        </p>
      </section>

      <section>
        <h3>5. Cookies</h3>
        <p>
          Our website uses cookies to identify you and access your registration information once you log in. 
          You can disable cookies through your browser settings, but some features of the site may not function properly.
        </p>
      </section>
    </LegalLayout>
  );
}
