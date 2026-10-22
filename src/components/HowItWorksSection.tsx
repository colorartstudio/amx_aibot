import React from 'react';
import { Target, Cpu, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 'ETAPA 01',
      title: 'IDENTIFICAÇÃO',
      description: 'Análise inicial de projetos e oportunidades.',
      icon: Target,
      tag: 'VARREDURA DE MERCADO',
      detail: 'Triagem algorítmica de pares com volume e liquidez institucional.',
    },
    {
      step: 'ETAPA 02',
      title: 'ANÁLISE IA',
      description: 'Processamento automatizado de dados e indicadores.',
      icon: Cpu,
      tag: 'PROCESSAMENTO NEURAL',
      detail: 'Cálculo estatístico de volatilidade, médias móveis e momentum quantitativo.',
    },
    {
      step: 'ETAPA 03',
      title: 'EXECUÇÃO',
      description: 'Automação das entradas e saídas conforme a estratégia.',
      icon: TrendingUp,
      tag: 'ORDENS SISTEMATIZADAS',
      detail: 'Disparo de ordens milissegundo com parâmetros predefinidos de stop e take.',
    },
    {
      step: 'ETAPA 04',
      title: 'CUSTÓDIA',
      description: 'Acompanhamento e rastreamento.',
      icon: ShieldCheck,
      tag: 'SEGURANÇA & AUDITORIA',
      detail: 'Registro fiduciário e rastreabilidade total das posições e movimentações.',
    },
  ];

  return (
    <section id="como-funciona" className="relative py-20 lg:py-28 bg-[#08100C] overflow-hidden">
      {/* Subtle Background Circuits */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#087A45]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00B95A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111815] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            FLUXO SISTEMATIZADO
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Como funciona a tecnologia{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] to-[#39FF88]">
              AIBOT
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Uma sequência metódica e automatizada de análise e operação orientada a dados.
          </p>
        </div>

        {/* Central Motto Badge as required: ACUMULAÇÃO • EXECUÇÃO • RESULTADO */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 sm:px-10 py-3 sm:py-4 rounded-2xl bg-[#111815]/95 border border-[#00B95A]/40 shadow-[0_0_25px_rgba(57,255,136,0.12)]">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#39FF88] uppercase">
              ACUMULAÇÃO
            </span>
            <span className="text-[#00B95A]">•</span>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
              EXECUÇÃO
            </span>
            <span className="text-[#00B95A]">•</span>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C9A24D] uppercase">
              RESULTADO
            </span>
          </div>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#087A45] via-[#00B95A] to-[#39FF88] z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="amx-card p-6 flex flex-col relative group"
                >
                  {/* Step Header with Node Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#050807] border-2 border-[#00B95A]/50 group-hover:border-[#39FF88] shadow-[0_0_15px_rgba(57,255,136,0.2)] transition-colors">
                      <Icon className="w-5 h-5 text-[#39FF88]" />
                    </div>
                    <span className="font-mono text-xs font-extrabold tracking-widest text-[#39FF88] px-2.5 py-1 rounded bg-[#050807] border border-[#00B95A]/20">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description as specified */}
                  <h3 className="text-lg font-bold text-white tracking-wide uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#E9F1EC] leading-snug mb-3">
                    {item.description}
                  </p>

                  <p className="text-xs text-[#9AA8A0] leading-relaxed mb-4">
                    {item.detail}
                  </p>

                  {/* Technical Badge */}
                  <div className="mt-auto pt-4 border-t border-[#18211D] flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-[#9AA8A0]">
                      {item.tag}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#00B95A] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all lg:hidden" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
