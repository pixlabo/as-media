import Reveal from "./Reveal";
import ContactLink from "./ContactLink";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="border-b-2 border-ink">
      <div className="grid lg:grid-cols-2">
        {/* Left: statement */}
        <Reveal variant="left" className="bg-ink px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            <span className="h-px w-8 bg-red" />
            <span>Let’s Work Together</span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
            Ready To Build Stronger{" "}
            <span className="text-red">Brand Visibility?</span>
          </h2>
        </Reveal>

        {/* Right: action */}
        <Reveal variant="right" className="flex flex-col justify-center bg-red px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20" delay={80}>
          <p className="max-w-md text-base leading-relaxed text-white/90">
            Whether you need premium signage, retail branding, large-format
            printing, or complete fabrication solutions, AS Media Services is
            ready to bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Start Your Project
            </a>
            <ContactLink
              type="phone"
              value={site.phone}
              href={`tel:${site.phoneHref}`}
              className="border-2 border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-red"
            >
              Talk To Our Team
            </ContactLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
