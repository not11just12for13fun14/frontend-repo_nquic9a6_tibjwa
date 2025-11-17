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
    <header className="w-full sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 mb-3 rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold shadow-sm">HS</div>
              <div>
                <div className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900">Home Services</div>
                <p className="text-[11px] md:text-xs text-slate-500">Find trusted pros for every job</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#categories" className="text-slate-600 hover:text-slate-900 transition">Categories</a>
              <a href="#providers" className="text-slate-600 hover:text-slate-900 transition">Top Providers</a>
              <a href="#how" className="text-slate-600 hover:text-slate-900 transition">How it works</a>
              <a href="#quote" className="text-slate-600 hover:text-slate-900 transition">Get a quote</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="/test" className="hidden sm:inline-flex text-xs md:text-sm text-slate-600 hover:text-slate-900">System Check</a>
              <button onClick={handleSeed} disabled={seeding} className="text-xs md:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-lg disabled:opacity-60 shadow-sm">
                {seeding ? 'Seeding…' : 'Load Sample Data'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
