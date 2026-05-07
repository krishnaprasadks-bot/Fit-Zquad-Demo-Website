import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Gallery } from '@/components/Gallery';
import { Memberships } from '@/components/Memberships';
import { Testimonials } from '@/components/Testimonials';
import { Trainers } from '@/components/Trainers';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Memberships />
        <Testimonials />
        <Trainers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
