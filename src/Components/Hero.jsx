// ─────────────────────────────────────────────
//  Component: HeroSection
//  Features:
//    • Full-screen video background (muted, looping, autoplay)
//    • Dark overlay for text readability
//    • Animated headline + CTAs
//    • Fallback gradient if no video is provided
//
//  HOW TO ADD YOUR VIDEO:
//    1. Place your video file in /public/videos/ (e.g. hero.mp4)
//    2. Open src/data/index.js
//    3. Set:  export const HERO_VIDEO_SRC = "/videos/hero.mp4";
//    4. Optionally set a poster image: HERO_VIDEO_POSTER = "/images/hero-poster.jpg"
// ─────────────────────────────────────────────
import { useRef } from "react";
import { Helmet } from "react-helmet-async";  // ← ADD THIS
import { STATS, HERO_VIDEO_SRC, HERO_VIDEO_POSTER } from "../data";

export default function HeroSection({ scrollTo }) {
  const videoRef = useRef(null);

  return (
    <>
      <Helmet>
        <title> Chora Bridge Construction</title>
        <meta
          name="description"
          content="Chora Bridge Construction provides residential, commercial, renovation, and general contracting services across Canada. Quality craftsmanship on every project. Request a free quote today."
        />
      </Helmet>
   
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── VIDEO BACKGROUND ── */}
      {HERO_VIDEO_SRC ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={HERO_VIDEO_SRC}
            poster={HERO_VIDEO_POSTER || undefined}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Gradient overlay so text stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,132,199,0.82) 0%, rgba(7,89,133,0.75) 50%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </>
      ) : (
        /* ── FALLBACK GRADIENT (no video yet) ── */
        <>
          {/* Placeholder box with instructions */}
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0284c7 0%, #075985 50%, #0c4a6e 100%)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div
                className="border-2 border-dashed border-white/30 rounded-2xl px-8 py-5 text-center"
                style={{ maxWidth: 420, marginBottom: 0 }}
              >
                <div className="text-white/50 text-3xl mb-2">🎬</div>
                <p className="text-white/60 text-xs font-semibold leading-relaxed">
                  <span className="text-white/90 font-bold">Video Placeholder</span><br />
                  Set <code className="bg-white/10 px-1 rounded">HERO_VIDEO_SRC</code> in{" "}
                  <code className="bg-white/10 px-1 rounded">src/data/index.js</code><br />
                  to display your background video.
                </p>
              </div>
            </div>
            {/* Subtle grid */}
            <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,132,199,0.3) 0%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </>
      )}

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid gap-16 items-center justify-center text-center w-full">

        {/* Left: Copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm"
            style={{ animation: "fadeSlideUp 0.8s ease forwards" }}
          >
            <span className="w-2 h-2 bg-sky-300 rounded-full animate-pulse" />
            Trusted Across Canada
          </div>

          <h1
            className="text-5xl lg:text-7xl font-black leading-tight text-white mb-6"
            style={{
              animation: "fadeSlideUp 0.8s ease 0.1s both",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-2px",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Building
            <span className=" text-sky-300"> Canada's</span>
            <span className="block">Future.</span>
          </h1>

          <p
            className="text-lg text-white/85 leading-relaxed mb-8 max-w-lvh mx-auto"
            style={{ animation: "fadeSlideUp 0.8s ease 0.2s both" }}
          >
           Chora Bridge Construction delivers world-class residential, commercial,
            industrial, and infrastructure projects with unmatched precision and craftsmanship.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center"
            style={{ animation: "fadeSlideUp 0.8s ease 0.3s both" }}
          >
            <button
              onClick={() => scrollTo("services")}
              className="bg-white text-sky-700 font-black px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Explore Services
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border-2 border-white/50 text-white hover:bg-white/15 font-bold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Right: Stats card */}
       
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
     </>
  );
}