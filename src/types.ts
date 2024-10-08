export interface ChartNote {
  id: string;
  timeframe: string;
  note: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  isStrongSentiment: boolean;
  support: string;
  resistance: string;
  image?: string;
}

// ... (rest of the file remains unchanged)