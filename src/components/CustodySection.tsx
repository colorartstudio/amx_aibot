import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Key, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  Clock,
  Coins,
  FileText
} from 'lucide-react';

export const CustodySection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'tier1' | 'tier2'>('tier1');

  const custodyFeatures = [
    { label: 'Resgate a qualquer momento', desc: 'Flexibilidade e liquidez conforme os termos operacionais' },
    { label: 'Taxas administrativas', desc: 'Estrutura clara e transparente sem custos ocultos' },
    { label: 'Saque', desc: 'Mecanismo ágil de solicitação e processamento via PIX' },
    { label: 'Pontuação progressiva', desc: 'Geração de pontos vinculada ao volume e permanência' },
    { label: 'Benefícios exclusivos', desc: 'Acesso a relatórios avançados de acompanhamento' },
    { label: 'Valor mínimo de saque', desc: 'Acessibilidade estruturada para movimentações' },
    { label: 'Vários saques ao dia', desc: 'Permissões diárias conforme parametrização de segurança' },
    { label: 'Uma conta por CPF', desc: 'Segurança fiduciária e conformidade cadastral' },
  ];

  return (
    <section id="custodia" className="relative py-20 lg:py-28 bg-[#08100C] overflow-hidden">
      {/* Background Cyber Vault Glows and Gold/Green accents */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#087A45]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A24D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header as specified */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#C9A24D]/40 text-xs font-mono text-[#E7C873] uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-[#C9A24D]" />
            SEGURANÇA & CUSTÓDIA
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            CUSTÓDIA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#E7C873]">
              BOT EXECUTIVO
            </span>
          </h2>

          <p className="text-base sm:text-xl font-medium text-[#9AA8A0]">
            Controle, rastreamento e acompanhamento.
          </p>
        </div>

        {/* Vault Center Visual Graphic */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center justify-center p-6 rounded-3xl bg-[#111815]/90 border border-[#00B95A]/30 shadow-[0_0_40px_rgba(0,185,90,0.12)]">
            {/* Vault digital circle */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-[#39FF88]/40 flex items-center justify-center animate-spin-slow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050807] border border-[#C9A24D]/60 flex items-center justify-center shadow-[0_0_20px_rgba(201,162,77,0.2)]">
                <Lock className="w-7 h-7 text-[#E7C873]" />
              </div>
            </div>
            <div className="ml-5 text-left">
              <div className="font-mono text-xs text-[#39FF88] uppercase tracking-widest font-semibold">
                BLOCKCHAIN VAULT PROTOCOL
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                Rastreamento Criptografado de Ativos
              </div>
              <div className="text-xs text-[#9AA8A0] font-mono">
                Uma conta exclusiva por CPF cadastrado
              </div>
            </div>
          </div>
        </div>

        {/* The Two Custody Brackets as specified: 30 a 500 & 1000 a 30000 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Tier 1: CUSTÓDIAS 30 a 500 */}
          <div className="amx-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-[#00B95A]/30">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-[#08100C] border-l border-b border-[#00B95A]/30 font-mono text-xs text-[#39FF88] font-bold">
              FAIXA INICIAL
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#08100C] border border-[#00B95A]/40 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-[#39FF88]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#9AA8A0] tracking-widest uppercase">
                    CATEGORIA EXECUTIVA
                  </span>
                  <h3 className="text-xl font-extrabold text-white tracking-wide">
                    CUSTÓDIAS
                  </h3>
                </div>
              </div>

              {/* Bracket Value */}
              <div className="my-6 p-4 rounded-xl bg-[#08100C] border border-[#18211D] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#9AA8A0] font-mono">FAIXA DE PONTUAÇÃO</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-[#39FF88]">
                    30 a 500
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#00B95A]/15 border border-[#00B95A]/30 text-xs text-[#39FF88] font-mono">
                  ATIVO
                </span>
              </div>

              {/* Key Features List */}
              <ul className="space-y-3 mb-6">
                {[
                  'Resgate a qualquer momento conforme as diretrizes',
                  'Pontuação progressiva proporcional',
                  'Saque e compensação via PIX',
                  'Uma conta por CPF',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E9F1EC]">
                    <CheckCircle2 className="w-4 h-4 text-[#00B95A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#18211D] flex items-center justify-between text-xs font-mono text-[#9AA8A0]">
              <span>TAXAS ADMINISTRATIVAS APLICÁVEIS</span>
              <span className="text-[#39FF88]">CONSULTE AS CONDIÇÕES</span>
            </div>
          </div>

          {/* Tier 2: CUSTÓDIAS 1000 a 30000 (Gold accented) */}
          <div className="amx-card-gold p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-[#08100C] border-l border-b border-[#C9A24D]/40 font-mono text-xs text-[#E7C873] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24D]" />
              FAIXA AVANÇADA
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#08100C] border border-[#C9A24D]/40 flex items-center justify-center">
                  <Key className="w-6 h-6 text-[#E7C873]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C9A24D] tracking-widest uppercase">
                    CATEGORIA SENIOR
                  </span>
                  <h3 className="text-xl font-extrabold text-white tracking-wide">
                    CUSTÓDIAS
                  </h3>
                </div>
              </div>

              {/* Bracket Value */}
              <div className="my-6 p-4 rounded-xl bg-[#08100C] border border-[#18211D] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#9AA8A0] font-mono">FAIXA DE PONTUAÇÃO</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-[#E7C873]">
                    1000 a 30000
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C9A24D]/15 border border-[#C9A24D]/30 text-xs text-[#E7C873] font-mono">
                  EXCLUSIVE
                </span>
              </div>

              {/* Key Features List */}
              <ul className="space-y-3 mb-6">
                {[
                  'Benefícios e acompanhamento exclusivos',
                  'Pontuação progressiva acelerada',
                  'Vários saques ao dia (conforme limite diário)',
                  'Resgate a qualquer momento mediante regras vigentes',
                  'Uma conta por CPF e e-mail único',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E9F1EC]">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A24D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#18211D] flex items-center justify-between text-xs font-mono text-[#9AA8A0]">
              <span>BENEFÍCIOS EXCLUSIVOS</span>
              <span className="text-[#E7C873]">CONSULTE AS CONDIÇÕES</span>
            </div>
          </div>
        </div>

        {/* Informações Apresentadas no Material Grid as requested */}
        <div className="amx-card p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6 text-sm font-mono text-[#39FF88] uppercase tracking-wider font-semibold">
            <FileText className="w-4 h-4" />
            DIRETRIZES GERAIS DA CUSTÓDIA BOT EXECUTIVO
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {custodyFeatures.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#08100C] border border-[#18211D] hover:border-[#00B95A]/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00B95A]" />
                  {item.label}
                </div>
                <p className="text-xs text-[#9AA8A0] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#18211D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#9AA8A0]">
            <span className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#C9A24D]" />
              Consulte as condições e termos contratuais para detalhamento de cada operação.
            </span>
            <span className="text-[#39FF88]">PROTOCOLO AMX COMPLIANCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
