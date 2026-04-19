export const mockUser = {
  name: "Katrīna Pavlovska",
  firstName: "Katrīna",
};

export const mockDate = "26.01.2025 14:32";

export const mockAccounts = [
  {
    id: "a1",
    name: "X smart",
    iban: "LV28CITI0000000000001",
    balance: 2405.37,
    available: 2405.37,
    cards: ["X smart: JĀNIS BĒRZIŅŠ", "Visa X prime: JĀNIS BĒRZIŅŠ", "Ring: JĀNIS BĒRZIŅŠ"],
  },
  {
    id: "a2",
    name: "Alga un uzkrājumi",
    iban: "LV28CITI0000000000002",
    balance: 0.66,
    available: 0.66,
    cards: ["X smart: JANA PLACACE"],
  },
];

export const mockLoans = {
  totalAmount: 14200.00,
  items: [
    { name: "Consumer loan", remaining: 8_450.00, nextPayment: 215.00, date: "01.02.2025" },
    { name: "Mortgage", remaining: 5_750.00, nextPayment: 312.00, date: "01.02.2025" },
  ],
};

export const mockDeposits = {
  items: [],
};

export const mockSavingsGoals = [
  { id: "g1", name: "Holiday ✈️", current: 2820, target: 3600, deadline: "Jul 2025", color: "#e3002c" },
  { id: "g2", name: "Emergency fund 🛡️", current: 5000, target: 10000, deadline: "Dec 2025", color: "#676973" },
];

export const mockTransactions = [
  { id: "t1", merchant: "Rimi", logo: "🛒", category: "Groceries", amount: -42.18, date: "Today 09:14" },
  { id: "t2", merchant: "Maxima", logo: "🛒", category: "Groceries", amount: -18.45, date: "Yesterday" },
  { id: "t3", merchant: "Salary — Employer Ltd", logo: "💼", category: "Income", amount: 2400.00, date: "25.01.2025" },
  { id: "t4", merchant: "Wolt", logo: "🛵", category: "Food & Drink", amount: -19.90, date: "24.01.2025" },
  { id: "t5", merchant: "Netflix", logo: "🎬", category: "Entertainment", amount: -15.99, date: "23.01.2025" },
  { id: "t6", merchant: "Citadele Loan", logo: "🏦", category: "Loan payment", amount: -215.00, date: "20.01.2025" },
];

export const mockNudges = [
  { id: "n1", icon: "📅", title: "Loan payment due in 3 days", body: "Consumer loan payment of €215.00 is due on 01.02.2025.", cta: "Pay now", color: "#e3002c" },
  { id: "n2", icon: "🔍", title: "Unusual charge detected", body: "Wolt charge of €19.90 is 60% higher than your usual average.", cta: "Review", color: "#676973" },
  { id: "n3", icon: "🎯", title: "Holiday fund at 78%", body: "€780 more to reach your €3,600 holiday goal by July.", cta: "Top up", color: "#e3002c" },
  { id: "n4", icon: "🍽️", title: "Dining spend up 20% this month", body: "You've spent €74.90 on Food & Drink — 20% above your monthly average of €62. Consider setting a dining budget.", cta: "Set budget", color: "#d97706" },
];

export const mockUpcomingBills = [
  { id: "b1", name: "Netflix", logo: "🎬", amount: 15.99, daysLeft: 2 },
  { id: "b2", name: "Loan payment", logo: "🏦", amount: 215.00, daysLeft: 3 },
  { id: "b3", name: "Spotify", logo: "🎵", amount: 9.99, daysLeft: 7 },
];

export const mockSubscriptions = [
  { id: "s1", name: "Netflix", logo: "🎬", amount: 15.99, lastUsed: "2 days ago", unused: false },
  { id: "s2", name: "Spotify", logo: "🎵", amount: 9.99, lastUsed: "Today", unused: false },
  { id: "s3", name: "Adobe CC", logo: "🎨", amount: 54.99, lastUsed: "68 days ago", unused: true },
  { id: "s4", name: "Gym", logo: "💪", amount: 35.00, lastUsed: "71 days ago", unused: true },
  { id: "s5", name: "Dropbox", logo: "📦", amount: 11.99, lastUsed: "Today", unused: false },
];

export const mockSecurity = { score: 87, twoFa: true, biometric: true, status: "Strong" };

export const mockFinancialHealth = {
  score: 82,
  change: 3,
  creditScore: 742,
  pillars: [
    { name: "Spending", score: 78 },
    { name: "Savings", score: 85 },
    { name: "Bills", score: 95 },
    { name: "Credit", score: 74 },
  ],
};

export const mockCRewards = {
  points: 8796,
  tier: "Silver",
  nextTier: "Gold",
  pointsToNext: 1204,
  expiringPoints: 350,
  expiringDate: "28.02.2025",
};

export const mockLastLogin = "Today 08:42 from Riga, LV";

export const mockNetWorth = {
  total: 7420.66,
  change: 312.50,
  breakdown: [
    { label: "Accounts", value: 2406.03 },
    { label: "Savings", value: 7820.00 },
    { label: "Loan balance", value: -14200.00, negative: true },
    { label: "Investments", value: 11394.63 },
  ],
};


export const commandSuggestions = [
  { icon: "🔍", text: "Search transactions" },
  { icon: "💸", text: "Make a new payment" },
  { icon: "📊", text: "View spending this month" },
  { icon: "💳", text: "Order a new card" },
  { icon: "🏦", text: "Open a savings account" },
  { icon: "❌", text: "Manage subscriptions" },
];

export const navItems = [
  { label: "Home", icon: "🏠", active: true },
  { label: "Accounts and Cards", icon: "💳" },
  { label: "Payments", icon: "↑" },
  { label: "Lending and Leasing", icon: "📋" },
  { label: "Savings", icon: "💰" },
  { label: "Investments", icon: "📈" },
  { label: "Insurance", icon: "🛡️" },
  { label: "Pension", icon: "🏛️" },
  { label: "My profile", icon: "👤" },
  { label: "Activity History", icon: "📄" },
];
