import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: {
    default: 'DIGITECH | We Build Digital Experiences',
    template: '%s | DIGITECH',
  },
  description:
    'Digital solutions, web development, e-commerce and custom web applications built to help businesses grow. DIGITECH — We Build Digital Experiences....',
  keywords: [
    'web development', 'app development', 'digital agency', 'e-commerce',
    'CRM development', 'Next.js', 'React', 'Shopify', 'UI/UX design', 'DIGITECH',
  ],
  openGraph: {
    title: 'DIGITECH | We Build Digital Experiences',
    description:
      'Premium digital agency crafting modern websites, web apps and mobile experiences that help businesses grow, connect and convert.',
    url: 'https://digitech.in',
    siteName: 'DIGITECH',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIGITECH | We Build Digital Experiences',
    description: 'Premium digital agency — web, app & e-commerce development.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
