import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Division } from './EcosystemCards';

interface DivisionModalProps {
  division: Division | null;
  onClose: () => void;
  onOpenContact: (subject: string) => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({
  division,
  onClose,
  onOpenContact,
}) => {
  if (!division) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#0e1424] to-[#070b14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="division-title"
      >
        {/* Top Header Artwork */}
        <div className="relative w-full h-44 sm:h-52 overflow-hidden border-b border-white/10">
          {division.artwork}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-black/40" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Cerrar modal de división"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge over artwork (Zero-Pill: clean text overline) */}
          <div className="absolute bottom-4 left-6">
            <span className="text-[11px] tracking-[0.25em] text-cyan-300 font-mono uppercase">
              {division.category}
            </span>
            <h2 id="division-title" className="text-2xl sm:text-3xl font-display font-light text-white tracking-wide mt-1">
              {division.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            {division.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            {division.overview}
          </p>

          {/* Key Metrics Strip (Tabular Figures) */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            {division.stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="block text-[10px] tracking-wider uppercase text-slate-500 font-mono">
                  {stat.label}
                </span>
                <span className="block text-sm sm:text-base font-display font-medium text-white tracking-wide mt-0.5 tabular-nums">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Pillars List */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-slate-300 font-medium mb-3">
              Capacidades Estratégicas
            </h4>
            <div className="space-y-2.5">
              {division.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Ecosistema Providence · División Activa
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact(`Interés en ${division.name}`);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600/30 hover:bg-cyan-500/40 border border-cyan-400/50 text-cyan-200 hover:text-white text-xs tracking-wider uppercase font-medium transition-all cursor-pointer"
            >
              <span>Conectar con {division.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
