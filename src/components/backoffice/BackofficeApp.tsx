import React, { useState } from 'react';
import { 
  UserProfile, 
  BackofficeTab, 
  CustodyPosition, 
  TransactionRecord, 
  BotTradeOrder, 
  ReferralPartner 
} from '../../types.ts';
import { 
  initialUserProfile, 
  initialCustodies, 
  initialTransactions, 
  initialBotOrders, 
  initialNetworkPartners 
} from './mockData.ts';
import { BackofficeSidebar } from './BackofficeSidebar.tsx';
import { BackofficeHeader } from './BackofficeHeader.tsx';
import { BackofficeMobileNav } from './BackofficeMobileNav.tsx';
import { BackofficeDashboard } from './BackofficeDashboard.tsx';
import { BackofficeCustody } from './BackofficeCustody.tsx';
import { BackofficeFinancial } from './BackofficeFinancial.tsx';
import { BackofficeNetwork } from './BackofficeNetwork.tsx';
import { BackofficeLeadership } from './BackofficeLeadership.tsx';
import { BackofficeBotTrading } from './BackofficeBotTrading.tsx';
import { BackofficeSettings } from './BackofficeSettings.tsx';
import { BlurredTradingBackground } from '../BlurredTradingBackground.tsx';

interface BackofficeAppProps {
  onExit: () => void;
}

export const BackofficeApp: React.FC<BackofficeAppProps> = ({ onExit }) => {
  const [currentTab, setCurrentTab] = useState<BackofficeTab>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Live Backoffice State
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [custodies, setCustodies] = useState<CustodyPosition[]>(initialCustodies);
  const [transactions, setTransactions] = useState<TransactionRecord[]>(initialTransactions);
  const [botOrders, setBotOrders] = useState<BotTradeOrder[]>(initialBotOrders);
  const [partners, setPartners] = useState<ReferralPartner[]>(initialNetworkPartners);

  // New Custody Allocation
  const handleAddCustody = (tier: '30-500' | '1000-30000', amount: number) => {
    const newId = `CUST-${Math.floor(1000 + Math.random() * 9000)}-${custodies.length + 1}`;
    const newPos: CustodyPosition = {
      id: newId,
      tier,
      amount,
      points: amount,
      startDate: new Date().toLocaleDateString('pt-BR'),
      status: 'ACTIVE',
      dailyYieldAvg: 'Estratégia Automatizada 24/7',
      adminFee: 'Conforme tabela vigente',
    };

    setCustodies([newPos, ...custodies]);
    setUser((prev) => ({
      ...prev,
      custodyBalance: prev.custodyBalance + amount,
      qualificationPoints: prev.qualificationPoints + amount,
    }));

    // Record transaction
    const newTx: TransactionRecord = {
      id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'DEPOSITO_CUSTODIA',
      amount,
      date: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: 'CONCLUIDO',
      description: `Alocação de Custódia Bot Executivo Faixa ${tier}`,
      txHash: 'E' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
    };
    setTransactions([newTx, ...transactions]);
  };

  // Request Redemption of Custody
  const handleRequestRedemption = (custodyId: string) => {
    setCustodies((prev) =>
      prev.map((c) => (c.id === custodyId ? { ...c, status: 'REQUESTED_REDEMPTION' } : c))
    );

    const pos = custodies.find((c) => c.id === custodyId);
    if (pos) {
      const newTx: TransactionRecord = {
        id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'RESGATE_CUSTODIA',
        amount: pos.amount,
        date: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        status: 'PROCESSANDO',
        description: `Solicitação de Resgate de Custódia (${pos.id})`,
      };
      setTransactions([newTx, ...transactions]);
    }
  };

  // Request Withdrawal via PIX
  const handleRequestWithdrawal = (amount: number) => {
    setUser((prev) => ({
      ...prev,
      bonusBalance: prev.bonusBalance - amount,
      totalWithdrawn: prev.totalWithdrawn + amount,
    }));

    const newTx: TransactionRecord = {
      id: `TX-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'SAQUE_PIX',
      amount,
      date: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: 'CONCLUIDO',
      description: `Saque PIX Bonificação - Chave Cadastrada`,
      recipientKey: user.pixKey,
      txHash: 'E' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
    };
    setTransactions([newTx, ...transactions]);
  };

  // Update PIX Key
  const handleUpdatePixKey = (newKey: string) => {
    setUser((prev) => ({ ...prev, pixKey: newKey }));
  };

  return (
    <div className="relative min-h-screen bg-[#050807] text-white flex overflow-x-hidden selection:bg-[#00B95A]/30 selection:text-[#39FF88]">
      {/* Obfuscated Animated Candlestick / Trading Background */}
      <BlurredTradingBackground variant="backoffice" />

      {/* Sidebar */}
      <BackofficeSidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onExitBackoffice={onExit}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        {/* Header Topbar */}
        <BackofficeHeader
          user={user}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onExitBackoffice={onExit}
          onNavigateTab={setCurrentTab}
        />

        {/* Dynamic Tab Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-28 lg:pb-8">
          {currentTab === 'dashboard' && (
            <BackofficeDashboard
              user={user}
              custodies={custodies}
              transactions={transactions}
              botOrders={botOrders}
              onNavigateTab={setCurrentTab}
              onOpenDepositModal={() => setCurrentTab('custody')}
              onOpenWithdrawModal={() => setCurrentTab('financial')}
            />
          )}

          {currentTab === 'custody' && (
            <BackofficeCustody
              custodies={custodies}
              onAddCustody={handleAddCustody}
              onRequestRedemption={handleRequestRedemption}
            />
          )}

          {currentTab === 'financial' && (
            <BackofficeFinancial
              user={user}
              transactions={transactions}
              onRequestWithdrawal={handleRequestWithdrawal}
            />
          )}

          {currentTab === 'network' && (
            <BackofficeNetwork user={user} partners={partners} />
          )}

          {currentTab === 'leadership' && (
            <BackofficeLeadership user={user} />
          )}

          {currentTab === 'bot' && (
            <BackofficeBotTrading orders={botOrders} />
          )}

          {currentTab === 'settings' && (
            <BackofficeSettings
              user={user}
              onUpdatePixKey={handleUpdatePixKey}
            />
          )}
        </main>
      </div>

      {/* Mobile MVP Bottom Navigation Dock & Menu Bottom-Sheet */}
      <BackofficeMobileNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        user={user}
        onExitBackoffice={onExit}
        isMenuOpen={isMobileMenuOpen}
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onCloseMenu={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};
