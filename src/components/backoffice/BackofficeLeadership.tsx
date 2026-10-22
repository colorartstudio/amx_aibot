import React from 'react';
import { 
  Trophy, 
  Crown, 
  Shield, 
  CheckCircle2, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { UserProfile } from '../../types.ts';

interface BackofficeLeadershipProps {
  user: UserProfile;
}

export const BackofficeLeadership: React.FC<BackofficeLeadershipProps> = ({ user }) => {
  const ranks = [
    {
      name: 'SUPERVISOR ELITE',
      requiredPoints: 1000,
      reward: 'R$ 100',
      icon: Shield,
      status: 'CONQUISTADO',
      rewardStatus: 'PAGO',
      desc: 'Primeiro marco de qualificação e estruturação de equipe.',
      accent: 'emerald',
      progress: 100,
    },
    {
      name: 'EXECUTIVO',
      requiredPoints: 1000,
      reward: 'R$ 1.000',
      icon: Trophy,
      status: 'QUALIFICADO',
      rewardStatus: 'PAGO',
      desc: 'Consolidação de volume constante e liderança ativa.',
      accent: 'green',
      isCurrent: true,
      progress: 100,
    },
    {
      name: 'SENIOR',
      requiredPoints: 100000,
      reward: 'R$ 5.000',
      icon: Crown,
      status: 'EM PROGRESSO',
      rewardStatus: 'A CONQUISTAR',
      desc: 'Alta liderança executiva com atuação e abrangência ampliada.',
      accent: 'gold',
      progress: Math.min(100, (user.qualificationPoints / 100000) * 100),
    },
  ];

  return (
    <div className="space-y-8 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#18211D]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#C9A24D]/35 text-xs font-mono text-[#E7C873] uppercase mb-2">
            <Trophy className="w-3.5 h-3.5" />
            RECONHECIMENTO MERITOCRÁTICO
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Plano de Carreira e Liderança
          </h1>
          <p className="text-xs text-[#9AA8A0] font-mono mt-1">
            Qualificação por volume de pontos e bonificações diretas conforme regulamento institucional.
          </p>
        </div>

        {/* Current status pill */}
        <div className="p-4 rounded-xl bg-[#08100C] border border-[#C9A24D]/40 font-mono text-right">
          <span className="text-[10px] text-[#9AA8A0] uppercase block">
            SUA PATENTE ATUAL
          </span>
          <span className="text-lg font-black text-[#E7C873]">
            {user.rank}
          </span>
          <span className="text-xs text-[#39FF88] block">
            {user.qualificationPoints} pts acumulados
          </span>
        </div>
      </div>

      {/* 3 Ranks Grid as strictly specified in presentation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ranks.map((rank) => {
          const Icon = rank.icon;
          const isGold = rank.accent === 'gold';
          const isCurrent = rank.isCurrent;

          return (
            <div
              key={rank.name}
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                isGold
                  ? 'amx-card-gold shadow-[0_0_25px_rgba(201,162,77,0.15)]'
                  : isCurrent
                  ? 'amx-card border-[#39FF88]/50 shadow-[0_0_25px_rgba(57,255,136,0.15)]'
                  : 'amx-card'
              }`}
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isGold
                        ? 'bg-[#08100C] border border-[#C9A24D]/40 text-[#E7C873]'
                        : 'bg-[#08100C] border border-[#00B95A]/40 text-[#39FF88]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      rank.status === 'QUALIFICADO' || rank.status === 'CONQUISTADO'
                        ? 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40'
                        : 'bg-[#08100C] text-[#9AA8A0] border border-[#18211D]'
                    }`}
                  >
                    {rank.status}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-1">
                  {rank.name}
                </h3>
                <p className="text-xs text-[#9AA8A0] leading-relaxed mb-6">
                  {rank.desc}
                </p>

                {/* Metrics */}
                <div className="space-y-3 p-4 rounded-xl bg-[#08100C] border border-[#18211D] mb-6 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#9AA8A0]">QUALIFICAÇÃO:</span>
                    <span className="text-white font-bold">{rank.requiredPoints} pts</span>
                  </div>
                  <div className="h-[1px] bg-[#18211D]" />
                  <div className="flex justify-between items-center">
                    <span className="text-[#9AA8A0]">PREMIAÇÃO:</span>
                    <span
                      className={`text-lg font-black ${
                        isGold ? 'text-[#E7C873]' : 'text-[#39FF88]'
                      }`}
                    >
                      {rank.reward}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#9AA8A0]">Status do Bônus:</span>
                    <span className="text-[#39FF88] font-bold">{rank.rewardStatus}</span>
                  </div>
                </div>

                {/* Progress bar towards this rank */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex justify-between font-mono text-[10px] text-[#9AA8A0]">
                    <span>PROGRESSO</span>
                    <span>{rank.progress.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#050807] overflow-hidden border border-[#18211D]">
                    <div
                      className={`h-full rounded-full ${
                        isGold ? 'bg-gradient-to-r from-[#C9A24D] to-[#E7C873]' : 'bg-gradient-to-r from-[#00B95A] to-[#39FF88]'
                      }`}
                      style={{ width: `${rank.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#18211D] flex items-center justify-between text-xs font-mono">
                <span className="text-[#9AA8A0]">PONTUAÇÃO PROGRESSIVA</span>
                <CheckCircle2 className="w-4 h-4 text-[#00B95A]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Rules Notice */}
      <div className="p-4 rounded-xl bg-[#08100C] border border-[#18211D] text-xs font-mono text-[#9AA8A0] text-center">
        * As pontuações e premiações respeitam o ciclo de pontos corporativo da AMX. Os prêmios de qualificação são creditados diretamente no saldo PIX após a validação do fechamento.
      </div>
    </div>
  );
};
