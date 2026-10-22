import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Trophy, 
  Users, 
  ArrowUpRight, 
  ArrowDownLeft, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Wallet,
  Award,
  PlusCircle,
  Share2
} from 'lucide-react';
import { 
  UserProfile, 
  CustodyPosition, 
  TransactionRecord, 
  BotTradeOrder, 
  BackofficeTab 
} from '../../types.ts';

interface BackofficeDashboardProps {
  user: UserProfile;
  custodies: CustodyPosition[];
  transactions: TransactionRecord[];
  botOrders: BotTradeOrder[];
  onNavigateTab: (tab: BackofficeTab) => void;
  onOpenDepositModal: () => void;
  onOpenWithdrawModal: () => void;
}

export const BackofficeDashboard: React.FC<BackofficeDashboardProps> = ({
  user,
  custodies,
  transactions,
  botOrders,
  onNavigateTab,
  onOpenDepositModal,
  onOpenWithdrawModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [timeframe, setTimeframe] = useState<'7D' | '30D' | '1A'>('7D');
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; val: string; date: string } | null>(null);

  const referralLink = `https://amxaibot.com/join?ref=${user.referralCode || 'AMX884'}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const chartData = {
    '7D': {
      peak: '$24,850.40',
      points: [
        { x: 20, y: 175, val: '$21,120.00', date: '12/03' },
        { x: 75, y: 155, val: '$21,980.50', date: '13/03' },
        { x: 135, y: 168, val: '$21,650.20', date: '14/03' },
        { x: 195, y: 142, val: '$22,480.00', date: '15/03' },
        { x: 255, y: 154, val: '$22,100.80', date: '16/03' },
        { x: 315, y: 126, val: '$22,940.40', date: '17/03' },
        { x: 375, y: 136, val: '$22,710.00', date: '18/03' },
        { x: 435, y: 104, val: '$23,650.80', date: '19/03' },
        { x: 495, y: 92, val: '$24,110.00', date: '20/03' },
        { x: 575, y: 64, val: '$24,850.40', date: 'Hoje' },
      ],
      path: 'M 20 175 L 75 155 L 135 168 L 195 142 L 255 154 L 315 126 L 375 136 L 435 104 L 495 92 L 575 64',
      area: 'M 20 175 L 75 155 L 135 168 L 195 142 L 255 154 L 315 126 L 375 136 L 435 104 L 495 92 L 575 64 L 575 220 L 20 220 Z',
    },
    '30D': {
      peak: '$24,850.40',
      points: [
        { x: 20, y: 195, val: '$18,450.00', date: '21/02' },
        { x: 80, y: 180, val: '$19,200.00', date: '26/02' },
        { x: 150, y: 160, val: '$20,400.00', date: '03/03' },
        { x: 230, y: 168, val: '$20,100.00', date: '08/03' },
        { x: 320, y: 138, val: '$21,950.00', date: '13/03' },
        { x: 410, y: 122, val: '$22,800.00', date: '17/03' },
        { x: 490, y: 95, val: '$23,900.00', date: '19/03' },
        { x: 575, y: 64, val: '$24,850.40', date: 'Hoje' },
      ],
      path: 'M 20 195 L 80 180 L 150 160 L 230 168 L 320 138 L 410 122 L 490 95 L 575 64',
      area: 'M 20 195 L 80 180 L 150 160 L 230 168 L 320 138 L 410 122 L 490 95 L 575 64 L 575 220 L 20 220 Z',
    },
    '1A': {
      peak: '$24,850.40',
      points: [
        { x: 20, y: 205, val: '$5,000.00', date: 'Mar/25' },
        { x: 110, y: 185, val: '$8,200.00', date: 'Jun/25' },
        { x: 220, y: 165, val: '$12,400.00', date: 'Set/25' },
        { x: 340, y: 140, val: '$16,800.00', date: 'Dez/25' },
        { x: 460, y: 98, val: '$21,500.00', date: 'Fev/26' },
        { x: 575, y: 64, val: '$24,850.40', date: 'Hoje' },
      ],
      path: 'M 20 205 L 110 185 L 220 165 L 340 140 L 460 98 L 575 64',
      area: 'M 20 205 L 110 185 L 220 165 L 340 140 L 460 98 L 575 64 L 575 220 L 20 220 Z',
    },
  };

  const currentChart = chartData[timeframe];
  const lastPoint = currentChart.points[currentChart.points.length - 1];

  return (
    <div className="space-y-8 text-left">
      {/* Welcome & Security Banner */}
      <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-[#08100C] via-[#111815] to-[#08100C] border border-[#00B95A]/30 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2 z-10">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#39FF88] px-2.5 py-0.5 rounded-full bg-[#050807] border border-[#00B95A]/40 uppercase whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF88] animate-pulse" />
            CONTA INSTITUCIONAL VERIFICADA
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Olá, {user.name}
          </h1>
          {/* Responsive sub-info with no broken bullets or split words */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#9AA8A0] font-mono">
            <span className="whitespace-nowrap">CPF: {user.cpf}</span>
            <span className="text-[#39FF88]/40 hidden xs:inline">•</span>
            <span className="whitespace-nowrap">Titularidade Única</span>
            <span className="text-[#39FF88]/40 hidden xs:inline">•</span>
            <span className="whitespace-nowrap">Lançamento Oficial: 06/03/2027</span>
          </div>
        </div>

        {/* Quick Referral link banner - Unified clean horizontal bar on all screen sizes */}
        <div className="z-10 w-full md:w-auto">
          <div className="flex items-center justify-between bg-[#050807] border border-[#18211D] hover:border-[#00B95A]/50 rounded-xl p-1.5 pl-3 transition-colors max-w-full">
            <span className="text-[#39FF88] shrink-0 font-mono text-xs font-bold mr-2 whitespace-nowrap">
              LINK:
            </span>
            <input
              type="text"
              readOnly
              value={referralLink}
              onClick={handleCopyLink}
              className="bg-transparent font-mono text-xs text-white truncate focus:outline-none w-full sm:w-56 cursor-pointer select-all"
              title="Clique para copiar"
            />
            <button
              onClick={handleCopyLink}
              className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#08100C] border border-[#00B95A]/40 hover:border-[#39FF88] text-xs font-mono text-[#39FF88] transition-colors cursor-pointer ml-2 font-bold whitespace-nowrap"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Main Operational Metric Cards (Matched exactly to Gemini Canvas design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Card 1: Patrimônio Custodiado */}
        <div className="amx-card p-5 sm:p-6 flex flex-col justify-between border-[#18211D] hover:border-[#00B95A]/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] text-[#9AA8A0] uppercase tracking-wider font-medium whitespace-nowrap">
              PATRIMÔNIO CUSTODIADO
            </span>
            <Wallet className="w-4 h-4 text-[#00B95A]" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 whitespace-nowrap">
            $24,850.40
          </div>
          <div className="font-mono text-xs flex flex-wrap items-center gap-1">
            <span className="text-[#39FF88] font-bold whitespace-nowrap">≈ R$ 136.677,20</span>
            <span className="text-[#9AA8A0] whitespace-nowrap">(PIX Disponível)</span>
          </div>
        </div>

        {/* Card 2: Resultado Acumulado AIBOT */}
        <div className="amx-card p-5 sm:p-6 flex flex-col justify-between border-[#18211D] hover:border-[#39FF88]/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] text-[#9AA8A0] uppercase tracking-wider font-medium whitespace-nowrap">
              RESULTADO ACUMULADO AIBOT
            </span>
            <TrendingUp className="w-4 h-4 text-[#39FF88]" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-[#39FF88] tracking-tight mb-2 whitespace-nowrap">
            +$4,210.80
          </div>
          <div className="font-mono text-xs flex flex-wrap items-center gap-1">
            <span className="text-[#39FF88] font-semibold whitespace-nowrap">+17.84% acumulado</span>
            <span className="text-[#9AA8A0] whitespace-nowrap">• 24/7 Ativo</span>
          </div>
        </div>

        {/* Card 3: Bonificações de Rede */}
        <div className="amx-card p-5 sm:p-6 flex flex-col justify-between border-[#18211D] hover:border-[#C9A24D]/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] text-[#9AA8A0] uppercase tracking-wider font-medium whitespace-nowrap">
              BONIFICAÇÕES DE REDE
            </span>
            <Users className="w-4 h-4 text-[#E7C873]" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-[#E7C873] tracking-tight mb-2 whitespace-nowrap">
            R$ 3.450,00
          </div>
          <div className="font-mono text-xs flex flex-wrap items-center gap-1">
            <span className="text-[#C9A24D] font-semibold whitespace-nowrap">6 Níveis Ativos</span>
            <span className="text-[#9AA8A0] whitespace-nowrap">• Ciclo Vigente</span>
          </div>
        </div>

        {/* Card 4: Pontuação de Carreira */}
        <div className="amx-card p-5 sm:p-6 flex flex-col justify-between border-[#18211D] hover:border-[#00B95A]/40 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] text-[#9AA8A0] uppercase tracking-wider font-medium whitespace-nowrap">
              PONTUAÇÃO DE CARREIRA
            </span>
            <Award className="w-4 h-4 text-[#39FF88]" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 whitespace-nowrap">
            1.840 pts
          </div>
          <div className="font-mono text-xs text-[#39FF88] font-semibold whitespace-nowrap">
            Nível Executivo Qualificado
          </div>
        </div>
      </div>

      {/* Middle Grid: Desempenho da Carteira Custodiada + Operações Rápidas & Telemetria */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left: Desempenho da Carteira Custodiada Chart (8 cols) */}
        <div className="lg:col-span-8 amx-card p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          <div>
            {/* Chart Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div>
                <h2 className="font-mono text-base sm:text-lg font-bold text-white tracking-wider uppercase">
                  DESEMPENHO DA CARTEIRA CUSTODIADA
                </h2>
                <p className="font-mono text-xs text-[#9AA8A0]">
                  Evolução do valor patrimonial com trades do AIBOT
                </p>
              </div>

              {/* Timeframe Selector Pills */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#08100C] p-1 rounded-xl border border-[#18211D]">
                {(['7D', '30D', '1A'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => {
                      setTimeframe(tf);
                      setHoveredPoint(null);
                    }}
                    className={`font-mono text-xs px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      timeframe === tf
                        ? 'bg-[#111815] text-[#39FF88] border border-[#00B95A]/60 font-bold shadow-[0_0_10px_rgba(57,255,136,0.15)]'
                        : 'text-[#9AA8A0] hover:text-white border border-transparent'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Peak Badge on Right */}
            <div className="flex justify-end mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#08100C]/90 border border-[#00B95A]/40 font-mono text-xs">
                <span className="text-[#9AA8A0]">Pico Atual:</span>
                <span className="text-[#39FF88] font-bold">{currentChart.peak}</span>
              </div>
            </div>

            {/* Chart Canvas/SVG area */}
            <div className="relative w-full h-56 sm:h-64 my-2">
              <svg
                viewBox="0 0 600 240"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="custodyGlowArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00B95A" stopOpacity="0.35" />
                    <stop offset="65%" stopColor="#087A45" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#050807" stopOpacity="0.0" />
                  </linearGradient>
                  <filter id="neonLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Dashed Horizontal Guidelines */}
                <line x1="20" y1="64" x2="580" y2="64" stroke="#18211D" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="20" y1="110" x2="580" y2="110" stroke="#18211D" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="20" y1="160" x2="580" y2="160" stroke="#18211D" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="20" y1="210" x2="580" y2="210" stroke="#18211D" strokeDasharray="4 4" strokeWidth="1" />

                {/* Area under curve */}
                <path
                  d={currentChart.area}
                  fill="url(#custodyGlowArea)"
                />

                {/* Glowing curve stroke */}
                <path
                  d={currentChart.path}
                  fill="none"
                  stroke="#39FF88"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neonLineGlow)"
                />

                {/* Interactive Points on Hover */}
                {currentChart.points.map((pt, i) => (
                  <g key={i}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="12"
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(pt)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    {hoveredPoint?.x === pt.x && (
                      <>
                        <line
                          x1={pt.x}
                          y1={pt.y}
                          x2={pt.x}
                          y2="220"
                          stroke="#39FF88"
                          strokeDasharray="2 2"
                          strokeWidth="1"
                          opacity="0.6"
                        />
                        <circle cx={pt.x} cy={pt.y} r="5" fill="#39FF88" />
                        <circle cx={pt.x} cy={pt.y} r="9" fill="none" stroke="#39FF88" strokeWidth="1.5" />
                      </>
                    )}
                  </g>
                ))}

                {/* Last point active pulse */}
                <circle cx={lastPoint.x} cy={lastPoint.y} r="4.5" fill="#39FF88" className="animate-pulse" />
                <circle cx={lastPoint.x} cy={lastPoint.y} r="8.5" fill="none" stroke="#39FF88" strokeWidth="1.5" opacity="0.6" />
              </svg>

              {/* Hover Tooltip display */}
              {hoveredPoint && (
                <div
                  className="absolute pointer-events-none -translate-x-1/2 -translate-y-full px-2.5 py-1 rounded-lg bg-[#08100C] border border-[#00B95A]/50 text-white font-mono text-[11px] shadow-lg z-20"
                  style={{
                    left: `${(hoveredPoint.x / 600) * 100}%`,
                    top: `${(hoveredPoint.y / 240) * 100}%`,
                  }}
                >
                  <div className="text-[#39FF88] font-bold">{hoveredPoint.val}</div>
                  <div className="text-[#9AA8A0] text-[9px]">{hoveredPoint.date}</div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="border-t border-[#18211D] pt-4 mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs">
            <span className="text-[#9AA8A0]">
              Estratégia Ativa: <strong className="text-white font-normal whitespace-nowrap">Breakout Multipar (BTC/ETH)</strong>
            </span>
            <span className="text-[#39FF88] font-bold whitespace-nowrap">
              Controle de Drawdown: 0.8% Stop Dinâmico
            </span>
          </div>
        </div>

        {/* Right: Operações Rápidas de Saldo & Telemetria Stack (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
          {/* Card 1: Operações Rápidas de Saldo */}
          <div className="amx-card p-5 space-y-3.5">
            <div className="font-mono text-[11px] text-[#9AA8A0] uppercase tracking-wider font-medium whitespace-nowrap">
              OPERAÇÕES RÁPIDAS DE SALDO
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Depositar PIX */}
              <button
                onClick={onOpenDepositModal}
                className="w-full bg-[#00B95A] hover:bg-[#39FF88] text-[#050807] font-mono font-black text-xs sm:text-sm rounded-xl py-3 px-2 sm:px-3 flex items-center justify-center gap-1.5 shadow-[0_0_18px_rgba(0,185,90,0.3)] transition-all cursor-pointer whitespace-nowrap"
              >
                <PlusCircle className="w-4 h-4 stroke-[2.5] shrink-0" />
                <span>Depositar PIX</span>
              </button>

              {/* Saque PIX */}
              <button
                onClick={onOpenWithdrawModal}
                className="w-full bg-[#08100C] hover:bg-[#111815] border border-[#C9A24D]/60 hover:border-[#E7C873] text-[#E7C873] font-mono font-bold text-xs sm:text-sm rounded-xl py-3 px-2 sm:px-3 flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <ArrowUpRight className="w-4 h-4 text-[#E7C873] shrink-0" />
                <span>Saque PIX</span>
              </button>
            </div>

            {/* Gerenciar Faixas de Custódia Button */}
            <button
              onClick={() => onNavigateTab('custody')}
              className="w-full bg-[#08100C] hover:bg-[#111815] border border-[#18211D] hover:border-[#00B95A]/50 text-white font-mono text-xs rounded-xl py-3 px-3.5 sm:px-4 flex items-center justify-between transition-all cursor-pointer group"
            >
              <span className="truncate">Faixas de Custódia (30 a 30.000 pts)</span>
              <span className="text-[#39FF88] group-hover:translate-x-1 transition-transform font-bold shrink-0 ml-2">→</span>
            </button>
          </div>

          {/* Card 2: Motor do Bot Status Telemetry */}
          <div className="amx-card p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#9AA8A0] shrink-0 whitespace-nowrap">MOTOR DO BOT:</span>
              <div className="flex items-center gap-1.5 text-[#39FF88] font-bold shrink-0 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
                <span>EXECUTANDO 24/7</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[#9AA8A0] shrink-0 whitespace-nowrap">LATÊNCIA DE REDE:</span>
              <span className="text-white font-medium text-right shrink-0 whitespace-nowrap">
                12ms (Bybit Institutional)
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[#9AA8A0] shrink-0 whitespace-nowrap">CONTA AUDITADA:</span>
              <span className="text-[#E7C873] font-bold text-right shrink-0 whitespace-nowrap">
                1 CPF / 1 E-mail
              </span>
            </div>
          </div>

          {/* Card 3: Seu Link de Indicação */}
          <div className="amx-card p-5 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-1.5 text-[#C9A24D] font-bold">
                <Share2 className="w-3.5 h-3.5" />
                <span>Seu Link de Indicação</span>
              </div>
              <span className="text-[#9AA8A0]">Nível 1 (10%)</span>
            </div>

            <div className="bg-[#050807] border border-[#18211D] rounded-xl p-1.5 pl-3 flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-[#9AA8A0] truncate">
                {referralLink}
              </span>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-[#111815] border border-[#18211D] hover:border-[#00B95A]/50 hover:text-[#39FF88] font-mono text-xs text-white transition-all cursor-pointer shrink-0 flex items-center gap-1"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-[#39FF88]" /> : null}
                <span>{copiedLink ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Live AIBOT Feed & Custody Position Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* AIBOT Live Trading Telemetry (7 cols) */}
        <div className="lg:col-span-7 amx-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#08100C] border border-[#00B95A]/30 flex items-center justify-center text-[#39FF88]">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base">AIBOT TRADING EM TEMPO REAL</h3>
                    <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-ping" />
                  </div>
                  <span className="font-mono text-[11px] text-[#9AA8A0]">
                    Algoritmo de Identificação e Execução Contínua
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('bot')}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#39FF88] hover:underline"
              >
                <span>Terminal Completo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Orders Feed */}
            <div className="space-y-2.5">
              {botOrders.slice(0, 4).map((order) => (
                <div
                  key={order.id}
                  className="p-3 rounded-xl bg-[#08100C] border border-[#18211D] flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        order.type === 'BUY'
                          ? 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40'
                          : 'bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/40'
                      }`}
                    >
                      {order.type}
                    </span>
                    <div>
                      <span className="text-white font-bold">{order.pair}</span>
                      <span className="text-[#9AA8A0] text-[10px] ml-2">({order.amount})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#9AA8A0] hidden sm:inline">{order.time}</span>
                    <span className="text-white font-bold">${order.price.toLocaleString('en-US')}</span>
                    <span className="text-[#39FF88] font-bold">{order.pnl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#18211D] flex items-center justify-between text-[11px] font-mono text-[#9AA8A0]">
            <span>Taxa de assertividade média: 92.4%</span>
            <span className="text-[#39FF88]">LATÊNCIA: 18ms</span>
          </div>
        </div>

        {/* Active Custody Status & Rules reminder (5 cols) */}
        <div className="lg:col-span-5 amx-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#39FF88]" />
                <h3 className="font-bold text-white text-base">CUSTÓDIA ATIVA</h3>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/30">
                PROTEGIDA
              </span>
            </div>

            <div className="space-y-3 mb-4">
              {custodies.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-white">
                      Faixa {item.tier}
                    </span>
                    <span className="font-mono text-xs text-[#39FF88] font-black">
                      {item.amount.toLocaleString('pt-BR')} pts
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#9AA8A0]">
                    <span>Início: {item.startDate}</span>
                    <span className="text-[#E7C873]">Resgate sob demanda</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-[#111815] border border-[#00B95A]/20 flex items-start gap-2.5 text-xs text-[#9AA8A0]">
              <AlertCircle className="w-4 h-4 text-[#C9A24D] shrink-0 mt-0.5" />
              <span>
                Resgate a qualquer momento respeitando a tabela de taxa administrativa e titularidade única por CPF.
              </span>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#18211D] flex items-center justify-between">
            <button
              onClick={() => onNavigateTab('custody')}
              className="text-xs font-mono text-[#39FF88] hover:underline"
            >
              Gerenciar Custódias
            </button>
            <button
              onClick={onOpenDepositModal}
              className="px-3 py-1.5 rounded-lg bg-[#08100C] border border-[#00B95A]/40 text-[#39FF88] text-xs font-mono hover:border-[#39FF88]"
            >
              + Adicionar Pontos
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Financial Ledger */}
      <div className="amx-card p-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
          <div>
            <h3 className="font-bold text-white text-base">EXTRATO RECENTE DE MOVIMENTAÇÕES</h3>
            <p className="text-xs text-[#9AA8A0] font-mono">
              Transações financeiras, liquidações via PIX e bônus de rede
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('financial')}
            className="text-xs font-mono text-[#39FF88] hover:underline flex items-center gap-1"
          >
            <span>Extrato Completo</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#18211D] text-[#9AA8A0]">
                <th className="pb-3 font-medium">IDENTIFICADOR</th>
                <th className="pb-3 font-medium">TIPO</th>
                <th className="pb-3 font-medium">DATA</th>
                <th className="pb-3 font-medium">DESCRIÇÃO</th>
                <th className="pb-3 font-medium text-right">VALOR</th>
                <th className="pb-3 font-medium text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18211D]">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#08100C]/50 transition-colors">
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
    </div>
  );
};
