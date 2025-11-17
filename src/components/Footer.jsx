function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold">Home Services</div>
          <p className="text-sm text-slate-400 mt-2">Trusted pros for every job. Book, chat, and get it done.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Services</div>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Cleaning</li>
            <li>Painting</li>
            <li>Moving</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Get the app</div>
          <div className="flex gap-2 text-xs">
            <div className="bg-black px-3 py-2 rounded">App Store</div>
            <div className="bg-black px-3 py-2 rounded">Google Play</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-slate-500 flex justify-between">
          <div>© {new Date().getFullYear()} Home Services. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
