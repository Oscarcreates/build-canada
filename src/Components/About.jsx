// ─────────────────────────────────────────────
//  Component: AboutSection
// ─────────────────────────────────────────────
import { Helmet } from "react-helmet-async"; // ← ADDED
import { STATS } from "../data";
import { FadeIn } from "../utils";

const BADGES = ["CSA Certified", "ISO 9001", "Green Building", "Safety First"];

export default function AboutSection() {
  return (
    <>
      {/* ── SEO META TAGS ── */}
      <Helmet>
        <title>About Us | Build Canada Construction</title>
        <meta
          name="description"
          content="Build Canada Construction is a trusted construction company serving clients nationwide. From homes to commercial builds, we bring expertise, reliability, and quality to every project across Canada."
        />
      </Helmet>

      <section
        id="about"
        className="py-24"
        style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Copy ── */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-sky-200 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                Who We Are
              </div>
              <h2
                className="text-4xl lg:text-5xl font-black text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1.5px" }}
              >
                Built on Trust. <br />
                <span className="text-sky-500">Driven by Excellence.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Build Canada Construction has been a cornerstone of Canadian infrastructure
                for over two decades. With offices in Toronto, Montreal, Ottawa, and Huntsville,
                we bring national reach with local expertise.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of certified engineers, project managers, and skilled tradespeople
                work together to deliver complex projects on time and to the highest standards
                of quality and safety.
              </p>
              <div className="flex flex-wrap gap-3">
                {BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="bg-white text-sky-700 text-xs font-bold px-4 py-2 rounded-full border border-sky-200 shadow-sm"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* ── Right: Stats grid ── */}
            <FadeIn delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-md shadow-sky-100 border border-sky-100 text-center hover:shadow-lg hover:shadow-sky-200 transition-shadow duration-300"
                  >
                    <div
                      className="text-4xl font-black text-sky-500 mb-2"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-gray-500 text-sm font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}