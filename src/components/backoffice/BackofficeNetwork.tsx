import React, { useState } from 'react';
import { 
  Users, 
  Share2, 
  Copy, 
  Check, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Search,
  TrendingUp, 
  UserCheck 
} from 'lucide-react';
import { UserProfile, ReferralPartner } from '../../types.ts';

interface BackofficeNetworkProps {
  user: UserProfile;
  partners: ReferralPartner[];
}

export const BackofficeNetwork: React.FC<BackofficeNetworkProps> = ({
  user,
  partners,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [levelFilter, setLevelFilter] = useState<number | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;

  const referralLink = `https://amxaibot.com/ref/${user.referralCode}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const totalPoints = partners.reduce((acc, p) => acc + p.volumePoints, 0);
  const totalCommission = partners.reduce((acc, p) => acc + p.bonusGenerated, 0);

  // Helper to dynamically calculate real counts and bonus for each level
  const getLevelMetrics = (level: number) => {
    const list = partners.filter((p) => p.level === level);
    const count = list.length;
    const bonus = list.reduce((acc, p) => acc + p.bonusGenerated, 0);
    return { count, bonus };
  };

  const lvl1 = getLevelMetrics(1);
  const lvl2 = getLevelMetrics(2);
  const lvl3 = getLevelMetrics(3);
  const lvl4 = getLevelMetrics(4);
  const lvl5 = getLevelMetrics(5);
  const lvl6 = getLevelMetrics(6);

  const levelCardsConfig = [
    {
      level: 1,
      label: 'NÍVEL 1 (DIRETO)',
      rate: 'Bonificação 10%',
      affiliates: `${lvl1.count} Afiliados Ativos`,
      amount: `R$ ${lvl1.bonus.toLocaleString('pt-BR')}`,
      labelColor: 'text-[#39FF88]',
      borderColor: 'border-l-[#39FF88]',
      amountColor: 'text-[#39FF88]',
    },
    {
      level: 2,
      label: 'NÍVEL 2',
      rate: 'Bonificação 5%',
      affiliates: `${lvl2.count} Afiliados`,
      amount: `R$ ${lvl2.bonus.toLocaleString('pt-BR')}`,
      labelColor: 'text-[#00B95A]',
      borderColor: 'border-l-[#00B95A]',
      amountColor: 'text-[#00B95A]',
    },
    {
      level: 3,
      label: 'NÍVEL 3',
      rate: 'Bonificação 3%',
      affiliates: `${lvl3.count} Afiliados`,
      amount: `R$ ${lvl3.bonus.toLocaleString('pt-BR')}`,
      labelColor: 'text-[#00B95A]',
      borderColor: 'border-l-[#087A45]',
      amountColor: 'text-white',
    },
    {
      level: 4,
      label: 'NÍVEL 4',
      rate: 'Bonificação 1%',
      affiliates: `${lvl4.count} Afiliados`,
      amount: `R$ ${lvl4.bonus.toLocaleString('pt-BR')}`,
      labelColor: 'text-[#9AA8A0]',
      borderColor: 'border-l-[#3A4B43]',
      amountColor: 'text-white',
    },
    {
      level: 5,
      label: 'NÍVEL 5',
      rate: 'Bonificação 0,5%',
      affiliates: `${lvl5.count} Afiliados`,
      amount: `R$ ${lvl5.bonus.toLocaleString('pt-BR')}`,
      labelColor: 'text-[#C9A24D]',
      borderColor: 'border-l-[#C9A24D]',
      amountColor: 'text-[#E7C873]',
    },
    {
      level: 6,
      label: 'NÍVEL 6 (INFINITY)',
      rate: 'Bonificação 0,3%',
      affiliates: `${lvl6.count} Afiliados`,
      amount: `R$ ${lvl6.bonus.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      labelColor: 'text-[#E7C873]',
      borderColor: 'border-l-[#E7C873]',
      amountColor: 'text-[#E7C873]',
    },
  ];

  // Filtering by level and search query
  const filteredPartners = partners.filter((p) => {
    if (levelFilter === 'ALL') return true;
    return p.level === levelFilter;
  });

  const searchedPartners = filteredPartners.filter((p) => {
    if (!searchTerm.trim()) return true;
    const query = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.email.toLowerCase().includes(query) ||
      p.id.toLowerCase().includes(query)
    );
  });

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(searchedPartners.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPartners = searchedPartners.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const handleSelectLevel = (level: number) => {
    setLevelFilter(levelFilter === level ? 'ALL' : level);
    setCurrentPage(1);
  };


  return (
    <div className="space-y-8 text-left">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#18211D]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08100C] border border-[#00B95A]/30 text-xs font-mono text-[#39FF88] uppercase mb-2 whitespace-nowrap">
            <Users className="w-3.5 h-3.5" />
            PROGRAMA DE PARCERIAS UNILEVEL
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Bonificações e Rede de Liderança
          </h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#9AA8A0] font-mono mt-1.5">
            <span className="whitespace-nowrap">Renovação</span>
            <span className="text-[#39FF88]/40">•</span>
            <span className="whitespace-nowrap">Reinvestimento</span>
            <span className="text-[#39FF88]/40">•</span>
            <span className="whitespace-nowrap">Ciclo de pontos em até 6 níveis de profundidade</span>
          </div>
        </div>

        {/* Copy Referral link */}
        <div className="flex items-center bg-[#050807] border border-[#18211D] rounded-xl p-1.5 pl-3 max-w-full sm:max-w-md">
          <input
            type="text"
            readOnly
            value={referralLink}
            onClick={handleCopyLink}
            className="bg-transparent font-mono text-xs text-[#9AA8A0] truncate focus:outline-none w-full cursor-pointer select-all"
            title="Clique para copiar"
          />
          <button
            onClick={handleCopyLink}
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00B95A] to-[#39FF88] text-[#050807] font-bold text-xs font-mono shadow-[0_0_15px_rgba(57,255,136,0.25)] hover:brightness-110 cursor-pointer whitespace-nowrap ml-2"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copiado' : 'Copiar Link'}</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        <div className="amx-card p-5 sm:p-6">
          <span className="font-mono text-[10px] text-[#9AA8A0] uppercase block mb-1 whitespace-nowrap">
            PARCEIROS NA REDE
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-black text-white whitespace-nowrap">
            {partners.length} <span className="text-base text-[#39FF88]">membros</span>
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block whitespace-nowrap">
            Cadastrados com link oficial
          </span>
        </div>

        <div className="amx-card p-5 sm:p-6">
          <span className="font-mono text-[10px] text-[#C9A24D] uppercase block mb-1 whitespace-nowrap">
            VOLUME TOTAL DE PONTOS
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-black text-white whitespace-nowrap">
            {totalPoints.toLocaleString('pt-BR')}{' '}
            <span className="text-base text-[#E7C873]">pts</span>
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block whitespace-nowrap">
            Pontuação de qualificação acumulada
          </span>
        </div>

        <div className="amx-card p-5 sm:p-6 border-[#00B95A]/40 shadow-[0_0_20px_rgba(57,255,136,0.1)] sm:col-span-2 md:col-span-1">
          <span className="font-mono text-[10px] text-[#39FF88] uppercase block mb-1 font-bold whitespace-nowrap">
            COMISSÕES TOTAIS GERADAS
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-black text-white whitespace-nowrap">
            R$ {totalCommission.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <span className="text-xs text-[#9AA8A0] font-mono mt-2 block whitespace-nowrap">
            Creditadas automaticamente no saldo PIX
          </span>
        </div>
      </div>

      {/* Estrutura de Bonificações (6 Níveis) - Matched to Gemini Canvas */}
      <div className="amx-card p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-mono text-base sm:text-lg lg:text-xl font-black text-white tracking-wider uppercase whitespace-nowrap">
              ESTRUTURA DE BONIFICAÇÕES
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#9AA8A0] font-mono mt-1">
              <span className="whitespace-nowrap">Renovação</span>
              <span className="text-[#39FF88]/40">•</span>
              <span className="whitespace-nowrap">Reinvestimento</span>
              <span className="text-[#39FF88]/40">•</span>
              <span className="whitespace-nowrap">Ciclo de pontos em 6 Níveis</span>
            </div>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#C9A24D]/60 hover:border-[#E7C873] bg-[#08100C] text-[#E7C873] font-mono text-xs font-bold transition-all cursor-pointer shadow-[0_0_15px_rgba(201,162,77,0.15)] self-start sm:self-auto whitespace-nowrap"
          >
            {copiedLink ? <Check className="w-4 h-4 text-[#39FF88]" /> : <Copy className="w-4 h-4 text-[#C9A24D]" />}
            <span>{copiedLink ? 'Link Copiado!' : 'Copiar Link de Convite'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {levelCardsConfig.map((lvl) => (
            <div
              key={lvl.level}
              onClick={() => handleSelectLevel(lvl.level)}
              className={`p-4 sm:p-5 rounded-2xl bg-[#08100C] border border-[#18211D] border-l-4 ${lvl.borderColor} flex items-center justify-between gap-3 sm:gap-4 transition-all cursor-pointer hover:bg-[#111815] ${
                levelFilter === lvl.level
                  ? 'ring-1 ring-[#39FF88] shadow-[0_0_20px_rgba(57,255,136,0.15)] bg-[#111815]'
                  : ''
              }`}
            >
              <div>
                <span className={`font-mono text-xs font-bold uppercase tracking-wider block whitespace-nowrap ${lvl.labelColor}`}>
                  {lvl.label}
                </span>
                <div className="font-bold text-white text-base mt-1 mb-1 whitespace-nowrap">
                  {lvl.rate}
                </div>
                <span className="font-mono text-xs text-[#9AA8A0] whitespace-nowrap">
                  {lvl.affiliates}
                </span>
              </div>

              <div className={`font-mono text-xl sm:text-2xl lg:text-3xl font-black ${lvl.amountColor} tracking-tight shrink-0 whitespace-nowrap`}>
                {lvl.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners List with live count matching cards */}
      <div className="amx-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#18211D]">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-white text-base tracking-wide">PARCEIROS CADASTRADOS</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#08100C] border border-[#39FF88]/40 text-[#39FF88] text-xs font-mono font-bold">
                {searchedPartners.length} {searchedPartners.length === 1 ? 'parceiro' : 'parceiros'}
              </span>
            </div>
            <p className="text-xs text-[#9AA8A0] font-mono mt-1">
              Filtro ativo: {levelFilter === 'ALL' ? 'Todos os Níveis' : `Apenas Nível ${levelFilter}`} ({filteredPartners.length} afiliados cadastrados)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA8A0]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Buscar por nome ou e-mail..."
                className="pl-8 pr-3 py-1.5 rounded-lg bg-[#08100C] border border-[#18211D] text-xs font-mono text-white placeholder-[#9AA8A0]/60 focus:outline-none focus:border-[#39FF88]/50 w-52 sm:w-64"
              />
            </div>

            {levelFilter !== 'ALL' && (
              <button
                onClick={() => {
                  setLevelFilter('ALL');
                  setCurrentPage(1);
                }}
                className="text-xs font-mono text-[#39FF88] hover:underline cursor-pointer"
              >
                Limpar Filtro
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#18211D] text-[#9AA8A0]">
                <th className="pb-3 font-medium">PARCEIRO</th>
                <th className="pb-3 font-medium">NÍVEL</th>
                <th className="pb-3 font-medium">DATA CADASTRO</th>
                <th className="pb-3 font-medium text-right">VOLUME PONTOS</th>
                <th className="pb-3 font-medium text-right">BÔNUS GERADO</th>
                <th className="pb-3 font-medium text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18211D]">
              {paginatedPartners.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-[#9AA8A0]">
                    Nenhum parceiro encontrado com os critérios selecionados.
                  </td>
                </tr>
              ) : (
                paginatedPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-[#08100C]/60 transition-colors">
                    <td className="py-3">
                      <div className="font-bold text-white">{partner.name}</div>
                      <div className="text-[10px] text-[#9AA8A0]">{partner.email}</div>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded bg-[#08100C] border border-[#00B95A]/30 text-[#39FF88] text-[10px] font-bold">
                        NÍVEL {partner.level}
                      </span>
                    </td>
                    <td className="py-3 text-[#9AA8A0]">{partner.date}</td>
                    <td className="py-3 text-right font-bold text-white">
                      {partner.volumePoints.toLocaleString('pt-BR')} pts
                    </td>
                    <td className="py-3 text-right font-black text-[#39FF88]">
                      + R$ {partner.bonusGenerated.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3 text-right">
                      <span className="inline-flex items-center gap-1 text-[#39FF88]">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{partner.status}</span>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        {totalPages > 1 && (
          <div className="pt-4 mt-4 border-t border-[#18211D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#9AA8A0]">
            <div>
              Mostrando <span className="text-white font-bold">{(safePage - 1) * PAGE_SIZE + 1}</span> a{' '}
              <span className="text-white font-bold">{Math.min(safePage * PAGE_SIZE, searchedPartners.length)}</span> de{' '}
              <span className="text-white font-bold">{searchedPartners.length}</span> parceiros
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="px-2.5 py-1 rounded-lg border border-[#18211D] bg-[#08100C] hover:bg-[#111815] text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                  .filter((page) => {
                    return (
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - safePage) <= 1
                    );
                  })
                  .map((page, idx, arr) => {
                    const prev = arr[idx - 1];
                    return (
                      <React.Fragment key={page}>
                        {prev && page - prev > 1 && <span className="px-1 text-[#9AA8A0]">...</span>}
                        <button
                          onClick={() => setCurrentPage(page)}
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                            safePage === page
                              ? 'bg-[#39FF88] text-[#050807] shadow-[0_0_10px_rgba(57,255,136,0.3)]'
                              : 'bg-[#08100C] border border-[#18211D] text-[#9AA8A0] hover:text-white'
                          }`}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="px-2.5 py-1 rounded-lg border border-[#18211D] bg-[#08100C] hover:bg-[#111815] text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <span>Próxima</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
