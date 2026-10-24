import React from 'react';

interface ArtworkProps {
  className?: string;
}

export const MagnusArtwork: React.FC<ArtworkProps> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#070b14] ${className}`}>
    <img
      src="/assets/divisions/magnus-capital_art.png"
      alt="Magnus Capital Deep Tech Horizon"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/90 via-transparent to-transparent pointer-events-none" />
  </div>
);

export const GarageArtwork: React.FC<ArtworkProps> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#0d0906] ${className}`}>
    <img
      src="/assets/divisions/providence-garage_art.png"
      alt="Providence Garage Mecatronics Hangar"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/90 via-transparent to-transparent pointer-events-none" />
  </div>
);

export const ArgusArtwork: React.FC<ArtworkProps> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#040810] ${className}`}>
    <img
      src="/assets/divisions/argus_art.png"
      alt="ARGUS Orbital Perception Station"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/90 via-transparent to-transparent pointer-events-none" />
  </div>
);

export const KiwixArtwork: React.FC<ArtworkProps> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#070b14] ${className}`}>
    <img
      src="/assets/divisions/kiwix_art.png"
      alt="KIWIX Lunar Knowledge Monoliths"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/90 via-transparent to-transparent pointer-events-none" />
  </div>
);

export const AtlasArtwork: React.FC<ArtworkProps> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#030611] ${className}`}>
    <img
      src="/assets/divisions/atlas_art.png"
      alt="ATLAS Global Synergy Network"
      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/90 via-transparent to-transparent pointer-events-none" />
  </div>
);
