import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Instagram, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { AmxLogo } from './AmxLogo.tsx';

interface FooterProps {
  onOpenTermsModal: (tab: 'terms' | 'privacy' | 'risk') => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTermsModal,
  onOpenContactModal,
}) => {
  const officialPhone = '(48) 99137-7469';
  const cleanPhone = '5548991377469';

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Custódia', href: '#custodia' },
    { label: 'Bonificações', href: '#bonificacoes' },
    { label: 'Liderança', href: '#lideranca' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20institucionais%20sobre%20a%20AMX%20AIBOT%20TRADING.`,
      active: true,
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      active: false,
    },
    {
      name: 'Telegram',
      icon: Send,
      href: 'https://t.me',
      active: false,
    },
    {
      name: 'E-mail',
      icon: Mail,
      href: 'mailto:contato@amxaibot.com',
      active: true,
    },
  ];

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="relative bg-[#050807]/90 backdrop-blur-md border-t border-[#00B95A]/15 pt-16 pb-12 overflow-hidden text-left">
      {/* Absolute minimal neon green trace on top of footer */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39FF88]/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#087A45]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="inline-block mb-4">
              <AmxLogo variant="full" size="md" />
            </a>
            <p className="text-xs sm:text-sm text-[#9AA8A0] leading-relaxed mb-6 max-w-sm">
              AMX AIBOT TRADING — tecnologia, inteligência artificial, automação e inovação aplicadas ao mercado de criptoativos.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08100C] border border-[#00B95A]/25 text-xs font-mono text-[#39FF88]">
              <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
              <span>LANÇAMENTO: 06/03/2027</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-[#9AA8A0] hover:text-[#39FF88] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              CONTATO INSTITUCIONAL
            </h4>
            <div className="space-y-3 text-xs text-[#9AA8A0]">
              <div className="p-3 rounded-xl bg-[#08100C] border border-[#18211D]">
                <div className="text-[10px] font-mono text-[#39FF88] uppercase mb-1">
                  ATENDIMENTO OFICIAL
                </div>
                <a
                  href={`tel:${officialPhone.replace(/\D/g, '')}`}
                  className="text-white font-mono text-sm sm:text-base font-bold hover:text-[#39FF88] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00B95A]" />
                  <span>{officialPhone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#111815] border border-[#00B95A]/25 hover:border-[#39FF88] flex items-center justify-center text-white hover:text-[#39FF88] transition-all duration-200"
                      title={s.name}
                      aria-label={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 4: Platform Access Action */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              ÁREA DO CLIENTE
            </h4>
            <button
              onClick={onOpenContactModal}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-[#050807] bg-gradient-to-r from-[#00B95A] to-[#39FF88] hover:brightness-110 shadow-[0_0_15px_rgba(57,255,136,0.25)] transition-all cursor-pointer mb-3"
            >
              <span>FALAR COM SUPORTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-[#9AA8A0] font-mono leading-tight">
              Atendimento especializado 24/7 via canais oficiais.
            </p>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-[#18211D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9AA8A0]/80">
          <div>
            © 2026 - 2027 AMX AIBOT TRADING. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenTermsModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos e Condições
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenTermsModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenTermsModal('risk')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Riscos
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
