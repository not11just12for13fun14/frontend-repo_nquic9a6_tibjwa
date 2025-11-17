import { useState } from 'react'

function Header({ onSeed }) {
  const [seeding, setSeeding] = useState(false)

  const handleSeed = async () => {
    if (!onSeed) return
    setSeeding(true)
    try {
      await onSeed()
    } finally {
      setSeeding(false)
    }
  }

  return (
    <header className="w-full bg-white/70 backdrop-blur border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">HS</div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Home Services</h1>
            <p className="text-xs text-gray-500">Find trusted pros for every job</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/test" className="text-sm text-gray-600 hover:text-gray-900">System Check</a>
          <button onClick={handleSeed} disabled={seeding} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded disabled:opacity-60">
            {seeding ? 'Seeding…' : 'Load Sample Data'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
