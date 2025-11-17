function Step({ n, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="h-10 w-10 rounded-full bg-blue-600 text-white grid place-items-center font-bold shadow">{n}</div>
      <h4 className="mt-3 font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Tell us about the job', desc: 'Choose a service, add details, and your preferred time.' },
    { title: 'Compare top providers', desc: 'We match you with vetted, highly rated pros near you.' },
    { title: 'Book with confidence', desc: 'Securely schedule, chat, and pay in one place.' },
  ]

  return (
    <section id="how" className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-end justify-between mb-4">
        <h3 className="text-2xl font-bold text-slate-900">How it works</h3>
        <p className="text-sm text-slate-500">Three easy steps to get it done</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Step key={i} n={i+1} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
