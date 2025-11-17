function Step({ n, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
      <div className="h-10 w-10 rounded-full bg-blue-600 text-white grid place-items-center font-bold">{n}</div>
      <h4 className="mt-3 font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
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
      <h3 className="text-2xl font-bold text-gray-900 mb-4">How it works</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Step key={i} n={i+1} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
