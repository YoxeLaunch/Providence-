import React from 'react';
import { ArrowRight, Hexagon } from 'lucide-react';
import {
  MagnusArtwork,
  GarageArtwork,
  ArgusArtwork,
  KiwixArtwork,
  AtlasArtwork,
} from './DivisionArtworks';

export interface Division {
  id: string;
  name: string;
  tagline: string;
  iconType: 'magnus' | 'garage' | 'argus' | 'kiwix' | 'atlas';
  artwork: React.ReactNode;
  category: string;
  stats: { label: string; value: string }[];
  overview: string;
  pillars: string[];
}

export const DIVISIONS: Division[] = [
  {
    id: 'magnus-capital',
    name: 'Magnus Capital',
    tagline: 'Capital para las ideas del mañana.',
    iconType: 'magnus',
    artwork: <MagnusArtwork />,
    category: 'Venture Capital & Deep Tech',
    stats: [
      { label: 'Capital Desplegado', value: '$450M+' },
      { label: 'Proyectos Activos', value: '28 Inversiones' },
      { label: 'Horizonte Temporal', value: '15-20 Años' },
    ],
    overview:
      'Vehículo de inversión paciente diseñado para respaldar a fundadores que abordan problemas de física dura, computación cuántica, energía de fusión y propulsión interplanetaria.',
    pillars: [
      'Fondos de aceleración de frontera tecnológica',
      'Coinversión con las principales agencias espaciales',
      'Sindicatos cerrados de capital estratégico',
    ],
  },
  {
    id: 'providence-garage',
    name: 'Providence Garage',
    tagline: 'De la visión al prototipo. De la idea al impacto.',
    iconType: 'garage',
    artwork: <GarageArtwork />,
    category: 'Laboratorio de Ingeniería & I+D',
    stats: [
      { label: 'Patentes Registradas', value: '64' },
      { label: 'Prototipos Físicos', value: '14 en vuelo' },
      { label: 'Tiempo a Prototipo', value: '-65% ciclo' },
    ],
    overview:
      'Centro de innovación mecatrónica e ingeniería rápida. Convertimos conceptos teóricos en componentes funcionales listos para pruebas espaciales y condiciones extremas.',
    pillars: [
      'Mecanizado criogénico y tolerancias de micras',
      'Sistemas de prueba en cámaras de vacío térmico',
      'Desarrollo iterativo ágil para hardware complejo',
    ],
  },
  {
    id: 'argus',
    name: 'ARGUS',
    tagline: 'Inteligencia para un mundo más claro.',
    iconType: 'argus',
    artwork: <ArgusArtwork />,
    category: 'Observación Orbital & Telemetría',
    stats: [
      { label: 'Satélites en Constelación', value: '36' },
      { label: 'Latencia de Refresco', value: '<85 min' },
      { label: 'Resolución Óptica', value: '25 cm/pixel' },
    ],
    overview:
      'Red de percepción satelital que combina radar de apertura sintética (SAR) con modelos de visión profunda para monitorizar la biosfera, la atmósfera y las infraestructuras críticas.',
    pillars: [
      'Detección anticipada de anomalías climáticas',
      'Mapeo de cadenas de suministro terrestres y marítimas',
      'Modelado 3D de terreno de alta precisión',
    ],
  },
  {
    id: 'kiwix',
    name: 'KIWIX',
    tagline: 'Conocimiento sin fronteras.',
    iconType: 'kiwix',
    artwork: <KiwixArtwork />,
    category: 'Preservación del Saber & Redes Abiertas',
    stats: [
      { label: 'Personas Alcanzadas', value: '350M+' },
      { label: 'Bibliotecas Desconectadas', value: '8.4 TB' },
      { label: 'Resguardo Lunar', value: 'Activo' },
    ],
    overview:
      'Iniciativa de preservación del acervo cultural y científico de la humanidad, permitiendo el acceso total al conocimiento en hábitats fuera de la red y misiones interplanetarias.',
    pillars: [
      'Compresión de datos hiperdimensional sin pérdida',
      'Redes en malla peer-to-peer de ultra-bajo consumo',
      'Almacenamiento permanente en cuarzo y ADN sintético',
    ],
  },
  {
    id: 'atlas',
    name: 'ATLAS',
    tagline: 'Conectando personas y oportunidades globales.',
    iconType: 'atlas',
    artwork: <AtlasArtwork />,
    category: 'Alianzas Globales & Talento',
    stats: [
      { label: 'Países Aliados', value: '42' },
      { label: 'Institutos Asociados', value: '85' },
      { label: 'Comunidad Científica', value: '12,000+' },
    ],
    overview:
      'La red humana que articula el ecosistema. Conectamos a los mejores investigadores, ingenieros y líderes del planeta con los recursos necesarios para proyectos de escala civilizatoria.',
    pillars: [
      'Becas de residencia en frontera científica',
      'Diplomacia tecnológica internacional',
      'Programas de intercambio de talento de alto impacto',
    ],
  },
];

interface EcosystemCardsProps {
  onSelectDivision: (division: Division) => void;
}

export const EcosystemCards: React.FC<EcosystemCardsProps> = ({ onSelectDivision }) => {
  return (
    <section id="ecosistema" className="relative z-10 px-6 lg:px-14 pt-8 pb-16 max-w-7xl mx-auto w-full">
      {/* Section Header matching mockup design */}
      <div className="text-center mb-8 select-none">
        <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] text-slate-400 uppercase font-light mb-2">
          <span className="w-8 h-[1px] bg-slate-600/60" />
          <span>NUESTROS SERVICIOS</span>
          <span className="w-8 h-[1px] bg-slate-600/60" />
        </div>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-display font-light text-white tracking-[0.22em] uppercase mb-1.5">
          UN ECOSISTEMA, MÚLTIPLES FRONTERAS
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 font-light tracking-wide max-w-xl mx-auto">
          Cinco divisiones. Una visión compartida: expandir lo posible.
        </p>
      </div>

      {/* 5 Cards Row matching the mockup layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {DIVISIONS.map((division) => (
          <div
            key={division.id}
            onClick={() => onSelectDivision(division)}
            className="providence-card group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer border border-white/10 hover:border-cyan-400/50 bg-[#060a14]/80 backdrop-blur-md transition-all duration-300"
            role="button"
            tabIndex={0}
            aria-label={`Ver detalles de ${division.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectDivision(division);
              }
            }}
          >
            {/* Top Artwork Thumbnail with photorealistic crops */}
            <div className="relative w-full h-28 overflow-hidden border-b border-white/10">
              {division.artwork}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-transparent opacity-90 pointer-events-none" />
            </div>

            {/* Bottom Card Body */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                {/* Division Icon matching mockup */}
                <div className="flex items-center gap-2 mb-2.5">
                  {division.iconType === 'magnus' && (
                    <span className="text-white font-mono font-bold text-base tracking-tighter">|V|</span>
                  )}
                  {division.iconType === 'garage' && (
                    <Hexagon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  )}
                  {division.iconType === 'argus' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  )}
                  {division.iconType === 'kiwix' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <circle cx="12" cy="12" r="2.2" />
                      <circle cx="12" cy="5" r="1.3" />
                      <circle cx="17" cy="7" r="1.3" />
                      <circle cx="19" cy="12" r="1.3" />
                      <circle cx="17" cy="17" r="1.3" />
                      <circle cx="12" cy="19" r="1.3" />
                      <circle cx="7" cy="17" r="1.3" />
                      <circle cx="5" cy="12" r="1.3" />
                      <circle cx="7" cy="7" r="1.3" />
                    </svg>
                  )}
                  {division.iconType === 'atlas' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 3 L3 20 L21 20 Z" />
                      <circle cx="12" cy="13" r="2.5" />
                      <line x1="12" y1="3" x2="12" y2="10.5" />
                    </svg>
                  )}
                </div>

                <h3 className="text-sm font-display font-medium text-white tracking-wide mb-1 group-hover:text-cyan-200 transition-colors">
                  {division.name}
                </h3>

                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {division.tagline}
                </p>
              </div>

              {/* Bottom Action Indicator Arrow */}
              <div className="flex items-center justify-end pt-3 mt-1">
                <span className="w-7 h-7 rounded-full border border-white/15 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
