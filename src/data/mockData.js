// Mock data for the ticker
export const tickerData = [
  { name: 'BSC-USD', price: '$4.38', change: '+0.02%', changeType: 'positive' },
  { name: 'FDUSD', price: '$1.58', change: '-2.4%', changeType: 'negative' },
  { name: 'USDTb', price: '$1.5B', change: '+0.05%', changeType: 'positive' },
  { name: 'PYUSD', price: '$937.3M', change: '-2.69%', changeType: 'negative' },
  { name: 'USDD', price: '$746.3M', change: '-0.02%', changeType: 'negative' },
  { name: 'USDO', price: '$591.9M', change: '-1.39%', changeType: 'negative' },
  { name: 'BTC', price: '$68,420.10', change: '+1.5%', changeType: 'positive' },
  { name: 'ETH', price: '$3,550.75', change: '-0.5%', changeType: 'negative' },
];

// Mock data for the stat cards
export const statsData = [
  { title: 'Total RWA Onchain', value: '$24.36B', change: '+5.05%', note: 'from 30d ago' },
  { title: 'Total Asset Holders', value: '233,394', change: '+104.69%', note: 'from 30d ago' },
  { title: 'Total Asset Issuers', value: '196', change: '', note: '' },
  { title: 'Total Stablecoin Value', value: '$240.41B', change: '+2.08%', note: 'from 30d ago' },
  { title: 'Total Stablecoin Holders', value: '169.54M', change: '+2.49%', note: 'from 30d ago' },
];

// Mock data for the area chart
export const areaChartData = [
  { name: '1/1/19', 'Private Credit': 1.0, 'US Treasury Debt': 0.5, 'Commodities': 0.3, 'Stocks': 0.2 },
  { name: '1/1/20', 'Private Credit': 2.2, 'US Treasury Debt': 1.1, 'Commodities': 0.8, 'Stocks': 0.5 },
  { name: '1/1/21', 'Private Credit': 4.5, 'US Treasury Debt': 2.3, 'Commodities': 1.5, 'Stocks': 1.0 },
  { name: '1/1/22', 'Private Credit': 7.0, 'US Treasury Debt': 3.8, 'Commodities': 2.5, 'Stocks': 1.8 },
  { name: '1/1/23', 'Private Credit': 10.5, 'US Treasury Debt': 5.5, 'Commodities': 4.0, 'Stocks': 2.5 },
  { name: '1/1/24', 'Private Credit': 15.0, 'US Treasury Debt': 8.0, 'Commodities': 6.0, 'Stocks': 4.0 },
  { name: '1/1/25', 'Private Credit': 18.2, 'US Treasury Debt': 10.2, 'Commodities': 7.5, 'Stocks': 5.5 },
];

// Mock data for the doughnut chart
export const pieChartData = [
    { name: 'Private Credit', value: 400 },
    { name: 'US Treasury Debt', value: 300 },
    { name: 'Commodities', value: 300 },
    { name: 'Stocks', value: 200 },
];
export const PIE_CHART_COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

export const activityFeedData = [
  { type: 'tokenization', text: 'New asset tokenized: RealT - 123 Main St', time: '1m ago', icon: 'plus' },
  { type: 'transfer', text: 'Large transfer detected: 5M USDC', time: '5m ago', icon: 'arrow' },
  { type: 'yield', text: 'Yield paid out: Franklin Templeton Fund', time: '32m ago', icon: 'zap' },
  { type: 'tokenization', text: 'New asset tokenized: Centrifuge - Invoice #5421', time: '1h ago', icon: 'plus' },
  { type: 'transfer', text: 'Large transfer detected: 1.2M USDTb', time: '3h ago', icon: 'arrow' },
];

export const salesByCountryData = [
    { flag: '🇺🇸', country: 'United States', sales: '2,500', value: '$230,900', bounce: '29.9%' },
    { flag: '🇩🇪', country: 'Germany', sales: '3,900', value: '$440,000', bounce: '40.22%' },
    { flag: '🇬🇧', country: 'Great Britain', sales: '1,400', value: '$190,700', bounce: '23.44%' },
    { flag: '🇧🇷', country: 'Brazil', sales: '562', value: '$143,960', bounce: '32.14%' },
];


export const activeUsersData = [
  { name: 'M', users: 400 },
  { name: 'T', users: 180 },
  { name: 'W', users: 240 },
  { name: 'T', users: 420 },
  { name: 'F', users: 150 },
  { name: 'S', users: 300 },
  { name: 'S', users: 350 },
];
