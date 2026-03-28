// ─────────────────────────────────────────────
//  Component: ServiceDetailPage
//  Route: /services/:slug
// ─────────────────────────────────────────────
import { useState } from "react";
import { Helmet } from "react-helmet-async"; // ← ADDED
import { useParams, useNavigate } from "react-router-dom";
import { SERVICES } from "../data";

export default function ServiceDetailPage() {
  const { slug }   = useParams();
  const navigate   = useNavigate();
  const service    = SERVICES.find((s) => s.slug === slug);

  const [form, setForm]           = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const upd = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  // 404 fallback
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50 text-center px-4">
        <div className="text-6xl mb-4">🏗️</div>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Service Not Found</h1>
        <p className="text-gray-500 mb-6">We couldn't find that service.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-sky-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-sky-600 transition-colors"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      {/* ── SEO META TAGS (dynamic per service) ── */}
      <Helmet>
        <title>{service.title} | Build Canada Construction</title>
        <meta
          name="description"
          content={`Build Canada Construction offers expert ${service.title.toLowerCase()} services across Canada. Professional results, licensed contractors, and dedicated project managers. Get a free quote today.`}
        />
      </Helmet>

    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── HERO BANNER ── */}
      <div
        className="relative w-full flex items-end overflow-hidden"
        style={{ minHeight: 380 }}
      >
        {/* Background: real image or gradient */}
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #0284c7 0%, #075985 55%, #0c4a6e 100%)" }}
          >
            {/* Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sdp-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sdp-grid)" />
            </svg>
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-sky-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-300 rounded-full opacity-15 blur-3xl" />
          </div>
        )}

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 w-full">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{service.icon}</span>
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
              Our Services
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-black text-white"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1.5px", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            {service.title}
          </h1>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="bg-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-sky-400">
            {service.stats.map((s, i) => (
              <div key={i} className="py-5 px-6 text-center">
                <div className="text-2xl lg:text-3xl font-black" style={{ fontFamily: "'Georgia', serif" }}>
                  {s.value}
                </div>
                <div className="text-sky-100 text-xs font-semibold uppercase tracking-wide mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* ── LEFT: Description + Includes ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Extended Description */}
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                Overview
              </div>
              <h2
                className="text-3xl font-black text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1px" }}
              >
                About This Service
              </h2>
              <div className="space-y-4">
                {service.extendedDesc.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-widest uppercase">
                What's Included
              </div>
              <h2
                className="text-3xl font-black text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1px" }}
              >
                Services & Scope
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-xl p-4 hover:bg-sky-100 hover:border-sky-200 transition-all duration-200"
                  >
                    <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-8 border border-sky-100"
              style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)" }}
            >
              <h3 className="text-xl font-black text-gray-900 mb-5">Why Choose Crest Forge?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "20+ Years Experience",     desc: "Decades of expertise on Canadian soil." },
                  { title: "Licensed & Insured",        desc: "Fully certified and compliant with all Canadian codes." },
                  { title: "On-Time Delivery",          desc: "We respect your timeline and budget." },
                  { title: "Dedicated Project Manager", desc: "One point of contact from start to finish." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div>
                      <div className="font-black text-gray-900 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Quote Form ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl shadow-xl shadow-sky-100 border border-sky-100 overflow-hidden">
                {/* Form header */}
                <div className="bg-sky-500 px-6 py-5">
                  <h3 className="text-white font-black text-lg">Get a Free Quote</h3>
                  <p className="text-sky-100 text-sm mt-1">We'll respond within 24 hours.</p>
                </div>

                <div className="p-6">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
                      <h4 className="text-lg font-black text-sky-600 mb-1">Request Sent!</h4>
                      <p className="text-gray-500 text-sm">Our team will be in touch shortly.</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", message:"" }); }}
                        className="mt-4 text-sky-500 text-sm font-bold hover:underline"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                      className="space-y-4"
                    >
                      {/* Service tag */}
                      <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 flex items-center gap-2">
                        <span>{service.icon}</span>
                        <span className="text-sky-700 text-sm font-bold">{service.title}</span>
                      </div>

                      {[
                        { label: "Full Name",     key: "name",  type: "text",  ph: "John Smith"        },
                        { label: "Email Address", key: "email", type: "email", ph: "john@example.com"  },
                        { label: "Phone Number",  key: "phone", type: "tel",   ph: "+1 (705) 528-2359" },
                      ].map(({ label, key, type, ph }) => (
                        <div key={key}>
                          <label className="block text-xs font-bold text-gray-700 mb-1">{label}</label>
                          <input
                            type={type}
                            placeholder={ph}
                            required
                            value={form[key]}
                            onChange={(e) => upd(key, e.target.value)}
                            className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all placeholder-gray-300"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Project Details</label>
                        <textarea
                          rows={4}
                          placeholder={`Tell us about your ${service.title.toLowerCase()} project...`}
                          required
                          value={form.message}
                          onChange={(e) => upd("message", e.target.value)}
                          className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all resize-none placeholder-gray-300"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-200 hover:shadow-xl hover:-translate-y-0.5 text-sm"
                      >
                        Request Free Quote →
                      </button>

                      <p className="text-center text-gray-400 text-xs">
                        No obligation. We'll get back to you within 24 hours.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Other services */}
              <div className="mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Other Services</p>
                <div className="space-y-2">
                  {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => { navigate(`/services/${s.slug}`); window.scrollTo(0, 0); }}
                      className="w-full flex items-center gap-3 bg-white border border-sky-100 hover:border-sky-300 hover:bg-sky-50 rounded-xl px-4 py-3 transition-all duration-200 group text-left"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-sky-600 transition-colors flex-1">{s.title}</span>
                      <span className="text-sky-400 text-xs group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
    </>
  );
}