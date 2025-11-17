function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(255,255,255,.4) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,.3) 0, transparent 35%)'}} />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Book trusted home service pros in minutes</h1>
          <p className="mt-4 text-lg text-white/90">From leaks to lights, cleaning to moving — compare top-rated providers, read reviews, and schedule with confidence.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onCTAClick} className="bg-white text-blue-700 font-semibold px-5 py-3 rounded-lg hover:bg-blue-50 shadow">
              Get a free quote
            </button>
            <a href="#how" className="bg-white/10 backdrop-blur px-5 py-3 rounded-lg hover:bg-white/20">How it works</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-white/20 border border-white"/>
              <div className="h-8 w-8 rounded-full bg-white/20 border border-white"/>
              <div className="h-8 w-8 rounded-full bg-white/20 border border-white"/>
            </div>
            <span>Trusted by 25k+ homeowners</span>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white/20 rounded-lg p-3">Same-day booking</div>
            <div className="bg-white/20 rounded-lg p-3">Verified pros</div>
            <div className="bg-white/20 rounded-lg p-3">Upfront pricing</div>
            <div className="bg-white/20 rounded-lg p-3">24/7 support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
