import React from 'react';
import { UserCheck, Shield, Quote, Building2 } from 'lucide-react';
import { AmxLogo } from './AmxLogo.tsx';

export const FounderSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#08100C] overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C9A24D]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#C9A24D]/40 text-xs font-mono text-[#E7C873] uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#C9A24D]" />
            LIDERANÇA EXECUTIVA
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 uppercase">
            VISÃO AMX
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Governança, compromisso com a excelência tecnológica e diretriz corporativa clara.
          </p>
        </div>

        {/* Elegant Executive Composition */}
        <div className="max-w-4xl mx-auto amx-card p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle gold accent border line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Placeholder for Official Founder Photography */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-60 h-72 sm:w-64 sm:h-80 rounded-2xl bg-[#050807] border-2 border-[#C9A24D]/35 p-3 flex flex-col items-center justify-between shadow-[0_0_30px_rgba(201,162,77,0.12)]">
                {/* Silhouette / Photo Placeholder Frame */}
                <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#111815] to-[#08100C] border border-[#18211D] flex flex-col items-center justify-center text-center p-4">
                  <div className="w-20 h-20 rounded-full bg-[#08100C] border border-[#C9A24D]/50 flex items-center justify-center mb-3">
                    <UserCheck className="w-9 h-9 text-[#E7C873]" />
                  </div>
                  <span className="font-mono text-[11px] text-[#C9A24D] font-bold tracking-wider uppercase mb-1">
                    FOTOGRAFIA OFICIAL
                  </span>
                  <span className="text-[10px] text-[#9AA8A0]">
                    [ESPAÇO RESERVADO PARA RETRATO INSTITUCIONAL DO FUNDADOR]
                  </span>
                </div>

                {/* Bottom Authenticity Badge */}
                <div className="absolute -bottom-3 px-3 py-1 rounded-full bg-[#050807] border border-[#C9A24D] text-[10px] font-mono text-[#E7C873] flex items-center gap-1.5 shadow-md">
                  <Shield className="w-3 h-3 text-[#C9A24D]" />
                  CERTIFICADO INSTITUCIONAL
                </div>
              </div>
            </div>

            {/* Founder Information & Statement */}
            <div className="md:col-span-7 text-left">
              <div className="mb-6">
                <span className="font-mono text-xs text-[#39FF88] uppercase tracking-widest font-bold">
                  FUNDADOR & LIDERANÇA
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mt-1">
                  Edson Oliveira
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-[#E7C873]">
                    Presidente &amp; CEO
                  </span>
                  <span className="text-[#9AA8A0] text-xs">•</span>
                  <span className="text-xs text-[#9AA8A0] font-mono">
                    Fundador AMX AIBOT TRADING
                  </span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative pl-6 border-l-2 border-[#C9A24D]/60 my-6">
                <Quote className="w-6 h-6 text-[#C9A24D]/40 absolute -top-2 left-0 -translate-x-1/2" />
                <p className="text-sm sm:text-base text-[#E9F1EC] leading-relaxed italic">
                  "A união entre algoritmos de inteligência artificial e processos rigorosos de custódia representa a transição necessária para uma nova era de automação no mercado global."
                </p>
              </div>

              {/* Placeholder clearly reserved for future biography as instructed */}
              <div className="p-4 rounded-xl bg-[#050807] border border-[#18211D]">
                <span className="font-mono text-[10px] text-[#9AA8A0] uppercase tracking-wider block mb-1">
                  BIOGRAFIA INSTITUCIONAL:
                </span>
                <p className="text-xs text-[#9AA8A0] leading-relaxed">
                  [ESPAÇO RESERVADO PARA BIOGRAFIA OFICIAL E TRAJETÓRIA EXECUTIVA A SER FORNECIDA PELA EMPRESA]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
