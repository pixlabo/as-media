import Reveal from "./Reveal";

const services = [
  { title: "Digital & Large Format Printing", body: "High-resolution vinyl, flex, UV, canvas, latex printing, floor graphics, and custom promotional prints.", bar: "bg-red" },
  { title: "Signage Solutions", body: "ACP signboards, LED signboards, glow sign boards, 3D letters, acrylic & metallic signage, and illuminated branding.", bar: "bg-blue" },
  { title: "Retail & In-Store Branding", body: "Shop branding, office upgrades, fabric boxes, wall graphics, window vinyl, displays, and visual communication systems.", bar: "bg-green" },
  { title: "Fabrication Services", body: "Unipole fabrication, metal fabrication, structural branding support, outdoor installations, and custom projects.", bar: "bg-yellow" },
  { title: "Promotional Displays", body: "Standees, roll-up banners, clip-on frames, display boards, MDF cutouts, selfie points, and exhibition material.", bar: "bg-red" },
  { title: "Vehicle & Transit Branding", body: "Public transit branding, vehicle graphics, outdoor campaign branding, and mobile advertising solutions.", bar: "bg-blue" },
];

export default function Services() {
  return (
    <section id="services" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
          <span className="h-px w-8 bg-red" />
          <span>Services</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          Complete Printing & Branding Solutions
        </h2>

        <div className="mt-12 grid border-l-2 border-t-2 border-ink md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} variant="scale">
              <div className="group relative h-full border-b-2 border-r-2 border-ink bg-white p-7 transition-colors duration-200 hover:bg-paper">
                <span className={`block h-2 w-12 ${s.bar}`} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <span className="font-display text-2xl font-bold text-ink/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {s.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-red opacity-0 transition-opacity group-hover:opacity-100">
                  Enquire
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
