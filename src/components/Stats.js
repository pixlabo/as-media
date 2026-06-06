"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 15, suffix: "+", label: "Years Industry Experience" },
  { target: 500, suffix: "+", label: "Projects Successfully Delivered" },
  { target: null, text: "Pan India", label: "Execution Capability" },
  { target: 45, suffix: "+", label: "Production & Install Experts" },
];

function useCountUp(target, run, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run || target == null) return;
    let raf;
    let start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return value;
}

function StatItem({ stat, run }) {
  const value = useCountUp(stat.target, run);
  return (
    <div className="border-b-2 border-white/30 p-8 last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0">
      <div className="font-display text-4xl font-bold leading-none text-white sm:text-5xl lg:text-6xl">
        {stat.target == null ? stat.text : `${value}${stat.suffix}`}
      </div>
      <div className="mt-4 text-sm font-medium uppercase tracking-wide text-white/85">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b-2 border-ink bg-red">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
