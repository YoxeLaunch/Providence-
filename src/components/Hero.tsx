import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ProvidenceLogoIcon } from './ProvidenceLogo';

interface HeroProps {
  onLearnMore: () => void;
  onScrollToEcosystem: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore, onScrollToEcosystem }) => {
  return (
    <section className="relative min-h-[64vh] lg:min-h-[70vh] flex flex-col justify-center px-6 lg:px-14 pt-28 pb-8 z-10 max-w-4xl">
      {/* 1. Categorical Overline with clean typographic separators */}
      <div className="flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] text-slate-400/90 font-light uppercase mb-6 select-none">
        <span>IDEAS</span>
        <span className="text-slate-600">·</span>
        <span>CAPITAL</span>
        <span className="text-slate-600">·</span>
        <span>TECNOLOGÍA</span>
        <span className="text-slate-600">·</span>
        <span>IMPACTO</span>
      </div>

      {/* 2. Headline: P R O V I D E N C E with unified, mathematically balanced Eclipse 'O' */}
      <h1 className="flex items-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light text-white tracking-[0.26em] sm:tracking-[0.32em] uppercase select-none mb-6">
        <span>P</span>
        <span className="ml-2 sm:ml-3 md:ml-4">R</span>
        {/* Unified Providence Planetary Eclipse 'O' */}
        <span className="inline-flex items-center justify-center w-[0.82em] h-[0.82em] mx-[0.12em] shrink-0 transform -translate-y-[0.02em]">
          <ProvidenceLogoIcon size="100%" className="w-full h-full" />
        </span>
        <span className="ml-1 sm:ml-2">V</span>
        <span className="ml-2 sm:ml-3 md:ml-4">I</span>
        <span className="ml-2 sm:ml-3 md:ml-4">D</span>
        <span className="ml-2 sm:ml-3 md:ml-4">E</span>
        <span className="ml-2 sm:ml-3 md:ml-4">N</span>
        <span className="ml-2 sm:ml-3 md:ml-4">C</span>
        <span className="ml-2 sm:ml-3 md:ml-4">E</span>
      </h1>

      {/* 3. Subtitle */}
      <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-light tracking-wide max-w-2xl mb-4 text-balance">
        Un ecosistema para construir un futuro más amplio.
      </p>

      {/* 4. Value Proposition Description */}
      <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl mb-10 text-pretty">
        Invertimos. Desarrollamos. Impulsamos. Unimos talento, tecnología y capital para convertir lo extraordinario en realidad.
      </p>

      {/* 5. CTAs matching concept design */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Primary Glow Button */}
        <button
          onClick={onLearnMore}
          className="group relative inline-flex items-center gap-3 px-7 py-3 text-xs sm:text-sm tracking-[0.2em] font-medium text-cyan-200 uppercase rounded-xl border border-cyan-500/40 hover:border-cyan-400 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-indigo-950/40 hover:from-cyan-900/50 hover:to-indigo-900/50 shadow-[0_0_24px_rgba(6,182,212,0.2)] hover:shadow-[0_0_32px_rgba(6,182,212,0.35)] backdrop-blur-md transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>CONOCE MÁS</span>
          <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary Glass Outline Button */}
        <button
          onClick={onScrollToEcosystem}
          className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm tracking-[0.2em] font-medium text-slate-300 uppercase rounded-xl border border-white/15 hover:border-white/35 bg-black/40 hover:bg-black/60 backdrop-blur-md transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>NUESTRO ECOSISTEMA</span>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
