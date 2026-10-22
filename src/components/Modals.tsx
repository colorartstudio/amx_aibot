import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Calendar,
  FileText,
  Send
} from 'lucide-react';
import { AmxLogo } from './AmxLogo.tsx';

interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlatformModal: React.FC<PlatformModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct link fallback
    const msg = encodeURIComponent(`Olá, sou ${name || 'investidor'}. Gostaria de solicitar acesso antecipado à plataforma AMX AIBOT TRADING (Lançamento 06/03/2027). E-mail: ${email || 'não informado'}.`);
    setTimeout(() => {
      window.open(`https://wa.me/5548991377469?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg amx-card p-6 sm:p-8 border-[#00B95A]/40 shadow-[0_0_40px_rgba(57,255,136,0.2)] text-left">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <AmxLogo variant="symbol" size="md" />
          <div>
            <span className="font-mono text-[10px] text-[#39FF88] uppercase tracking-wider block font-bold">
              PORTAL INSTITUCIONAL
            </span>
            <h3 className="text-xl font-bold text-white uppercase">
              Acessar Plataforma AMX
            </h3>
          </div>
        </div>

        {/* Launch Info */}
        <div className="p-3.5 rounded-xl bg-[#08100C] border border-[#C9A24D]/35 flex items-center gap-3 mb-6 text-xs font-mono text-[#E7C873]">
          <Calendar className="w-5 h-5 text-[#C9A24D] shrink-0" />
          <span>
            Lançamento oficial programado para <strong>06/03/2027</strong>. Garanta seu cadastro antecipado institucional.
          </span>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#00B95A]/20 border border-[#39FF88] text-[#39FF88] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Solicitação Recebida!</h4>
            <p className="text-xs text-[#9AA8A0] mb-4">
              Redirecionando você para o atendimento oficial via WhatsApp...
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-[#111815] text-xs font-mono text-[#39FF88] border border-[#00B95A]/30"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-[#9AA8A0] mb-1.5">
                Nome completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#18211D] text-white text-sm focus:outline-none focus:border-[#00B95A]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[#9AA8A0] mb-1.5">
                E-mail corporativo / pessoal
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#18211D] text-white text-sm focus:outline-none focus:border-[#00B95A]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[#9AA8A0] mb-1.5">
                WhatsApp / Telefone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#08100C] border border-[#18211D] text-white text-sm focus:outline-none focus:border-[#00B95A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs text-[#050807] bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#00B95A] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(57,255,136,0.3)] cursor-pointer uppercase tracking-wider"
            >
              Solicitar Acesso Antecipado
            </button>

            <div className="text-center pt-2">
              <a
                href="https://wa.me/5548991377469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20institucionais%20sobre%20a%20AMX%20AIBOT%20TRADING."
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#39FF88] hover:underline flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Ou converse agora pelo WhatsApp oficial: (48) 99137-7469
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface TermsModalProps {
  isOpen: boolean;
  activeTab: 'terms' | 'privacy' | 'risk';
  onClose: () => void;
  onTabChange: (tab: 'terms' | 'privacy' | 'risk') => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl amx-card p-6 sm:p-8 border-[#00B95A]/30 shadow-2xl max-h-[85vh] flex flex-col text-left">
        <div className="flex items-center justify-between pb-4 border-b border-[#18211D]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#39FF88]" />
            <span className="font-bold text-white text-base">
              Documentação Legal &amp; Compliance
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 my-4 border-b border-[#18211D] pb-3">
          {[
            { id: 'terms', label: 'Termos e Condições' },
            { id: 'privacy', label: 'Privacidade' },
            { id: 'risk', label: 'Política de Riscos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === tab.id
                  ? 'bg-[#00B95A] text-[#050807] font-bold shadow-[0_0_10px_rgba(57,255,136,0.3)]'
                  : 'text-[#9AA8A0] hover:text-white bg-[#08100C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="overflow-y-auto space-y-4 text-xs text-[#9AA8A0] leading-relaxed pr-2 font-mono">
          {activeTab === 'terms' && (
            <div>
              <h4 className="text-sm font-bold text-white mb-2">1. TERMOS E CONDIÇÕES DE USO</h4>
              <p className="mb-2">
                O acesso e a utilização dos serviços, algoritmos e módulos tecnológicos fornecidos pela AMX AIBOT TRADING estão sujeitos à conformidade com os regulamentos cadastrais vigentes e às regras de segurança fiduciária.
              </p>
              <p className="mb-2">
                A plataforma opera sob o princípio de titularidade única (uma conta por CPF e e-mail), com saques e resgates direcionados estritamente à conta fiduciária do titular registrado.
              </p>
              <p>
                Os participantes devem manter seus dados de acesso em sigilo e observar as faixas de pontuação, taxas administrativas vigentes e prazos de compensação fiduciária descritos nos manuais operacionais.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div>
              <h4 className="text-sm font-bold text-white mb-2">2. POLÍTICA DE PRIVACIDADE E DADOS (LGPD)</h4>
              <p className="mb-2">
                A AMX AIBOT TRADING adota rigorosos protocolos criptográficos (padrão SHA-256 e chaves assimétricas) para o armazenamento e tratamento dos dados pessoais e cadastrais dos seus parceiros.
              </p>
              <p className="mb-2">
                Nenhuma informação cadastral ou fiduciária é compartilhada com terceiros sem consentimento expresso ou determinação legal formal.
              </p>
              <p>
                O titular pode solicitar a atualização, retificação ou exclusão de seus dados conforme os parâmetros e prerrogativas da legislação brasileira vigente.
              </p>
            </div>
          )}

          {activeTab === 'risk' && (
            <div>
              <h4 className="text-sm font-bold text-[#E7C873] mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#C9A24D]" />
                3. POLÍTICA DE RISCO INSTITUCIONAL
              </h4>
              <p className="mb-2 text-[#E9F1EC]">
                Mercados financeiros e criptoativos envolvem riscos significativos decorrentes de alta volatilidade, liquidez interbancária e fatores macroeconômicos globais.
              </p>
              <p className="mb-2">
                Resultados passados não representam nem garantem resultados futuros. A AMX AIBOT TRADING não realiza promessas de lucros fixos ou rentabilidades garantidas.
              </p>
              <p>
                Toda estratégia sistematizada busca gerenciar riscos através de regras matemáticas e parametrizações técnicas, devendo o usuário compreender as características de cada classe de ativos antes de qualquer operação.
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-[#18211D] mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#111815] text-xs font-mono text-[#39FF88] border border-[#00B95A]/30 hover:border-[#39FF88]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
