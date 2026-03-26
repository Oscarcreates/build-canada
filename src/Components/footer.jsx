// ─────────────────────────────────────────────
//  Component: Footer
// ─────────────────────────────────────────────
import { SERVICES, ADDRESSES } from "../data";

export default function Footer({ scrollTo }) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollTo("Home")}>
              <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center shadow-md shadow-sky-900">
                <span className="text-white font-black text-lg">C</span>
              </div>
              <div>
                <div className="text-sky-400 font-black text-sm leading-tight tracking-wide uppercase">Chora Bridge</div>
                <div className="text-gray-500 text-[10px] tracking-widest uppercase leading-none">Construction</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Canada's infrastructure with integrity, precision, and excellence since 2004.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => scrollTo("Services")}
                    className="text-gray-400 text-sm hover:text-sky-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-black mb-4 text-sm uppercase tracking-widest">Locations</h4>
            <ul className="space-y-2">
              {ADDRESSES.map((a) => (
                <li key={a.city} className="text-gray-400 text-sm">
                  <span className="text-sky-400 font-semibold">{a.city}</span> — {a.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>+1 (705) 528-2359</div>
              <div>✉️ info@chorabridge<span>construction.com</span></div>
              <div>🕐 Mon–Fri, 8am – 6pm EST</div>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { id: "in", label: "LinkedIn" },
                { id: "tw", label: "Twitter"  },
                { id: "fb", label: "Facebook" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-gray-400 hover:text-white"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} Chora Bridge Construction. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <span key={l} className="hover:text-sky-400 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}