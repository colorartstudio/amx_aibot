import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { AmxLogo } from './AmxLogo.tsx';

interface CtaSectionProps {
  onOpenPlatformModal: () => void;
  onOpenContactModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenPlatformModal,
  onOpenContactModal,
}) => {
  return (
    <section className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Background Deep Black + Intense Green Radial Glow as specified */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#00B95A]/25 via-[#087A45]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="amx-card p-8 sm:p-14 text-center border-2 border-[#00B95A]/40 shadow-[0_0_50px_rgba(57,255,136,0.18)] relative overflow-hidden">
          {/* Subtle circuit top lines */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#39FF88] to-transparent" />

          {/* Logo Symbol */}
          <div className="flex justify-center mb-6">
            <AmxLogo variant="symbol" size="lg" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            ECOSSISTEMA TECNOLÓGICO
          </div>

          {/* Title as specified */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 uppercase">
            ENTRE NO UNIVERSO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#8CFFB2]">
              AMX
            </span>
          </h2>

          {/* Subtitle as specified */}
          <p className="text-base sm:text-xl text-[#9AA8A0] max-w-2xl mx-auto leading-relaxed mb-10">
            Tecnologia, automação e inovação aplicadas ao mercado.
          </p>

          {/* Buttons as specified: CONHECER A AMX & FALE CONOSCO */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-8">
            <button
              onClick={onOpenPlatformModal}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-[#050807] bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#00B95A] hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_25px_rgba(57,255,136,0.35)] cursor-pointer"
            >
              <span>CONHECER A AMX</span>
              <ArrowUpRight className="w-4 h-4 text-[#050807]" />
            </button>

            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-[#08100C] border border-[#00B95A]/40 hover:border-[#39FF88] hover:bg-[#111815] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#39FF88]" />
              <span>FALE CONOSCO</span>
            </button>
          </div>

          {/* Mandatory Responsible Investment Warning as specified */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-[#E7C873] pt-6 border-t border-[#18211D]">
            <ShieldCheck className="w-4 h-4 text-[#C9A24D]" />
            <span>Invista com responsabilidade e diversifique sempre.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
