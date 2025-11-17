import { useEffect, useState } from 'react'

function TopCard({ title, subtitle, badge, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          {subtitle && <div className="text-xs text-slate-500">{subtitle}</div>}
        </div>
        {badge && <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{badge}</div>}
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
      <div className="flex items-end justify-between mb-4">
        <h3 className="text-2xl font-bold text-slate-900">Top sellers</h3>
        <p className="text-sm text-slate-500">Our most-loved pros and services right now</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Top providers</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topProviders.map(p => (
              <TopCard key={p._id || p.name} title={p.name} subtitle={`${p.category} • ★ ${p.rating?.toFixed?.(1) || p.rating}`} badge={p.city} onClick={()=>onSelectProvider?.(p)} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Top selling services</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
