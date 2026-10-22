import React, { useState } from 'react';
import { 
  Clock, 
  Repeat, 
  ShieldAlert, 
  Eye, 
  Activity, 
  BarChart3, 
  CheckCircle2,
  TrendingUp,
  Radio
} from 'lucide-react';

export const Trading247Section: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BTC' | 'ETH' | 'SOL'>('BTC');

  // Simulated candlestick series for visual high-tech trading representation
  const candleData = [
    { o: 88, h: 94, l: 86, c: 92, up: true, time: '10:00' },
    { o: 92, h: 96, l: 90, c: 95, up: true, time: '10:15' },
    { o: 95, h: 97, l: 89, c: 91, up: false, time: '10:30' },
    { o: 91, h: 93, l: 87, c: 88, up: false, time: '10:45' },
    { o: 88, h: 95, l: 88, c: 94, up: true, time: '11:00' }, // BUY signal
    { o: 94, h: 102, l: 93, c: 101, up: true, time: '11:15' },
    { o: 101, h: 104, l: 98, c: 103, up: true, time: '11:30' },
    { o: 103, h: 106, l: 99, c: 100, up: false, time: '11:45' }, // SELL signal
    { o: 100, h: 105, l: 98, c: 104, up: true, time: '12:00' },
    { o: 104, h: 110, l: 103, c: 109, up: true, time: '12:15' },
    { o: 109, h: 112, l: 106, c: 111, up: true, time: '12:30' },
    { o: 111, h: 115, l: 109, c: 114, up: true, time: '12:45' },
  ];

  const cards = [
    {
      title: 'Análise de mercado 24/7',
      desc: 'Varredura ininterrupta de dados em múltiplas exchanges globais de liquidez.',
      icon: Clock,
      stat: '24 HORAS / 7 DIAS',
    },
    {
      title: 'Entradas e saídas automatizadas',
      desc: 'Execuções parametrizadas sem intervenção emocional ou atrasos manuais.',
      icon: Repeat,
      stat: 'ORDENS MILISSEGUNDO',
    },
    {
      title: 'Gestão de risco',
      desc: 'Parametrização estrita de stops, alocação fracionada e proteção patrimonial.',
      icon: ShieldAlert,
      stat: 'LIMITES SISTEMATIZADOS',
    },
    {
      title: 'Monitoramento contínuo',
      desc: 'Supervisão técnica algorítmica de spreads, liquidez e integridade das rotas.',
      icon: Eye,
      stat: 'SUPERVISÃO INTEGRADA',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#087A45]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111815] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 text-[#39FF88] animate-pulse" />
            OPERAÇÃO EM TEMPO REAL
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Mercado em movimento.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#8CFFB2]">
              Tecnologia trabalhando.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Estratégias sistematizadas operando continuamente através de processos
            automatizados e gestão rigorosa de risco.
          </p>
        </div>

        {/* High-Tech Candlestick Graphic Representation */}
        <div className="amx-card p-4 sm:p-7 mb-12 overflow-hidden">
          {/* Chart Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#18211D]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#08100C] border border-[#00B95A]/30">
                <BarChart3 className="w-5 h-5 text-[#39FF88]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-white">
                    {activeTab}/USDT
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#087A45]/30 text-[#39FF88] font-mono text-[10px] border border-[#00B95A]/30">
                    AIBOT v4.2
                  </span>
                </div>
                <div className="text-xs text-[#9AA8A0] font-mono">
                  Sinal: Execução Estruturada • Timeframe: M15
                </div>
              </div>
            </div>

            {/* Pair Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#08100C] border border-[#18211D]">
              {(['BTC', 'ETH', 'SOL'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeTab === tab
                      ? 'bg-[#00B95A] text-[#050807] font-bold shadow-[0_0_10px_rgba(57,255,136,0.3)]'
                      : 'text-[#9AA8A0] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Candlestick Canvas SVG with BUY / SELL markers */}
          <div className="relative w-full h-64 sm:h-80 bg-[#08100C]/80 rounded-xl border border-[#18211D] p-4 flex flex-col justify-between overflow-hidden">
            {/* Background Price Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
              <div className="border-b border-dashed border-[#00B95A]/30 text-[10px] font-mono text-[#39FF88] text-right">
                $96,200.00
              </div>
              <div className="border-b border-dashed border-[#00B95A]/30 text-[10px] font-mono text-[#39FF88] text-right">
                $94,800.00
              </div>
              <div className="border-b border-dashed border-[#00B95A]/30 text-[10px] font-mono text-[#39FF88] text-right">
                $93,400.00
              </div>
              <div className="border-b border-dashed border-[#00B95A]/30 text-[10px] font-mono text-[#39FF88] text-right">
                $92,000.00
              </div>
            </div>

            {/* Candlestick Bars SVG */}
            <svg
              className="w-full h-full relative z-10"
              viewBox="0 0 600 240"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00B95A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#08100C" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Moving Average Line */}
              <path
                d="M 25,180 Q 150,160 250,130 T 450,90 T 575,60"
                fill="none"
                stroke="#39FF88"
                strokeWidth="2"
                strokeDasharray="4 2"
                className="opacity-70"
              />

              {/* Candlesticks */}
              {candleData.map((c, i) => {
                const x = 30 + i * 46;
                // scale values from 80-120 to Y 220-30
                const scaleY = (val: number) => 220 - ((val - 80) / 40) * 180;
                const yO = scaleY(c.o);
                const yC = scaleY(c.c);
                const yH = scaleY(c.h);
                const yL = scaleY(c.l);
                const rectY = Math.min(yO, yC);
                const rectH = Math.max(Math.abs(yO - yC), 4);
                const color = c.up ? '#00B95A' : '#73827B';
                const strokeColor = c.up ? '#39FF88' : '#9AA8A0';

                return (
                  <g key={i} className="group/candle">
                    {/* High-Low Wick */}
                    <line
                      x1={x}
                      y1={yH}
                      x2={x}
                      y2={yL}
                      stroke={strokeColor}
                      strokeWidth="1.5"
                    />
                    {/* Candle Body */}
                    <rect
                      x={x - 8}
                      y={rectY}
                      width="16"
                      height={rectH}
                      fill={c.up ? color : '#111815'}
                      stroke={strokeColor}
                      strokeWidth="1.5"
                      rx="2"
                    />

                    {/* BUY Marker at index 4 */}
                    {i === 4 && (
                      <g>
                        <rect
                          x={x - 22}
                          y={yL + 8}
                          width="44"
                          height="18"
                          rx="4"
                          fill="#00B95A"
                          className="shadow-[0_0_10px_#39FF88]"
                        />
                        <text
                          x={x}
                          y={yL + 21}
                          fill="#050807"
                          fontSize="10"
                          fontWeight="bold"
                          fontFamily="monospace"
                          textAnchor="middle"
                        >
                          BUY ▲
                        </text>
                      </g>
                    )}

                    {/* SELL Marker at index 7 */}
                    {i === 7 && (
                      <g>
                        <rect
                          x={x - 24}
                          y={yH - 24}
                          width="48"
                          height="18"
                          rx="4"
                          fill="#C9A24D"
                        />
                        <text
                          x={x}
                          y={yH - 11}
                          fill="#050807"
                          fontSize="10"
                          fontWeight="bold"
                          fontFamily="monospace"
                          textAnchor="middle"
                        >
                          SELL ▼
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Bottom Status Ticker inside Chart */}
            <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#9AA8A0] pt-2 border-t border-[#18211D]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-[#39FF88]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> STOP-LOSS PARAMETRIZADO
                </span>
                <span className="text-[#9AA8A0] hidden sm:inline">TAKE-PROFIT DINÂMICO</span>
              </div>
              <span className="text-[#C9A24D]">ROTA AUTOMATIZADA: SECURE_VAULT</span>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(card => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="amx-card p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#08100C] border border-[#00B95A]/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#39FF88]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#9AA8A0] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#18211D] font-mono text-[10px] text-[#39FF88] tracking-wider uppercase">
                  {card.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Risk Awareness Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-[#08100C]/70 border border-[#18211D] text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-[#9AA8A0]">
            * Gestão e supervisão técnica contínua. Toda operação no mercado de criptoativos envolve riscos inerentes à volatilidade.
          </p>
        </div>
      </div>
    </section>
  );
};
