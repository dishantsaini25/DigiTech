import LegalPage from '@/components/common/LegalPage';

export const metadata = {
  title: 'Refund Policy | Promfly - Best Digital Marketing & IT Services',
  description: 'Promfly refund policy — terms and conditions under which refunds are provided for digital marketing and development services.',
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="16/08/2026">
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        This Refund Policy describes the terms and conditions under which refunds will be provided for services offered by Promfly. Please review the information below to understand how we handle refund requests.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        By using our services, you agree to the terms outlined in this refund policy.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Eligibility for Refund</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        To be eligible for a refund, the following conditions must be met:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li>The service provided was not as described or did not meet the agreed-upon specifications.</li>
        <li>You have not received a satisfactory response or resolution within 14 days of contacting customer support.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Refund Process</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        If you meet the eligibility criteria, you can request a refund by following these steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li>Contact our support team at <a href="mailto:info@promfly.com" className="text-purple-600 hover:underline">info@promfly.com</a>.</li>
        <li>Provide your order details and a description of why you're requesting a refund.</li>
        <li>Our team will review your request and process the refund if it meets the eligibility requirements.</li>
      </ol>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Non-Refundable Services</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        The following services are not eligible for a refund:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li>Custom services that have already been delivered as per the agreed-upon terms.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Processing Time</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        Refund requests will typically be processed within <strong>7 business days</strong> of receipt. The refund will be issued using the same payment method used for the original purchase.
      </p>

      <div className="mt-10 p-5 bg-purple-50 border border-purple-100 rounded-xl">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Contact Us</h3>
        <p className="text-sm text-gray-600">If you have any questions about our Refund Policy or need assistance, please contact us:</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>Email: <a href="mailto:info@promfly.com" className="text-purple-600 hover:underline">info@promfly.com</a></li>
          <li>Phone: <a href="tel:+917303881503" className="text-purple-600 hover:underline">+91 7303881503</a></li>
          <li>Website: <a href="/contact" className="text-purple-600 hover:underline">www.promfly.com/contact</a></li>
        </ul>
      </div>
    </LegalPage>
  );
}
