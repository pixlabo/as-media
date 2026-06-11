import Image from "next/image";

import tataHousingLogo from "../../public/assets/resources/Trusted partner/idy_gLbfs9_logos.jpeg";
import heroHomesLogo from "../../public/assets/resources/Trusted partner/FXbRWTztnYAqKZo6dcq74BtV5y8.png";
import m3mLogo from "../../public/assets/resources/Trusted partner/idAE9CEvjY_logos.jpeg";
import smartworldLogo from "../../public/assets/resources/Trusted partner/smartworld-seeklogo.png";
import emaarLogo from "../../public/assets/resources/Trusted partner/idg-yzdcSK_1781205542383.jpeg";
import centralParkLogo from "../../public/assets/resources/Trusted partner/idi0WP7L6D_logos.jpeg";
import parasBuildtechLogo from "../../public/assets/resources/Trusted partner/WhatsApp Image 2026-06-06 at 15.43.40 (4).jpeg";
import parasTiereaLogo from "../../public/assets/resources/Trusted partner/idoIngdaWw_1781205657090.png";
import ambienceLogo from "../../public/assets/resources/Trusted partner/ambience-logo-dark.png";
import anantRajLogo from "../../public/assets/resources/Trusted partner/ANANTRAJ.NS.png";
import mdlrLogo from "../../public/assets/resources/Trusted partner/download.png";
import aiplLogo from "../../public/assets/resources/Trusted partner/download (1).png";
import maxEstatesLogo from "../../public/assets/resources/Trusted partner/idGfRFR82u_logos.jpeg";
import experionLogo from "../../public/assets/resources/Trusted partner/idhjFTg5Ob_1781206155136.jpeg";
import tarcLogo from "../../public/assets/resources/Trusted partner/idwI4VLGnh_logos.jpeg";
import vivoLogo from "../../public/assets/resources/Trusted partner/Icon.jpeg";
import cpPlusLogo from "../../public/assets/resources/Trusted partner/id4P-ppnKz_logos.jpeg";
import centuryPlyLogo from "../../public/assets/resources/Trusted partner/idK_33Hcp5_1781205589917.jpeg";
import skydecorLogo from "../../public/assets/resources/Trusted partner/download (2).png";
import aicaSunmicaLogo from "../../public/assets/resources/Trusted partner/WhatsApp Image 2026-06-06 at 15.43.40 (6).jpeg";
import aplApolloLogo from "../../public/assets/resources/Trusted partner/WhatsApp Image 2026-06-06 at 15.43.40 (11).jpeg";
import pacetelLogo from "../../public/assets/resources/Trusted partner/WhatsApp Image 2026-06-06 at 15.43.40 (12).jpeg";
import amarUjalaLogo from "../../public/assets/resources/Trusted partner/idU4QUzeO-_1781205954002.jpeg";

// `scale` normalizes how big each mark *reads* — some source files bake in
// lots of whitespace (look tiny), others are full-bleed colored squares (look
// huge). Tuned so every logo lands at a similar optical size.
const clients = [
  { name: "Tata Housing", logo: tataHousingLogo, scale: 0.92 },
  { name: "Hero Homes", logo: heroHomesLogo, scale: 1.6 },
  { name: "M3M", logo: m3mLogo, scale: 1.45 },
  { name: "Smartworld", logo: smartworldLogo, scale: 1 },
  { name: "Emaar", logo: emaarLogo, scale: 1.15 },
  { name: "Central Park", logo: centralParkLogo, scale: 0.92 },
  { name: "Paras Buildtech", logo: parasBuildtechLogo, scale: 1 },
  { name: "Paras Tierea", logo: parasTiereaLogo, scale: 1.15 },
  { name: "Ambience", logo: ambienceLogo, scale: 1.15 },
  { name: "Anant Raj", logo: anantRajLogo, scale: 1.05 },
  { name: "MDLR Group", logo: mdlrLogo, scale: 1.15 },
  { name: "AIPL", logo: aiplLogo, scale: 1.2 },
  { name: "Max Estates", logo: maxEstatesLogo, scale: 1.2 },
  { name: "Experion", logo: experionLogo, scale: 1.7 },
  { name: "TARC", logo: tarcLogo, scale: 1.3 },
  { name: "Vivo", logo: vivoLogo, scale: 0.88 },
  { name: "CP Plus", logo: cpPlusLogo, scale: 0.88 },
  { name: "Century Ply", logo: centuryPlyLogo, scale: 1.4 },
  { name: "Skydecor", logo: skydecorLogo, scale: 1.45 },
  { name: "AICA Sunmica", logo: aicaSunmicaLogo, scale: 1.15 },
  { name: "APL Apollo", logo: aplApolloLogo, scale: 1.1 },
  { name: "Pacetel", logo: pacetelLogo, scale: 0.95 },
  { name: "Amar Ujala", logo: amarUjalaLogo, scale: 0.92 },
];

const splitIndex = Math.ceil(clients.length / 2);
const rowA = clients.slice(0, splitIndex);
const rowB = clients.slice(splitIndex);

const LOGO_SIZES = "(min-width: 1024px) 224px, (min-width: 640px) 208px, 128px";

function Row({ items, reverse }) {
  // Render the set twice so the keyframe (0 → -50%) loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="flex overflow-hidden border-b-2 border-ink last:border-b-0">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {loop.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="group/cell flex h-16 w-32 shrink-0 items-center justify-center border-r-2 border-ink bg-white p-3 sm:h-24 sm:w-52 sm:p-6 lg:w-56"
          >
            <div
              className="relative h-full w-full"
              style={{ transform: `scale(${c.scale ?? 1})` }}
            >
              <Image
                src={c.logo}
                alt={c.name}
                fill
                sizes={LOGO_SIZES}
                className="object-contain transition-transform duration-300 ease-out lg:group-hover/cell:scale-[1.06]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              <span className="h-px w-8 bg-red" />
              <span>Our Clients</span>
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              Trusted By Leading Brands
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
              We proudly work with some of India’s most recognized real estate,
              retail, electronics, and corporate brands.
            </p>
          </div>

          {/* Brand-count badge — signage-style stat block */}
          <div className="flex shrink-0 items-center gap-4 self-start border-2 border-ink bg-paper px-5 py-4 sm:self-end">
            <span className="font-display text-4xl font-bold leading-none text-red sm:text-5xl">
              20<span className="text-ink">+</span>
            </span>
            <span className="text-xs font-bold uppercase leading-tight tracking-[0.15em] text-ink/70">
              Brands
              <br />
              &amp; Counting
            </span>
          </div>
        </div>
      </div>

      {/* Logo wall — dual marquee with edge fades; pauses on hover */}
      <div className="group relative border-t-2 border-ink">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent sm:w-24" />

        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <p className="container-px mx-auto flex max-w-7xl items-center gap-3 py-8 text-sm font-medium uppercase tracking-wide text-ink/60">
        <span className="h-1.5 w-1.5 bg-red" />
        + Many more growing brands across India.
      </p>
    </section>
  );
}
