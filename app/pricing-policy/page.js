import LegalPage from '@/components/common/LegalPage';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing Policy | Promfly - Best Digital Marketing Services',
  description: 'Promfly pricing policy — transparent payment terms and customised pricing for all digital marketing and development services.',
};

export default function PricingPolicyPage() {
  return (
    <LegalPage title="Pricing Policy" lastUpdated="16/08/2026">
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        At Promfly, we follow a clear and transparent pricing policy to ensure a seamless experience for our clients. Below are the payment terms applicable for our services.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Advance Payment</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        We require a <strong>50% advance payment</strong> before initiating any project. This ensures commitment from both parties and allows us to allocate the appropriate team and resources to your project immediately.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Remaining Balance</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        The remaining <strong>50% payment</strong> will be as per the terms of the policy or agreement mutually agreed upon. This ensures flexibility based on the niche, complexity, and scope of the project.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Customised Pricing</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        As every project is unique, the total cost may vary depending on the industry, project requirements, and deliverables. We aim to offer competitive pricing tailored to meet your business goals effectively.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Refund and Cancellation</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        For details on refunds or cancellations, please refer to our{' '}
        <Link href="/refund-policy" className="text-purple-600 hover:underline font-medium">Refund Policy</Link>{' '}
        and{' '}
        <Link href="/cancellation-policy" className="text-purple-600 hover:underline font-medium">Cancellation Policy</Link>.
        All refunds or cancellations are subject to the terms outlined in the service agreement.
      </p>

      <div className="mt-10 p-5 bg-purple-50 border border-purple-100 rounded-xl">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Contact Us</h3>
        <p className="text-sm text-gray-600">For any questions or concerns regarding our pricing policy, please feel free to reach out:</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>Email: <a href="mailto:info@promfly.com" className="text-purple-600 hover:underline">info@promfly.com</a></li>
          <li>Phone: <a href="tel:+917303881503" className="text-purple-600 hover:underline">+91 7303881503</a></li>
          <li>Website: <a href="/contact" className="text-purple-600 hover:underline">www.promfly.com/contact</a></li>
        </ul>
      </div>
    </LegalPage>
  );
}
