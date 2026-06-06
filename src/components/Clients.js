const clients = [
  "Tata Housing", "Hero Homes", "M3M", "Smart World", "Emaar Properties",
  "Vivo", "Century Ply", "CP Plus", "Central Park", "Paras Buildtech",
  "Ambience Group", "Amar Ujala",
];

const rowA = clients.slice(0, 6);
const rowB = clients.slice(6);

function Row({ items, reverse }) {
  return (
    <div className="flex overflow-hidden border-b-2 border-ink">
      <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[...items, ...items, ...items].map((c, i) => (
          <div
            key={`${c}-${i}`}
            className="flex h-24 w-56 shrink-0 items-center justify-center border-r-2 border-ink"
          >
            <span className="font-display text-lg font-bold uppercase tracking-tight text-ink">
              {c}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
          <span className="h-px w-8 bg-red" />
          <span>Our Clients</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          Trusted By Leading Brands
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
          We proudly work with some of India’s most recognized real estate,
          retail, electronics, and corporate brands.
        </p>
      </div>

      <div className="border-t-2 border-ink">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <p className="container-px mx-auto max-w-7xl py-8 text-sm font-medium uppercase tracking-wide text-ink/60">
        + Many more growing brands across India.
      </p>
    </section>
  );
}
