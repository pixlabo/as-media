"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";

function padNumber(value) {
  return String(value).padStart(2, "0");
}

export default function WorkShowcase({ categories }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const categoryStripRef = useRef(null);

  const activeCategory = categories[activeCategoryIndex] ?? categories[0];
  const activeImages = activeCategory?.images ?? [];
  const activeImage = activeImages[activeImageIndex] ?? activeImages[0];
  const shouldClampThumbPanel = activeImages.length > 6;

  const advanceImage = useEffectEvent(() => {
    if (activeImages.length < 2) return;
    setActiveImageIndex((current) => (current + 1) % activeImages.length);
  });

  const updateCategoryScrollState = useEffectEvent(() => {
    const strip = categoryStripRef.current;
    if (!strip) return;

    const maxScrollLeft = strip.scrollWidth - strip.clientWidth;
    setCanScrollLeft(strip.scrollLeft > 4);
    setCanScrollRight(maxScrollLeft - strip.scrollLeft > 4);
  });

  const scrollCategories = (direction) => {
    const strip = categoryStripRef.current;
    if (!strip) return;

    strip.scrollBy({
      left: direction * Math.max(strip.clientWidth * 0.72, 220),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (activeImages.length < 2) return undefined;

    const timer = window.setInterval(() => {
      advanceImage();
    }, 3200);

    return () => window.clearInterval(timer);
  }, [activeCategoryIndex, activeImages.length]);

  useEffect(() => {
    const strip = categoryStripRef.current;
    if (!strip) return undefined;

    updateCategoryScrollState();

    const handleScroll = () => updateCategoryScrollState();
    const handleResize = () => updateCategoryScrollState();

    strip.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      strip.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [categories.length]);

    return (
    <div className="space-y-6">
      <div className="relative overflow-hidden border-2 border-ink bg-white">
        {canScrollLeft ? (
          <button
            type="button"
            aria-label="Scroll categories left"
            onClick={() => scrollCategories(-1)}
            className="absolute bottom-0 left-0 top-0 z-20 flex w-14 items-center justify-center border-r-2 border-ink bg-paper text-ink transition-colors hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
        ) : null}

        {canScrollRight ? (
          <button
            type="button"
            aria-label="Scroll categories right"
            onClick={() => scrollCategories(1)}
            className="absolute bottom-0 right-0 top-0 z-20 flex w-14 items-center justify-center border-l-2 border-ink bg-paper text-ink transition-colors hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        ) : null}

        {canScrollLeft ? (
          <div className="pointer-events-none absolute inset-y-0 left-14 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
        ) : null}

        {canScrollRight ? (
          <div className="pointer-events-none absolute inset-y-0 right-14 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
        ) : null}

        <div
          ref={categoryStripRef}
          className="no-scrollbar flex gap-3 overflow-x-auto px-3 py-3 sm:mx-14"
        >
          {categories.map((category, index) => {
            const selected = index === activeCategoryIndex;

            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => {
                  setActiveCategoryIndex(index);
                  setActiveImageIndex(0);
                }}
                className={`group relative shrink-0 overflow-hidden border-2 px-4 py-3 text-left transition-all sm:min-w-[12.75rem] ${
                  selected
                    ? "border-ink bg-ink text-white"
                    : "border-ink bg-white text-ink hover:bg-paper"
                }`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 ${
                    selected ? "bg-red" : "bg-transparent group-hover:bg-ink/12"
                  }`}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={`block h-2.5 w-2.5 ${
                      selected ? "bg-red" : "bg-ink/20 group-hover:bg-red"
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="font-display text-sm font-bold uppercase leading-tight tracking-tight sm:text-[0.96rem]">
                      {category.name}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={`h-px w-5 ${
                          selected ? "bg-white/35" : "bg-ink/18"
                        }`}
                      />
                      <div
                        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                          selected ? "text-white/65" : "text-ink/50"
                        }`}
                      >
                        {padNumber(category.images.length)} Images
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="overflow-hidden border-2 border-ink bg-white lg:flex lg:h-[34rem] lg:flex-col">
          <div className="relative aspect-[16/11] border-b-2 border-ink bg-ink/5 lg:h-[28.5rem] lg:flex-none lg:aspect-auto">
            {activeImage ? (
              <div key={activeImage.src} className="work-image-frame absolute inset-0">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : null}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/72 via-ink/28 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-4 sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Active Category
                </p>
                <h3 className="mt-2 max-w-xl font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-3xl">
                  {activeCategory.name}
                </h3>
                <p className="mt-2 text-sm text-white/72">
                  Image {padNumber(activeImageIndex + 1)} of{" "}
                  {padNumber(activeImages.length)}
                </p>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                {activeImages.slice(0, 8).map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Open ${activeCategory.name} image ${index + 1}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2.5 w-8 transition-all ${
                      index === activeImageIndex
                        ? "bg-red"
                        : "bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 bg-paper px-4 py-4 sm:px-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/55">
                Folder
              </p>
              <p className="mt-1 font-display text-lg font-bold uppercase leading-tight text-ink">
                {activeCategory.name}
              </p>
            </div>

            <div className="flex items-center gap-2 text-right">
              <span className="h-2.5 w-2.5 bg-red" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
                Auto Showcase + Manual View
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-2 border-ink bg-white lg:flex lg:max-h-[34rem] lg:self-start lg:flex-col">
          <div className="border-b-2 border-ink bg-white px-4 py-4 sm:px-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/55">
              All Images
            </p>
            <div className="mt-2 flex items-end justify-between gap-4">
              <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-ink">
                {activeCategory.name}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                {padNumber(activeImages.length)} Frames
              </span>
            </div>
            {shouldClampThumbPanel ? (
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Scroll to view all
              </p>
            ) : null}
          </div>

          <div
            className={`thumb-panel-scroll grid grid-cols-3 gap-2.5 overflow-y-auto p-3 ${
              shouldClampThumbPanel ? "lg:flex-1 lg:min-h-0" : ""
            }`}
          >
            {activeImages.map((image, index) => {
              const selected = index === activeImageIndex;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="text-left"
                >
                  <div
                    className={`overflow-hidden border-2 transition-all ${
                      selected
                        ? "border-red shadow-[0_12px_24px_rgba(228,0,43,0.14)]"
                        : "border-ink bg-paper hover:border-ink/55"
                    }`}
                  >
                    <div className="relative aspect-[4/3] bg-ink/5">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-ink/12 bg-white px-3 py-2.5">
                      <span className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                        {padNumber(index + 1)}
                      </span>
                      <span
                        className={`h-1.5 w-6 ${
                          selected ? "bg-red" : "bg-ink/15"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
