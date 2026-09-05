import Hero                from '@/components/home/Hero';
import DevelopmentServices  from '@/components/home/DevelopmentServices';
import Technologies         from '@/components/home/Technologies';
import Clients              from '@/components/home/Clients';
import Industries           from '@/components/home/Industries';
import Testimonials         from '@/components/home/Testimonials';
import FAQ                  from '@/components/home/FAQ';
import MobilitySolutions    from '@/components/home/MobilitySolutions';
import SuccessNumbers       from '@/components/home/SuccessNumbers';
import CTA                  from '@/components/home/CTA';

export const metadata = {
  title: 'DIGITECH | We Build Digital Experiences',
  description:
    'DIGITECH is a premium digital agency building modern websites, web apps, mobile applications and e-commerce experiences that help businesses grow.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DevelopmentServices />
      <Technologies />
      <Clients />
      <Industries />
      <Testimonials />
      <FAQ />
      <MobilitySolutions />
      <SuccessNumbers />
      <CTA />
    </>
  );
}
