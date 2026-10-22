import React from 'react';
import { Search, Cpu, Zap, Shield, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'PESQUISA',
      description: 'Identificação e análise de oportunidades.',
      detail: 'Mapeamento constante de pares, liquidez e tendências do mercado global de criptoativos.',
      icon: Search,
      tag: 'SCANNING',
    },
    {
      number: '02',
      title: 'INTELIGÊNCIA ARTIFICIAL',
      description: 'Análise automatizada de informações e dados.',
      detail: 'Algoritmos matemáticos processando indicadores técnicos e oscilações em tempo real.',
      icon: Cpu,
      tag: 'AI ENGINE',
    },
    {
      number: '03',
      title: 'EXECUÇÃO',
      description: 'Execução automatizada de estratégias.',
      detail: 'Entradas e saídas sistematizadas com parametrizações rígidas de controle de risco.',
      icon: Zap,
      tag: 'AUTOMATION',
    },
    {
      number: '04',
      title: 'CUSTÓDIA',
      description: 'Rastreamento e acompanhamento das operações e movimentações.',
      detail: 'Auditoria de saldos, transparência de movimentações e segurança em blockchain.',
      icon: Shield,
      tag: 'TRACKING',
    },
  ];

  return (
    <section id="tecnologia" className="relative py-20 lg:py-28 bg-transparent overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#087A45]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#39FF88]" />
            A TECNOLOGIA AMX AIBOT
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            O futuro do trading começa com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] to-[#39FF88]">
              inteligência.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0] leading-relaxed">
            A AMX AIBOT TRADING apresenta uma proposta baseada em automação, análise de mercado,
            inteligência artificial e execução sistematizada de operações no mercado de criptoativos.
          </p>
        </div>

        {/* 4 Cards Grid as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="amx-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B95A]/40 to-transparent group-hover:via-[#39FF88] transition-all duration-300" />

                <div>
                  {/* Top row: Number and Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#39FF88]/40 group-hover:text-[#39FF88] transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#08100C] border border-[#00B95A]/20 text-[#9AA8A0]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#08100C] border border-[#00B95A]/25 flex items-center justify-center mb-5 group-hover:border-[#39FF88] group-hover:shadow-[0_0_15px_rgba(57,255,136,0.2)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#39FF88]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-wide uppercase mb-3">
                    {item.title}
                  </h3>

                  {/* Description from spec */}
                  <p className="text-sm font-medium text-[#E9F1EC] leading-snug mb-3">
                    {item.description}
                  </p>

                  {/* Additional Context */}
                  <p className="text-xs text-[#9AA8A0] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom decorative circuit dot */}
                <div className="mt-6 pt-4 border-t border-[#18211D] flex items-center justify-between text-[11px] font-mono text-[#9AA8A0]">
                  <span>AMX PROTOCOL</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00B95A] group-hover:bg-[#39FF88] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
