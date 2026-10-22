import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Activity } from 'lucide-react';
import { AmxLogo } from './AmxLogo.tsx';

interface HeaderProps {
  onOpenPlatformModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPlatformModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'A Tecnologia', href: '#tecnologia', id: 'tecnologia' },
    { label: 'Como Funciona', href: '#como-funciona', id: 'como-funciona' },
    { label: 'Custódia', href: '#custodia', id: 'custodia' },
    { label: 'Bonificações', href: '#bonificacoes', id: 'bonificacoes' },
    { label: 'Liderança', href: '#lideranca', id: 'lideranca' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050807]/90 backdrop-blur-[20px] border-b border-[#00B95A]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#050807]/75 backdrop-blur-[16px] border-b border-[#00B95A]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="focus:outline-none focus:ring-2 focus:ring-[#00B95A]/50 rounded-lg p-1"
          aria-label="AMX AIBOT TRADING Início"
        >
          <AmxLogo variant="full" size="md" showStatus={false} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2" aria-label="Navegação Principal">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 text-xs lg:text-[13px] font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                  isActive
                    ? 'text-[#39FF88] bg-[#111815] border border-[#00B95A]/30 shadow-[0_0_10px_rgba(57,255,136,0.15)]'
                    : 'text-[#9AA8A0] hover:text-white hover:bg-[#111815]/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Status Indicator */}
          <div className="hidden 2xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/20">
            <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
            <span className="font-mono text-[10px] text-[#39FF88] font-semibold tracking-wider">
              SYSTEM ONLINE
            </span>
          </div>

          {/* CTA Button */}
          <button
            id="header-cta-button"
            onClick={onOpenPlatformModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-[#050807] bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#00B95A] hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(57,255,136,0.35)] cursor-pointer"
          >
            <span className="tracking-wider uppercase font-bold">Acessar Plataforma</span>
            <ChevronRight className="w-4 h-4 text-[#050807] transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={onOpenPlatformModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-[#050807] bg-[#39FF88] shadow-[0_0_12px_rgba(57,255,136,0.3)]"
          >
            <span>PLATAFORMA</span>
          </button>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 rounded-xl bg-[#111815] border border-[#00B95A]/30 text-white hover:text-[#39FF88] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#39FF88]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden fixed inset-x-0 top-full bg-[#050807]/98 backdrop-blur-[24px] border-b border-[#00B95A]/30 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          {/* Status badge in mobile drawer */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
              <span className="font-mono text-xs text-[#39FF88] font-semibold tracking-wider">
                ● SYSTEM ONLINE
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#C9A24D]">
              LANÇAMENTO: 06/03/2027
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#39FF88] bg-[#111815] border border-[#00B95A]/40'
                      : 'text-[#9AA8A0] hover:text-white hover:bg-[#111815]/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#18211D]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlatformModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-[#050807] bg-gradient-to-r from-[#00B95A] to-[#39FF88] shadow-[0_0_20px_rgba(57,255,136,0.3)]"
            >
              <Activity className="w-4 h-4" />
              <span>ACESSAR PLATAFORMA</span>
            </button>
            <p className="text-center font-mono text-[11px] text-[#9AA8A0] mt-3">
              Telefone: (48) 99137-7469
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
