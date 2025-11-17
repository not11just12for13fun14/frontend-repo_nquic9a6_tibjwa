import { useEffect, useState } from 'react'

function ReviewItem({ r }) {
  return (
    <div className="border border-slate-200 rounded-xl p-3 bg-white">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-slate-800">{r.customer_name}</div>
        <div className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">★ {r.rating}</div>
      </div>
      <p className="text-sm text-slate-600">{r.comment}</p>
    </div>
  )
}

function ProviderProfile({ provider, onClose }) {
  const [detail, setDetail] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      if (!provider) return
      const id = provider._id || provider.name
      const res = await fetch(`${baseUrl}/provider/${id}`)
      if (res.ok) setDetail(await res.json())
      else setDetail(provider)
    }
    load()
  }, [provider])

  if (!provider) return null

  const d = detail || provider
  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm grid place-items-center p-4 z-50">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-bold">
              {d.name?.split(' ').map(w=>w[0]).join('').slice(0,2)}
            </div>
            <div>
              <div className="font-semibold text-slate-900">{d.name}</div>
              <div className="text-xs text-slate-500">{d.category} • {d.city}</div>
            </div>
          </div>
          <button onClick={onClose} className="text-sm px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200">Close</button>
        </div>
        <div className="p-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            <div className="bg-slate-50 rounded-xl p-3">
              <div className="font-semibold">About</div>
              <p className="text-sm text-slate-600">{d.bio || 'Reliable, experienced professional'}</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Services</div>
              <div className="grid sm:grid-cols-2 gap-2">
                {(d.services || []).map((s, i) => (
                  <div key={i} className="border rounded-xl p-3 text-sm hover:shadow-sm transition">
                    <div className="font-medium">{s.title}</div>
                    <div className="text-slate-500">{s.category} {s.price ? `• $${s.price}` : ''}</div>
                  </div>
                ))}
                {!d.services?.length && <div className="text-sm text-slate-500">No services listed.</div>}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="font-semibold">Customer reviews</div>
            <div className="space-y-2 max-h-64 overflow-auto pr-1">
              {(d.reviews || []).map((r, i) => (
                <ReviewItem key={i} r={r} />
              ))}
              {!d.reviews?.length && <div className="text-sm text-slate-500">No reviews yet.</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderProfile
