import Reveal from "./Reveal";

const testimonials = [
  { quote: "AS Media Services consistently delivers quality work on time. Their execution and professionalism make them a reliable branding partner.", name: "Real Estate Brand", role: "Marketing Head", color: "text-red" },
  { quote: "Their signage quality and installation support exceeded our expectations.", name: "Retail Client", role: "Operations Manager", color: "text-blue" },
  { quote: "From design to fabrication, the entire process was smooth and professionally managed.", name: "Corporate Client", role: "Brand Manager", color: "text-green" },
];

export default function Testimonials() {
  return (
    <section className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
          <span className="h-px w-8 bg-red" />
          <span>Testimonials</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          What Our Clients Value Most
        </h2>

        <div className="mt-12 grid border-l-2 border-t-2 border-ink md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 90} variant="scale">
              <figure className="flex h-full flex-col border-b-2 border-r-2 border-ink p-8">
                <span className={`font-display text-6xl font-bold leading-none ${t.color}`}>
                  “
                </span>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t-2 border-ink pt-4">
                  <div className="font-display text-base font-bold uppercase tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wide text-ink/60">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
