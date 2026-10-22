import React, { useEffect, useState } from 'react';
import { AmxLogo } from './AmxLogo.tsx';

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase(1); // switch to "INITIALIZING AI SYSTEM..."
    }, 600);

    const t2 = setTimeout(() => {
      setPhase(2); // "SYSTEM ONLINE • 06/03/2027"
    }, 1200);

    const t3 = setTimeout(() => {
      setFadeOut(true);
    }, 1700);

    const t4 = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050807] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-[#087A45]/20 blur-[90px] animate-pulse-slow pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Emblem with circulating radar line */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00B95A]/30 to-[#39FF88]/20 blur-xl opacity-75 animate-pulse" />
          <AmxLogo variant="symbol" size="xl" />
          
          {/* Circular laser scanner trace */}
          <div className="absolute -inset-2 rounded-full border border-[#39FF88]/40 border-t-transparent border-l-transparent animate-spin" />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 font-sans">
          AMX <span className="text-[#39FF88]">AIBOT</span> TRADING
        </h1>

        {/* Status text according to specs */}
        <div className="h-6 flex items-center justify-center">
          {phase === 0 && (
            <p className="font-mono text-xs text-[#9AA8A0] tracking-widest uppercase animate-pulse">
              LOADING ARCHITECTURE...
            </p>
          )}
          {phase === 1 && (
            <p className="font-mono text-xs text-[#39FF88] tracking-widest uppercase animate-pulse">
              INITIALIZING AI SYSTEM...
            </p>
          )}
          {phase >= 2 && (
            <div className="flex items-center gap-2 font-mono text-xs text-[#39FF88] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-ping" />
              <span>SYSTEM READY</span>
            </div>
          )}
        </div>

        {/* High-tech progress bar */}
        <div className="w-48 h-1 bg-[#111815] rounded-full mt-6 overflow-hidden border border-[#00B95A]/20">
          <div
            className="h-full bg-gradient-to-r from-[#087A45] via-[#00B95A] to-[#39FF88] transition-all duration-700 ease-out"
            style={{ width: phase === 0 ? '30%' : phase === 1 ? '75%' : '100%' }}
          />
        </div>

        {/* Skip button for immediate access */}
        <button
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => onFinish && onFinish(), 300);
          }}
          className="mt-8 text-[11px] font-mono text-[#9AA8A0]/70 hover:text-white transition-colors underline underline-offset-4"
        >
          Pular introdução
        </button>
      </div>
    </div>
  );
};
