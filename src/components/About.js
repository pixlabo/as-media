import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Left heading column */}
          <div className="lg:col-span-5 lg:border-r-2 lg:border-ink lg:pr-12">
            <Reveal variant="left">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
                <span className="h-px w-8 bg-red" />
                <span>About Us</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
                Your Vision.
                <br />
                Our <span className="text-red">Craftsmanship.</span>
              </h2>
              <p className="mt-8 font-display text-xl font-medium leading-snug">
                We don’t just print designs.
                <br />
                <span className="text-red">We build brand presence.</span>
              </p>
            </Reveal>
          </div>

          {/* Right copy column */}
          <div className="lg:col-span-7 lg:pl-12">
            <Reveal delay={80} variant="right">
              <div className="space-y-5 text-[15px] leading-relaxed text-ink/75">
                <p>
                  Since <strong className="text-ink">2013</strong>, AS Media
                  Services has helped brands transform ideas into high-impact
                  visual experiences. Based in Delhi, we provide complete
                  printing, signage, fabrication, and branding solutions for
                  businesses across India.
                </p>
                <p>
                  We work with startups, retail stores, corporate offices,
                  builders, real estate brands, and national companies that need
                  reliable execution and premium-quality branding materials.
                </p>
                <p>
                  From concept to installation, our team manages every stage with
                  attention to detail, fast turnaround times, and uncompromising
                  quality.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140} variant="scale">
              <div className="mt-10 grid grid-cols-2 border-2 border-ink sm:grid-cols-4">
                {[
                  { n: "2013", t: "Established", c: "bg-red" },
                  { n: "Delhi", t: "Head Office", c: "bg-blue" },
                  { n: "One Roof", t: "End-to-End", c: "bg-green" },
                  { n: "Premium", t: "Quality", c: "bg-yellow" },
                ].map((c, i) => (
                  <div
                    key={c.t}
                    className={`border-ink p-5 ${i !== 3 ? "border-r" : ""} ${i < 2 ? "border-b sm:border-b-0" : ""}`}
                  >
                    <span className={`mb-3 block h-1.5 w-8 ${c.c}`} />
                    <div className="font-display text-lg font-bold leading-tight">
                      {c.n}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/60">
                      {c.t}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
