import { useEffect, useState } from 'react'
import Header from './components/Header'
import CategoryGrid from './components/CategoryGrid'
import ProviderList from './components/ProviderList'
import RequestForm from './components/RequestForm'

function App() {
  const [categories, setCategories] = useState([])
  const [providers, setProviders] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProvider, setSelectedProvider] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`)
    if (res.ok) setCategories(await res.json())
  }

  const fetchProviders = async (cat) => {
    const url = new URL(`${baseUrl}/providers`)
    if (cat) url.searchParams.set('category', cat)
    const res = await fetch(url)
    if (res.ok) setProviders(await res.json())
  }

  const runSeed = async () => {
    await fetch(`${baseUrl}/seed`, { method: 'POST' })
    await Promise.all([fetchCategories(), fetchProviders(selectedCategory)])
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory) fetchProviders(selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onSeed={runSeed} />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Browse by category</h2>
          <CategoryGrid categories={categories} selected={selectedCategory} onSelect={(c) => { setSelectedCategory(c); setSelectedProvider(null) }} />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Available providers{selectedCategory ? ` • ${selectedCategory}` : ''}</h2>
          <ProviderList providers={providers} onSelect={setSelectedProvider} />
        </section>

        {selectedCategory && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Request a service</h2>
            <RequestForm selectedProvider={selectedProvider} selectedCategory={selectedCategory} onSubmitted={() => setSelectedProvider(null)} />
          </section>
        )}
      </main>

      <style>{`
        .input { @apply w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200; }
      `}</style>
    </div>
  )
}

export default App
