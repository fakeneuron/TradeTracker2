import React from 'react'
import { Trade } from '../types'

interface TradeListProps {
  trades: Trade[];
}

const TradeList: React.FC<TradeListProps> = ({ trades }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-2xl font-semibold mb-4">Trade History</h2>
      {trades.length === 0 ? (
        <p>No trades recorded yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Asset</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Lot Size</th>
                <th className="p-2 text-left">Take Profit</th>
                <th className="p-2 text-left">Stop Loss</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id} className="border-b">
                  <td className="p-2">{trade.date}</td>
                  <td className="p-2">{trade.time}</td>
                  <td className="p-2">{trade.asset}</td>
                  <td className="p-2">{trade.type}</td>
                  <td className="p-2">${trade.price.toFixed(2)}</td>
                  <td className="p-2">{trade.lotSize}</td>
                  <td className="p-2">${trade.takeProfit?.toFixed(2) || 'N/A'}</td>
                  <td className="p-2">${trade.stopLoss?.toFixed(2) || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default TradeList