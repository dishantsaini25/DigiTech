import LegalPage from '@/components/common/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Promfly - Best Digital Marketing Agency',
  description: 'Promfly values your privacy and is committed to protecting your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="16/08/2026">
      <p className="text-gray-600 leading-relaxed mb-6">
        Promfly values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li><strong>Personal Information:</strong> Name, email, phone number, and any information you provide via forms or communication.</li>
        <li><strong>Non-Personal Information:</strong> Browser type, IP address, and website usage details.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">We use the collected information to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li>Provide and improve our services.</li>
        <li>Process inquiries or transactions.</li>
        <li>Send updates, promotions, or responses to your queries.</li>
        <li>Ensure website functionality and monitor usage.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Sharing Your Information</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">We only share your data:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li>With your consent.</li>
        <li>With trusted third-party service providers for website operation and service delivery.</li>
        <li>To comply with legal requirements.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Cookies</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        We use cookies to enhance your browsing experience. You can disable cookies through your browser settings, but some website features may not function properly.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Security</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        We implement standard measures to protect your information. However, online data transmission is not entirely secure, and we recommend taking precautions when sharing sensitive details.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Your Rights</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">You have the right to:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li>Access your personal information.</li>
        <li>Request updates or corrections.</li>
        <li>Request deletion of your data.</li>
        <li>Withdraw consent for data processing.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Third-Party Links</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our website may contain links to external sites. We are not responsible for their privacy practices or content.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Updates to This Policy</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        This Privacy Policy may be updated periodically. Please check this page for the latest version.
      </p>

      <div className="mt-10 p-5 bg-purple-50 border border-purple-100 rounded-xl">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Contact Us</h3>
        <p className="text-sm text-gray-600">If you have any questions about this Privacy Policy, you can contact us:</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>By email: <a href="mailto:info@promfly.com" className="text-purple-600 hover:underline">info@promfly.com</a></li>
          <li>By phone: <a href="tel:+917303881503" className="text-purple-600 hover:underline">+91 7303881503</a></li>
          <li>By website: <a href="/contact" className="text-purple-600 hover:underline">www.promfly.com/contact</a></li>
        </ul>
      </div>
    </LegalPage>
  );
}
