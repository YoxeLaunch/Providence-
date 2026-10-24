import React from 'react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenInfo: () => void;
  onOpenContact: () => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onOpenInfo,
  onOpenContact,
  onScrollToTop,
}) => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md px-6 lg:px-14 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Statement */}
        <div className="text-center md:text-left">
          <button
            onClick={onScrollToTop}
            className="text-white tracking-[0.28em] font-display text-sm font-light uppercase select-none hover:opacity-80 transition-opacity cursor-pointer"
          >
            P R O V I D E N C E
          </button>
          <p className="text-xs text-slate-500 font-light mt-1">
            Un ecosistema para construir un futuro más amplio.
          </p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wider uppercase text-slate-400">
          <button onClick={onOpenAbout} className="hover:text-white transition-colors cursor-pointer">
            Quiénes Somos
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={onOpenInfo} className="hover:text-white transition-colors cursor-pointer">
            Información
          </button>
          <span className="text-slate-700">·</span>
          <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
            Contacto
          </button>
        </div>

        {/* Right: Clean Copyright & Metadata */}
        <div className="text-xs text-slate-500 text-center md:text-right font-light">
          <span>© {new Date().getFullYear()} Providence Ecosystem.</span>
          <span className="block mt-0.5 text-slate-600">Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
