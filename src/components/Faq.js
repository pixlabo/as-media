"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

function Item({ q, a, index, open, onToggle }) {
  return (
    <div className="border-b-2 border-ink">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start gap-4 py-5 text-left"
      >
        <span className="font-display text-sm font-bold text-red">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-lg font-bold uppercase leading-tight tracking-tight">
          {q}
        </span>
        <span
          className={`mt-1 inline-grid h-6 w-6 shrink-0 place-items-center border-2 border-ink transition-transform duration-300 ${open ? "rotate-45 bg-red text-white" : "bg-white text-ink"}`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0">
          <p className="max-w-3xl pb-6 pl-10 text-[15px] leading-relaxed text-ink/75">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-b-2 border-ink bg-white">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Left heading */}
          <div className="lg:col-span-4 lg:border-r-2 lg:border-ink lg:pr-12">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              <span className="h-px w-8 bg-red" />
              <span>FAQ</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
              Everything you need to know about our printing, signage,
              fabrication, and branding services. Still have a question?
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink"
            >
              Ask Our Team
            </a>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 lg:pl-12">
            <div className="border-t-2 border-ink">
              {faqs.map((f, i) => (
                <Item
                  key={f.q}
                  index={i}
                  q={f.q}
                  a={f.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
