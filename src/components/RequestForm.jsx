import { useState } from 'react'

function RequestForm({ selectedProvider, selectedCategory, onSubmitted }) {
  const [form, setForm] = useState({
    customer_name: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    preferred_date: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        ...form,
        category: selectedCategory,
        provider_id: selectedProvider ? selectedProvider._id || selectedProvider.name : null,
      }
      const res = await fetch(`${baseUrl}/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit request')
      const data = await res.json()
      setMessage('Request submitted successfully!')
      setForm({ customer_name: '', email: '', phone: '', address: '', description: '', preferred_date: '' })
      onSubmitted?.(data)
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="font-semibold text-gray-900">Request a {selectedCategory} service {selectedProvider ? `with ${selectedProvider.name}` : ''}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input className="input" placeholder="Full name" value={form.customer_name} onChange={(e)=>update('customer_name', e.target.value)} required />
        <input className="input" placeholder="Email" type="email" value={form.email} onChange={(e)=>update('email', e.target.value)} required />
        <input className="input" placeholder="Phone" value={form.phone} onChange={(e)=>update('phone', e.target.value)} />
        <input className="input" placeholder="Address" value={form.address} onChange={(e)=>update('address', e.target.value)} required />
        <input className="input" placeholder="Preferred date (YYYY-MM-DD)" value={form.preferred_date} onChange={(e)=>update('preferred_date', e.target.value)} />
        <input className="input" placeholder="Category" value={selectedCategory} readOnly />
      </div>
      <textarea className="input min-h-[90px]" placeholder="Describe the job" value={form.description} onChange={(e)=>update('description', e.target.value)} required />
      <div className="flex items-center gap-3">
        <button disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-60">{loading ? 'Submitting…' : 'Submit Request'}</button>
        {message && <span className="text-sm text-gray-600">{message}</span>}
      </div>
    </form>
  )
}

export default RequestForm
