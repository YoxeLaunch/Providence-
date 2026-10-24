import React, { useEffect, useRef, useState } from 'react';
import { Compass, Eye, ShieldAlert, Sparkles, Activity } from 'lucide-react';

interface BlackHoleBackgroundProps {
  speedMultiplier?: number;
  interactiveParallax?: boolean;
}

interface AccretionParticle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
  hue: number;
  layer: 'upper' | 'equatorial' | 'lower';
}

export const BlackHoleBackground: React.FC<BlackHoleBackgroundProps> = ({
  speedMultiplier = 1,
  interactiveParallax = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showShipTelemetry, setShowShipTelemetry] = useState(false);
  const [animationMode, setAnimationMode] = useState<'cinematic' | 'eco' | 'paused'>('cinematic');

  // Mouse move parallax handler
  useEffect(() => {
    if (!interactiveParallax) return;

    let animFrameId: number = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 16;
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [interactiveParallax]);

  // Canvas particle engine for the accretion disk & photon ring
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Number of particles based on mode
    const count = animationMode === 'cinematic' ? 95 : animationMode === 'eco' ? 35 : 0;

    const particles: AccretionParticle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 120 + Math.random() * 320,
        speed: (0.002 + Math.random() * 0.004) * (Math.random() > 0.1 ? 1 : 1),
        size: 0.8 + Math.random() * 2.2,
        opacity: 0.2 + Math.random() * 0.75,
        hue: 35 + Math.random() * 20, // Warm amber-golden spectrum
        layer: i % 3 === 0 ? 'upper' : i % 3 === 1 ? 'equatorial' : 'lower',
      });
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      if (animationMode === 'paused') return;

      const delta = (time - lastTime) / 16.66;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Black hole center in screen coords (matches the Interstellar Gargantua background position)
      // Usually right-center of the screen
      const centerX = width * 0.74;
      const centerY = height * 0.44;

      // Tilt angle matching the accretion disk inclination (-20 degrees)
      const diskTilt = -0.38;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(diskTilt);

      // Render glowing relativistic matter particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed * speedMultiplier * delta;

        // Elliptical coordinates with gravitational warping
        // Equatorial flattened disk
        let rx = p.radius * 1.6;
        let ry = p.radius * 0.38;

        if (p.layer === 'upper') {
          // Lensed upper light halo
          rx = p.radius * 0.85;
          ry = p.radius * 0.85;
        } else if (p.layer === 'lower') {
          // Lensed lower gravitational halo
          rx = p.radius * 1.05;
          ry = p.radius * 0.75;
        }

        const px = Math.cos(p.angle) * rx;
        const py = Math.sin(p.angle) * ry;

        // Calculate opacity based on position (brighter on approaching left side / horizon edge)
        const depthFactor = (Math.sin(p.angle) + 1) / 2;
        const currentAlpha = p.opacity * (0.3 + depthFactor * 0.7);

        // Draw particle with subtle motion tail
        const tailLength = p.size * 3.5;
        const tailX = px - Math.sin(p.angle) * tailLength;
        const tailY = py + Math.cos(p.angle) * (tailLength * 0.4);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(${255}, ${220 + Math.floor(p.hue)}, ${150}, ${currentAlpha})`;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Core bright spark
        ctx.beginPath();
        ctx.arc(px, py, p.size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.9})`;
        ctx.fill();
      }

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [speedMultiplier, animationMode]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Deep Space Base Layer + Ultra-sharp Black Hole Image */}
      <div
        className="absolute inset-0 w-[106%] h-[106%] -left-[3%] -top-[3%] transition-transform duration-700 ease-out will-change-transform animate-breathe"
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
        }}
      >
        <img
          src="/assets/aistudio/image_94b1d4a0.png"
          alt="Gargantua Black Hole background"
          className="w-full h-full object-cover object-center scale-100"
          loading="eager"
        />

        {/* Ambient atmospheric lighting overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#030509]/30 to-[#020306]/90 pointer-events-none" />
      </div>

      {/* 2. Dynamic Relativistic Accretion Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-75"
      />

      {/* 3. Subtle Photon Ring Dynamic Lens Flare (Pulsing Singularity Light Horizon) */}
      <div
        className="absolute w-44 h-44 rounded-full pointer-events-none opacity-40 mix-blend-screen animate-photon"
        style={{
          right: '25%',
          top: '43%',
          background: 'radial-gradient(circle, rgba(255,235,190,0.9) 0%, rgba(251,191,36,0.3) 45%, rgba(0,0,0,0) 70%)',
          transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
        }}
      />

      {/* 4. Interactive Endurance Spacecraft Beacon (Orbital Node) */}
      <div
        className="absolute pointer-events-auto cursor-pointer z-10 transition-transform duration-500 ease-out"
        style={{
          left: '26.8%',
          top: '33.2%',
          transform: `translate3d(${mousePos.x * 1.4}px, ${mousePos.y * 1.4}px, 0)`,
        }}
        onClick={() => setShowShipTelemetry(!showShipTelemetry)}
        onMouseEnter={() => setShowShipTelemetry(true)}
        onMouseLeave={() => setShowShipTelemetry(false)}
        role="button"
        tabIndex={0}
        aria-label="Información de la nave Endurance en órbita"
      >
        {/* Pulsing cyan navigation strobe */}
        <div className="relative flex items-center justify-center w-7 h-7">
          <div className="absolute w-6 h-6 rounded-full border border-cyan-400/30 animate-ping opacity-60" />
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-beacon shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Spacecraft Telemetry Popover */}
        {showShipTelemetry && (
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-64 p-3.5 rounded-xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md shadow-2xl text-left pointer-events-none transition-all duration-200 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
              <span className="text-[10px] tracking-wider uppercase text-cyan-400 font-mono flex items-center gap-1.5">
                <Activity className="w-3 h-3 animate-pulse" />
                Orbital Telemetry
              </span>
              <span className="text-[10px] text-slate-400 font-mono">NODE #01</span>
            </div>
            <p className="text-xs font-semibold text-white tracking-wide">Nave Exploratoria Endurance</p>
            <p className="text-[11px] text-slate-300 mt-0.5">Órbita sincrónica estable alrededor de la singularidad.</p>
            <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-400">
              <div>
                <span className="block text-slate-500">DILATACIÓN</span>
                <span className="text-amber-300">1h = 7 años</span>
              </div>
              <div>
                <span className="block text-slate-500">ESTADO</span>
                <span className="text-emerald-400">99.4% Nominal</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. Minimalist Ambient Control Dock (Bottom Right) */}
      <div className="absolute bottom-5 right-6 pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[11px] text-slate-300 shadow-lg">
        <span className="text-slate-400 font-mono text-[10px] uppercase">Gargantua v1</span>
        <span className="text-slate-600">·</span>
        <button
          onClick={() => {
            setAnimationMode(prev => (prev === 'cinematic' ? 'eco' : prev === 'eco' ? 'paused' : 'cinematic'));
          }}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-slate-300"
          title="Cambiar rendimiento de animación cósmica"
        >
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span className="capitalize">{animationMode === 'cinematic' ? 'Cinemática' : animationMode === 'eco' ? 'Eco' : 'Pausa'}</span>
        </button>
      </div>
    </div>
  );
};
