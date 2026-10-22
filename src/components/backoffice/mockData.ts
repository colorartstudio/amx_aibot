import { 
  UserProfile, 
  CustodyPosition, 
  TransactionRecord, 
  BotTradeOrder, 
  ReferralPartner 
} from '../../types.ts';

export const initialUserProfile: UserProfile = {
  name: 'Investidor Executivo AMX',
  email: 'investidor.executivo@amxaibot.com',
  cpf: '***.482.910-**',
  pixKey: 'pix.investidor@amxaibot.com',
  rank: 'EXECUTIVO',
  qualificationPoints: 1450,
  custodyBalance: 5000,
  bonusBalance: 1840.50,
  totalWithdrawn: 3400.00,
  referralCode: 'AMX-EXEC-7469',
  registeredAt: '14/01/2026',
};

export const initialCustodies: CustodyPosition[] = [
  {
    id: 'CUST-8491-01',
    tier: '1000-30000',
    amount: 5000,
    points: 5000,
    startDate: '10/02/2026',
    status: 'ACTIVE',
    dailyYieldAvg: 'Estratégia Automatizada 24/7',
    adminFee: 'Conforme tabela vigente',
  },
  {
    id: 'CUST-3210-02',
    tier: '30-500',
    amount: 500,
    points: 500,
    startDate: '15/01/2026',
    status: 'ACTIVE',
    dailyYieldAvg: 'Estratégia Inicial',
    adminFee: 'Conforme tabela vigente',
  },
];

export const initialTransactions: TransactionRecord[] = [
  {
    id: 'TX-902148',
    type: 'SAQUE_PIX',
    amount: 1000.00,
    date: '19/02/2026 14:32',
    status: 'CONCLUIDO',
    description: 'Saque PIX Bonificação - Banco do Brasil',
    recipientKey: 'pix.investidor@amxaibot.com',
    txHash: 'E9021481230198273619283719283712',
  },
  {
    id: 'TX-891044',
    type: 'BONUS_REDE',
    amount: 250.00,
    date: '18/02/2026 19:15',
    status: 'CONCLUIDO',
    description: 'Bonificação Nível 1 - Rodrigo Almeida (10%)',
    txHash: 'B8910441239812739182371982371928',
  },
  {
    id: 'TX-884210',
    type: 'SAQUE_PIX',
    amount: 1500.00,
    date: '12/02/2026 10:04',
    status: 'CONCLUIDO',
    description: 'Saque PIX Bonificação - Chave CPF',
    recipientKey: '***.482.910-**',
    txHash: 'E8842109812739182739182739182739',
  },
  {
    id: 'TX-871032',
    type: 'DEPOSITO_CUSTODIA',
    amount: 5000.00,
    date: '10/02/2026 09:20',
    status: 'CONCLUIDO',
    description: 'Aporte Custódia Bot Executivo 1000 a 30000',
    txHash: 'D8710321287319827319823719827319',
  },
];

export const initialBotOrders: BotTradeOrder[] = [
  {
    id: 'ORD-9912',
    pair: 'BTC/USDT',
    type: 'BUY',
    price: 94120.50,
    amount: '0.045 BTC',
    time: 'Há 4 min',
    pnl: '+1.85%',
    status: 'ACTIVE',
  },
  {
    id: 'ORD-9911',
    pair: 'ETH/USDT',
    type: 'SELL',
    price: 3440.10,
    amount: '0.85 ETH',
    time: 'Há 18 min',
    pnl: '+2.14%',
    status: 'EXECUTED',
  },
  {
    id: 'ORD-9910',
    pair: 'SOL/USDT',
    type: 'BUY',
    price: 184.20,
    amount: '12.4 SOL',
    time: 'Há 32 min',
    pnl: '+1.10%',
    status: 'EXECUTED',
  },
  {
    id: 'ORD-9909',
    pair: 'BTC/USDT',
    type: 'SELL',
    price: 93850.00,
    amount: '0.038 BTC',
    time: 'Há 1h 05min',
    pnl: '+1.92%',
    status: 'EXECUTED',
  },
  {
    id: 'ORD-9908',
    pair: 'ETH/USDT',
    type: 'BUY',
    price: 3390.40,
    amount: '0.90 ETH',
    time: 'Há 2h 14min',
    pnl: '+2.60%',
    status: 'EXECUTED',
  },
];

// Helper data to generate realistic Brazilian partners for all 6 network levels
const firstNames = [
  'Rodrigo', 'Camila', 'Marcos', 'Patricia', 'Lucas', 'Tatiane', 'Felipe', 'Amanda',
  'Gabriel', 'Juliana', 'Bruno', 'Larissa', 'Thiago', 'Fernanda', 'Rafael', 'Vanessa',
  'Andre', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fabiana', 'Gustavo', 'Helena',
  'Igor', 'Jessica', 'Kleber', 'Leticia', 'Marcelo', 'Natalia', 'Otavio', 'Priscila',
  'Renato', 'Sabrina', 'Tiago', 'Valeria', 'Wagner', 'Yasmin', 'Alexandre', 'Bianca',
  'Claudio', 'Debora', 'Elton', 'Flavia', 'Guilherme', 'Ingrid', 'Joao', 'Kelly',
  'Leonardo', 'Monique', 'Nelson', 'Olivia', 'Paulo', 'Raquel', 'Samuel', 'Talita'
];

const lastNames = [
  'Almeida', 'Fernandes', 'Silva', 'Duarte', 'Barreto', 'Mendonça', 'Guimarães', 'Ribeiro',
  'Santos', 'Costa', 'Carvalho', 'Martins', 'Pires', 'Lima', 'Nogueira', 'Rocha',
  'Fagundes', 'Souza', 'Moreira', 'Prado', 'Melo', 'Neves', 'Farias', 'Azevedo',
  'Paiva', 'Santana', 'Cunha', 'Tavares', 'Fonseca', 'Barros', 'Xavier', 'Gois',
  'Teles', 'Macedo', 'Moraes', 'Cardoso', 'Cavalcanti', 'Teixeira', 'Dias', 'Batista'
];

function buildNetworkPartners(): ReferralPartner[] {
  const partners: ReferralPartner[] = [];
  let globalIndex = 1;

  // Level 1: exactly 14 affiliates (total bonus: R$ 2.450,00)
  const l1Bonuses = [500, 350, 250, 250, 200, 200, 150, 150, 120, 100, 100, 80, 50, 50]; // sum = 2450
  for (let i = 0; i < 14; i++) {
    const fn = i === 0 ? 'Rodrigo' : i === 1 ? 'Camila' : firstNames[i % firstNames.length];
    const ln = i === 0 ? 'Almeida' : i === 1 ? 'Fernandes' : lastNames[i % lastNames.length];
    const bonus = l1Bonuses[i];
    partners.push({
      id: `PART-${String(globalIndex++).padStart(3, '0')}`,
      name: `${fn} ${ln}`,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@${i % 2 === 0 ? 'gmail.com' : 'hotmail.com'}`,
      level: 1,
      volumePoints: bonus * 10,
      bonusGenerated: bonus,
      date: `${10 + (i % 12)}/02/2026`,
      status: 'ATIVO',
    });
  }

  // Level 2: exactly 22 affiliates (total bonus: R$ 680,00)
  const l2Bonuses = [150, 75, 50, 50, 40, 35, 30, 25, 25, 25, 25, 20, 20, 20, 20, 20, 15, 15, 10, 10, 10, 10]; // sum = 680
  for (let i = 0; i < 22; i++) {
    const fn = i === 0 ? 'Marcos Vinicius' : i === 1 ? 'Patricia' : firstNames[(i + 14) % firstNames.length];
    const ln = i === 0 ? 'Silva' : i === 1 ? 'Duarte' : lastNames[(i + 8) % lastNames.length];
    const bonus = l2Bonuses[i];
    partners.push({
      id: `PART-${String(globalIndex++).padStart(3, '0')}`,
      name: `${fn} ${ln}`,
      email: `${fn.toLowerCase().replace(/\s+/g, '.')}.${ln.toLowerCase()}@${i % 2 === 0 ? 'outlook.com' : 'gmail.com'}`,
      level: 2,
      volumePoints: Math.round(bonus * 20),
      bonusGenerated: bonus,
      date: `${11 + (i % 11)}/02/2026`,
      status: 'ATIVO',
    });
  }

  // Level 3: exactly 18 affiliates (total bonus: R$ 210,00)
  const l3Bonuses = [120, 15, 15, 10, 10, 8, 6, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0, 0]; // sum = 210
  for (let i = 0; i < 18; i++) {
    const fn = i === 0 ? 'Lucas' : firstNames[(i + 20) % firstNames.length];
    const ln = i === 0 ? 'Barreto' : lastNames[(i + 15) % lastNames.length];
    const bonus = l3Bonuses[i];
    partners.push({
      id: `PART-${String(globalIndex++).padStart(3, '0')}`,
      name: `${fn} ${ln}`,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@${i % 3 === 0 ? 'empresa.com.br' : 'gmail.com'}`,
      level: 3,
      volumePoints: Math.round(bonus * 33.3 + 50),
      bonusGenerated: bonus,
      date: `${12 + (i % 10)}/02/2026`,
      status: 'ATIVO',
    });
  }

  // Level 4: exactly 35 affiliates (total bonus: R$ 80,00)
  // First item is Tatiane Mendonça with R$ 10.00 and 1.000 pts as in the screenshot!
  const l4Bonuses = [10, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]; // sum = 80
  for (let i = 0; i < 35; i++) {
    const fn = i === 0 ? 'Tatiane' : firstNames[(i + 7) % firstNames.length];
    const ln = i === 0 ? 'Mendonça' : lastNames[(i + 12) % lastNames.length];
    const bonus = l4Bonuses[i];
    partners.push({
      id: `PART-${String(globalIndex++).padStart(3, '0')}`,
      name: `${fn} ${ln}`,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@gmail.com`,
      level: 4,
      volumePoints: i === 0 ? 1000 : Math.round(bonus * 100 + 100),
      bonusGenerated: bonus,
      date: `${13 + (i % 9)}/02/2026`,
      status: 'ATIVO',
    });
  }

  // Level 5: exactly 40 affiliates (total bonus: R$ 30,00)
  const l5Bonuses = [
    3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]; // sum = 30
  for (let i = 0; i < 40; i++) {
    const fn = firstNames[(i + 3) % firstNames.length];
    const ln = lastNames[(i + 22) % lastNames.length];
    const bonus = l5Bonuses[i];
    partners.push({
      id: `PART-${String(globalIndex++).padStart(3, '0')}`,
      name: `${fn} ${ln}`,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@yahoo.com`,
      level: 5,
      volumePoints: Math.round(bonus * 200 + 50),
      bonusGenerated: bonus,
      date: `${14 + (i % 8)}/02/2026`,
      status: 'ATIVO',
    });
  }

  // Level 6: exactly 52 affiliates (total bonus: R$ 0,00)
  for (let i = 0; i < 52; i++) {
    const fn = firstNames[(i + 17) % firstNames.length];
    const ln = lastNames[(i + 5) % lastNames.length];
    partners.push({
      id: `PART-${String(globalIndex++).padStart(3, '0')}`,
      name: `${fn} ${ln}`,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@gmail.com`,
      level: 6,
      volumePoints: 100 + (i % 10) * 20,
      bonusGenerated: 0,
      date: `${15 + (i % 7)}/02/2026`,
      status: 'ATIVO',
    });
  }

  return partners;
}

export const initialNetworkPartners: ReferralPartner[] = buildNetworkPartners();

