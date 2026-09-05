import LegalPage from '@/components/common/LegalPage';

export const metadata = {
  title: 'Cancellation Policy | Promfly - Best Digital Marketing Agency',
  description: 'Promfly cancellation policy — terms for project cancellation and related disputes.',
};

export default function CancellationPolicyPage() {
  return (
    <LegalPage title="Cancellation Policy" lastUpdated="16/08/2026">
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        At Promfly, we strive to deliver exceptional IT and digital marketing services. However, we understand that unforeseen circumstances may arise. Below are the terms of our cancellation policy.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Non-Refundable Advance</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        Once a project has started, <strong>cancellation is not permitted</strong>, and the advance payment will not be refunded. This policy exists because resources, team members, and infrastructure are allocated to your project from the moment work commences.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Management's Final Decision</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        In exceptional cases, any disputes or concerns regarding cancellations will be subject to the final decision of our management team. We are committed to fair resolution for all parties involved.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Jurisdiction</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        Any disputes, cases, or legal suits related to cancellations or services provided by Promfly will fall under the jurisdiction of <strong>New Delhi, Delhi</strong>.
      </p>

      <div className="mt-10 p-5 bg-purple-50 border border-purple-100 rounded-xl">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Contact Us</h3>
        <p className="text-sm text-gray-600">For any questions or concerns regarding our cancellation policy, please feel free to reach out:</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>Email: <a href="mailto:info@promfly.com" className="text-purple-600 hover:underline">info@promfly.com</a></li>
          <li>Phone: <a href="tel:+917303881503" className="text-purple-600 hover:underline">+91 7303881503</a></li>
          <li>Website: <a href="/contact" className="text-purple-600 hover:underline">www.promfly.com/contact</a></li>
        </ul>
      </div>
    </LegalPage>
  );
}
