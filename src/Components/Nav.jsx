
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState("Home");
  const [scrolled, setScrolled]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 120) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    scrollTo(link);
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #e0f2fe" : "1px solid rgba(255,255,255,0.2)",
        boxShadow: scrolled ? "0 1px 16px rgba(14,165,233,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNav("Home")}
        >
    
          <div>
            <div
              className="font-black text-sm leading-tight tracking-wide uppercase transition-colors duration-300"
              style={{ color: scrolled ? "#0284c7" : "#ffffff" }}
            >
              Crest Forge
            </div>
            <div
              className="text-[10px] tracking-widest uppercase leading-none transition-colors duration-300"
              style={{ color: scrolled ? "#6b7280" : "rgba(255,255,255,0.7)" }}
            >
              Construction
            </div>
          </div>
        </div>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeSection === link
                  ? "bg-sky-500 text-white shadow-md shadow-sky-200"
                  : scrolled
                    ? "text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                    : "text-white/90 hover:text-white hover:bg-white/20"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav("Contact")}
            className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200 shadow-md shadow-sky-300"
          >
            Get a Quote
          </button>
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? "#374151" : "#ffffff" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "" }} />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <div className="w-5 h-0.5 bg-current transition-all origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "" }} />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-sky-100"
        style={{ maxHeight: menuOpen ? "400px" : "0px" }}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeSection === link
                  ? "bg-sky-500 text-white"
                  : "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNav("Contact")}
            className="mt-2 bg-sky-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}