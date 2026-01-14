import LegalLayout from "@/components/legal-layout";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="January 14, 2026">
      <section>
        <h3>1. Agreement to Terms</h3>
        <p>
          By accessing our website and using our services, you agree to be bound by these Terms of Service. 
          If you do not agree to any part of these terms, you may not use our services.
        </p>
      </section>

      <section>
        <h3>2. Services Description</h3>
        <p>
          Bharat Compliance provides business registration, tax filing, and compliance services. We act as a facilitator 
          to help you manage your business compliance needs. While we strive for accuracy, specific legal or financial 
          outcomes cannot be guaranteed as they often depend on government processing and third-party factors.
        </p>
      </section>

      <section>
        <h3>3. User Responsibilities</h3>
        <p>
          You are responsible for providing accurate and complete information required for filings and registrations. 
          Bharat Compliance is not liable for errors or rejections caused by incorrect information provided by you.
        </p>
      </section>

      <section>
        <h3>4. Payments and Fees</h3>
        <p>
          Fees for our services are clearly stated and must be paid in advance. Government fees are subject to 
          change by the respective authorities and will be charged as per actuals.
        </p>
      </section>

      <section>
        <h3>5. Limitation of Liability</h3>
        <p>
          In no event shall Bharat Compliance be liable for any indirect, incidental, special, consequential or 
          punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
      </section>

      <section>
        <h3>6. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any changes by updating 
          the date at the top of this page.
        </p>
      </section>
      
      <section>
        <h3>7. Contact Us</h3>
        <p>
           If you have any questions about these Terms, please contact us at info@bharatcomply.com.
        </p>
      </section>
    </LegalLayout>
  );
}
