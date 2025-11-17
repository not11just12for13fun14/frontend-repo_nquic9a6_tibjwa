import { useEffect } from 'react'

function CategoryGrid({ categories = [], selected, onSelect }) {
  useEffect(() => {
    if (!selected && categories.length) {
      onSelect?.(categories[0].name)
    }
  }, [categories])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect?.(cat.name)}
          className={`p-4 rounded-2xl border transition-all shadow-sm hover:shadow-md text-left hover:-translate-y-0.5 ${selected === cat.name ? 'border-blue-600 ring-2 ring-blue-200' : 'border-slate-200'}`}
        >
          <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center font-semibold mb-2">
            {cat.icon?.[0] || '🔧'}
          </div>
          <div className="font-semibold text-slate-900">{cat.name}</div>
          <div className="text-xs text-slate-500 line-clamp-2">{cat.description}</div>
        </button>
      ))}
    </div>
  )
}

export default CategoryGrid
