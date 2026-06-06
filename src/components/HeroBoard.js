"use client";

import { useEffect, useRef, useState } from "react";

const CELLS = 8;

const slides = [
  { word: "PRINTING", tag: "Large Format & UV" },
  { word: "SIGNAGE", tag: "LED · ACP · Acrylic" },
  { word: "BRANDING", tag: "Retail & Corporate" },
  { word: "REMEMBER", tag: "Brands That Last" },
  { word: "DISPLAYS", tag: "Standees & Exhibits" },
];

const stats = [
  { k: "15+", v: "Years", c: "bg-red" },
  { k: "500+", v: "Projects", c: "bg-blue" },
  { k: "45+", v: "Team", c: "bg-green" },
  { k: "All India", v: "Reach", c: "bg-yellow" },
];

function toCells(word) {
  const w = word.slice(0, CELLS);
  const pad = CELLS - w.length;
  const left = Math.floor(pad / 2);
  const arr = Array(CELLS).fill("");
  for (let i = 0; i < w.length; i++) arr[left + i] = w[i];
  return arr;
}

export default function HeroBoard() {
  const [index, setIndex] = useState(0);
  const sceneRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    const el = sceneRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const max = 7;
    inner.style.transform = `rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
  };

  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  const cells = toCells(slides[index].word);

  return (
    <div
      ref={sceneRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt-scene"
    >
      <div ref={innerRef} className="tilt-inner">
        {/* ── The board ── */}
        <div className="relative border border-white/15 bg-ink p-4">
          {/* Corner crop / registration marks */}
          {[
            "left-0 top-0 border-l-2 border-t-2",
            "right-0 top-0 border-r-2 border-t-2",
            "left-0 bottom-0 border-l-2 border-b-2",
            "right-0 bottom-0 border-r-2 border-b-2",
          ].map((pos) => (
            <span
              key={pos}
              className={`pointer-events-none absolute h-3 w-3 border-red ${pos}`}
              style={{ margin: "-7px" }}
            />
          ))}

          {/* Top status bar */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-blink rounded-full bg-red" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                AS Media · Live Board
              </span>
            </div>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              Now Showing
            </span>
          </div>

          {/* Flap cells */}
          <div className="grid grid-cols-8 gap-[3px]">
            {cells.map((ch, i) => (
              <div
                key={i}
                className="flap-cell relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#1b1b1b]"
              >
                {/* center seam */}
                <span className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 h-px -translate-y-1/2 bg-black/70" />
                <span
                  key={`${index}-${i}`}
                  className="flap-char font-display text-xl font-bold text-white sm:text-2xl"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  {ch}
                </span>
              </div>
            ))}
          </div>

          {/* Category label + ticks */}
          <div className="mt-3 flex items-center justify-between">
            <span
              key={index}
              className="flap-char font-display text-xs font-semibold uppercase tracking-wide text-red"
            >
              {slides[index].tag}
            </span>
            <div className="flex gap-1">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-4 transition-colors ${i === index ? "bg-red" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          {/* Multi-color base bar */}
          <div className="mt-3 flex h-1.5">
            <span className="flex-1 bg-red" />
            <span className="flex-1 bg-yellow" />
            <span className="flex-1 bg-green" />
            <span className="flex-1 bg-blue" />
          </div>
        </div>

        {/* ── Stat strip ── */}
        <div className="mt-4 grid grid-cols-2 border border-white/20 bg-ink/40 backdrop-blur-sm">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`border-white/20 p-3.5 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
            >
              <span className={`mb-1.5 block h-1 w-7 ${s.c}`} />
              <div className="font-display text-xl font-bold leading-none text-white">{s.k}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
