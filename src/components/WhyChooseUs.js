import Reveal from "./Reveal";

const items = [
  { title: "End-to-End Solutions", body: "We handle everything under one roof — design, printing, fabrication, branding, logistics, and installation.", color: "text-red" },
  { title: "Large-Scale Production", body: "Our advanced printing machines and in-house fabrication setup help us deliver projects of every size with speed and consistency.", color: "text-blue" },
  { title: "Pan-India Execution", body: "No matter where your business operates, our team manages production and installation across India efficiently.", color: "text-green" },
  { title: "Brand-Grade Quality", body: "We use premium materials, sharp color accuracy, durable fabrication, and professional finishing so your brand always looks its best.", color: "text-red" },
  { title: "Experienced Team", body: "Our skilled production experts, designers, supervisors, and installation teams ensure smooth execution from start to finish.", color: "text-blue" },
  { title: "Fast Turnaround", body: "We understand deadlines. Our workflow is designed for timely delivery without compromising quality.", color: "text-green" },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              <span className="h-px w-8 bg-red" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              Why Brands Trust AS Media Services
            </h2>
          </div>
        </div>

        <div className="mt-12 grid border-l-2 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80} variant="scale">
              <div className="group h-full border-b-2 border-r-2 border-ink p-7 transition-colors duration-200 hover:bg-ink">
                <div className="flex items-baseline justify-between">
                  <span className={`font-display text-3xl font-bold ${it.color}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-3 w-3 bg-current opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-red" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight transition-colors group-hover:text-white">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-white/70">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
