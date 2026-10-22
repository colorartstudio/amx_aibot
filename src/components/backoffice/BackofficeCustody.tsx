import React, { useState } from 'react';
import { 
  Shield, 
  Plus, 
  ArrowDownLeft, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  QrCode, 
  Copy, 
  Check, 
  X,
  FileCheck,
  Lock
} from 'lucide-react';
import { CustodyPosition } from '../../types.ts';

interface BackofficeCustodyProps {
  custodies: CustodyPosition[];
  onAddCustody: (tier: '30-500' | '1000-30000', amount: number) => void;
  onRequestRedemption: (custodyId: string) => void;
}

export const BackofficeCustody: React.FC<BackofficeCustodyProps> = ({
  custodies,
  onAddCustody,
  onRequestRedemption,
}) => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isRedemptionModalOpen, setIsRedemptionModalOpen] = useState(false);
  const [selectedCustody, setSelectedCustody] = useState<CustodyPosition | null>(null);

  // New Custody state
  const [selectedTier, setSelectedTier] = useState<'30-500' | '1000-30000'>('1000-30000');
  const [pointsInput, setPointsInput] = useState<string>('1000');
  const [copiedPix, setCopiedPix] = useState(false);

  const totalPoints = custodies.reduce((acc, curr) => acc + curr.amount, 0);

  const handleConfirmAllocation = (e: React.FormEvent) => {
    e.preventDefault();
    const val = Number(pointsInput);
    if (!isNaN(val) && val > 0) {
      onAddCustody(selectedTier, val);
      setIsDepositModalOpen(false);
    }
  };

  const handleOpenRedemption = (c: CustodyPosition) => {
    setSelectedCustody(c);
    setIsRedemptionModalOpen(true);
  };

  const handleConfirmRedemption = () => {
    if (selectedCustody) {
      onRequestRedemption(selectedCustody.id);
      setIsRedemptionModalOpen(false);
    }
  };

  return (
    <div className="space-y-8 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#18211D]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase mb-2 whitespace-nowrap">
            <Lock className="w-3.5 h-3.5" />
            COFRE TECNOLÓGICO SEGURO
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Custódia Bot Executivo
          </h1>
          <p className="text-xs text-[#9AA8A0] font-mono mt-1">
            Controle, rastreamento contínuo e gestão automatizada com resgate disponível a qualquer momento.
          </p>
        </div>

        <button
          onClick={() => setIsDepositModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00B95A] to-[#39FF88] text-[#050807] font-bold text-xs font-mono shadow-[0_0_20px_rgba(57,255,136,0.3)] hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>NOVA ALOCAÇÃO DE CUSTÓDIA</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        <div className="amx-card p-5 sm:p-6">
          <span className="font-mono text-[10px] text-[#9AA8A0] uppercase block mb-1 whitespace-nowrap">
            SALDO TOTAL ALOCADO
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-black text-white whitespace-nowrap">
            {totalPoints.toLocaleString('pt-BR')}{' '}
            <span className="text-base text-[#39FF88]">pts</span>
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block whitespace-nowrap">
            Equivalência patrimonial sob custódia
          </span>
        </div>

        <div className="amx-card p-5 sm:p-6">
          <span className="font-mono text-[10px] text-[#39FF88] uppercase block mb-1 whitespace-nowrap">
            STATUS DO COFRE
          </span>
          <div className="font-mono text-xl font-bold text-white flex items-center gap-2 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39FF88] animate-pulse" />
            <span>ATIVO &amp; PROTEGIDO</span>
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block whitespace-nowrap">
            Operando 24 horas por dia, 7 dias por semana
          </span>
        </div>

        <div className="amx-card p-5 sm:p-6 sm:col-span-2 md:col-span-1">
          <span className="font-mono text-[10px] text-[#C9A24D] uppercase block mb-1 whitespace-nowrap">
            DIRETRIZ DE RESGATE
          </span>
          <div className="font-mono text-xl font-bold text-[#E7C873] whitespace-nowrap">
            A Qualquer Momento
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block whitespace-nowrap">
            Conforme taxas administrativas vigentes
          </span>
        </div>
      </div>

      {/* Active Custody Positions Table */}
      <div className="amx-card p-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
          <div>
            <h3 className="font-bold text-white text-base">POSIÇÕES DE CUSTÓDIA ATIVAS</h3>
            <p className="text-xs text-[#9AA8A0] font-mono">
              Registros individuais de aportes no Bot Executivo
            </p>
          </div>
          <span className="font-mono text-xs text-[#39FF88]">
            {custodies.length} Contratos
          </span>
        </div>

        <div className="space-y-4">
          {custodies.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#08100C] border border-[#18211D] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111815] border border-[#00B95A]/30 flex items-center justify-center text-[#39FF88] shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-base">
                      Faixa {item.tier}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40">
                      {item.status === 'ACTIVE' ? 'EM OPERAÇÃO' : 'RESGATE SOLICITADO'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9AA8A0]">
                    <span>ID: {item.id}</span>
                    <span>•</span>
                    <span>Início: {item.startDate}</span>
                    <span>•</span>
                    <span>Taxa: {item.adminFee}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-6 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#18211D]">
                <div className="text-left lg:text-right font-mono">
                  <span className="text-[10px] text-[#9AA8A0] uppercase block">PONTOS</span>
                  <span className="text-xl font-black text-white">
                    {item.amount.toLocaleString('pt-BR')} pts
                  </span>
                </div>

                <button
                  onClick={() => handleOpenRedemption(item)}
                  disabled={item.status === 'REQUESTED_REDEMPTION'}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    item.status === 'REQUESTED_REDEMPTION'
                      ? 'bg-[#18211D] text-[#9AA8A0] cursor-not-allowed'
                      : 'bg-[#111815] hover:bg-[#18211D] border border-[#C9A24D]/40 text-[#E7C873] hover:border-[#C9A24D] cursor-pointer'
                  }`}
                >
                  {item.status === 'REQUESTED_REDEMPTION' ? 'Em Processamento' : 'Solicitar Resgate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Notice Callout */}
      <div className="p-5 rounded-2xl bg-[#08100C] border border-[#18211D] flex items-start gap-4">
        <FileCheck className="w-5 h-5 text-[#39FF88] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#9AA8A0] leading-relaxed">
          <span className="font-mono text-white font-bold block">
            REGULAMENTO DE CUSTÓDIA E RESGATES
          </span>
          <p>
            • Resgate a qualquer momento: O usuário tem o direito de solicitar a desmobilização de sua custódia, aplicando-se a taxa administrativa correspondente ao tempo de permanência.
          </p>
          <p>
            • Titularidade Exclusiva: Por diretriz de segurança e conformidade financeira, todas as liquidações são emitidas obrigatoriamente para a conta bancária do titular com o mesmo CPF.
          </p>
        </div>
      </div>

      {/* Modal: Nova Alocação de Custódia */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg amx-card p-6 sm:p-8 border-[#00B95A]/40 shadow-2xl">
            <button
              onClick={() => setIsDepositModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1">
              Nova Alocação em Custódia
            </h3>
            <p className="text-xs text-[#9AA8A0] font-mono mb-6">
              Selecione a faixa do Bot Executivo e defina a pontuação desejada.
            </p>

            <form onSubmit={handleConfirmAllocation} className="space-y-5">
              {/* Select Tier */}
              <div>
                <label className="block text-xs font-mono text-[#9AA8A0] mb-2">
                  FAIXA DO BOT EXECUTIVO
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTier('30-500');
                      setPointsInput('300');
                    }}
                    className={`p-3 rounded-xl border text-left font-mono transition-all ${
                      selectedTier === '30-500'
                        ? 'bg-[#111815] border-[#00B95A] text-white shadow-[0_0_10px_rgba(57,255,136,0.2)]'
                        : 'bg-[#08100C] border-[#18211D] text-[#9AA8A0]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#39FF88]">FAIXA INICIAL</div>
                    <div className="text-sm font-black text-white">30 a 500 pts</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTier('1000-30000');
                      setPointsInput('1000');
                    }}
                    className={`p-3 rounded-xl border text-left font-mono transition-all ${
                      selectedTier === '1000-30000'
                        ? 'bg-[#111815] border-[#C9A24D] text-white shadow-[0_0_10px_rgba(201,162,77,0.2)]'
                        : 'bg-[#08100C] border-[#18211D] text-[#9AA8A0]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#E7C873]">FAIXA EXECUTIVA</div>
                    <div className="text-sm font-black text-white">1000 a 30000 pts</div>
                  </button>
                </div>
              </div>

              {/* Enter Amount */}
              <div>
                <label className="block text-xs font-mono text-[#9AA8A0] mb-1.5">
                  QUANTIDADE DE PONTOS
                </label>
                <input
                  type="number"
                  min={selectedTier === '30-500' ? 30 : 1000}
                  max={selectedTier === '30-500' ? 500 : 30000}
                  required
                  value={pointsInput}
                  onChange={(e) => setPointsInput(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-[#08100C] border border-[#18211D] text-white font-mono text-sm focus:outline-none focus:border-[#00B95A]"
                />
                <span className="text-[10px] text-[#9AA8A0] font-mono mt-1 block">
                  {selectedTier === '30-500' ? 'Mínimo: 30 pts | Máximo: 500 pts' : 'Mínimo: 1.000 pts | Máximo: 30.000 pts'}
                </span>
              </div>

              {/* Simulated PIX QR Code & Key */}
              <div className="p-4 rounded-xl bg-[#08100C] border border-[#18211D] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9AA8A0]">MÉTODO DE COMPENSAÇÃO:</span>
                  <span className="text-[#39FF88] font-bold">PIX INSTANTÂNEO</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#050807] border border-[#18211D] flex items-center justify-between font-mono text-xs">
                  <span className="truncate max-w-[240px] text-[#9AA8A0]">
                    00020126360014BR.GOV.BCB.PIX0114amxaibotpix...
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setCopiedPix(true);
                      setTimeout(() => setCopiedPix(false), 2000);
                    }}
                    className="text-[#39FF88] hover:underline shrink-0 ml-2"
                  >
                    {copiedPix ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00B95A] to-[#39FF88] text-[#050807] font-mono text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(57,255,136,0.3)] hover:brightness-110 cursor-pointer"
              >
                Confirmar Alocação de Custódia
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Solicitar Resgate */}
      {isRedemptionModalOpen && selectedCustody && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg amx-card p-6 sm:p-8 border-[#C9A24D]/40 shadow-2xl">
            <button
              onClick={() => setIsRedemptionModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#08100C] text-[#9AA8A0] hover:text-white border border-[#18211D]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#C9A24D]/40 flex items-center justify-center text-[#E7C873]">
                <ArrowDownLeft className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Solicitar Resgate</h3>
                <span className="font-mono text-xs text-[#9AA8A0]">
                  Posição: {selectedCustody.id} (Faixa {selectedCustody.tier})
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#08100C] border border-[#18211D] space-y-2 mb-5 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-[#9AA8A0]">Valor alocado:</span>
                <span className="text-white font-bold">{selectedCustody.amount} pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9AA8A0]">Taxa administrativa:</span>
                <span className="text-[#C9A24D]">Conforme tabela de custódia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9AA8A0]">Destino fiduciário:</span>
                <span className="text-[#39FF88]">Conta Bancária do Titular</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#111815] border border-[#C9A24D]/30 flex items-center gap-2 text-xs text-[#E7C873] mb-6">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Uma conta por CPF. A compensação ocorrerá estritamente na conta vinculada ao mesmo CPF cadastrado.
              </span>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsRedemptionModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-[#08100C] border border-[#18211D] text-xs font-mono text-[#9AA8A0] hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmRedemption}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#C9A24D] to-[#E7C873] text-[#050807] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(201,162,77,0.3)] cursor-pointer"
              >
                Confirmar Resgate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
