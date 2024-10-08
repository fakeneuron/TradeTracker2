import React, { useState } from 'react'
import { News } from '../types'

const NewsSection: React.FC = () => {
  const [newsItems, setNewsItems] = useState<News[]>([])
  const [currentNews, setCurrentNews] = useState<News>({
    time: '',
    type: '',
    expectedValue: '',
    actualValue: '',
    note: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCurrentNews({ ...currentNews, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentNews.time && currentNews.type) {
      setNewsItems([...newsItems, currentNews])
      setCurrentNews({ time: '', type: '', expectedValue: '', actualValue: '', note: '' })
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">News</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="time" className="block mb-1">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={currentNews.time}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="type" className="block mb-1">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={currentNews.type}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="expectedValue" className="block mb-1">Expected Value</label>
            <input
              type="text"
              id="expectedValue"
              name="expectedValue"
              value={currentNews.expectedValue}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="actualValue" className="block mb-1">Actual Value</label>
            <input
              type="text"
              id="actualValue"
              name="actualValue"
              value={currentNews.actualValue}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="note" className="block mb-1">Note</label>
          <textarea
            id="note"
            name="note"
            value={currentNews.note}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
          ></textarea>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add News
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">News Items</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Time</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Expected</th>
                <th className="p-2 text-left">Actual</th>
                <th className="p-2 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              {newsItems.map((news, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{news.time}</td>
                  <td className="p-2">{news.type}</td>
                  <td className="p-2">{news.expectedValue}</td>
                  <td className="p-2">{news.actualValue}</td>
                  <td className="p-2">{news.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NewsSection