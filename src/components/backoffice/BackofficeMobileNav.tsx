import React, { useState } from 'react';
import {
  LayoutDashboard,
  Cpu,
  Shield,
  Users,
  Menu,
  X,
  ArrowDownUp,
  Trophy,
  Headphones,
  Settings,
  Globe,
  Key,
  LogOut,
  Check,
  ChevronRight,
  Zap,
  MessageSquare
} from 'lucide-react';
import { BackofficeTab, UserProfile } from '../../types.ts';

export type LanguageCode = 'pt-BR' | 'en' | 'es';

interface BackofficeMobileNavProps {
  currentTab: BackofficeTab;
  onSelectTab: (tab: BackofficeTab) => void;
  user: UserProfile;
  onExitBackoffice: () => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export const BackofficeMobileNav: React.FC<BackofficeMobileNavProps> = ({
  currentTab,
  onSelectTab,
  user,
  onExitBackoffice,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('pt-BR');

  const officialPhone = '(48) 99137-7469';
  const cleanPhone = '5548991377469';

  const handleSelectTab = (tab: BackofficeTab) => {
    onSelectTab(tab);
    onCloseMenu();
  };

  const languages: { code: LanguageCode; label: string; flag: string; status: 'active' | 'future' }[] = [
    { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷', status: 'active' },
    { code: 'en', label: 'English (US)', flag: '🇺🇸', status: 'future' },
    { code: 'es', label: 'Español (Latam)', flag: '🇪🇸', status: 'future' },
  ];

  return (
    <>
      {/* ========================================================
          MOBILE BOTTOM NAVIGATION DOCK (MVP FORMAT)
          Visible only on screens below lg (< 1024px)
          Items:
          1. Canto Esquerdo: Visão Geral
          2. Esquerda: Terminal AIBOT 24/7
          3. No Meio (Destaque): Custódia Executiva
          4. Direito próximo ao centro: Bonificações (6 Níveis)
          5. No Canto Direito: Menu
         ======================================================== */}
      <nav
        aria-label="Navegação Mobile MVP"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050807]/95 backdrop-blur-2xl border-t border-[#18211D] px-2 pt-1 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-[0_-12px_32px_rgba(0,0,0,0.85)]"
      >
        <div className="max-w-md mx-auto grid grid-cols-5 items-end justify-items-center gap-1">
          {/* 1. Canto Esquerdo: Visão Geral */}
          <button
            onClick={() => handleSelectTab('dashboard')}
            className={`flex flex-col items-center justify-center w-full py-1.5 transition-all cursor-pointer ${
              currentTab === 'dashboard' && !isMenuOpen
                ? 'text-[#39FF88]'
                : 'text-[#9AA8A0] hover:text-white'
            }`}
            title="Visão Geral"
          >
            <div
              className={`p-1.5 rounded-xl transition-all ${
                currentTab === 'dashboard' && !isMenuOpen
                  ? 'bg-[#00B95A]/20 shadow-[0_0_12px_rgba(57,255,136,0.25)]'
                  : 'bg-transparent'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <span className="text-[9.5px] font-mono font-semibold tracking-tight mt-0.5 whitespace-nowrap">
              Visão Geral
            </span>
          </button>

          {/* 2. Esquerda: Terminal AIBOT 24/7 */}
          <button
            onClick={() => handleSelectTab('bot')}
            className={`flex flex-col items-center justify-center w-full py-1.5 transition-all cursor-pointer relative ${
              currentTab === 'bot' && !isMenuOpen
                ? 'text-[#39FF88]'
                : 'text-[#9AA8A0] hover:text-white'
            }`}
            title="Terminal AIBOT 24/7"
          >
            <div
              className={`p-1.5 rounded-xl transition-all relative ${
                currentTab === 'bot' && !isMenuOpen
                  ? 'bg-[#00B95A]/20 shadow-[0_0_12px_rgba(57,255,136,0.25)]'
                  : 'bg-transparent'
              }`}
            >
              <Cpu className="w-5 h-5" />
              {/* 24/7 Live Pulse Dot */}
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#39FF88] animate-ping opacity-75" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#39FF88]" />
            </div>
            <span className="text-[9.5px] font-mono font-semibold tracking-tight mt-0.5 whitespace-nowrap">
              Terminal Bot
            </span>
          </button>

          {/* 3. No Meio (Destaque Central): Custódia Executiva */}
          <button
            onClick={() => handleSelectTab('custody')}
            className="flex flex-col items-center justify-center -mt-4.5 group cursor-pointer"
            title="Custódia Executiva"
          >
            <div
              className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                currentTab === 'custody' && !isMenuOpen
                  ? 'bg-gradient-to-b from-[#0e2a1b] to-[#08100C] border-2 border-[#39FF88] text-[#39FF88] shadow-[0_0_22px_rgba(57,255,136,0.5)] scale-105'
                  : 'bg-gradient-to-b from-[#111a15] to-[#08100C] border-2 border-[#00B95A]/60 text-white group-hover:border-[#39FF88] shadow-[0_0_15px_rgba(0,185,90,0.25)]'
              }`}
            >
              <Shield className="w-6 h-6 text-[#39FF88]" />
            </div>
            <span
              className={`text-[9px] font-mono font-bold tracking-tight mt-1 whitespace-nowrap ${
                currentTab === 'custody' && !isMenuOpen
                  ? 'text-[#39FF88]'
                  : 'text-white group-hover:text-[#39FF88]'
              }`}
            >
              Custódia
            </span>
          </button>

          {/* 4. Direito próximo ao centro: Bonificações (6 Níveis) */}
          <button
            onClick={() => handleSelectTab('network')}
            className={`flex flex-col items-center justify-center w-full py-1.5 transition-all cursor-pointer ${
              currentTab === 'network' && !isMenuOpen
                ? 'text-[#39FF88]'
                : 'text-[#9AA8A0] hover:text-white'
            }`}
            title="Bonificações (6 Níveis)"
          >
            <div
              className={`p-1.5 rounded-xl transition-all ${
                currentTab === 'network' && !isMenuOpen
                  ? 'bg-[#00B95A]/20 shadow-[0_0_12px_rgba(57,255,136,0.25)]'
                  : 'bg-transparent'
              }`}
            >
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[9.5px] font-mono font-semibold tracking-tight mt-0.5 whitespace-nowrap">
              Bonificações
            </span>
          </button>

          {/* 5. No Canto Direito: Menu */}
          <button
            onClick={onToggleMenu}
            className={`flex flex-col items-center justify-center w-full py-1.5 transition-all cursor-pointer ${
              isMenuOpen
                ? 'text-[#39FF88]'
                : 'text-[#9AA8A0] hover:text-white'
            }`}
            title="Menu"
            aria-label="Abrir Menu Completo"
          >
            <div
              className={`p-1.5 rounded-xl transition-all ${
                isMenuOpen
                  ? 'bg-[#00B95A]/20 shadow-[0_0_12px_rgba(57,255,136,0.25)]'
                  : 'bg-transparent'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#39FF88]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </div>
            <span className="text-[9.5px] font-mono font-semibold tracking-tight mt-0.5 whitespace-nowrap">
              Menu
            </span>
          </button>
        </div>
      </nav>

      {/* ========================================================
          MOBILE MENU DRAWER / BOTTOM SHEET
          Contém as opções especificadas pelo usuário:
          - Ícone "Saques & Extrato" (pois já existe no topo)
          - Ícone "Plano de Liderança"
          - Ícone "Suporte"
          - Ícone "Configurações & CPF"
          - Ícone Idiomas: EN, ES e PT br com futura implementação das chaves
          - Ícone "Sair"
         ======================================================== */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div
            onClick={onCloseMenu}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Bottom Sheet Modal Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu Mobile AMX"
            className="relative z-10 w-full max-h-[85vh] overflow-y-auto bg-[#08100C] border-t border-[#18211D] rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.9)] p-5 pb-10 space-y-5 animate-in slide-in-from-bottom duration-300"
          >
            {/* Handle Drag Indicator */}
            <div className="flex justify-center -mt-1 mb-1">
              <div className="w-12 h-1.5 rounded-full bg-[#18211D]" />
            </div>

            {/* Menu Header with User Identity */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#18211D]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0e2a1b] to-[#08100C] border border-[#00B95A]/50 flex items-center justify-center font-mono font-bold text-sm text-[#39FF88] shadow-[0_0_12px_rgba(57,255,136,0.15)]">
                  AMX
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">
                    {user.name}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/30 uppercase font-semibold">
                      {user.rank}
                    </span>
                    <span className="text-[10px] font-mono text-[#9AA8A0]">
                      {user.cpf}
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onCloseMenu}
                className="p-2 rounded-xl bg-[#111815] text-[#9AA8A0] hover:text-white border border-[#18211D] cursor-pointer"
                aria-label="Fechar Menu"
              >
                <X className="w-5 h-5 text-[#9AA8A0]" />
              </button>
            </div>

            {/* Fast PIX Balance Banner */}
            <div
              onClick={() => handleSelectTab('financial')}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0c1c13] to-[#08100C] border border-[#00B95A]/35 flex items-center justify-between cursor-pointer hover:border-[#39FF88] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#00B95A]/20 text-[#39FF88]">
                  <Zap className="w-4 h-4 fill-[#39FF88]" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-[#39FF88] uppercase font-bold">
                    DISPONÍVEL PIX (SAQUE IMEDIATO)
                  </div>
                  <div className="font-mono text-base font-black text-white">
                    R$ {user.bonusBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#39FF88]" />
            </div>

            {/* Menu Options Section */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#9AA8A0] uppercase font-bold tracking-wider px-1">
                AÇÕES & NAVEGAÇÃO
              </span>

              {/* 1. Ícone "Saques & Extrato" (pois já existe no topo) */}
              <button
                onClick={() => handleSelectTab('financial')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  currentTab === 'financial'
                    ? 'bg-[#0e2a1b]/60 border-[#39FF88] text-[#39FF88]'
                    : 'bg-[#111815]/80 hover:bg-[#111815] border-[#18211D] text-white hover:border-[#00B95A]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#08100C] border border-[#18211D] text-[#39FF88]">
                    <ArrowDownUp className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">
                      Saques & Extrato
                    </div>
                    <div className="text-[10px] text-[#9AA8A0] font-mono mt-0.5">
                      Liquidação PIX e histórico financeiro
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/30 font-bold">
                    PIX
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#9AA8A0]" />
                </div>
              </button>

              {/* 2. Ícone "Plano de Liderança" */}
              <button
                onClick={() => handleSelectTab('leadership')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  currentTab === 'leadership'
                    ? 'bg-[#0e2a1b]/60 border-[#39FF88] text-[#39FF88]'
                    : 'bg-[#111815]/80 hover:bg-[#111815] border-[#18211D] text-white hover:border-[#00B95A]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#08100C] border border-[#18211D] text-[#C9A24D]">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">
                      Plano de Liderança
                    </div>
                    <div className="text-[10px] text-[#9AA8A0] font-mono mt-0.5">
                      Ranks executivos e premiações
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/30 font-bold">
                    RANKS
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#9AA8A0]" />
                </div>
              </button>

              {/* 3. Ícone "Suporte" */}
              <a
                href={`https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20estou%20no%20Backoffice%20AMX%20e%20preciso%20de%20atendimento.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseMenu}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#111815]/80 hover:bg-[#111815] border border-[#18211D] hover:border-[#00B95A]/40 text-white transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#08100C] border border-[#18211D] text-[#39FF88]">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">
                      Suporte Oficial 24/7
                    </div>
                    <div className="text-[10px] text-[#9AA8A0] font-mono mt-0.5">
                      {officialPhone} • WhatsApp Oficial
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#39FF88]" />
                  <ChevronRight className="w-4 h-4 text-[#9AA8A0]" />
                </div>
              </a>

              {/* 4. Ícone "Configurações & CPF" */}
              <button
                onClick={() => handleSelectTab('settings')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  currentTab === 'settings'
                    ? 'bg-[#0e2a1b]/60 border-[#39FF88] text-[#39FF88]'
                    : 'bg-[#111815]/80 hover:bg-[#111815] border-[#18211D] text-white hover:border-[#00B95A]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#08100C] border border-[#18211D] text-[#9AA8A0]">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">
                      Configurações & CPF
                    </div>
                    <div className="text-[10px] text-[#9AA8A0] font-mono mt-0.5">
                      Chave PIX e dados de segurança
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#9AA8A0]" />
              </button>
            </div>

            {/* 5. Ícone "Idiomas: EN, ES e PT br com futura implementação das chaves" */}
            <div className="p-3.5 rounded-2xl bg-[#08100C] border border-[#18211D] space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#39FF88]" />
                  <span className="text-xs font-bold text-white">
                    Idiomas: EN, ES e PT-BR
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#18211D] text-[#E7C873] border border-[#C9A24D]/30">
                  <Key className="w-2.5 h-2.5" />
                  <span>Chaves em breve</span>
                </div>
              </div>

              {/* Language Selection Pills */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {languages.map((lang) => {
                  const isSelected = selectedLanguage === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0e2a1b] border-[#39FF88] text-white shadow-[0_0_10px_rgba(57,255,136,0.15)]'
                          : 'bg-[#111815] border-[#18211D] text-[#9AA8A0] hover:text-white'
                      }`}
                    >
                      <span className="text-base leading-none mb-1">{lang.flag}</span>
                      <span className="font-mono text-[10px] font-bold">
                        {lang.code.toUpperCase()}
                      </span>
                      {lang.status === 'active' ? (
                        <span className="text-[8px] font-mono text-[#39FF88] flex items-center gap-0.5 mt-0.5">
                          <Check className="w-2 h-2" /> Ativo
                        </span>
                      ) : (
                        <span className="text-[8px] font-mono text-[#9AA8A0] mt-0.5">
                          Chave i18n
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Notice regarding future implementation of language keys */}
              <p className="text-[10px] font-mono text-[#9AA8A0] leading-relaxed pt-1">
                <span className="text-[#39FF88] font-bold">Nota técnica:</span> Suporte aos idiomas EN (Inglês) e ES (Espanhol) preparado para a futura integração das chaves de tradução multilíngue.
              </p>
            </div>

            {/* 6. Ícone "Sair" */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onCloseMenu();
                  onExitBackoffice();
                }}
                className="w-full flex items-center justify-center gap-2.5 p-3 rounded-xl bg-transparent hover:bg-[#111815] border border-[#18211D] hover:border-[#C9A24D]/50 text-[#C9A24D] hover:text-[#E7C873] text-xs font-mono font-bold transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-[#C9A24D]" />
                <span>Sair / Voltar ao Site Institucional</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
