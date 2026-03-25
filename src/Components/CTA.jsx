// ─────────────────────────────────────────────
//  Component: CTABanner
// ─────────────────────────────────────────────
import { FadeIn } from "../utils";

export default function CTABanner({ scrollTo }) {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)" }}
    >
      <FadeIn className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl lg:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1.5px" }}
        >
          Ready to Start Your Project?
        </h2>
        <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
          Get a free, <a href="https://www.royalbuild-construction.com">no-obligation consultation </a>and estimate from our team of experts.
        </p>
        <button
          onClick={() => scrollTo("Contact")}
          className="bg-white text-sky-600 font-black px-10 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 hover:bg-sky-50"
        >
          Contact Us Today →
        </button>
      </FadeIn>
    </section>
  );
}