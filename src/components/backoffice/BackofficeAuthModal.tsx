import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  UserCheck,
  Zap
} from 'lucide-react';
import { AmxLogo } from '../AmxLogo.tsx';

interface BackofficeAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnterBackoffice: () => void;
}

export const BackofficeAuthModal: React.FC<BackofficeAuthModalProps> = ({
  isOpen,
  onClose,
  onEnterBackoffice,
}) => {
  const [emailOrCpf, setEmailOrCpf] = useState('investidor.executivo@amxaibot.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onEnterBackoffice();
    }, 600);
  };

  const handleQuickDemo = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onEnterBackoffice();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md amx-card p-6 sm:p-8 border-[#00B95A]/40 shadow-[0_0_50px_rgba(57,255,136,0.2)] text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <AmxLogo variant="symbol" size="md" />
          <div>
            <span className="font-mono text-[10px] text-[#39FF88] uppercase tracking-wider block font-bold">
              ÁREA RESTRITA DO INVESTIDOR
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              Acessar Backoffice
            </h3>
          </div>
        </div>

        {/* 1-Click Executive Demo Access Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={handleQuickDemo}
            disabled={isAuthenticating}
            className="w-full p-4 rounded-xl bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#00B95A] text-[#050807] font-mono text-xs font-black uppercase tracking-wider shadow-[0_0_25px_rgba(57,255,136,0.35)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 fill-[#050807]" />
              <span>Entrar como Investidor Executivo</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="block text-center font-mono text-[10px] text-[#9AA8A0] mt-2">
            Acesso demonstrativo instantâneo a todos os módulos
          </span>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-[#18211D] w-full" />
          <span className="bg-[#111815] px-3 font-mono text-[10px] text-[#9AA8A0] uppercase shrink-0">
            OU LOGIN COM CREDENCIAIS
          </span>
          <div className="border-t border-[#18211D] w-full" />
        </div>

        {/* Standard Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-mono text-xs text-[#9AA8A0] mb-1.5">
              E-mail ou CPF do Titular
            </label>
            <input
              type="text"
              required
              value={emailOrCpf}
              onChange={(e) => setEmailOrCpf(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#18211D] text-white text-xs font-mono focus:outline-none focus:border-[#00B95A]"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-[#9AA8A0] mb-1.5">
              Senha de Acesso Criptografada
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#18211D] text-white text-xs font-mono focus:outline-none focus:border-[#00B95A]"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#9AA8A0]">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#00B95A]" />
              <span>Manter conectado</span>
            </label>
            <span className="text-[#39FF88] hover:underline cursor-pointer">
              Recuperar senha
            </span>
          </div>

          <button
            type="submit"
            disabled={isAuthenticating}
            className="w-full py-3 rounded-xl bg-[#08100C] border border-[#00B95A]/50 hover:border-[#39FF88] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#111815] cursor-pointer"
          >
            {isAuthenticating ? 'Autenticando na Rede...' : 'Entrar no Sistema'}
          </button>
        </form>

        {/* Security badge footer */}
        <div className="mt-6 pt-4 border-t border-[#18211D] flex items-center justify-center gap-2 text-[11px] font-mono text-[#9AA8A0]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00B95A]" />
          <span>Autenticação 256-bit com validação de CPF único</span>
        </div>
      </div>
    </div>
  );
};
