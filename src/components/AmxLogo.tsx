import React from 'react';

interface AmxLogoProps {
  variant?: 'full' | 'symbol' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showStatus?: boolean;
}

export const AmxLogo: React.FC<AmxLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showStatus = false,
}) => {
  const sizeMap = {
    sm: { symbol: 28, text: 'text-base', subtext: 'text-[9px]' },
    md: { symbol: 38, text: 'text-xl', subtext: 'text-[10px]' },
    lg: { symbol: 52, text: 'text-2xl', subtext: 'text-xs' },
    xl: { symbol: 72, text: 'text-4xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // High-tech geometric AMX Symbol
  const SymbolSvg = (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg
        width={currentSize.symbol}
        height={currentSize.symbol}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="amxGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#39FF88" />
            <stop offset="60%" stopColor="#00B95A" />
            <stop offset="100%" stopColor="#087A45" />
          </linearGradient>
          <linearGradient id="amxGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E7C873" />
            <stop offset="100%" stopColor="#C9A24D" />
          </linearGradient>
          <filter id="amxGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer geometric shield boundary */}
        <polygon
          points="30,4 54,16 54,44 30,56 6,44 6,16"
          stroke="#18211D"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Hexagonal circuit node line */}
        <polygon
          points="30,8 50,18 50,42 30,52 10,42 10,18"
          stroke="url(#amxGreenGrad)"
          strokeWidth="2"
          fill="#08100C"
          fillOpacity="0.8"
        />

        {/* Stylized 'A' and 'M' geometry intersection */}
        <path
          d="M17 40 L30 16 L43 40"
          stroke="url(#amxGreenGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#amxGlow)"
        />

        {/* Central chevron connector */}
        <path
          d="M22 30 L30 22 L38 30"
          stroke="#39FF88"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Apex gold node */}
        <circle cx="30" cy="16" r="2.5" fill="url(#amxGoldGrad)" />

        {/* Base circuit node points */}
        <circle cx="17" cy="40" r="2" fill="#00B95A" />
        <circle cx="43" cy="40" r="2" fill="#00B95A" />
        <circle cx="30" cy="44" r="1.5" fill="#39FF88" />
      </svg>
    </div>
  );

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {SymbolSvg}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111815]/90 border border-[#00B95A]/30 backdrop-blur-md shadow-[0_0_15px_rgba(57,255,136,0.12)] ${className}`}
      >
        <div className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse" />
        <span className="font-mono text-[11px] font-semibold tracking-wider text-[#39FF88]">
          AMX AIBOT TRADING
        </span>
        <span className="text-[#9AA8A0] text-[10px] hidden sm:inline">• TECNOLOGIA FINANCEIRA</span>
      </div>
    );
  }

  return (
    <div className={`group inline-flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      {SymbolSvg}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-extrabold tracking-tight text-white ${currentSize.text} font-sans`}>
            AMX
          </span>
          <span className="h-3 w-[1px] bg-[#00B95A]/50" />
          <span className="font-mono text-[11px] tracking-widest text-[#39FF88] font-bold">
            AIBOT
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`font-mono uppercase tracking-[0.25em] text-[#9AA8A0] font-medium ${currentSize.subtext}`}>
            TRADING
          </span>
          {showStatus && (
            <span className="inline-flex items-center gap-1 font-mono text-[9px] text-[#39FF88] tracking-wider pl-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF88] animate-pulse" />
              ONLINE
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
