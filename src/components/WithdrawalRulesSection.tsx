import React from 'react';
import { ArrowDownLeft, ArrowUpRight, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';

export const WithdrawalRulesSection: React.FC = () => {
  const redemptionRules = [
    { title: 'Taxa de resgate', desc: 'Conforme tabela administrativa e período de custódia' },
    { title: 'Compensação fiduciária', desc: 'Processamento direto na conta bancária titular cadastrada' },
    { title: 'Limite de resgate', desc: 'Parametrização de conformidade e segurança da conta' },
    { title: 'Solicitação mínima', desc: 'Estabelecida no regulamento operacional da plataforma' },
    { title: 'Uma conta por CPF e e-mail', desc: 'Identificação intransferível para proteção patrimonial' },
  ];

  const withdrawalRules = [
    { title: 'Valor mínimo', desc: 'Consulte os valores vigentes aplicáveis na área do cliente' },
    { title: 'Prazo de compensação', desc: 'Liquidação ágil através de chave PIX cadastrada' },
    { title: 'Regras de saque', desc: 'Possibilidade de múltiplos saques ao dia conforme a categoria' },
    { title: 'Condições de compensação', desc: 'Liberação após validação automática dos protocolos de segurança' },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            <FileCheck className="w-3.5 h-3.5 text-[#39FF88]" />
            TRANSPARÊNCIA OPERACIONAL
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 uppercase">
            Regras de Resgate e Saque
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Diretrizes claras e padronizadas para movimentações e liquidação de valores.
          </p>
        </div>

        {/* Two Columns Grid as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Column 1: RESGATE */}
          <div className="amx-card p-6 sm:p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#18211D]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#00B95A]/30 flex items-center justify-center">
                    <ArrowDownLeft className="w-5 h-5 text-[#39FF88]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9AA8A0] uppercase tracking-wider">
                      TERMOS OPERACIONAIS
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      RESGATE
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#08100C] text-[#39FF88] border border-[#00B95A]/20">
                  DISPONÍVEL
                </span>
              </div>

              <div className="space-y-4">
                {redemptionRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00B95A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{rule.title}</h4>
                      <p className="text-xs text-[#9AA8A0] mt-0.5">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#18211D] flex items-center justify-between text-xs font-mono text-[#9AA8A0]">
              <span>TITULARIDADE OBRIGATÓRIA</span>
              <span className="text-[#39FF88]">COMPLIANCE BRASIL</span>
            </div>
          </div>

          {/* Column 2: SAQUES */}
          <div className="amx-card p-6 sm:p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#18211D]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#C9A24D]/30 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-[#E7C873]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#C9A24D] uppercase tracking-wider">
                      LIQUIDAÇÃO
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      SAQUES
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#08100C] text-[#E7C873] border border-[#C9A24D]/20">
                  PIX 24/7
                </span>
              </div>

              <div className="space-y-4">
                {withdrawalRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A24D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{rule.title}</h4>
                      <p className="text-xs text-[#9AA8A0] mt-0.5">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#18211D] flex items-center justify-between text-xs font-mono text-[#9AA8A0]">
              <span>PROCESSAMENTO SEGURO</span>
              <span className="text-[#E7C873]">PIX INSTANTÂNEO</span>
            </div>
          </div>
        </div>

        {/* Required Observation Notice as specified */}
        <div className="p-4 rounded-xl bg-[#111815] border border-[#00B95A]/30 flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-medium text-[#E9F1EC]">
          <AlertCircle className="w-4 h-4 text-[#C9A24D] shrink-0" />
          <span>
            Consulte os termos e condições vigentes antes de realizar qualquer operação.
          </span>
        </div>
      </div>
    </section>
  );
};
