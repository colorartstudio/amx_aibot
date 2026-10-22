import React from 'react';
import { Users, Award, Zap, ChevronRight } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const levels = [
    { level: 'NÍVEL 1', percent: '10%', barWidth: '100%', highlight: true, note: 'Indicação Direta' },
    { level: 'NÍVEL 2', percent: '5%', barWidth: '75%', highlight: false, note: '2ª Geração' },
    { level: 'NÍVEL 3', percent: '3%', barWidth: '55%', highlight: false, note: '3ª Geração' },
    { level: 'NÍVEL 4', percent: '1%', barWidth: '35%', highlight: false, note: '4ª Geração' },
    { level: 'NÍVEL 5', percent: '0,5%', barWidth: '22%', highlight: false, note: '5ª Geração' },
    { level: 'NÍVEL 6', percent: '0,3%', barWidth: '15%', highlight: false, note: '6ª Geração' },
  ];

  return (
    <section id="bonificacoes" className="relative py-20 lg:py-28 bg-[#08100C] overflow-hidden">
      {/* Background Cyber Lights */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00B95A]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header as specified */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#39FF88]" />
            PROGRAMA DE PARCERIAS
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            BONIFICAÇÕES E{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#C9A24D]">
              LIDERANÇA
            </span>
          </h2>

          <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#9AA8A0]">
            Renovação • Reinvestimento • Ciclo de pontos
          </p>
        </div>

        {/* Vertical Connected Structure as specified */}
        <div className="max-w-3xl mx-auto amx-card p-6 sm:p-10 relative">
          {/* Central Vertical Connected Line */}
          <div className="absolute left-[39px] sm:left-[55px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-[#39FF88] via-[#00B95A] to-[#063D25] z-0 opacity-40" />

          <div className="space-y-4 sm:space-y-6 relative z-10">
            {levels.map((item, index) => (
              <div
                key={item.level}
                className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  item.highlight
                    ? 'bg-[#18211D] border border-[#39FF88]/40 shadow-[0_0_20px_rgba(57,255,136,0.15)]'
                    : 'bg-[#08100C] border border-[#18211D] hover:border-[#00B95A]/30'
                }`}
              >
                {/* User Icon and Level Badge */}
                <div className="flex items-center gap-4 min-w-[180px]">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      item.highlight
                        ? 'bg-[#050807] border-[#39FF88] text-[#39FF88] shadow-[0_0_12px_rgba(57,255,136,0.3)]'
                        : 'bg-[#050807] border-[#00B95A]/30 text-[#00B95A]'
                    }`}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:text-base font-extrabold text-white">
                        {item.level}
                      </span>
                      {item.highlight && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40">
                          DIRETO
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#9AA8A0] font-mono">
                      {item.note}
                    </span>
                  </div>
                </div>

                {/* Progressive Bar */}
                <div className="flex-1 sm:mx-4">
                  <div className="h-2.5 bg-[#050807] rounded-full overflow-hidden border border-[#18211D]">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        item.highlight
                          ? 'bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#8CFFB2] shadow-[0_0_10px_#39FF88]'
                          : 'bg-gradient-to-r from-[#087A45] to-[#00B95A]'
                      }`}
                      style={{ width: item.barWidth }}
                    />
                  </div>
                </div>

                {/* Percentage with Green Glow */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="font-mono text-xl sm:text-2xl font-black text-[#39FF88] tracking-tight drop-shadow-[0_0_10px_rgba(57,255,136,0.35)]">
                    {item.percent}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer note inside bonuses card */}
          <div className="mt-8 pt-4 border-t border-[#18211D] flex flex-wrap items-center justify-between text-xs font-mono text-[#9AA8A0]">
            <span>* Estrutura de bonificações conforme regras corporativas vigentes.</span>
            <span className="text-[#C9A24D]">PONTUAÇÃO PROGRESSIVA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
