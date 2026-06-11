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

const clients = [
  { name: "Tata Housing", logo: tataHousingLogo },
  { name: "Hero Homes", logo: heroHomesLogo },
  { name: "M3M", logo: m3mLogo },
  { name: "Smartworld", logo: smartworldLogo },
  { name: "Emaar", logo: emaarLogo },
  { name: "Central Park", logo: centralParkLogo },
  { name: "Paras Buildtech", logo: parasBuildtechLogo },
  { name: "Paras Tierea", logo: parasTiereaLogo },
  { name: "Ambience", logo: ambienceLogo },
  { name: "Anant Raj", logo: anantRajLogo },
  { name: "MDLR Group", logo: mdlrLogo },
  { name: "AIPL", logo: aiplLogo },
  { name: "Max Estates", logo: maxEstatesLogo },
  { name: "Experion", logo: experionLogo },
  { name: "TARC", logo: tarcLogo },
  { name: "Vivo", logo: vivoLogo },
  { name: "CP Plus", logo: cpPlusLogo },
  { name: "Century Ply", logo: centuryPlyLogo },
  { name: "Skydecor", logo: skydecorLogo },
  { name: "AICA Sunmica", logo: aicaSunmicaLogo },
  { name: "APL Apollo", logo: aplApolloLogo },
  { name: "Pacetel", logo: pacetelLogo },
  { name: "Amar Ujala", logo: amarUjalaLogo },
];

const splitIndex = Math.ceil(clients.length / 2);
const rowA = clients.slice(0, splitIndex);
const rowB = clients.slice(splitIndex);

function Row({ items, reverse }) {
  return (
    <div className="flex overflow-hidden border-b-2 border-ink">
      <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[...items, ...items, ...items].map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex h-24 w-56 shrink-0 items-center justify-center border-r-2 border-ink p-6"
          >
            <Image
              src={c.logo}
              alt={c.name}
              className="max-h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
          <span className="h-px w-8 bg-red" />
          <span>Our Clients</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          Trusted By Leading Brands
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
          We proudly work with some of India’s most recognized real estate,
          retail, electronics, and corporate brands.
        </p>
      </div>

      <div className="border-t-2 border-ink">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <p className="container-px mx-auto max-w-7xl py-8 text-sm font-medium uppercase tracking-wide text-ink/60">
        + Many more growing brands across India.
      </p>
    </section>
  );
}
