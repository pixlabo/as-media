import Reveal from "./Reveal";

const categories = [
  "Outdoor Branding", "Signage Projects", "Retail Branding", "Office Upgrades",
  "Acrylic Signage", "UV Printing", "Fabric Signage", "Event Branding",
  "Standee Displays", "Transit Branding",
];

// Flat solid color blocks — no gradients, sharp edges.
const palette = [
  { bg: "bg-red", text: "text-white", sub: "text-white/70" },
  { bg: "bg-ink", text: "text-white", sub: "text-white/60" },
  { bg: "bg-blue", text: "text-white", sub: "text-white/70" },
  { bg: "bg-yellow", text: "text-ink", sub: "text-ink/60" },
  { bg: "bg-green", text: "text-white", sub: "text-white/70" },
];

export default function Gallery() {
  return (
    <section id="work" className="border-b-2 border-ink bg-paper">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
          <span className="h-px w-8 bg-red" />
          <span>Gallery</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          Our Work Speaks Through Every Detail
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
          From premium retail branding and outdoor hoardings to illuminated
          signboards and corporate installations, our projects reflect precision,
          creativity, and durable craftsmanship.
        </p>

        <div className="mt-12 grid border-l-2 border-t-2 border-ink grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => {
            const c = palette[i % palette.length];
            return (
              <Reveal key={cat} delay={(i % 5) * 60} variant="scale">
                <div className={`group relative flex aspect-square flex-col justify-between border-b-2 border-r-2 border-ink p-5 ${c.bg}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-sm font-bold ${c.sub}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${c.text} -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100`}>
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </div>
                  <h3 className={`font-display text-base font-bold uppercase leading-tight tracking-tight sm:text-lg ${c.text}`}>
                    {cat}
                  </h3>
                </div>
              </Reveal>
            );
          })}
          {/* Filler tile to complete the grid row */}
          <Reveal delay={300}>
            <div className="flex aspect-square flex-col justify-between border-b-2 border-r-2 border-ink bg-white p-5">
              <span className="font-display text-sm font-bold text-ink/40">+</span>
              <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight text-ink sm:text-lg">
                & More
                <br />
                Projects
              </h3>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
