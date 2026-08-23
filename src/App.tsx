import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SocialProof } from './components/sections/SocialProof';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { DeviceShowcase } from './components/sections/DeviceShowcase';
import { Process } from './components/sections/Process';
import { WhyUs } from './components/sections/WhyUs';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedServiceType, setSelectedServiceType] = useState<string | undefined>();

  const handleOpenInquiry = (serviceDisplayName?: string, serviceType?: string) => {
    if (serviceDisplayName) {
      setSelectedService(serviceDisplayName);
      setSelectedServiceType(serviceType || '');
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-slate-100 selection:bg-[#00D2FF] selection:text-black font-sans antialiased overflow-x-hidden">
      
      {/* GLOBAL STICKY NAVIGATION */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main>
        {/* HERO SECTION */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* SOCIAL PROOF STRIP */}
        <SocialProof />

        {/* SERVICES SECTION (5 OFFICIAL CATEGORIES) */}
        <Services onSelectServiceForInquiry={handleOpenInquiry} />

        {/* FEATURED WORK PORTFOLIO GRID */}
        <Portfolio onOpenInquiry={handleOpenInquiry} />

        {/* INTERACTIVE DEVICE SHOWCASE */}
        <DeviceShowcase />

        {/* PROCESS SECTION */}
        <Process />

        {/* WHY US SECTION */}
        <WhyUs />

        {/* ABOUT FOUNDERS SECTION */}
        <About />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* FAQ ACCORDION SECTION */}
        <FAQ />

        {/* CONTACT & PROJECT ENQUIRY FORM WITH DEPENDENT DROPDOWNS */}
        <ContactSection 
          preselectedService={selectedService} 
          preselectedServiceType={selectedServiceType} 
        />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
