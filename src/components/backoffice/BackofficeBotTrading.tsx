import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Sliders, 
  ShieldCheck, 
  Activity, 
  Play, 
  Pause,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { BotTradeOrder } from '../../types.ts';

interface BackofficeBotTradingProps {
  orders: BotTradeOrder[];
}

export const BackofficeBotTrading: React.FC<BackofficeBotTradingProps> = ({ orders }) => {
  const [activePair, setActivePair] = useState<'BTC/USDT' | 'ETH/USDT' | 'SOL/USDT'>('BTC/USDT');
  const [strategyMode, setStrategyMode] = useState<'CONSERVADOR' | 'MODERADO' | 'DINAMICO'>('MODERADO');
  const [isBotPaused, setIsBotPaused] = useState(false);
  const [livePrice, setLivePrice] = useState(94120.50);

  // Simulate price ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrice((prev) => {
        const delta = (Math.random() - 0.48) * 15;
        return Number((prev + delta).toFixed(2));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#18211D]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
            MOTOR ALGORÍTMICO 24/7
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Terminal AIBOT Trading
          </h1>
          <p className="text-xs text-[#9AA8A0] font-mono mt-1">
            Monitoramento de ordens automatizadas, parametrização de estratégia e telemetria de mercado.
          </p>
        </div>

        {/* Bot Status & Control */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsBotPaused(!isBotPaused)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              isBotPaused
                ? 'bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]'
                : 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A] shadow-[0_0_15px_rgba(57,255,136,0.2)]'
            }`}
          >
            {isBotPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            <span>{isBotPaused ? 'REATIVAR AIBOT' : 'AIBOT EM OPERAÇÃO'}</span>
          </button>
        </div>
      </div>

      {/* Ticker & Pair Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { pair: 'BTC/USDT' as const, price: livePrice, change: '+2.45%', vol: '1.428 BTC' },
          { pair: 'ETH/USDT' as const, price: 3440.10, change: '+3.12%', vol: '14.820 ETH' },
          { pair: 'SOL/USDT' as const, price: 184.20, change: '+1.80%', vol: '84.200 SOL' },
        ].map((item) => (
          <button
            key={item.pair}
            onClick={() => setActivePair(item.pair)}
            className={`p-4 rounded-xl border text-left font-mono transition-all cursor-pointer ${
              activePair === item.pair
                ? 'bg-[#111815] border-[#39FF88] shadow-[0_0_15px_rgba(57,255,136,0.15)]'
                : 'bg-[#08100C] border-[#18211D] hover:border-[#00B95A]/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-white text-sm">{item.pair}</span>
              <span className="text-xs text-[#39FF88] font-bold">{item.change}</span>
            </div>
            <div className="text-xl font-black text-white">
              ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-[10px] text-[#9AA8A0] mt-1">Volume 24h: {item.vol}</div>
          </button>
        ))}
      </div>

      {/* Main Terminal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Candlestick & Graph Container (8 cols) */}
        <div className="lg:col-span-8 amx-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-white">{activePair}</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#08100C] text-[#39FF88] border border-[#00B95A]/30">
                  M15 • IA SCANNER
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9AA8A0]">
                <span>LATÊNCIA: 18ms</span>
                <span>•</span>
                <span className="text-[#39FF88]">EXECUÇÃO ULTRA-RÁPIDA</span>
              </div>
            </div>

            {/* Visual Candlestick Representation */}
            <div className="h-64 sm:h-72 w-full rounded-xl bg-[#050807] border border-[#18211D] p-4 relative overflow-hidden flex flex-col justify-between">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

              {/* Candles Simulation */}
              <div className="relative z-10 h-full flex items-end justify-between gap-1 sm:gap-2 px-2 pb-6">
                {[
                  { h: 45, type: 'up', buy: false },
                  { h: 58, type: 'up', buy: true },
                  { h: 35, type: 'down', buy: false },
                  { h: 70, type: 'up', buy: false },
                  { h: 50, type: 'down', buy: false },
                  { h: 62, type: 'up', buy: false },
                  { h: 80, type: 'up', buy: false },
                  { h: 40, type: 'down', buy: false },
                  { h: 85, type: 'up', buy: true },
                  { h: 60, type: 'down', buy: false },
                  { h: 90, type: 'up', buy: false },
                  { h: 75, type: 'down', buy: false },
                  { h: 95, type: 'up', buy: false, sell: true },
                ].map((candle, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full relative">
                    {candle.buy && (
                      <span className="absolute -top-1 font-mono text-[8px] px-1 rounded bg-[#00B95A] text-[#050807] font-black shadow-[0_0_8px_#39FF88]">
                        BUY
                      </span>
                    )}
                    {candle.sell && (
                      <span className="absolute -top-1 font-mono text-[8px] px-1 rounded bg-[#C9A24D] text-[#050807] font-black shadow-[0_0_8px_#C9A24D]">
                        SELL
                      </span>
                    )}
                    <div
                      className={`w-full max-w-[12px] rounded-sm transition-all duration-500 ${
                        candle.type === 'up'
                          ? 'bg-gradient-to-t from-[#087A45] to-[#39FF88] shadow-[0_0_8px_rgba(57,255,136,0.3)]'
                          : 'bg-gradient-to-t from-[#18211D] to-[#9AA8A0]'
                      }`}
                      style={{ height: `${candle.h}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Price Bar */}
              <div className="relative z-10 pt-2 border-t border-[#18211D] flex items-center justify-between text-[10px] font-mono text-[#9AA8A0]">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span className="text-[#39FF88] font-bold">AGORA (24/7)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#18211D] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#9AA8A0]">
            <span>Média Móvel EMA(20): $93.840</span>
            <span>RSI: 58.4 (Neutro-Comprador)</span>
            <span className="text-[#39FF88]">ALGORITMO CALIBRADO</span>
          </div>
        </div>

        {/* Strategy Control & Parameters (4 cols) */}
        <div className="lg:col-span-4 amx-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#18211D]">
              <Sliders className="w-5 h-5 text-[#39FF88]" />
              <h3 className="font-bold text-white text-base">PARAMETRIZAÇÃO</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#9AA8A0] mb-2">
                  MODO DE OPERAÇÃO
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'CONSERVADOR', label: 'Conservador', desc: 'Preservação de capital e stop-loss estrito' },
                    { id: 'MODERADO', label: 'Moderado (Recomendado)', desc: 'Equilíbrio ideal entre frequência e proteção' },
                    { id: 'DINAMICO', label: 'Dinâmico', desc: 'Maior frequência operacional em micro-tendências' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setStrategyMode(mode.id as any)}
                      className={`w-full p-3 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                        strategyMode === mode.id
                          ? 'bg-[#111815] border-[#00B95A] text-white shadow-[0_0_10px_rgba(57,255,136,0.15)]'
                          : 'bg-[#08100C] border-[#18211D] text-[#9AA8A0]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-bold text-white">{mode.label}</span>
                        {strategyMode === mode.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF88]" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#9AA8A0] leading-tight block">
                        {mode.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bot metrics */}
              <div className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D] space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">Assertividade Histórica:</span>
                  <span className="text-[#39FF88] font-bold">92.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">Stop-Loss Automático:</span>
                  <span className="text-white">Ativo (1.2%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9AA8A0]">Take-Profit Dinâmico:</span>
                  <span className="text-white">Ativo (2.4%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#18211D] text-[11px] font-mono text-[#9AA8A0] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00B95A] shrink-0" />
            <span>Gestão algorítmica sem intervenção manual emocional.</span>
          </div>
        </div>
      </div>

      {/* Orders Book Log */}
      <div className="amx-card p-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#18211D]">
          <div>
            <h3 className="font-bold text-white text-base">LIVRO DE ORDENS RECENTES DO AIBOT</h3>
            <p className="text-xs text-[#9AA8A0] font-mono">
              Execuções instantâneas automatizadas registradas na rede
            </p>
          </div>
          <span className="font-mono text-xs text-[#39FF88]">
            Últimas 24h
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#18211D] text-[#9AA8A0]">
                <th className="pb-3 font-medium">ORDEM</th>
                <th className="pb-3 font-medium">PAR</th>
                <th className="pb-3 font-medium">AÇÃO</th>
                <th className="pb-3 font-medium">VOLUME</th>
                <th className="pb-3 font-medium">PREÇO ENTRADA</th>
                <th className="pb-3 font-medium text-right">RESULTADO</th>
                <th className="pb-3 font-medium text-right">MOMENTO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18211D]">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-[#08100C]/60 transition-colors">
                  <td className="py-3 text-white font-bold">{ord.id}</td>
                  <td className="py-3 text-white">{ord.pair}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ord.type === 'BUY'
                          ? 'bg-[#00B95A]/20 text-[#39FF88] border border-[#00B95A]/40'
                          : 'bg-[#C9A24D]/20 text-[#E7C873] border border-[#C9A24D]/40'
                      }`}
                    >
                      {ord.type}
                    </span>
                  </td>
                  <td className="py-3 text-[#9AA8A0]">{ord.amount}</td>
                  <td className="py-3 text-white font-bold">
                    ${ord.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-3 text-right font-black text-[#39FF88]">
                    {ord.pnl}
                  </td>
                  <td className="py-3 text-right text-[#9AA8A0]">{ord.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
