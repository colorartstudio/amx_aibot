import React, { useState } from 'react';
import { 
  Zap, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CheckCircle2, 
  Clock, 
  FileText, 
  AlertCircle, 
  X,
  Filter,
  Check
} from 'lucide-react';
import { UserProfile, TransactionRecord } from '../../types.ts';

interface BackofficeFinancialProps {
  user: UserProfile;
  transactions: TransactionRecord[];
  onRequestWithdrawal: (amount: number) => void;
}

export const BackofficeFinancial: React.FC<BackofficeFinancialProps> = ({
  user,
  transactions,
  onRequestWithdrawal,
}) => {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState<string>('500');
  const [activeFilter, setActiveFilter] = useState<'TODOS' | 'SAQUE_PIX' | 'BONUS_REDE'>('TODOS');
  const [selectedReceipt, setSelectedReceipt] = useState<TransactionRecord | null>(null);

  const filteredTransactions = transactions.filter((tx) => {
    if (activeFilter === 'TODOS') return true;
    return tx.type === activeFilter;
  });

  const handleConfirmWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    const val = Number(withdrawAmount);
    if (!isNaN(val) && val > 0 && val <= user.bonusBalance) {
      onRequestWithdrawal(val);
      setIsWithdrawModalOpen(false);
    }
  };

  return (
    <div className="space-y-8 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#18211D]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase mb-2">
            <Zap className="w-3.5 h-3.5" />
            SISTEMA DE LIQUIDAÇÃO INSTANTÂNEA
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Saques &amp; Extrato Financeiro
          </h1>
          <p className="text-xs text-[#9AA8A0] font-mono mt-1">
            Liquidação ágil via chave PIX para a conta bancária do titular cadastrado.
          </p>
        </div>

        <button
          onClick={() => setIsWithdrawModalOpen(true)}
          disabled={user.bonusBalance <= 0}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-black uppercase tracking-wider transition-all ${
            user.bonusBalance > 0
              ? 'bg-gradient-to-r from-[#00B95A] to-[#39FF88] text-[#050807] shadow-[0_0_20px_rgba(57,255,136,0.3)] hover:brightness-110 cursor-pointer'
              : 'bg-[#18211D] text-[#9AA8A0] cursor-not-allowed'
          }`}
        >
          <ArrowUpRight className="w-4 h-4" />
          <span>SOLICITAR SAQUE PIX</span>
        </button>
      </div>

      {/* Financial Balances Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="amx-card p-6 border-[#00B95A]/40 shadow-[0_0_25px_rgba(57,255,136,0.12)]">
          <span className="font-mono text-[10px] text-[#39FF88] uppercase font-bold block mb-1">
            SALDO DISPONÍVEL PARA SAQUE
          </span>
          <div className="font-mono text-3xl font-black text-white">
            R$ {user.bonusBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block">
            Proveniente de bonificações e rendimentos
          </span>
        </div>

        <div className="amx-card p-6">
          <span className="font-mono text-[10px] text-[#9AA8A0] uppercase block mb-1">
            TOTAL DE SAQUES REALIZADOS
          </span>
          <div className="font-mono text-3xl font-black text-[#E9F1EC]">
            R$ {user.totalWithdrawn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block">
            Liquidados com sucesso via PIX
          </span>
        </div>

        <div className="amx-card p-6">
          <span className="font-mono text-[10px] text-[#C9A24D] uppercase block mb-1">
            CHAVE PIX CADASTRADA
          </span>
          <div className="font-mono text-sm font-bold text-white truncate">
            {user.pixKey}
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block">
            Titular: {user.name} ({user.cpf})
          </span>
        </div>
      </div>

      {/* Rules Banner as per Section 12 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'VALOR MÍNIMO', desc: 'Consulte os valores vigentes aplicáveis na área do cliente' },
          { title: 'PRAZO DE COMPENSAÇÃO', desc: 'Liquidação ágil através da chave PIX cadastrada' },
          { title: 'REGRAS DE SAQUE', desc: 'Possibilidade de múltiplos saques ao dia conforme categoria' },
          { title: 'CONDIÇÕES', desc: 'Liberação após validação automática dos protocolos de segurança' },
        ].map((rule) => (
          <div key={rule.title} className="p-4 rounded-xl bg-[#08100C] border border-[#18211D]">
            <span className="font-mono text-[10px] text-[#39FF88] uppercase block mb-1 font-bold">
              {rule.title}
            </span>
            <p className="text-xs text-[#9AA8A0] leading-relaxed">
              {rule.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Transactions History with Filter */}
      <div className="amx-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#18211D]">
          <div>
            <h3 className="font-bold text-white text-base">HISTÓRICO FINANCEIRO COMPLETO</h3>
            <p className="text-xs text-[#9AA8A0] font-mono">
              Extrato detalhado com protocolo e comprovante de cada operação
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            {[
              { id: 'TODOS', label: 'Todos' },
              { id: 'SAQUE_PIX', label: 'Saques' },
              { id: 'BONUS_REDE', label: 'Bônus' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#00B95A] text-[#050807] font-bold shadow-[0_0_10px_rgba(57,255,136,0.3)]'
                    : 'text-[#9AA8A0] hover:text-white bg-[#08100C] border border-[#18211D]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#18211D] text-[#9AA8A0]">
                <th className="pb-3 font-medium">PROTOCOLO</th>
                <th className="pb-3 font-medium">TIPO</th>
                <th className="pb-3 font-medium">DATA</th>
                <th className="pb-3 font-medium">DESCRIÇÃO</th>
                <th className="pb-3 font-medium text-right">VALOR</th>
                <th className="pb-3 font-medium text-center">COMPROVANTE</th>
                <th className="pb-3 font-medium text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18211D]">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#08100C]/60 transition-colors">
                  <td className="py-3 text-white font-bold">{tx.id}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        tx.type === 'SAQUE_PIX'
                          ? 'bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/30'
                          : tx.type === 'BONUS_REDE'
                          ? 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/30'
                          : 'bg-[#18211D] text-white'
                      }`}
                    >
                      {tx.type === 'SAQUE_PIX' ? 'SAQUE PIX' : tx.type === 'BONUS_REDE' ? 'BÔNUS' : 'APORTE'}
                    </span>
                  </td>
                  <td className="py-3 text-[#9AA8A0]">{tx.date}</td>
                  <td className="py-3 text-[#E9F1EC] max-w-xs truncate">{tx.description}</td>
                  <td
                    className={`py-3 text-right font-black ${
                      tx.type === 'SAQUE_PIX' ? 'text-[#E7C873]' : 'text-[#39FF88]'
                    }`}
                  >
                    {tx.type === 'SAQUE_PIX' ? '- ' : '+ '}
                    R$ {tx.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-3 text-center">
                    <button
                      onClick={() => setSelectedReceipt(tx)}
                      className="text-[#39FF88] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ver</span>
                    </button>
                  </td>
                  <td className="py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[#39FF88]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{tx.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Solicitar Saque PIX */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg amx-card p-6 sm:p-8 border-[#00B95A]/40 shadow-2xl">
            <button
              onClick={() => setIsWithdrawModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#00B95A]/40 flex items-center justify-center text-[#39FF88]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Solicitar Saque PIX</h3>
                <span className="font-mono text-xs text-[#9AA8A0]">
                  Disponível: R$ {user.bonusBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <form onSubmit={handleConfirmWithdrawal} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-[#9AA8A0] mb-1.5">
                  VALOR DO SAQUE (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="50"
                  max={user.bonusBalance}
                  required
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-[#08100C] border border-[#18211D] text-white font-mono text-sm focus:outline-none focus:border-[#00B95A]"
                />
                <div className="flex gap-2 mt-2">
                  {[100, 500, 1000, user.bonusBalance].map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setWithdrawAmount(preset.toFixed(2))}
                      className="px-2.5 py-1 rounded bg-[#08100C] border border-[#18211D] text-[10px] font-mono text-[#9AA8A0] hover:text-white hover:border-[#00B95A]/40"
                    >
                      {idx === 3 ? 'Tudo' : `R$ ${preset}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* PIX Key confirmation */}
              <div className="p-4 rounded-xl bg-[#08100C] border border-[#18211D] space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">Destino PIX:</span>
                  <span className="text-white font-bold">{user.pixKey}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">Titular:</span>
                  <span className="text-white">{user.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">CPF:</span>
                  <span className="text-[#39FF88]">{user.cpf}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111815] border border-[#00B95A]/20 flex items-center gap-2 text-xs text-[#9AA8A0]">
                <AlertCircle className="w-4 h-4 text-[#39FF88] shrink-0" />
                <span>
                  Liquidação instantânea vinculada ao titular. Não é permitida transferência para contas de terceiros.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00B95A] to-[#39FF88] text-[#050807] font-mono text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(57,255,136,0.3)] hover:brightness-110 cursor-pointer"
              >
                Confirmar e Liquidar PIX
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Comprovante de Transação */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md amx-card p-6 sm:p-8 border-[#00B95A]/35 shadow-2xl">
            <button
              onClick={() => setSelectedReceipt(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-6 border-b border-[#18211D]">
              <div className="w-12 h-12 rounded-full bg-[#00B95A]/20 border border-[#39FF88] text-[#39FF88] flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] text-[#39FF88] uppercase tracking-widest font-bold">
                COMPROVANTE DE OPERAÇÃO
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                R$ {selectedReceipt.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h3>
              <span className="font-mono text-xs text-[#9AA8A0]">
                {selectedReceipt.status} • {selectedReceipt.date}
              </span>
            </div>

            <div className="py-4 space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-[#9AA8A0]">Protocolo:</span>
                <span className="text-white font-bold">{selectedReceipt.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9AA8A0]">Tipo:</span>
                <span className="text-white">{selectedReceipt.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9AA8A0]">Descrição:</span>
                <span className="text-white text-right max-w-[200px] truncate">
                  {selectedReceipt.description}
                </span>
              </div>
              {selectedReceipt.recipientKey && (
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">Chave Destino:</span>
                  <span className="text-[#39FF88]">{selectedReceipt.recipientKey}</span>
                </div>
              )}
              {selectedReceipt.txHash && (
                <div className="pt-2 border-t border-[#18211D]">
                  <span className="text-[#9AA8A0] block mb-1">Hash de Liquidação:</span>
                  <span className="text-[10px] text-[#9AA8A0] break-all block bg-[#08100C] p-2 rounded border border-[#18211D]">
                    {selectedReceipt.txHash}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#18211D] flex justify-end">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="w-full py-2.5 rounded-xl bg-[#111815] text-xs font-mono text-[#39FF88] border border-[#00B95A]/30 hover:border-[#39FF88]"
              >
                Fechar Comprovante
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
