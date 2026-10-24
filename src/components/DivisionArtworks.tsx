import React from 'react';

export const MagnusArtwork: React.FC = () => (
  <div className="relative w-full h-full overflow-hidden bg-[#070b14]">
    <svg viewBox="0 0 400 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="space-grad" cx="70%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#0d1b33" />
          <stop offset="60%" stopColor="#050811" />
          <stop offset="100%" stopColor="#020306" />
        </radialGradient>
        <linearGradient id="sun-flare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#93c5fd" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="planet-edge" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Deep starry space */}
      <rect width="400" height="240" fill="url(#space-grad)" />

      {/* Distant moon */}
      <circle cx="270" cy="55" r="14" fill="#64748b" opacity="0.65" />
      <circle cx="272" cy="53" r="13" fill="#020617" opacity="0.8" />

      {/* Distant stars */}
      <circle cx="50" cy="40" r="1" fill="#fff" opacity="0.8" />
      <circle cx="120" cy="70" r="1.2" fill="#93c5fd" opacity="0.9" />
      <circle cx="200" cy="30" r="0.8" fill="#fff" opacity="0.6" />
      <circle cx="340" cy="80" r="1.5" fill="#fde047" opacity="0.7" />

      {/* Planetary Horizon Curve */}
      <path
        d="M -50 280 Q 200 130 450 280 L 450 300 L -50 300 Z"
        fill="url(#planet-edge)"
      />

      {/* Atmospheric Rim Glow */}
      <path
        d="M -50 280 Q 200 130 450 280"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="2.5"
        filter="drop-shadow(0 0 10px #38bdf8)"
      />

      {/* Solar Flare Break Point */}
      <ellipse cx="140" cy="180" rx="40" ry="15" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 0 14px #60a5fa)" />
      {/* Light ray beacon beam */}
      <polygon points="140,180 132,0 148,0" fill="url(#sun-flare)" opacity="0.75" />
    </svg>
  </div>
);

export const GarageArtwork: React.FC = () => (
  <div className="relative w-full h-full overflow-hidden bg-[#0d0906]">
    <svg viewBox="0 0 400 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hangar-wall" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1f140e" />
          <stop offset="50%" stopColor="#2c1a0e" />
          <stop offset="100%" stopColor="#0d0805" />
        </linearGradient>
        <linearGradient id="warm-lights" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill="url(#hangar-wall)" />

      {/* Industrial Perspective Ceiling Gantries */}
      <line x1="0" y1="20" x2="200" y2="110" stroke="#b45309" strokeWidth="1.5" opacity="0.6" />
      <line x1="400" y1="20" x2="200" y2="110" stroke="#b45309" strokeWidth="1.5" opacity="0.6" />
      <line x1="0" y1="60" x2="200" y2="120" stroke="#78350f" strokeWidth="1" opacity="0.5" />
      <line x1="400" y1="60" x2="200" y2="120" stroke="#78350f" strokeWidth="1" opacity="0.5" />

      {/* Floor Runway Perspective */}
      <polygon points="200,120 400,240 0,240" fill="#180e07" />
      <line x1="200" y1="120" x2="200" y2="240" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
      <line x1="200" y1="120" x2="120" y2="240" stroke="#92400e" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="120" x2="280" y2="240" stroke="#92400e" strokeWidth="1" opacity="0.4" />

      {/* Warm Industrial Bay Lights */}
      <circle cx="80" cy="50" r="3" fill="#fde68a" filter="drop-shadow(0 0 8px #f59e0b)" />
      <circle cx="140" cy="75" r="2.5" fill="#fde68a" filter="drop-shadow(0 0 6px #f59e0b)" />
      <circle cx="320" cy="50" r="3" fill="#fde68a" filter="drop-shadow(0 0 8px #f59e0b)" />
      <circle cx="260" cy="75" r="2.5" fill="#fde68a" filter="drop-shadow(0 0 6px #f59e0b)" />

      {/* Prototype Silhouettes */}
      <rect x="50" y="140" width="70" height="40" rx="3" fill="#2d1a0e" stroke="#78350f" strokeWidth="1" />
      <rect x="280" y="135" width="80" height="45" rx="3" fill="#2d1a0e" stroke="#78350f" strokeWidth="1" />
      {/* Central Prototype Core Light */}
      <circle cx="200" cy="115" r="6" fill="#fbbf24" filter="drop-shadow(0 0 12px #d97706)" />
    </svg>
  </div>
);

export const ArgusArtwork: React.FC = () => (
  <div className="relative w-full h-full overflow-hidden bg-[#040810]">
    <svg viewBox="0 0 400 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="earth-glow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#0284c7" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#030712" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#020306" />
        </radialGradient>
      </defs>

      <rect width="400" height="240" fill="#020409" />

      {/* Earth Curvature */}
      <ellipse cx="200" cy="270" rx="280" ry="120" fill="url(#earth-glow)" />
      <path
        d="M -40 230 Q 200 145 440 230"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="2"
        filter="drop-shadow(0 0 12px #0ea5e9)"
      />

      {/* Orbital Satellite Station */}
      <g transform="translate(200, 100)">
        {/* Ring Station */}
        <ellipse cx="0" cy="0" rx="32" ry="12" fill="none" stroke="#e0f2fe" strokeWidth="2.5" />
        <ellipse cx="0" cy="0" rx="20" ry="8" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
        {/* Central Core */}
        <circle cx="0" cy="0" r="5" fill="#f8fafc" filter="drop-shadow(0 0 8px #38bdf8)" />
        {/* Solar Arrays */}
        <line x1="-55" y1="0" x2="-32" y2="0" stroke="#93c5fd" strokeWidth="3" />
        <line x1="32" y1="0" x2="55" y2="0" stroke="#93c5fd" strokeWidth="3" />
        {/* Telemetry Sensor Beam */}
        <line x1="0" y1="5" x2="0" y2="50" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
      </g>
    </svg>
  </div>
);

export const KiwixArtwork: React.FC = () => (
  <div className="relative w-full h-full overflow-hidden bg-[#070b14]">
    <svg viewBox="0 0 400 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="alien-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0b1329" />
          <stop offset="60%" stopColor="#111c38" />
          <stop offset="100%" stopColor="#060913" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill="url(#alien-sky)" />

      {/* Distant Alien Crescent Moon */}
      <circle cx="280" cy="55" r="16" fill="#cbd5e1" opacity="0.8" />
      <circle cx="286" cy="52" r="15" fill="#0b1329" />

      {/* Jagged Crystalline Spires */}
      <polygon points="50,240 75,70 100,240" fill="#1e293b" stroke="#334155" strokeWidth="1" />
      <polygon points="85,240 120,40 145,240" fill="#0f172a" stroke="#475569" strokeWidth="1" />
      <polygon points="135,240 160,110 185,240" fill="#1e293b" />
      <polygon points="210,240 240,120 270,240" fill="#0f172a" />
      <polygon points="300,240 335,80 370,240" fill="#1e293b" />

      {/* Aurora / Knowledge Constellation overlay */}
      <path
        d="M 20 100 Q 120 40 220 90 T 380 60"
        fill="none"
        stroke="#818cf8"
        strokeWidth="1.5"
        opacity="0.5"
        strokeDasharray="4 4"
      />
      <circle cx="120" cy="55" r="2" fill="#c7d2fe" filter="drop-shadow(0 0 6px #6366f1)" />
      <circle cx="220" cy="90" r="2" fill="#c7d2fe" filter="drop-shadow(0 0 6px #6366f1)" />
      <circle cx="320" cy="70" r="2.5" fill="#c7d2fe" filter="drop-shadow(0 0 6px #6366f1)" />
    </svg>
  </div>
);

export const AtlasArtwork: React.FC = () => (
  <div className="relative w-full h-full overflow-hidden bg-[#030611]">
    <svg viewBox="0 0 400 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="globe-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#0c1833" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#030611" />
        </radialGradient>
      </defs>

      <rect width="400" height="240" fill="#030611" />

      {/* Earth Sphere in Orbit */}
      <circle cx="200" cy="140" r="95" fill="url(#globe-bg)" stroke="#1d4ed8" strokeWidth="1" />

      {/* Global Node Arcs and Network Lines */}
      <path
        d="M 130 130 Q 200 90 270 140"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <path
        d="M 150 160 Q 210 120 260 170"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.2"
        opacity="0.8"
      />
      <path
        d="M 170 100 Q 220 150 240 190"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1"
        opacity="0.7"
      />

      {/* Golden & Blue Connection Nodes */}
      <circle cx="130" cy="130" r="3" fill="#fde047" filter="drop-shadow(0 0 6px #eab308)" />
      <circle cx="200" cy="105" r="3.5" fill="#93c5fd" filter="drop-shadow(0 0 8px #3b82f6)" />
      <circle cx="270" cy="140" r="3" fill="#fde047" filter="drop-shadow(0 0 6px #eab308)" />
      <circle cx="160" cy="170" r="2.5" fill="#60a5fa" />
      <circle cx="240" cy="180" r="3" fill="#38bdf8" filter="drop-shadow(0 0 6px #0ea5e9)" />
    </svg>
  </div>
);
