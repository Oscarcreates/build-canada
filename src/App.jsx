// ─────────────────────────────────────────────
//  App.jsx — Canada Trust Construction
//  Now uses React Router for service detail pages
// ─────────────────────────────────────────────
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar            from "./Components/Nav";
import { HelmetProvider } from 'react-helmet-async';
import HeroSection       from "./Components/Hero";
import ServicesSection   from "./Components/Services";
import AboutSection      from "./Components/About";
import ProjectsSection   from "./Components/projects";
import CTABanner         from "./Components/CTA";
import ContactSection    from "./Components/contact";
import Footer            from "./Components/footer";
import ServiceDetailPage from "./Components/ServiceDetailPage";

// ── Main landing page (all sections) ──
function HomePage() {
  const scrollTo = (label) =>
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
       <HelmetProvider>
    <div className="font-sans bg-white text-gray-800" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Navbar scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <CTABanner scrollTo={scrollTo} />
      <ContactSection />
      <Footer scrollTo={scrollTo} />
    </div>
    </HelmetProvider>
  );
}

// ── Root App with Router ──
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*"               element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}