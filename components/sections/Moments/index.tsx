'use client';

import { useEffect, useState } from 'react';
import type { MomentsSectionData } from '../../types';

export default function Moments({ data }: { data: MomentsSectionData }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const active = open === null ? null : data.images[open];

  return (
    <section id={data.id} className="bg-white pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rise flex items-center justify-center gap-3 text-base font-semibold text-[#16325c]">
            <span className="h-1 w-8 rounded-full bg-[#ff8c42]" />
            {data.eyebrow}
          </p>
          <h2 className="rise mt-4 text-3xl font-extrabold text-[#102a56] sm:text-4xl" style={{ animationDelay: '80ms' }}>
            {data.title} <span className="text-[#1d4ed8]">{data.title_accent}</span>
          </h2>
          <p className="rise mt-3 text-sm leading-7 text-[#6b7c93]" style={{ animationDelay: '160ms' }}>{data.lead}</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {data.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setOpen(index)}
              className={`rise group overflow-hidden rounded-2xl ${index === 0 ? 'row-span-2' : ''}`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 ? 'h-full min-h-[280px]' : 'h-36 sm:h-44'}`}
              />
            </button>
          ))}
        </div>
      </div>
      {active && open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071a33]/80 px-14 py-16" onClick={() => setOpen(null)}>
          <button type="button" aria-label={data.close_label} className="absolute right-4 top-4 text-3xl text-white" onClick={() => setOpen(null)}>
            {data.close_icon}
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1d4ed8]"
            onClick={(event) => { event.stopPropagation(); setOpen((open - 1 + data.images.length) % data.images.length); }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <img src={active.src} alt={active.alt} className="max-h-[70vh] max-w-full rounded-2xl object-contain" onClick={(event) => event.stopPropagation()} />
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1d4ed8]"
            onClick={(event) => { event.stopPropagation(); setOpen((open + 1) % data.images.length); }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </section>
  );
}
