function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white">
      <div className="absolute inset-0 opacity-25" style={{backgroundImage:'radial-gradient(800px 200px at 10% 0%, rgba(255,255,255,.6) 0, transparent 50%), radial-gradient(600px 160px at 90% 10%, rgba(255,255,255,.35) 0, transparent 40%)'}} />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wide">Fast • Vetted • Insured</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Book trusted home service pros in minutes</h1>
          <p className="mt-4 text-lg/7 text-white/90">From leaks to lights, cleaning to moving — compare top-rated providers, read reviews, and schedule with confidence.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onCTAClick} className="bg-white text-blue-700 font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 shadow-md active:shadow-none transition">
              Get a free quote
            </button>
            <a href="#how" className="bg-white/10 backdrop-blur px-5 py-3 rounded-xl hover:bg-white/20 transition">How it works</a>
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
        <div className="bg-white/10 rounded-2xl p-6 ring-1 ring-white/20">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white/20 rounded-xl p-3">Same-day booking</div>
            <div className="bg-white/20 rounded-xl p-3">Verified pros</div>
            <div className="bg-white/20 rounded-xl p-3">Upfront pricing</div>
            <div className="bg-white/20 rounded-xl p-3">24/7 support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
