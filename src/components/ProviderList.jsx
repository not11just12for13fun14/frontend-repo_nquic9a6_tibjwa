function ProviderList({ providers = [], onSelect }) {
  if (!providers.length) {
    return (
      <div className="text-gray-500 text-sm">No providers found for this category.</div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {providers.map((p) => (
        <div key={p.name} className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-bold">
            {p.name.split(' ').map(w=>w[0]).join('').slice(0,2)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">★ {p.rating.toFixed(1)}</span>
            </div>
            <div className="text-xs text-gray-500">{p.category} • {p.city || 'Local'}</div>
            <div className="text-sm text-gray-700 mt-2">{p.bio || 'Reliable service'}</div>
            <div className="mt-3">
              <button onClick={() => onSelect?.(p)} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">Request Quote</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProviderList
