import Image from "next/image";

import ceoImage from "../../public/assets/resources/owner Image/ceo.png";
import Reveal from "./Reveal";

function PrintIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7.5V4.5h10v3" />
      <path d="M6.5 9h11a2.5 2.5 0 0 1 2.5 2.5V15H4v-3.5A2.5 2.5 0 0 1 6.5 9Z" />
      <path d="M7 13.5h10V19H7z" />
      <path d="M16.5 11.5h.01" />
      <path d="M9.5 16h5" />
    </svg>
  );
}

function SignageIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 5.5h10" />
      <path d="M9 5.5V4h6v1.5" />
      <path d="M6.5 6.5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" />
      <path d="M9.5 10h5M9.5 12.75h3" />
      <path d="M12 15.5v4" />
    </svg>
  );
}

function BrandingIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 9.5 12 5l7.5 4.5V19h-15Z" />
      <path d="M9 19v-5h6v5" />
      <path d="M8.25 10.5h.01M12 10.5h.01M15.75 10.5h.01" />
      <path d="M6.5 9.5V8h11v1.5" />
    </svg>
  );
}

function SpeedIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 19a7 7 0 1 0-7-7" />
      <path d="M12 12l4-3" />
      <path d="M4 13.5h4" />
      <path d="M6 10.5h3" />
      <path d="M12 7.5v.5" />
    </svg>
  );
}

const proofItems = [
  { value: "2013", label: "Established", accent: "bg-red" },
  { value: "Delhi", label: "Head Office", accent: "bg-blue" },
  { value: "Pan-India", label: "Execution", accent: "bg-green" },
  { value: "Premium", label: "Finish", accent: "bg-yellow" },
];

const serviceChips = [
  "Printing",
  "Signage",
  "Fabrication",
  "Branding",
];

const strengths = [
  {
    primary: "Large-format",
    secondary: "printing",
    accent: "bg-red",
    iconColor: "text-red",
    iconRotate: "-rotate-[2deg]",
    Icon: PrintIcon,
  },
  {
    primary: "Signage",
    secondary: "and fabrication",
    accent: "bg-blue",
    iconColor: "text-blue",
    iconRotate: "-rotate-[2deg]",
    Icon: SignageIcon,
  },
  {
    primary: "Retail and office",
    secondary: "branding",
    accent: "bg-green",
    iconColor: "text-green",
    iconRotate: "-rotate-[2deg]",
    Icon: BrandingIcon,
  },
  {
    primary: "Fast project",
    secondary: "delivery",
    accent: "bg-yellow",
    iconColor: "text-yellow",
    iconRotate: "-rotate-[2deg]",
    Icon: SpeedIcon,
  },
];

export default function About() {
  return (
    <section id="about" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <Reveal variant="left">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
            <span className="h-px w-8 bg-red" />
            <span>About Us</span>
          </div>
        </Reveal>

        <div className="mt-6 overflow-hidden border-2 border-ink bg-white">
          <div className="grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <Reveal variant="scale">
              <div className="border-b-2 border-ink bg-white lg:border-b-0 lg:border-r-2">
                <div className="relative aspect-square border-b-2 border-ink bg-paper">
                  <Image
                    src={ceoImage}
                    alt="Ajay Kharwar, Owner of AS Media Services"
                    fill
                    sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />

                  <div className="absolute inset-y-0 left-0 z-10 w-[64%] bg-gradient-to-r from-black/46 via-black/18 to-transparent" />

                  <div className="absolute inset-y-0 left-0 z-20 flex items-center px-4 sm:px-6">
                    <div className="w-full max-w-[240px] text-white">
                      {proofItems.map((item) => (
                        <div
                          key={item.label}
                          className="py-3 sm:py-4"
                        >
                          <span className={`mb-3 block h-1.5 w-10 ${item.accent}`} />
                          <div className="font-display text-2xl font-bold uppercase leading-none">
                            {item.value}
                          </div>
                          <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="relative overflow-hidden rounded-[1.1rem] border border-ink/10 bg-paper/60 shadow-[0_10px_22px_rgba(18,18,18,0.05)]">
                    <div className="absolute inset-x-5 top-1/2 hidden h-px -translate-y-1/2 bg-ink/12 sm:block" />
                    <div className="absolute bottom-5 left-1/2 top-5 hidden w-px -translate-x-1/2 bg-ink/12 sm:block" />
                    <div className="absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/20 sm:block" />

                    <div className="grid sm:grid-cols-2">
                      {strengths.map((item, index) => (
                        <div
                          key={`${item.primary}-${item.secondary}`}
                          className={`flex items-center gap-3.5 p-4 sm:p-5 ${
                            index < strengths.length - 1
                              ? "border-b border-ink/12 sm:border-b-0"
                              : ""
                          } ${index % 2 === 0 ? "sm:border-r sm:border-ink/12" : ""}`}
                        >
                          <div className="relative h-[3.7rem] w-[3.25rem] flex-none">
                            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[0.85rem] bg-ink/6" />
                            <div
                              className={`relative flex h-full items-center justify-center rounded-[0.85rem] border border-ink/10 bg-white ${item.iconRotate} shadow-[0_8px_16px_rgba(18,18,18,0.08)]`}
                            >
                              <span className={`absolute left-2.5 top-2.5 h-0.5 w-4 ${item.accent}`} />
                              <item.Icon className={`h-6 w-6 ${item.iconColor}`} />
                            </div>
                          </div>

                          <div className="min-w-0">
                            <p className="font-display text-[0.92rem] leading-[1.02] tracking-[-0.03em] text-ink sm:text-[1.02rem]">
                              <span className="font-bold">{item.primary}</span>{" "}
                              <span className="font-medium">{item.secondary}</span>
                            </p>
                            <span className={`mt-3 block h-1 w-8 ${item.accent}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} variant="right">
              <div className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  {serviceChips.map((chip) => (
                    <span
                      key={chip}
                      className="border border-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
                    Leadership
                  </p>
                  <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.2rem,4vw,4.2rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
                    <span className="block">Your Vision.</span>
                    <span className="block text-red">Our Craftsmanship.</span>
                  </h2>
                  <div className="mt-5 border-l-4 border-red pl-4">
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight text-ink">
                      Ajay Kharwar
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
                      Owner, AS Media Services
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/75 sm:text-base">
                  <p>
                    We don&apos;t just print designs.{" "}
                    <span className="font-semibold text-red">
                      We build brand presence
                    </span>{" "}
                    through sharp production, dependable execution, and branding
                    that holds attention in the real world.
                  </p>
                  <p>
                    Since <strong className="text-ink">2013</strong>, AS Media
                    Services has helped brands turn ideas into high-impact
                    visual experiences from Delhi to sites across India.
                  </p>
                  <p>
                    We manage concept, printing, signage, fabrication,
                    logistics, and installation under one roof for startups,
                    retail spaces, offices, real estate brands, and national
                    campaigns.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
