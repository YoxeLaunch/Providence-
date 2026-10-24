import React, { useState } from 'react';
import { BlackHoleBackground } from './components/BlackHoleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemCards, Division } from './components/EcosystemCards';
import { DivisionModal } from './components/DivisionModal';
import { AboutModal } from './components/AboutModal';
import { InfoModal } from './components/InfoModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const scrollToEcosystem = () => {
    const el = document.getElementById('ecosistema');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactWithSubject = (subject?: string) => {
    setContactSubject(subject || '');
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Animated High-Performance Black Hole Cosmic Canvas & Wallpaper */}
      <BlackHoleBackground speedMultiplier={1} interactiveParallax={true} />

      {/* 2. Top Navigation Bar */}
      <Navbar
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenInfo={() => setIsInfoOpen(true)}
        onOpenContact={() => handleOpenContactWithSubject()}
        onScrollToEcosystem={scrollToEcosystem}
      />

      {/* 3. Main Content Container */}
      <main className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Hero Section */}
        <Hero
          onLearnMore={() => setIsAboutOpen(true)}
          onScrollToEcosystem={scrollToEcosystem}
        />

        {/* 5 Divisions Section matching Providence mockup */}
        <EcosystemCards
          onSelectDivision={(division) => setSelectedDivision(division)}
        />
      </main>

      {/* 4. Footer */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenInfo={() => setIsInfoOpen(true)}
        onOpenContact={() => handleOpenContactWithSubject()}
        onScrollToTop={scrollToTop}
      />

      {/* 5. Modals & Deep Dives */}
      <DivisionModal
        division={selectedDivision}
        onClose={() => setSelectedDivision(null)}
        onOpenContact={(subj) => handleOpenContactWithSubject(subj)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => handleOpenContactWithSubject('Consulta General')}
      />

      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
