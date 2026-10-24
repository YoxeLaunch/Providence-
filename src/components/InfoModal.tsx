import React from 'react';
import { X, Layers, Cpu, Globe, Rocket, HelpCircle } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
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
        aria-labelledby="info-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-cyan-400 font-mono uppercase block mb-1">
              Arquitectura del Sistema
            </span>
            <h2 id="info-title" className="text-xl sm:text-2xl font-display font-light text-white tracking-wide">
              Información & Estructura
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Cerrar ventana de información"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Key Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center p-4 rounded-xl bg-white/5 border border-white/5">
            <div>
              <span className="block text-[10px] text-slate-400 font-mono uppercase">Divisiones</span>
              <span className="text-lg font-display text-white tabular-nums">5 Autónomas</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-mono uppercase">Presencia</span>
              <span className="text-lg font-display text-white tabular-nums">12 Nodos</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-mono uppercase">I+D Abierto</span>
              <span className="text-lg font-display text-white tabular-nums">100% Cuántico</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-mono uppercase">Misión</span>
              <span className="text-lg font-display text-cyan-300 tabular-nums">Gargantua</span>
            </div>
          </div>

          {/* Operational Methodology */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Metodología de Integración
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-3">
              A diferencia de las aceleradoras tradicionales o los fondos desvinculados de la ejecución, Providence opera como una entidad simbiótica. Las cinco divisiones se retroalimentan continuamente:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-light list-disc list-inside">
              <li><strong className="text-slate-200">Magnus Capital</strong> provee el combustible financiero sin ataduras a corto plazo.</li>
              <li><strong className="text-slate-200">Providence Garage</strong> construye prototipos físicos y pruebas aerotérmicas.</li>
              <li><strong className="text-slate-200">ARGUS</strong> aporta la telemetría orbital y sensorial continua.</li>
              <li><strong className="text-slate-200">KIWIX</strong> resguarda los datos y garantiza soberanía de conocimiento.</li>
              <li><strong className="text-slate-200">ATLAS</strong> sincroniza las redes regulatorias e intercontinentales.</li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white font-medium mb-3 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              Preguntas Frecuentes
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                <p className="text-xs font-semibold text-slate-200 mb-1">
                  ¿Cómo seleccionan los proyectos que ingresan al ecosistema?
                </p>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Evaluamos proyectos bajo tres criterios: factibilidad física comprobada, viabilidad de prototipado en menos de 18 meses y potencial de cambiar fundamentalmente una ecuación de energía o acceso humano.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                <p className="text-xs font-semibold text-slate-200 mb-1">
                  ¿Aceptan proyectos independientes de investigación externa?
                </p>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Sí. A través de la división ATLAS y Magnus Capital disponemos de programas de aceleración directa con acceso a los laboratorios de Providence Garage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 flex items-center justify-end shrink-0 bg-black/40">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs tracking-wider uppercase font-medium transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
