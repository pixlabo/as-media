import Image from "next/image";

import logoImage from "../../public/logo.png";
import Reveal from "./Reveal";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Gallery" },
  { href: "#clients", label: "Clients" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container-px mx-auto max-w-7xl py-14 lg:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-12 lg:gap-0">
          {/* Brand */}
          <Reveal variant="left" className="lg:col-span-5 lg:border-r lg:border-white/15 lg:pr-12">
            <a href="#home" className="inline-flex items-center">
              <Image
                src={logoImage}
                alt="AS Media Services"
                className="h-24 w-auto sm:h-28"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Your trusted partner for printing, branding, signage, and
              fabrication solutions across India.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+919810171108"
                className="bg-red px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
              >
                Get Free Quote
              </a>
              <a
                href="mailto:ajaykharwar87@gmail.com"
                className="border-2 border-white/30 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:border-white"
              >
                Email Us
              </a>
            </div>
          </Reveal>

          {/* Links */}
          <Reveal variant="up" delay={80} className="lg:col-span-3 lg:px-12">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-ul text-sm font-medium uppercase tracking-wide text-white/75 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal variant="up" delay={140} className="lg:col-span-4 lg:pl-12">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <address className="mt-5 space-y-4 text-sm not-italic text-white/70">
              <p className="leading-relaxed">
                365 Opposite Raj Modern Public School,
                <br />
                Hari Nagar Part-II, Jaitpur, Badarpur,
                <br />
                New Delhi – 110044
              </p>
              <p>
                <span className="text-white/45">Phone </span>
                <a href="tel:+919810171108" className="font-medium hover:text-red">
                  +91 98101 71108
                </a>
              </p>
              <p>
                <span className="text-white/45">Email </span>
                <a href="mailto:ajaykharwar87@gmail.com" className="font-medium hover:text-red">
                  ajaykharwar87@gmail.com
                </a>
              </p>
            </address>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-7 text-xs font-medium uppercase tracking-wide text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AS Media Services — All Rights Reserved.</p>
          <p>
            Made by{" "}
            <a
              href="https://pixlabo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ul font-semibold text-white/75 hover:text-red"
            >
              Pixlabo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
