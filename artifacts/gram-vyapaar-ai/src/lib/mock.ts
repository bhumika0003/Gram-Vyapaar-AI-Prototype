export type Confidence = 'verified' | 'estimate' | 'user input' | 'assumption' | 'demo data';

export const mockConfig = {
  useMocks: import.meta.env.VITE_USE_MOCKS !== 'false',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
};

export const apiClient = {
  mode: mockConfig.useMocks ? 'mock' : 'http',
  async getProfile() {
    return demoProfile;
  },
  async getSchemes() {
    return schemes;
  },
};

export const demoProfile = {
  name: 'Sunita Devi',
  village: 'Demo Village',
  district: 'Sehore',
  state: 'Madhya Pradesh',
  business: 'Dairy & fresh milk',
  capital: '₹1,00,000',
  score: 74,
  confidence: 'demo data' as Confidence,
};

export const navItems = [
  { label: 'Overview', path: '/dashboard', icon: 'grid' },
  { label: 'Business intake', path: '/intake', icon: 'clipboard' },
  { label: 'Financial plan', path: '/finance', icon: 'calculator' },
  { label: 'Market intelligence', path: '/market', icon: 'chart' },
  { label: 'Geo + RAG module', path: '/geo-ai', icon: 'globe' },
  { label: 'Risk & resilience', path: '/risk', icon: 'shield' },
  { label: 'Scenarios', path: '/scenarios', icon: 'sparkles' },
  { label: 'AI advisor', path: '/advisor', icon: 'message' },
  { label: 'Feasibility report', path: '/report', icon: 'file' },
  { label: 'Monitoring', path: '/monitoring', icon: 'pulse' },
];

export const schemes = [
  { name: 'PM MUDRA — Shishu', ministry: 'Ministry of Finance', amount: 'Up to ₹50,000', match: 92, color: 'saffron' },
  { name: 'Rashtriya Gokul Mission', ministry: 'Department of Animal Husbandry', amount: 'Asset support varies', match: 78, color: 'teal' },
  { name: 'Dairy Entrepreneurship Development', ministry: 'NABARD', amount: 'Back-ended subsidy', match: 71, color: 'terracotta' },
];

export const competitors = [
  { name: 'Sharma Milk Point', distance: '1.8 km', price: '₹54 / litre', rating: 'Regular demand', x: 25, y: 36 },
  { name: 'Co-op collection centre', distance: '3.2 km', price: '₹48 / litre', rating: 'Reliable pickup', x: 66, y: 27 },
  { name: 'Ramesh Dairy', distance: '4.6 km', price: '₹52 / litre', rating: 'Morning only', x: 48, y: 71 },
];

export const riskDimensions = [
  { name: 'Water availability', source: 'CGWB / local verification', status: 'DATA_UNAVAILABLE', note: 'No live groundwater source is connected in this demo.' },
  { name: 'Power reliability', source: 'Local discom feed', status: 'DATA_UNAVAILABLE', note: 'Ask the local collection centre about outage patterns.' },
  { name: 'Market competition', source: 'OpenStreetMap / Overpass', status: 'DATA_ESTIMATE', note: 'Three public signals are visible within 5 km.' },
  { name: 'Disease exposure', source: 'Veterinary department', status: 'DATA_UNAVAILABLE', note: 'Confirm the next vaccination camp locally.' },
  { name: 'Credit readiness', source: 'User inputs + scheme rules', status: 'MODEL_ASSUMPTION', note: 'Loan fit is an indicative match, not approval.' },
];

export const pivotSuggestions = [
  { type: 'Route pivot', title: 'Start with a fixed morning route', detail: 'Serve 12 nearby households first instead of adding another animal immediately.', fit: 'Low risk' },
  { type: 'Buyer pivot', title: 'Mix home delivery with the co-op', detail: 'Use the co-op as a fallback when one household pauses orders.', fit: 'More resilient' },
  { type: 'Offer pivot', title: 'Add curd on two days a week', detail: 'Test a higher-margin add-on without changing the daily milk route.', fit: 'Small experiment' },
  { type: 'Timing pivot', title: 'Delay borrowing until demand is verified', detail: 'Speak to five households before taking the full working-capital loan.', fit: 'Safest first step' },
];

export const ragDocuments = [
  { name: 'PM MUDRA guidelines 2025', type: 'Government PDF', chunks: 12, status: 'Indexed', freshness: '17 Jun 2025', confidence: 'verified' as Confidence },
  { name: 'MP dairy unit cost guide', type: 'NABARD reference', chunks: 8, status: 'Indexed', freshness: '2024–25', confidence: 'verified' as Confidence },
  { name: 'Sehore household sample', type: 'Partner upload', chunks: 0, status: 'Needs review', freshness: '12 Jun 2025', confidence: 'estimate' as Confidence },
];

export const citations = [
  { source: 'NABARD Dairy unit cost guide', detail: '2024–25 • Madhya Pradesh' },
  { source: 'PM MUDRA scheme guidelines', detail: 'Ministry of Finance • accessed today' },
  { source: 'Demo Village household survey', detail: 'Local sample • 128 households' },
];

export const alerts = [
  { title: 'Milk collection price changed', detail: 'Co-op rate is ₹48/L this week. Review your selling mix.', tone: 'amber', time: '2 days ago' },
  { title: 'DPR is ready for review', detail: 'Two assumptions need your confirmation before sharing.', tone: 'teal', time: 'Today' },
  { title: 'Vaccination camp nearby', detail: 'Government veterinary camp at Demo Village on 18 June.', tone: 'blue', time: 'Tomorrow' },
];

export const translate = {
  en: {
    hello: 'Namaste, Sunita',
    overview: 'Your business overview',
    subtitle: 'A clear view of what looks promising, what needs checking, and what to do next.',
    analyze: 'Analyze My Business',
    demo: 'Try Demo',
    next: 'Your next best step',
  },
  hi: {
    hello: 'नमस्ते, सुनीता',
    overview: 'आपके व्यवसाय का अवलोकन',
    subtitle: 'क्या अच्छा दिख रहा है, क्या जांचना है और आगे क्या करना है — एक साफ़ नज़र।',
    analyze: 'मेरे व्यवसाय का विश्लेषण करें',
    demo: 'डेमो देखें',
    next: 'आपका अगला बेहतर कदम',
  },
};