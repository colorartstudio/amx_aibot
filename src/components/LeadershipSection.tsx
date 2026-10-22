import React from 'react';
import { Crown, Sparkles, Shield, Trophy, Check } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  // Categories strictly as provided in user instructions
  const ranks = [
    {
      name: 'SUPERVISOR ELITE',
      points: '1000 pts',
      reward: 'R$ 100',
      badge: 'NÍVEL 01',
      icon: Shield,
      accent: 'emerald',
      desc: 'Primeiro marco de liderança e qualificação de equipe.',
    },
    {
      name: 'EXECUTIVO',
      points: '1000 pts',
      reward: 'R$ 1.000',
      badge: 'NÍVEL 02',
      icon: Trophy,
      accent: 'green',
      isHighlighted: true,
      desc: 'Consolidação de rede ativa e volume constante de operações.',
    },
    {
      name: 'SENIOR',
      points: '100000 pts',
      reward: 'R$ 5.000',
      badge: 'ALTA LIDERANÇA',
      icon: Crown,
      accent: 'gold',
      desc: 'Nível executivo de alto impacto e expansão territorial.',
    },
  ];

  return (
    <section id="lideranca" className="relative py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A24D]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#C9A24D]/40 text-xs font-mono text-[#E7C873] uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5 text-[#C9A24D]" />
            PLANO DE CARREIRA
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 uppercase">
            Níveis de Liderança
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Reconhecimento meritocrático por expansão de ecossistema e qualificação de parceiros.
          </p>
        </div>

        {/* 3 Premium Cards Grid strictly matching specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ranks.map((rank) => {
            const Icon = rank.icon;
            const isGold = rank.accent === 'gold';
            const isExec = rank.isHighlighted;

            return (
              <div
                key={rank.name}
                className={`p-7 sm:p-8 rounded-[18px] flex flex-col justify-between relative transition-all duration-300 ${
                  isGold
                    ? 'amx-card-gold shadow-[0_0_35px_rgba(201,162,77,0.15)]'
                    : isExec
                    ? 'amx-card border-[#39FF88]/50 shadow-[0_0_30px_rgba(57,255,136,0.15)]'
                    : 'amx-card'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isGold
                        ? 'bg-[#08100C] border border-[#C9A24D]/50 text-[#E7C873]'
                        : 'bg-[#08100C] border border-[#00B95A]/40 text-[#39FF88]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`font-mono text-xs px-3 py-1 rounded-full uppercase tracking-wider ${
                      isGold
                        ? 'bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/40'
                        : 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40'
                    }`}
                  >
                    {rank.badge}
                  </span>
                </div>

                {/* Name */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase mb-2">
                    {rank.name}
                  </h3>
                  <p className="text-xs text-[#9AA8A0] leading-relaxed">
                    {rank.desc}
                  </p>
                </div>

                {/* Metrics Box */}
                <div className="space-y-3 p-4 rounded-xl bg-[#08100C] border border-[#18211D] mb-6">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9AA8A0]">QUALIFICAÇÃO:</span>
                    <span className="text-white font-bold">{rank.points}</span>
                  </div>
                  <div className="h-[1px] bg-[#18211D]" />
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9AA8A0]">BONIFICAÇÃO:</span>
                    <span
                      className={`text-lg font-black ${
                        isGold ? 'text-[#E7C873]' : 'text-[#39FF88]'
                      }`}
                    >
                      {rank.reward}
                    </span>
                  </div>
                </div>

                {/* Qualification details */}
                <div className="space-y-2 pt-4 border-t border-[#18211D] text-xs text-[#E9F1EC]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B95A]" />
                    <span>Conformidade com ciclo de pontos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B95A]" />
                    <span>Pagamento rápido e seguro</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on official materials */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#9AA8A0]">
            * Categorias e pontuações estabelecidas estritamente no manual de liderança da AMX.
          </p>
        </div>
      </div>
    </section>
  );
};
