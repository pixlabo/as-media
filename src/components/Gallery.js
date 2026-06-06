import Reveal from "./Reveal";
import WorkShowcase from "./WorkShowcase";
import { getWorkGallery } from "@/lib/workGallery";

export default async function Gallery() {
  const workCategories = await getWorkGallery();

  if (!workCategories.length) {
    return null;
  }

  return (
    <section id="work" className="border-b-2 border-ink bg-paper">
      <div className="container-px mx-auto max-w-7xl py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
          <span className="h-px w-8 bg-red" />
          <span>Gallery</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          Our Work Speaks Through Every Detail
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
          Explore each work category folder-wise. Open any category to view a
          large animated showcase on the left and the full image strip on the
          right, with both automatic playback and manual browsing.
        </p>

        <Reveal delay={80} variant="scale">
          <div className="mt-10">
            <WorkShowcase categories={workCategories} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
