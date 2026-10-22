import React from 'react';
import { 
  Coins, 
  Layers, 
  CircleDollarSign, 
  Building, 
  PieChart, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

export const DiversificationSection: React.FC = () => {
  const assets = [
    {
      name: 'BITCOIN',
      symbol: 'BTC',
      type: 'Criptoativo Primário',
      desc: 'Ativo digital descentralizado e pioneiro de liquidez mundial.',
      icon: Coins,
      accent: '#00B95A',
    },
    {
      name: 'ETHEREUM',
      symbol: 'ETH',
      type: 'Smart Contracts',
      desc: 'Infraestrutura global para contratos inteligentes e finanças descentralizadas.',
      icon: Layers,
      accent: '#39FF88',
    },
    {
      name: 'OURO',
      symbol: 'XAU',
      type: 'Reserva Tradicional',
      desc: 'Reserva fiduciária milenar de proteção contra volatilidade macroeconômica.',
      icon: CircleDollarSign,
      accent: '#C9A24D',
    },
    {
      name: 'IMÓVEIS',
      symbol: 'REAL ESTATE',
      type: 'Ativos Reais',
      desc: 'Lastro tangível, geração de renda patrimonial e diversificação estruturada.',
      icon: Building,
      accent: '#087A45',
    },
    {
      name: 'ETF',
      symbol: 'INDEX FUNDS',
      type: 'Fundos de Índice',
      desc: 'Cestas reguladas de ativos multissetoriais para equilíbrio de carteira.',
      icon: PieChart,
      accent: '#E7C873',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#087A45]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header as specified */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase tracking-wider mb-4">
            <PieChart className="w-3.5 h-3.5 text-[#39FF88]" />
            ESTRATÉGIA MULTIATRIMONIAL
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Diversificação faz parte da{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B95A] via-[#39FF88] to-[#C9A24D]">
              estratégia.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA8A0]">
            Explore diferentes classes de ativos e compreenda os riscos e características de cada mercado.
          </p>
        </div>

        {/* 5 Categories Grid as specified */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {assets.map((asset) => {
            const Icon = asset.icon;
            return (
              <div
                key={asset.name}
                className="amx-card p-6 flex flex-col justify-between group hover:border-[#39FF88]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#08100C] border border-[#18211D] flex items-center justify-center group-hover:border-[#00B95A] transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:text-[#39FF88] transition-colors" />
                    </div>
                    <span className="font-mono text-xs text-[#9AA8A0] font-bold">
                      {asset.symbol}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-[#39FF88] uppercase tracking-wider block mb-1">
                    {asset.type}
                  </span>

                  <h3 className="text-lg font-extrabold text-white tracking-wide uppercase mb-2">
                    {asset.name}
                  </h3>

                  <p className="text-xs text-[#9AA8A0] leading-relaxed">
                    {asset.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#18211D] flex items-center justify-between text-[10px] font-mono text-[#9AA8A0]">
                  <span>CATEGORIA</span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: asset.accent }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional risk advisory banner */}
        <div className="p-4 rounded-xl bg-[#08100C] border border-[#18211D] text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono text-[#9AA8A0]">
            * Cada mercado possui dinâmicas próprias de volatilidade, liquidez e regulação. A diversificação é uma prática recomendada para mitigação de riscos sistêmicos.
          </p>
        </div>
      </div>
    </section>
  );
};
