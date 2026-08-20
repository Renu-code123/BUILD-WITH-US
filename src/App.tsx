import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SocialProof } from './components/sections/SocialProof';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { DeviceShowcase } from './components/sections/DeviceShowcase';
import { Process } from './components/sections/Process';
import { WhyUs } from './components/sections/WhyUs';
import { Pricing } from './components/sections/Pricing';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>();

  const handleOpenInquiry = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForInquiry(serviceId);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-slate-100 selection:bg-[#FF3CAC] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* GLOBAL STICKY NAVIGATION */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main>
        {/* HERO SECTION */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* SOCIAL PROOF STRIP */}
        <SocialProof />

        {/* SERVICES SECTION */}
        <Services onSelectServiceForInquiry={handleOpenInquiry} />

        {/* FEATURED WORK PORTFOLIO GRID */}
        <Portfolio onOpenInquiry={handleOpenInquiry} />

        {/* INTERACTIVE DEVICE SHOWCASE */}
        <DeviceShowcase />

        {/* PROCESS SECTION */}
        <Process />

        {/* WHY US SECTION */}
        <WhyUs />

        {/* PRICING SECTION */}
        <Pricing onOpenInquiry={handleOpenInquiry} />

        {/* ABOUT FOUNDERS SECTION */}
        <About />

        {/* TESTIMONIALS PLACEHOLDER SECTION */}
        <Testimonials />

        {/* FAQ ACCORDION SECTION */}
        <FAQ />

        {/* CONTACT & PROJECT INQUIRY FORM */}
        <ContactSection preselectedServiceId={selectedServiceForInquiry} />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
