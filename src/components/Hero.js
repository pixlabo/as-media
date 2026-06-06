import Reveal from "./Reveal";
import HeroBoard from "./HeroBoard";

const ticker = [
  "Large Format Printing",
  "Signage Solutions",
  "Fabrication",
  "Retail Branding",
  "UV Printing",
  "Transit Branding",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b-2 border-ink bg-ink text-white"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/printing_video.mp4" type="video/mp4" />
      </video>

      {/* Black overlay: darker on the sides (cinematic framing) + readability tint */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.5) 28%, rgba(12,12,12,0.32) 50%, rgba(12,12,12,0.5) 72%, rgba(12,12,12,0.95) 100%), linear-gradient(0deg, rgba(12,12,12,0.86) 0%, rgba(12,12,12,0.22) 45%, rgba(12,12,12,0.5) 100%)",
        }}
      />

      {/* Top meta bar */}
      <div className="relative z-10 border-b border-white/15">
        <div className="container-px mx-auto flex max-w-7xl items-center justify-between gap-2 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-[11px] sm:tracking-[0.18em]">
          <span>Est. 2013 — Delhi</span>
          <span className="hidden sm:block">Printing · Signage · Fabrication · Branding</span>
          <span>Pan-India Execution</span>
        </div>
      </div>

      <div className="relative z-10 container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12">
          {/* Left: headline */}
          <div className="border-white/15 py-12 lg:col-span-8 lg:border-r lg:py-16 lg:pr-12">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-red">
                <span className="h-3 w-6 bg-red" />
                Branding & Print Production House
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-display text-[clamp(2rem,8vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white">
                We Print Brands
                <br />
                That People <span className="text-red">Remember.</span>
              </h1>
            </Reveal>

            <Reveal delay={120} variant="left">
              <p className="mt-7 max-w-2xl border-l-4 border-red pl-5 text-base leading-relaxed text-white/85 sm:text-lg">
                From large-format printing and premium signage to complete
                branding fabrication, AS Media Services helps businesses create
                powerful visual experiences that attract attention, build trust,
                and leave a lasting impression.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="bg-red px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Get Free Quote
                </a>
                <a
                  href="#work"
                  className="border-2 border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
                >
                  View Our Work
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: supporting + live board */}
          <div className="flex flex-col lg:col-span-4">
            <Reveal className="border-t border-white/15 py-8 lg:border-t-0 lg:py-16 lg:pl-10" delay={120} variant="right">
              <p className="text-sm leading-relaxed text-white/70">
                Your brand deserves more than ordinary printing. We combine
                creativity, precision, and large-scale production to deliver
                impactful branding solutions across retail, corporate, real
                estate, events, and outdoor advertising.
              </p>

              <div className="mt-8">
                <HeroBoard />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="relative z-10 overflow-hidden border-t-2 border-white/15 bg-ink py-3">
        <div className="flex w-max animate-marquee">
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              className="flex items-center whitespace-nowrap px-6 font-display text-sm font-medium uppercase tracking-wide text-white"
            >
              {t}
              <span className="ml-6 text-red">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
