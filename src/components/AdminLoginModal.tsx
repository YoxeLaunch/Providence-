import React, { useState } from 'react';
import { X, Lock, ShieldCheck, KeyRound, AlertTriangle, ArrowRight, Loader2 } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [warpActive, setWarpActive] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Verification: Accepted admin passwords (default 'providence2026' or 'admin' or 'nexus')
    const validPasswords = ['providence2026', 'admin', 'nexus', 'providence'];
    
    if (!password.trim()) {
      setError('Por favor ingresa la clave de acceso de administrador.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (validPasswords.includes(password.trim().toLowerCase())) {
        sessionStorage.setItem('providence_admin_authenticated', 'true');
        setWarpActive(true);
        setTimeout(() => {
          onSuccess();
          window.location.href = '/admin/';
        }, 1100);
      } else {
        setLoading(false);
        setError('Clave de administrador incorrecta. Acceso restringido.');
      }
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Warp Jump Overlay on Auth Success */}
      {warpActive && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 animate-in fade-in">
          <div className="relative w-48 h-48 rounded-full border border-cyan-400 animate-ping opacity-75" />
          <div className="absolute font-mono text-cyan-300 text-sm tracking-[0.3em] uppercase mt-24">
            [ SALTO A CONSOLA NEXUS... ]
          </div>
        </div>
      )}

      <div
        className="relative w-full max-w-md bg-gradient-to-b from-[#0b1120] to-[#04060c] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-cyan-950/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] text-cyan-400 font-mono uppercase block">
                Control de Acceso
              </span>
              <h2 id="admin-title" className="text-base sm:text-lg font-display font-medium text-white tracking-wide">
                Consola Administrativa
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Ingresa tus credenciales para acceder a la telemetría en tiempo real de los nodos de Providence, Docker y servicios internos.
          </p>

          {error && (
            <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
              <span>Clave Maestra</span>
            </label>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-600 text-sm font-mono tracking-wider focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <span className="text-[10px] text-slate-500 font-mono">
              NEXUS CORE // V2.6
            </span>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600/40 hover:bg-cyan-500/50 border border-cyan-400/50 text-cyan-200 hover:text-white text-xs uppercase tracking-wider font-medium transition-all shadow-[0_0_16px_rgba(6,182,212,0.25)] cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <span>Ingresar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
