import { useEffect, useState } from 'react'

function TopCard({ title, subtitle, badge, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
        {badge && <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">{badge}</div>}
      </div>
    </div>
  )
}

function TopSellers({ onSelectService, onSelectProvider }) {
  const [topProviders, setTopProviders] = useState([])
  const [topServices, setTopServices] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      const p = await fetch(`${baseUrl}/providers?top=6`).then(r=>r.ok?r.json():[])
      const s = await fetch(`${baseUrl}/services?top=6`).then(r=>r.ok?r.json():[])
      setTopProviders(p)
      setTopServices(s)
    }
    load()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Top sellers</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Top providers</h4>
          <div className="grid sm:grid-cols-2 gap-3"> 
            {topProviders.map(p => (
              <TopCard key={p._id || p.name} title={p.name} subtitle={`${p.category} • ★ ${p.rating?.toFixed?.(1) || p.rating}`} badge={p.city} onClick={()=>onSelectProvider?.(p)} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Top selling services</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {topServices.map(s => (
              <TopCard key={s._id || s.title} title={s.title} subtitle={s.category} badge={`Popularity ${s.popularity || 0}`} onClick={()=>onSelectService?.(s)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopSellers
