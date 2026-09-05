import LegalPage from '@/components/common/LegalPage';

export const metadata = {
  title: 'Terms & Conditions | Promfly – Digital Marketing & IT Services',
  description: 'Terms of Service for Promfly IT services, development services, and industry-specific business solutions.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="16/08/2026">
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        Welcome to Promfly ("Promfly," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our IT services, development services, and industry-specific business solutions (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Definitions & Interpretation</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        "Promfly" or "we" or "our" refers to the owner, operator, and administrator of the Services.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Services</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        <strong>Account:</strong> Promfly offers a range of services, including but not limited to IT services, development services, and tailored business solutions for various industries. Detailed descriptions of our Services are available on our website or as outlined in individual service agreements.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Use of Services</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li><strong>Eligibility:</strong> You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this requirement.</li>
        <li><strong>Account Responsibilities:</strong> You may need to create an account to access certain Services. You are responsible for maintaining the confidentiality of your account information.</li>
        <li><strong>Prohibited Activities:</strong> You agree not to use our Services for any unlawful purpose or in a manner that could damage, disable, overburden, or impair our systems or networks.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Payment and Fees</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm leading-relaxed">
        <li><strong>Fees:</strong> Fees for our Services are outlined in our service agreements or on our website. All fees are payable in accordance with the terms specified.</li>
        <li><strong>Payment Terms:</strong> Payment will follow as per agreement and can vary for everyone based on niche, project, and amount of the project.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Governing Law</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        These Terms will be governed by and construed in accordance with the laws of New Delhi, India. Jurisdiction will always apply in New Delhi.
      </p>

      <div className="mt-10 p-5 bg-purple-50 border border-purple-100 rounded-xl">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Contact Us</h3>
        <p className="text-sm text-gray-600">If you have any questions about these Terms, please contact us at:</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>Email: <a href="mailto:info@promfly.com" className="text-purple-600 hover:underline">info@promfly.com</a></li>
          <li>Phone: <a href="tel:+917303881503" className="text-purple-600 hover:underline">+91 7303881503</a></li>
          <li>Website: <a href="/contact" className="text-purple-600 hover:underline">www.promfly.com/contact</a></li>
        </ul>
      </div>
    </LegalPage>
  );
}
