import Reveal from "./Reveal";

const machines = [
  "10 Ft Solvent Printers",
  "Eco Solvent Printing Machines",
  "HP Latex Printing Technology",
  "CNC Router Machines",
  "Laser Cutting Machines",
  "Vinyl Plotters",
  "In-House Fabrication Setup",
  "Welding & Structural Fabrication",
];

export default function Infrastructure() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-5 lg:border-r-2 lg:border-ink lg:pr-12">
            <Reveal>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
                <span className="h-px w-8 bg-red" />
                <span>Machinery & Infrastructure</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
                Built for High-Quality Production
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/75">
                AS Media Services operates with advanced printing and fabrication
                technology that handles both small custom jobs and large
                commercial branding projects.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                With a dedicated production team and logistics support, we ensure
                reliable execution for projects across India.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <ul className="border-t-2 border-ink">
              {machines.map((m, i) => (
                <Reveal
                  as="li"
                  key={m}
                  variant="left"
                  delay={i * 55}
                  className="flex items-center gap-4 border-b-2 border-ink py-4"
                >
                  <span className="font-display text-sm font-bold text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium uppercase tracking-tight">
                    {m}
                  </span>
                  <span className="ml-auto h-2 w-2 bg-ink" />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
