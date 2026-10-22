import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Calendar, 
  Layers, 
  Terminal,
  TrendingUp,
  Radio
} from 'lucide-react';
import { AmxLogo } from './AmxLogo.tsx';

interface HeroProps {
  onExploreTechnology: () => void;
  onExploreHowItWorks: () => void;
  onOpenPlatformModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTechnology,
  onExploreHowItWorks,
  onOpenPlatformModal,
}) => {
  // Live simulated AI Bot ticker state for visual high-tech authenticity
  const [tickerPrice, setTickerPrice] = useState<number>(94280.50);
  const [pulseSignal, setPulseSignal] = useState<'BUY' | 'SCANNING' | 'EXECUTE'>('SCANNING');
  const [candlestickCount, setCandlestickCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 45;
      setTickerPrice(prev => Number((prev + delta).toFixed(2)));
      setCandlestickCount(prev => prev + 1);
    }, 2400);

    const signalInterval = setInterval(() => {
      const signals: ('BUY' | 'SCANNING' | 'EXECUTE')[] = ['SCANNING', 'BUY', 'EXECUTE', 'SCANNING'];
      const next = signals[Math.floor(Math.random() * signals.length)];
      setPulseSignal(next);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearInterval(signalInterval);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-transparent"
    >
      {/* Background Graphic: Subtle Grid & Ambient Glows (Animated Candlestick Loop rendered behind) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-35" />

        {/* Ambient Emerald & Neon Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-b from-[#087A45]/20 via-[#00B95A]/10 to-transparent blur-[120px]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#39FF88]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#063D25]/30 blur-[90px]" />

        {/* High-tech circuit path overlays */}
        <div className="absolute top-1/3 left-6 w-32 h-32 border-l border-t border-[#00B95A]/20 rounded-tl-3xl pointer-events-none hidden lg:block" />
        <div className="absolute bottom-1/4 right-8 w-40 h-40 border-r border-b border-[#39FF88]/20 rounded-br-3xl pointer-events-none hidden lg:block" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge: AMX AIBOT TRADING • TECNOLOGIA FINANCEIRA */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111815]/90 border border-[#00B95A]/30 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,136,0.15)] mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider text-[#39FF88] uppercase">
              AMX AIBOT TRADING
            </span>
            <span className="text-[#9AA8A0] text-xs font-medium">•</span>
            <span className="text-[#E9F1EC] text-xs font-medium tracking-wide">
              TECNOLOGIA FINANCEIRA
            </span>
          </div>

          {/* Central Logo Emblem Accent */}
          <div className="mb-4">
            <AmxLogo variant="symbol" size="lg" />
          </div>

          {/* Brand Name */}
          <h2 className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#9AA8A0] font-semibold mb-3">
            AMX AIBOT TRADING
          </h2>

          {/* Main Headline as specified */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto mb-6">
            INTELIGÊNCIA ARTIFICIAL.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#8CFFB2]">
              TECNOLOGIA.
            </span>{' '}
            <br className="hidden sm:inline" />
            TRADING AUTOMATIZADO.
          </h1>

          {/* Subheadline as specified */}
          <p className="text-base sm:text-lg md:text-xl text-[#9AA8A0] max-w-3xl mx-auto leading-relaxed mb-8">
            Uma nova geração de tecnologia aplicada ao mercado de criptoativos.
          </p>

          {/* Launch Date & System Status Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono mb-10">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#08100C] border border-[#C9A24D]/35 text-[#E7C873]">
              <Calendar className="w-4 h-4 text-[#C9A24D]" />
              <span>Lançamento previsto: <strong>06/03/2027</strong></span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#08100C] border border-[#00B95A]/30 text-[#39FF88]">
              <Radio className="w-4 h-4 text-[#39FF88] animate-pulse" />
              <span>● SYSTEM ONLINE</span>
            </div>
          </div>

          {/* CTAs as specified */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              id="hero-cta-primary"
              onClick={onExploreTechnology}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-[#050807] bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#00B95A] hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(57,255,136,0.35)] cursor-pointer"
            >
              <span>CONHEÇA A TECNOLOGIA</span>
              <ArrowUpRight className="w-4 h-4 text-[#050807]" />
            </button>

            <button
              id="hero-cta-secondary"
              onClick={onExploreHowItWorks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-[#111815] border border-[#00B95A]/35 hover:border-[#39FF88]/70 hover:bg-[#18211D] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <span>COMO FUNCIONA</span>
            </button>
          </div>

          {/* Live High-Tech Telemetry Terminal (Card showing 24/7 AI System Operation) */}
          <div className="w-full max-w-4xl mx-auto amx-card p-4 sm:p-6 text-left">
            {/* Terminal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#00B95A]/15">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#087A45]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C9A24D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00B95A]" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#39FF88]" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    AMX_CORE_AI // TELEMETRY TERMINAL
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#08100C] border border-[#00B95A]/30 text-[11px] font-mono text-[#39FF88]">
                  <Activity className="w-3 h-3 animate-spin" />
                  LATENCY: 8.4ms
                </span>
                <span className="text-[11px] font-mono text-[#9AA8A0] hidden sm:inline">
                  SHA-256 SECURED
                </span>
              </div>
            </div>

            {/* Terminal Body with simulated real-time data */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Pair 1 */}
              <div className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D]">
                <div className="flex items-center justify-between text-xs font-mono text-[#9AA8A0] mb-1">
                  <span>BTC/USDT</span>
                  <span className="text-[#39FF88] flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +2.48%
                  </span>
                </div>
                <div className="text-xl font-mono font-bold text-white tracking-tight">
                  ${tickerPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#9AA8A0] mt-1.5">
                  <span>SIGNAL: {pulseSignal}</span>
                  <span className="text-[#39FF88]">AI CONFIDENCE: 98.6%</span>
                </div>
              </div>

              {/* Pair 2 */}
              <div className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D]">
                <div className="flex items-center justify-between text-xs font-mono text-[#9AA8A0] mb-1">
                  <span>ETH/USDT</span>
                  <span className="text-[#39FF88] flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +1.92%
                  </span>
                </div>
                <div className="text-xl font-mono font-bold text-white tracking-tight">
                  $3,428.15
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#9AA8A0] mt-1.5">
                  <span>STRATEGY: MOMENTUM</span>
                  <span className="text-[#C9A24D]">RISK: CONSERVATIVE</span>
                </div>
              </div>

              {/* Bot Protocol Status */}
              <div className="p-3.5 rounded-xl bg-[#08100C] border border-[#18211D]">
                <div className="flex items-center justify-between text-xs font-mono text-[#9AA8A0] mb-1">
                  <span>STATUS DO SISTEMA</span>
                  <span className="text-[#39FF88]">OPERACIONAL</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white mt-1">
                  <ShieldCheck className="w-4 h-4 text-[#00B95A]" />
                  <span>Custódia Integrada</span>
                </div>
                <div className="text-[10px] font-mono text-[#9AA8A0] mt-2">
                  EXECUÇÕES 24/7 • GESTÃO DE RISCO
                </div>
              </div>
            </div>

            {/* Institutional Disclaimer under Terminal */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9AA8A0]/80 pt-2 border-t border-[#18211D]">
              <span>* Sistema automatizado via algoritmos e modelos de inteligência de mercado.</span>
              <button
                onClick={onOpenPlatformModal}
                className="text-[#39FF88] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
              >
                Conectar ao Ecossistema <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
