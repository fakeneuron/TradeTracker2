import React, { useState } from 'react'
import { Trade } from '../types'

interface TradeFormProps {
  onAddTrade: (trade: Omit<Trade, 'id'>) => void;
}

const TradeForm: React.FC<TradeFormProps> = ({ onAddTrade }) => {
  const [trade, setTrade] = useState<Omit<Trade, 'id'>>({
    date: '',
    time: '',
    asset: '',
    type: 'buy',
    price: 0,
    lotSize: 0,
    takeProfit: undefined,
    stopLoss: undefined,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setTrade(prev => ({
      ...prev,
      [name]: type === 'radio' ? value :
              (name === 'price' || name === 'lotSize' || name === 'takeProfit' || name === 'stopLoss') 
                ? (value === '' ? undefined : parseFloat(value)) 
                : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTrade(trade)
    setTrade({ date: '', time: '', asset: '', type: 'buy', price: 0, lotSize: 0, takeProfit: undefined, stopLoss: undefined })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Add New Trade</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="date" className="block mb-1">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={trade.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={trade.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="asset" className="block mb-1">Asset</label>
          <input
            type="text"
            id="asset"
            name="asset"
            value={trade.asset}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="lotSize" className="block mb-1">Lot Size</label>
          <input
            type="number"
            id="lotSize"
            name="lotSize"
            value={trade.lotSize || ''}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label className="block mb-1">Type</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="buy"
                checked={trade.type === 'buy'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Buy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="sell"
                checked={trade.type === 'sell'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Sell</span>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Trade Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="price" className="block mb-1">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={trade.price || ''}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="takeProfit" className="block mb-1">Take Profit</label>
            <input
              type="number"
              id="takeProfit"
              name="takeProfit"
              value={trade.takeProfit || ''}
              onChange={handleChange}
              step="0.01"
              min="0"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="stopLoss" className="block mb-1">Stop Loss</label>
            <input
              type="number"
              id="stopLoss"
              name="stopLoss"
              value={trade.stopLoss || ''}
              onChange={handleChange}
              step="0.01"
              min="0"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Trade
      </button>
    </form>
  )
}

export default TradeForm