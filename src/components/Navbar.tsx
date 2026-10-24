import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cosmicAudio } from '../utils/cosmicAudio';

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenInfo: () => void;
  onOpenContact: () => void;
  onScrollToEcosystem: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAbout,
  onOpenInfo,
  onOpenContact,
  onScrollToEcosystem,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    const active = cosmicAudio.toggle();
    setIsPlayingAudio(active);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-8 px-6 lg:px-14 py-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent backdrop-blur-xs transition-all duration-300">
      {/* Zone 1: Brand Wordmark (Single distinct element) */}
      <a
        href="#"
        className="group flex items-center gap-3 text-white tracking-[0.28em] font-display text-sm md:text-base font-light whitespace-nowrap shrink-0 uppercase select-none transition-opacity hover:opacity-90"
        aria-label="Providence Inicio"
      >
        {/* Crescent Eclipse Cosmic Icon */}
        <span className="relative flex items-center justify-center w-6 h-6">
          <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-cyan-400/60 transition-colors" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] group-hover:shadow-[0_0_12px_#38bdf8]" />
          <span className="w-4 h-4 rounded-full bg-slate-950 border border-slate-700/80 shadow-inner" />
        </span>
        <span className="tracking-[0.32em] font-normal text-slate-100">PROVIDENCE</span>
      </a>

      {/* Zone 2: Clean single-line text navigation links */}
      <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] font-medium text-slate-300/80 uppercase">
        <button
          onClick={onOpenAbout}
          className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 decoration-slate-400/40"
        >
          QUIÉNES SOMOS
        </button>
        <button
          onClick={onOpenInfo}
          className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 decoration-slate-400/40"
        >
          INFORMACIÓN
        </button>
        <button
          onClick={onScrollToEcosystem}
          className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 decoration-slate-400/40"
        >
          ECOSISTEMA
        </button>
      </nav>

      {/* Zone 3: 1 Primary Action + Ambient Audio Affordance */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={handleToggleAudio}
          className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
            isPlayingAudio
              ? 'border-cyan-400/70 text-cyan-300 bg-cyan-950/40 shadow-[0_0_14px_rgba(56,189,248,0.25)]'
              : 'border-white/10 text-slate-400 hover:text-white hover:border-white/30 bg-black/20'
          }`}
          title={isPlayingAudio ? 'Silenciar atmósfera cósmica' : 'Activar atmósfera sonora cósmica (432Hz)'}
          aria-label="Alternar sonido ambiental cósmico"
        >
          {isPlayingAudio ? (
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        <button
          onClick={onOpenContact}
          className="px-5 py-2 text-xs tracking-[0.2em] font-medium text-slate-200 uppercase rounded-full border border-white/30 hover:border-white hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.2)] bg-black/30 backdrop-blur-sm transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer"
        >
          CONTACTO
        </button>
      </div>
    </header>
  );
};
