import { useState } from 'react'

export default function DataVisualizer() {
  const [dataset, setDataset] = useState('linear')
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-700 p-4 rounded-lg">
          <label className="block text-gray-300 mb-2">Dataset</label>
          <select 
            className="w-full bg-gray-800 text-white p-2 rounded"
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
          >
            <option value="linear">Linear</option>
            <option value="nonlinear">Non-Linear</option>
          </select>
        </div>
      </div>
      
      <div className="bg-gray-900 p-4 rounded-lg mb-6 h-64 flex items-center justify-center">
        <p className="text-gray-500">
          {dataset === 'linear' 
            ? "Linear dataset visualization" 
            : "Non-linear dataset visualization"}
        </p>
      </div>
      
      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-bold mx-auto block">
        Train Model
      </button>
    </div>
  )
}
