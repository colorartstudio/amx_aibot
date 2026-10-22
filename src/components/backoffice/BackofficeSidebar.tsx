import React from 'react';
import { 
  LayoutDashboard, 
  Shield, 
  ArrowDownUp, 
  Users, 
  Trophy, 
  Cpu, 
  Settings, 
  LogOut, 
  Headphones, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { BackofficeTab } from '../../types.ts';
import { AmxLogo } from '../AmxLogo.tsx';

interface BackofficeSidebarProps {
  currentTab: BackofficeTab;
  onSelectTab: (tab: BackofficeTab) => void;
  onExitBackoffice: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const BackofficeSidebar: React.FC<BackofficeSidebarProps> = ({
  currentTab,
  onSelectTab,
  onExitBackoffice,
  isMobileOpen,
  onCloseMobile,
}) => {
  const menuItems = [
    {
      id: 'dashboard' as BackofficeTab,
      label: 'Visão Geral',
      icon: LayoutDashboard,
      badge: 'LIVE',
    },
    {
      id: 'custody' as BackofficeTab,
      label: 'Custódia Executiva',
      icon: Shield,
    },
    {
      id: 'financial' as BackofficeTab,
      label: 'Saques & Extrato',
      icon: ArrowDownUp,
      badge: 'PIX',
    },
    {
      id: 'network' as BackofficeTab,
      label: 'Bonificações (6 Níveis)',
      icon: Users,
    },
    {
      id: 'leadership' as BackofficeTab,
      label: 'Plano de Liderança',
      icon: Trophy,
    },
    {
      id: 'bot' as BackofficeTab,
      label: 'Terminal AIBOT 24/7',
      icon: Cpu,
      isHot: true,
    },
    {
      id: 'settings' as BackofficeTab,
      label: 'Configurações & CPF',
      icon: Settings,
    },
  ];

  const handleItemClick = (tab: BackofficeTab) => {
    onSelectTab(tab);
    onCloseMobile();
  };

  const officialPhone = '(48) 99137-7469';
  const cleanPhone = '5548991377469';

  return (
    <>
      {/* Sidebar Container (Desktop only) */}
      <aside
        className="hidden lg:flex fixed top-0 bottom-0 left-0 z-40 w-72 bg-[#050807]/92 backdrop-blur-xl border-r border-[#18211D] flex-col justify-between"
      >
        {/* Brand Header */}
        <div>
          <div className="p-6 border-b border-[#18211D]">
            <div className="flex items-center justify-between">
              <AmxLogo variant="full" size="sm" />
              <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#08100C] text-[#39FF88] border border-[#00B95A]/30">
                v2.4 BOT
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#08100C] to-[#111815] text-[#39FF88] border border-[#00B95A]/50 shadow-[0_0_15px_rgba(57,255,136,0.15)] font-bold'
                      : 'text-[#9AA8A0] hover:text-white hover:bg-[#08100C]/70 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-[#39FF88]' : 'text-[#9AA8A0]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40'
                          : 'bg-[#08100C] text-[#9AA8A0]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}

                  {item.isHot && !item.badge && (
                    <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Support & Exit */}
        <div className="p-4 border-t border-[#18211D] space-y-3">
          {/* Official Support Box as per material */}
          <div className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D]">
            <div className="flex items-center gap-2 mb-2">
              <Headphones className="w-4 h-4 text-[#39FF88]" />
              <span className="font-mono text-[10px] text-white font-bold uppercase">
                SUPORTE OFICIAL 24/7
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#9AA8A0] mb-2.5">
              {officialPhone}
            </p>
            <a
              href={`https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20estou%20no%20Backoffice%20AMX%20e%20preciso%20de%20atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#111815] border border-[#00B95A]/30 hover:border-[#39FF88] text-[11px] font-mono text-[#39FF88] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Return to Institutional Site */}
          <button
            onClick={onExitBackoffice}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-transparent hover:bg-[#111815] text-[#9AA8A0] hover:text-white border border-[#18211D] text-xs font-mono transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 text-[#C9A24D]" />
            <span>Voltar ao Site Institucional</span>
          </button>
        </div>
      </aside>
    </>
  );
};
