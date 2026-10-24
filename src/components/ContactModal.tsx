import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(defaultSubject || 'Inversión & Magnus Capital');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor indica tu nombre completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Por favor introduce un correo electrónico válido.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setError('El mensaje debe contener al menos 10 caracteres.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-gradient-to-b from-[#0e1424] to-[#060912] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-cyan-400 font-mono uppercase block mb-1">
              Canal de Comunicación Directo
            </span>
            <h2 id="contact-title" className="text-xl sm:text-2xl font-display font-light text-white tracking-wide">
              Iniciar Contacto
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Cerrar formulario de contacto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-light text-white tracking-wide">
              Transmisión Recibida
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
              Gracias, <span className="text-white font-medium">{name}</span>. Tu consulta referente a <span className="text-cyan-300">{topic}</span> ha sido registrada en el nodo central. Nuestro equipo te responderá a <span className="text-slate-100">{email}</span> en menos de 24 horas.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-cyan-600/30 hover:bg-cyan-500/40 border border-cyan-400/50 text-cyan-200 text-xs tracking-wider uppercase font-medium transition-all cursor-pointer"
              >
                Cerrar Transmisión
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                Nombre y Apellidos
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dra. Elena Vasquez"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                Correo Electrónico Institucional
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="elena@laboratorio.org"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                Área de Interés / División
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
              >
                <option value="Inversión & Magnus Capital">Magnus Capital (Inversión / Venture)</option>
                <option value="Prototipado en Providence Garage">Providence Garage (I+D & Prototipado)</option>
                <option value="Telemetría & Datos ARGUS">ARGUS (Inteligencia Orbital & Satelital)</option>
                <option value="Preservación del Saber KIWIX">KIWIX (Conocimiento & Redes Abiertas)</option>
                <option value="Alianza Global ATLAS">ATLAS (Talento & Consorcios Globales)</option>
                <option value="Prensa & Relaciones Institucionales">Prensa & Relaciones Institucionales</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-1.5">
                Detalles del Proyecto o Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Describe brevemente la tesis de tu proyecto o el motivo de tu contacto..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-600/40 hover:bg-cyan-500/50 border border-cyan-400/50 text-cyan-200 hover:text-white text-xs uppercase tracking-wider font-medium transition-all shadow-[0_0_16px_rgba(6,182,212,0.25)] cursor-pointer"
              >
                <span>Enviar Transmisión</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
