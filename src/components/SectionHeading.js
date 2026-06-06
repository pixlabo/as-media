import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, subtitle, light = false }) {
  return (
    <Reveal>
      <div className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-white/70" : "text-ink/60"}`}>
        {index && <span className="text-red">{index}</span>}
        <span className="h-px w-8 bg-red" />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={`mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            light ? "text-white/65" : "text-ink/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
