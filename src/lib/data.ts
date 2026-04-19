export const mockUser = {
  name: "Alexandra",
  firstName: "Alexandra",
  avatar: "AK",
  tier: "Private",
};

export const mockAccounts = [
  { id: "1", name: "Current Account", balance: 12450.80, currency: "£", iban: "GB29 NWBK 6016 1331 9268 19" },
  { id: "2", name: "Savings Pot", balance: 8200.00, currency: "£", iban: "" },
  { id: "3", name: "Investment ISA", balance: 24300.50, currency: "£", iban: "" },
];

export const mockNetWorth = {
  total: 48750.30,
  change: 1240.50,
  changePercent: 2.61,
  breakdown: [
    { label: "Current & Savings", value: 20650.80, color: "#4f8ef7" },
    { label: "Investments", value: 24300.50, color: "#22d3a3" },
    { label: "External (Open Banking)", value: 6200.00, color: "#a855f7" },
    { label: "Liabilities", value: -2401.00, color: "#ef4444" },
  ],
};

export const mockTransactions = [
  { id: "t1", merchant: "Starbucks", logo: "☕", category: "Food & Drink", amount: -4.50, date: "Today, 09:14", type: "debit" },
  { id: "t2", merchant: "ASOS", logo: "👗", category: "Shopping", amount: -67.00, date: "Yesterday", type: "debit" },
  { id: "t3", merchant: "Salary — TechCorp Ltd", logo: "💼", category: "Income", amount: 3800.00, date: "Apr 18", type: "credit" },
  { id: "t4", merchant: "Uber Eats", logo: "🛵", category: "Food & Drink", amount: -28.40, date: "Apr 17", type: "debit" },
  { id: "t5", merchant: "Netflix", logo: "🎬", category: "Entertainment", amount: -15.99, date: "Apr 16", type: "debit" },
  { id: "t6", merchant: "Waitrose", logo: "🛒", category: "Groceries", amount: -84.20, date: "Apr 15", type: "debit" },
  { id: "t7", merchant: "Apple Pay", logo: "🍎", category: "Shopping", amount: -12.99, date: "Apr 14", type: "debit" },
  { id: "t8", merchant: "Revolut Transfer", logo: "💸", category: "Transfer", amount: -250.00, date: "Apr 13", type: "debit" },
];

export const mockNudges = [
  {
    id: "n1",
    type: "warning",
    icon: "📅",
    title: "Rent due in 3 days",
    body: "£950 to Landlord Properties Ltd — ensure funds are available.",
    cta: "Review",
    color: "#f59e0b",
  },
  {
    id: "n2",
    type: "alert",
    icon: "🔍",
    title: "Unusual charge detected",
    body: "Uber Eats was £28.40 — 78% higher than your usual £16 average.",
    cta: "Dismiss",
    color: "#ef4444",
  },
  {
    id: "n3",
    type: "info",
    icon: "🎯",
    title: "Holiday Fund is 78% complete",
    body: "Just £780 more to hit your £3,600 target by July.",
    cta: "Top Up",
    color: "#22d3a3",
  },
];

export const mockUpcomingBills = [
  { id: "b1", name: "Netflix", logo: "🎬", amount: 15.99, daysLeft: 2, category: "Entertainment" },
  { id: "b2", name: "Rent", logo: "🏠", amount: 950.00, daysLeft: 3, category: "Housing" },
  { id: "b3", name: "Spotify", logo: "🎵", amount: 9.99, daysLeft: 7, category: "Entertainment" },
  { id: "b4", name: "AWS", logo: "☁️", amount: 42.30, daysLeft: 10, category: "Software" },
];

export const mockSavingsGoals = [
  { id: "g1", name: "Holiday Fund", emoji: "✈️", current: 2820, target: 3600, deadline: "Jul 2026", color: "#4f8ef7" },
  { id: "g2", name: "Emergency Buffer", emoji: "🛡️", current: 5000, target: 10000, deadline: "Dec 2026", color: "#22d3a3" },
  { id: "g3", name: "New MacBook", emoji: "💻", current: 800, target: 2400, deadline: "Sep 2026", color: "#a855f7" },
];

export const mockSubscriptions = [
  { id: "s1", name: "Netflix", logo: "🎬", amount: 15.99, frequency: "monthly", lastUsed: "2 days ago", active: true },
  { id: "s2", name: "Spotify", logo: "🎵", amount: 9.99, frequency: "monthly", lastUsed: "Today", active: true },
  { id: "s3", name: "Adobe CC", logo: "🎨", amount: 54.99, frequency: "monthly", lastUsed: "68 days ago", active: true },
  { id: "s4", name: "Gym", logo: "💪", amount: 35.00, frequency: "monthly", lastUsed: "71 days ago", active: true },
  { id: "s5", name: "Dropbox", logo: "📦", amount: 11.99, frequency: "monthly", lastUsed: "Today", active: true },
  { id: "s6", name: "Apple One", logo: "🍎", amount: 28.95, frequency: "monthly", lastUsed: "Yesterday", active: true },
];

export const mockSecurity = {
  score: 87,
  twoFa: true,
  biometric: true,
  deviceCount: 2,
  lastLogin: "Today, 08:42",
  status: "Strong",
};

export const mockFinancialHealth = {
  score: 82,
  change: 3,
  creditScore: 742,
  creditMax: 999,
  creditLabel: "Good",
  pillars: [
    { name: "Spending", score: 78, color: "#4f8ef7" },
    { name: "Savings", score: 85, color: "#22d3a3" },
    { name: "Bills", score: 95, color: "#a855f7" },
    { name: "Credit", score: 74, color: "#f59e0b" },
  ],
};

export const mockESG = {
  carbonKg: 48,
  carbonBudgetKg: 80,
  changeVsLastMonth: -12,
  topCategories: [
    { name: "Transport", kg: 18, color: "#ef4444" },
    { name: "Food", kg: 14, color: "#f59e0b" },
    { name: "Shopping", kg: 10, color: "#a855f7" },
    { name: "Utilities", kg: 6, color: "#4f8ef7" },
  ],
};

export const commandSuggestions = [
  { icon: "🔍", text: "Show Uber charges this month" },
  { icon: "💸", text: "Transfer £100 to savings" },
  { icon: "📊", text: "How much did I spend on food?" },
  { icon: "📅", text: "When does my salary arrive?" },
  { icon: "🔐", text: "Review security settings" },
  { icon: "❌", text: "Cancel a subscription" },
];
