export interface NavItem {
  label: string;
  href: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BonusLevel {
  level: number;
  percentage: string;
  ratio: number;
  highlight?: boolean;
}

export interface LeadershipRank {
  name: string;
  points: string;
  bonus: string;
  tag: string;
  isPopular?: boolean;
}

export interface AssetCategory {
  id: string;
  name: string;
  symbol: string;
  type: string;
  description: string;
  accentColor: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export type BackofficeTab = 
  | 'dashboard'
  | 'custody'
  | 'financial'
  | 'network'
  | 'leadership'
  | 'bot'
  | 'settings';

export interface UserProfile {
  name: string;
  email: string;
  cpf: string;
  pixKey: string;
  rank: 'SUPERVISOR ELITE' | 'EXECUTIVO' | 'SENIOR' | 'MEMBRO';
  qualificationPoints: number;
  custodyBalance: number;
  bonusBalance: number;
  totalWithdrawn: number;
  referralCode: string;
  registeredAt: string;
}

export interface CustodyPosition {
  id: string;
  tier: '30-500' | '1000-30000';
  amount: number;
  points: number;
  startDate: string;
  status: 'ACTIVE' | 'REQUESTED_REDEMPTION' | 'COMPLETED';
  dailyYieldAvg: string;
  adminFee: string;
}

export interface TransactionRecord {
  id: string;
  type: 'SAQUE_PIX' | 'DEPOSITO_CUSTODIA' | 'BONUS_REDE' | 'RESGATE_CUSTODIA';
  amount: number;
  date: string;
  status: 'CONCLUIDO' | 'PROCESSANDO' | 'PENDENTE';
  description: string;
  recipientKey?: string;
  txHash?: string;
}

export interface BotTradeOrder {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  price: number;
  amount: string;
  time: string;
  pnl?: string;
  status: 'EXECUTED' | 'ACTIVE';
}

export interface ReferralPartner {
  id: string;
  name: string;
  email: string;
  level: number;
  volumePoints: number;
  date: string;
  bonusGenerated: number;
  status: 'ATIVO' | 'PENDENTE';
}

