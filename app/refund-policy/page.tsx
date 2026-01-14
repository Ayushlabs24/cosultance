import LegalLayout from "@/components/legal-layout";

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="January 14, 2026">
      <section>
        <h3>1. Refund Eligibility</h3>
        <p>
          We strive to provide total satisfaction. However, if you are not satisfied with our services, 
          please review our refund terms below.
        </p>
        <p>
            Refunds are generally considered under the following circumstances:
        </p>
        <ul>
            <li>If the service has not yet been initiated by our team.</li>
            <li>If there was an error in payment processing (e.g., duplicate charge).</li>
        </ul>
      </section>

      <section>
        <h3>2. Non-Refundable Scenarios</h3>
        <p>
          Refunds will <strong>not</strong> be processed in the following cases:
        </p>
        <ul>
            <li>Once the government fee has been paid or the application has been submitted to the relevant authority.</li>
            <li>If the rejection of an application is due to incorrect information/documents provided by the client.</li>
            <li>If the client chooses to discontinue the service after significant work has been performed.</li>
        </ul>
      </section>

      <section>
        <h3>3. Processing Time</h3>
        <p>
          Approved refunds will be processed within 5-7 business days and credited back to the original method of payment.
        </p>
      </section>

      <section>
        <h3>4. Cancellation</h3>
        <p>
          You may cancel your request for service at any time by contacting our support team. 
          Cancellation fees may apply depending on the stage of your application.
        </p>
      </section>
    </LegalLayout>
  );
}
