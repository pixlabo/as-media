"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import logoImage from "../../public/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#clients", label: "Clients" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (currentScrollY <= 16) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 8) {
        setVisible(false);
        setOpen(false);
      } else if (currentScrollY < lastScrollY - 8) {
        setVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/15 bg-ink text-white transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center">
          <Image
            src={logoImage}
            alt="AS Media Services"
            priority
            className="h-14 w-auto sm:h-16"
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-ul text-[13px] font-medium uppercase tracking-wide text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-red px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
          >
            Get Free Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="container-px mx-auto flex max-w-7xl flex-col py-2">
          {links.map((l) => (
            <li key={l.href} className="border-b border-white/10 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium uppercase tracking-wide text-white/85"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="py-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-red px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
            >
              Get Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
