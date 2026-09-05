import Hero               from '@/components/home/Hero';
import DevelopmentServices from '@/components/home/DevelopmentServices';
import Technologies        from '@/components/home/Technologies';
import Clients             from '@/components/home/Clients';
import Industries          from '@/components/home/Industries';
import Testimonials        from '@/components/home/Testimonials';
import FAQ                 from '@/components/home/FAQ';
import MobilitySolutions   from '@/components/home/MobilitySolutions';
import SuccessNumbers      from '@/components/home/SuccessNumbers';
import CTA                 from '@/components/home/CTA';

export const metadata = {
  title: 'DIGITECH | We Build Digital Experiences',
  description:
    'DIGITECH is a premium digital agency building modern websites, web apps, mobile applications and e-commerce experiences that help businesses grow.',
};

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Development Services (tab system) */}
      <DevelopmentServices />

      {/* 03 — Technologies & Platforms marquee */}
      <Technologies />

      {/* 04 — Our Clients carousel */}
      <Clients />

      {/* 05 — Industries We Serve */}
      <Industries />

      {/* 06 — Testimonials slider */}
      <Testimonials />

      {/* 07 — FAQ accordion */}
      <FAQ />

      {/* 08 — Mobility Solutions */}
      <MobilitySolutions />

      {/* 09 — Success Numbers (animated counters) */}
      <SuccessNumbers />

      {/* 10 — CTA */}
      <CTA />
    </>
  );
}
