export default function InteractiveNN() {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto bg-gray-900 rounded-lg p-8 max-w-2xl">
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Interactive Neural Network</h3>
        <div className="h-48 bg-black rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Neural Network Visualization</p>
        </div>
        <p className="mt-4 text-gray-400">
          Hover over nodes to see activation patterns
        </p>
      </div>
    </div>
  )
}
