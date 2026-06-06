import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Understand Your Requirement", body: "We learn about your business, campaign goals, brand identity, and installation requirements." },
  { n: "02", title: "Design & Production Planning", body: "Our team prepares layouts, selects materials, and plans production for maximum visual impact." },
  { n: "03", title: "Precision Manufacturing", body: "Using advanced printing and fabrication technology, we produce high-quality branding materials with accurate finishing." },
  { n: "04", title: "Installation & Execution", body: "Our installation team ensures smooth on-site execution with professional finishing and timely delivery." },
];

export default function Process() {
  return (
    <section id="process" className="border-b-2 border-ink bg-ink text-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          <span className="h-px w-8 bg-red" />
          <span>Our Process</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          How We Bring Your Brand to Life
        </h2>

        <div className="mt-12 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="h-full border-b border-r border-white/20 p-7">
                <div className="font-display text-5xl font-bold text-red">{s.n}</div>
                <h3 className="mt-6 font-display text-base font-bold uppercase leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
