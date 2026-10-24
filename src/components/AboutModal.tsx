import React from 'react';
import { X, Sparkles, Orbit, Compass, Shield } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#0b101c] to-[#04060b] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-left max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-cyan-400 font-mono uppercase block mb-1">
              Manifiesto Fundacional
            </span>
            <h2 id="about-title" className="text-xl sm:text-2xl font-display font-light text-white tracking-wide">
              Quiénes Somos
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Gravitational Singularity Metaphor */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-transparent border border-amber-500/20">
            <h3 className="text-sm font-semibold text-amber-200 flex items-center gap-2 mb-1.5">
              <Orbit className="w-4 h-4 text-amber-400" />
              La Metáfora del Agujero Negro
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Un agujero negro representa la máxima densidad de energía y curvatura del espacio-tiempo en el cosmos. En Providence, tomamos esta fuerza gravitatoria como arquetipo: concentramos ideas de frontera, capital paciente y talento excepcional para doblar la curva de lo posible.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.18em] uppercase text-white font-medium mb-2.5">
              Nuestra Filosofía
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-3">
              No construimos mejoras incrementales. Providence es una plataforma multisectorial diseñada para catalizar proyectos de horizonte generacional en cinco disciplinas interconectadas: inversión de riesgo tecnológico, ingeniería física de prototipos, observación planetaria, custodia del conocimiento y redes globales de talento.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Creemos que las mayores oportunidades de la próxima era no residen en el software superficial, sino en la convergencia de átomos, bits y fotones.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ideas de Frontera</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Identificación de hipótesis no consensuadas con potencial civilizatorio.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-medium mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>Capital Paciente</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Vehículos financieros con horizontes de 10 a 20 años sin presión de liquidez temprana.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-medium mb-1">
                <Orbit className="w-3.5 h-3.5" />
                <span>Tecnología Física</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Talleres de prototipado rápido para validar en el mundo real en semanas.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-medium mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Impacto Global</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Compromiso inquebrantable con el bienestar y progreso duradero de la humanidad.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 flex items-center justify-between shrink-0 bg-black/40">
          <span className="text-xs text-slate-400 font-mono">
            EST. 2026 · OPERACIONES GLOBALES
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs tracking-wider uppercase font-medium transition-colors cursor-pointer"
          >
            Contactar al Consejo
          </button>
        </div>
      </div>
    </div>
  );
};
