import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Strategy from '@/components/Strategy';
import Advantages from '@/components/Advantages';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strategy />
        <Advantages />
        <Stats />
        <Testimonials />
        <Locations />
        <Services />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
