import React from 'react';
import { 
  ExternalLink,
  Zap
} from 'lucide-react';
import { UserProfile, BackofficeTab } from '../../types.ts';
import { AmxLogo } from '../AmxLogo.tsx';

interface BackofficeHeaderProps {
  user: UserProfile;
  onOpenMobileMenu?: () => void;
  onExitBackoffice: () => void;
  onNavigateTab: (tab: BackofficeTab) => void;
}

export const BackofficeHeader: React.FC<BackofficeHeaderProps> = ({
  user,
  onExitBackoffice,
  onNavigateTab,
}) => {
  return (
    <header className="sticky top-0 z-30 h-16 sm:h-20 bg-[#050807]/95 backdrop-blur-xl border-b border-[#18211D] px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all">
      {/* Left Area: AMX Brand (on mobile/tablet) + Live Status */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {/* Mobile/Tablet AMX Brand Logo - Full AMX | AIBOT TRADING */}
        <div 
          onClick={() => onNavigateTab('dashboard')}
          className="lg:hidden flex items-center shrink-0 cursor-pointer select-none"
          title="Ir para Visão Geral"
        >
          <AmxLogo variant="full" size="sm" />
        </div>

        {/* Desktop/Tablet Live Bot indicator */}
        <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
          <span className="text-[#39FF88] font-bold whitespace-nowrap">AIBOT ONLINE</span>
          <span className="text-[#9AA8A0] hidden xl:inline whitespace-nowrap">| OPERAÇÃO 24/7</span>
        </div>

        {/* Live Ticker on Wide Screens */}
        <div className="hidden 2xl:flex items-center gap-4 text-xs font-mono whitespace-nowrap">
          <span className="text-[#9AA8A0]">
            BTC: <strong className="text-white">$94.120</strong> <span className="text-[#39FF88]">+2.4%</span>
          </span>
          <span className="text-[#9AA8A0]">
            ETH: <strong className="text-white">$3.440</strong> <span className="text-[#39FF88]">+3.1%</span>
          </span>
        </div>
      </div>

      {/* Right Area: Fast Wallet Pills + Profile + Exit */}
      <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
        {/* Custody Points Pill (Shown on large desktop to keep tablet uncluttered) */}
        <button
          onClick={() => onNavigateTab('custody')}
          className="hidden xl:flex flex-col items-end px-3.5 py-1.5 rounded-xl bg-[#08100C] border border-[#18211D] hover:border-[#00B95A]/40 transition-colors text-right cursor-pointer"
        >
          <span className="font-mono text-[9px] text-[#9AA8A0] uppercase whitespace-nowrap">
            CUSTÓDIA ATIVA
          </span>
          <span className="font-mono text-xs font-bold text-white whitespace-nowrap">
            {user.custodyBalance.toLocaleString('pt-BR')} <span className="text-[#39FF88]">pts</span>
          </span>
        </button>

        {/* PIX Available Bonus Pill - Clean, prominent, never broken */}
        <button
          onClick={() => onNavigateTab('financial')}
          className="flex flex-col items-end px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-[#08100C] border border-[#00B95A]/35 hover:border-[#39FF88] shadow-[0_0_12px_rgba(57,255,136,0.12)] transition-colors text-right cursor-pointer shrink-0"
        >
          <span className="font-mono text-[8.5px] sm:text-[9px] text-[#39FF88] uppercase font-bold flex items-center gap-1 whitespace-nowrap">
            <Zap className="w-2.5 h-2.5 fill-[#39FF88]" />
            DISPONÍVEL PIX
          </span>
          <span className="font-mono text-xs sm:text-sm font-black text-white whitespace-nowrap">
            R$ {user.bonusBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </button>

        {/* User Profile Pill */}
        <div className="flex items-center gap-2 sm:gap-2.5 pl-1.5 sm:pl-3 border-l border-[#18211D]">
          <div 
            onClick={() => onNavigateTab('settings')}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#08100C] to-[#111815] border border-[#00B95A]/40 flex items-center justify-center text-[#39FF88] font-mono font-bold text-xs cursor-pointer hover:border-[#39FF88] transition-colors shadow-[0_0_10px_rgba(57,255,136,0.1)]"
            title="Meu Perfil"
          >
            AMX
          </div>

          {/* Desktop User Info - No ellipsis cut-offs */}
          <div className="hidden xl:block text-left">
            <div className="text-xs font-bold text-white whitespace-nowrap">
              {user.name}
            </div>
            <span className="inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/30 uppercase font-semibold whitespace-nowrap">
              {user.rank}
            </span>
          </div>

          {/* Tablet Rank Badge */}
          <div className="hidden md:block xl:hidden text-left">
            <span className="inline-block font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/30 uppercase font-semibold whitespace-nowrap">
              {user.rank}
            </span>
          </div>

          {/* Quick Return to Site */}
          <button
            onClick={onExitBackoffice}
            className="hidden lg:inline-flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-lg bg-[#111815] border border-[#18211D] hover:border-[#C9A24D]/50 text-xs font-mono text-[#9AA8A0] hover:text-white transition-colors cursor-pointer"
            title="Voltar ao Site Institucional"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A24D]" />
            <span className="whitespace-nowrap">Site</span>
          </button>
        </div>
      </div>
    </header>
  );
};
