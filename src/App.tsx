import React, { useState } from 'react'
import Header from './components/Header'
import TradeForm from './components/TradeForm'
import ChartNotes from './components/ChartNotes'
import NewsSection from './components/NewsSection'
import TradeManagement from './components/TradeManagement'
import TradeList from './components/TradeList'
import Footer from './components/Footer'
import { Trade } from './types'

const App: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([])

  const handleAddTrade = (trade: Omit<Trade, 'id'>) => {
    const newTrade: Trade = {
      ...trade,
      id: Date.now().toString(),
    }
    setTrades([...trades, newTrade])
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <TradeForm onAddTrade={handleAddTrade} />
        <ChartNotes />
        <NewsSection />
        <TradeManagement />
        <TradeList trades={trades} />
      </main>
      <Footer />
    </div>
  )
}

export default App