import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  Key, 
  Phone, 
  Mail, 
  Lock, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { UserProfile } from '../../types.ts';

interface BackofficeSettingsProps {
  user: UserProfile;
  onUpdatePixKey: (newKey: string) => void;
}

export const BackofficeSettings: React.FC<BackofficeSettingsProps> = ({
  user,
  onUpdatePixKey,
}) => {
  const [pixInput, setPixInput] = useState(user.pixKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const officialPhone = '(48) 99137-7469';
  const cleanPhone = '5548991377469';

  const handleSavePix = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePixKey(pixInput);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-8 text-left max-w-4xl">
      {/* Header Banner */}
      <div className="pb-6 border-b border-[#18211D]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          SEGURANÇA E CONFORMIDADE (LGPD)
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Configurações da Conta &amp; Segurança
        </h1>
        <p className="text-xs text-[#9AA8A0] font-mono mt-1">
          Validação cadastral intransferível e parâmetros de liquidação fiduciária.
        </p>
      </div>

      {/* Profile & CPF Compliance Card */}
      <div className="amx-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-[#18211D]">
          <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#00B95A]/40 flex items-center justify-center text-[#39FF88]">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">DADOS CADASTRAIS DO TITULAR</h3>
            <span className="font-mono text-xs text-[#39FF88]">
              Uma conta por CPF e e-mail • Diretriz de Segurança
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
          <div>
            <label className="text-[#9AA8A0] block mb-1">NOME COMPLETO</label>
            <div className="p-3 rounded-xl bg-[#08100C] border border-[#18211D] text-white font-bold">
              {user.name}
            </div>
          </div>

          <div>
            <label className="text-[#9AA8A0] block mb-1">CPF (VERIFICADO)</label>
            <div className="p-3 rounded-xl bg-[#08100C] border border-[#18211D] text-[#39FF88] font-bold flex items-center justify-between">
              <span>{user.cpf}</span>
              <ShieldCheck className="w-4 h-4 text-[#00B95A]" />
            </div>
          </div>

          <div>
            <label className="text-[#9AA8A0] block mb-1">E-MAIL VINCULADO</label>
            <div className="p-3 rounded-xl bg-[#08100C] border border-[#18211D] text-white">
              {user.email}
            </div>
          </div>

          <div>
            <label className="text-[#9AA8A0] block mb-1">DATA DE ADESÃO</label>
            <div className="p-3 rounded-xl bg-[#08100C] border border-[#18211D] text-[#9AA8A0]">
              {user.registeredAt}
            </div>
          </div>
        </div>
      </div>

      {/* PIX Management Card */}
      <div className="amx-card p-6 sm:p-8">
        <div className="flex items-center gap-3 pb-4 border-b border-[#18211D] mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#C9A24D]/40 flex items-center justify-center text-[#E7C873]">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">CHAVE PIX PARA LIQUIDAÇÃO DE SAQUES</h3>
            <span className="font-mono text-xs text-[#9AA8A0]">
              A conta recebedora deve possuir estritamente o mesmo CPF do titular
            </span>
          </div>
        </div>

        <form onSubmit={handleSavePix} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#9AA8A0] mb-1.5">
              CHAVE PIX ATUAL (E-MAIL, CPF, TELEFONE OU ALEATÓRIA)
            </label>
            <input
              type="text"
              required
              value={pixInput}
              onChange={(e) => setPixInput(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#08100C] border border-[#18211D] text-white font-mono text-sm focus:outline-none focus:border-[#00B95A]"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] font-mono text-[#9AA8A0]">
              * Alterações são auditadas pelo sistema de compliance antifraude.
            </span>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00B95A] to-[#39FF88] text-[#050807] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
            >
              {savedSuccess ? 'Chave Salva!' : 'Atualizar Chave PIX'}
            </button>
          </div>
        </form>
      </div>

      {/* Security & Official Support Desk */}
      <div className="p-6 rounded-2xl bg-[#08100C] border border-[#18211D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold text-white block mb-1">
            CANAL DE ATENDIMENTO CORPORATIVO AMX
          </span>
          <p className="text-xs text-[#9AA8A0] font-mono">
            Telefone oficial da apresentação: <strong>{officialPhone}</strong> (Disponível 24/7)
          </p>
        </div>

        <a
          href={`https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20no%20meu%20Backoffice%20AMX.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111815] border border-[#00B95A]/40 hover:border-[#39FF88] text-xs font-mono text-[#39FF88] hover:bg-[#00B95A]/10 transition-all shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Falar com Gerente de Conta</span>
        </a>
      </div>
    </div>
  );
};
