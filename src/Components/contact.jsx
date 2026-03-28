// ─────────────────────────────────────────────
//  Component: ContactSection
// ─────────────────────────────────────────────
import { useState } from "react";
import { Helmet } from "react-helmet-async"; // ← ADDED
import { ADDRESSES, SERVICES } from "../data";
import { FadeIn } from "../utils";

// ↓ Change this to your actual endpoint URL if it differs
const CONTACT_ENDPOINT = "https://mail-server-towing-pages.vercel.app/api/canada-builders";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", service: "", message: "",
  });
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error,      setError]      = useState(null);

  const update = (key, val) => setFormData((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          message: `Service Interested In: ${formData.service}\n\n${formData.message}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── SEO META TAGS ── */}
      <Helmet>
        <title>Contact Us | Crest Forge Constructione</title>
        <meta
          name="description"
          content="Ready to build? Contact Crest Forge Construction for a free consultation or quote. Serving clients across Canada with residential, commercial, renovation, and contracting expertise."
        />
      </Helmet>

      <section
        id="contact"
        className="py-24"
        style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
              Get in Touch
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1.5px" }}
            >
              Contact Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Reach out for project inquiries, consultations, or any questions about our services.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── Contact Form ── */}
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-xl shadow-sky-100 border border-sky-100 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="text-2xl font-black text-sky-600 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", service: "", message: "" });
                      }}
                      className="mt-6 text-sky-500 font-bold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-black text-gray-900 mb-6">Send Us a Message</h3>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all placeholder-gray-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all placeholder-gray-300"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Interested In</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project..."
                        required
                        value={formData.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full border border-sky-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all resize-none placeholder-gray-300"
                      />
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-semibold px-4 py-3 rounded-xl">
                        ⚠️ {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-sky-200 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      {submitting ? "Sending..." : "Send Message →"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* ── Office Locations ── */}
            <FadeIn delay={150}>
              <div className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 mb-6">Our Offices</h3>
                {ADDRESSES.map((a, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-sky-100 p-5 shadow-sm hover:shadow-md hover:shadow-sky-100 hover:border-sky-200 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      🏢
                    </div>
                    <div>
                      <div className="font-black text-gray-900 mb-0.5">{a.city}</div>
                      <div className="text-gray-600 text-sm">{a.address}</div>
                      <div className="text-gray-400 text-sm">{a.full}</div>
                    </div>
                  </div>
                ))}

                {/* Quick contact */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100">
                    <div className="text-lg mb-1">📞</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Phone</div>
                    <div className="text-sky-600 font-bold text-sm">+1 (705) 528-2359</div>
                     <div className="text-sky-600 font-bold text-sm">+1 (800)-601-1695</div>
                  </div>
                  <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100">
                    <div className="text-lg mb-1">✉️</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email</div>
                    <div className="text-sky-600 font-bold text-sm">info@crestford <span>construction.com</span></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}