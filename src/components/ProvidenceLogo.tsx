import React from 'react';

interface ProvidenceLogoIconProps {
  className?: string;
  size?: number | string;
}

export const ProvidenceLogoIcon: React.FC<ProvidenceLogoIconProps> = ({
  className = '',
  size = 24,
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`overflow-visible select-none inline-block align-middle ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft atmospheric gradient for backlit planet hemisphere */}
        <radialGradient id="prov-planet-grad" cx="75%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
          <stop offset="35%" stopColor="#1e293b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#030611" stopOpacity="0.95" />
        </radialGradient>
        
        {/* Star glow filter */}
        <filter id="prov-star-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 1. Outer Orbit Ring with clean cosmic luminescence */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="1.6"
      />

      {/* 2. Inner Dark Planet Sphere */}
      <circle
        cx="32"
        cy="32"
        r="19.5"
        fill="#04060e"
        stroke="rgba(255, 255, 255, 0.55)"
        strokeWidth="1.4"
      />

      {/* 3. Planet subtle atmospheric crescent backlight */}
      <circle
        cx="32"
        cy="32"
        r="19"
        fill="url(#prov-planet-grad)"
      />

      {/* 4. Glowing Celestial Star / Moon at ~45 degrees on orbit ring */}
      <circle
        cx="51.8"
        cy="12.2"
        r="4.2"
        fill="#ffffff"
        filter="url(#prov-star-glow)"
      />
    </svg>
  );
};
