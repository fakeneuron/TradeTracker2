import React, { useState } from 'react'
import { TradeManagementData } from '../types'

const TradeManagement: React.FC = () => {
  const [managementData, setManagementData] = useState<TradeManagementData>({
    trailingStop: 0,
    riskManagement: '',
    newTargets: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setManagementData({ ...managementData, [name]: name === 'trailingStop' ? parseFloat(value) : value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Trade Management Data:', managementData)
    // Here you would typically send this data to a backend or update the trade state
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Trade Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="trailingStop" className="block mb-1">Trailing Stop</label>
          <input
            type="number"
            id="trailingStop"
            name="trailingStop"
            value={managementData.trailingStop}
            onChange={handleChange}
            step="0.01"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="riskManagement" className="block mb-1">Risk Management</label>
          <textarea
            id="riskManagement"
            name="riskManagement"
            value={managementData.riskManagement}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="newTargets" className="block mb-1">New Targets</label>
          <textarea
            id="newTargets"
            name="newTargets"
            value={managementData.newTargets}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
          ></textarea>
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Update Trade Management
        </button>
      </form>
    </div>
  )
}

export default TradeManagement