import { useEffect, useState, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import ProviderList from './components/ProviderList'
import ProviderProfile from './components/ProviderProfile'
import TopSellers from './components/TopSellers'
import HowItWorks from './components/HowItWorks'
import RequestForm from './components/RequestForm'

function App() {
  const [categories, setCategories] = useState([])
  const [providers, setProviders] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const requestRef = useRef(null)

  const fetchCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`)
    if (res.ok) setCategories(await res.json())
  }

  const fetchProviders = async (cat) => {
    const url = new URL(`${baseUrl}/providers`)
    if (cat) url.searchParams.set('category', cat)
    const res = await fetch(url)
    if (res.ok) setProviders(await res.json())
    else setProviders([])
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

  const openProvider = (p) => {
    setSelectedProvider(p)
    setShowProfile(true)
    setTimeout(() => requestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const handleSelectService = (service) => {
    if (service?.category) {
      setSelectedCategory(service.category)
    }
    setTimeout(() => {
      window.scrollTo({ top: (requestRef.current?.offsetTop || 0) - 60, behavior: 'smooth' })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header onSeed={runSeed} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-14">
        <Hero onCTAClick={() => requestRef.current?.scrollIntoView({ behavior: 'smooth' })} />

        <TopSellers onSelectService={handleSelectService} onSelectProvider={openProvider} />

        <section className="space-y-4" id="categories">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Browse by category</h2>
            <p className="text-sm text-slate-500">Pick a category to see top local pros</p>
          </div>
          <CategoryGrid categories={categories} selected={selectedCategory} onSelect={(c) => { setSelectedCategory(c); setSelectedProvider(null) }} />
        </section>

        <section className="space-y-4" id="providers">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Top providers{selectedCategory ? ` • ${selectedCategory}` : ''}</h2>
            <p className="text-sm text-slate-500">Highly rated pros near you</p>
          </div>
          <ProviderList providers={providers} onSelect={openProvider} />
        </section>

        <section ref={requestRef} className="space-y-4" id="quote">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Request a service</h2>
            <p className="text-sm text-slate-500">Share details and get a fast quote</p>
          </div>
          <RequestForm selectedProvider={selectedProvider} selectedCategory={selectedCategory} onSubmitted={() => setSelectedProvider(null)} />
        </section>

        <HowItWorks />
      </main>

      <Footer />

      {showProfile && (
        <ProviderProfile provider={selectedProvider} onClose={() => setShowProfile(false)} />
      )}

      <style>{`
        .input { @apply w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition; }
      `}</style>
    </div>
  )
}

export default App
