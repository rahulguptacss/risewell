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
          <p className="rise flex items-center justify-center gap-3 text-sm font-semibold text-[#16325c]">
            <span className="h-1 w-8 rounded-full bg-[#f5a524]" />
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
      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#071a33]/80 p-4" onClick={() => setOpen(null)}>
          <button type="button" aria-label={data.close_label} className="absolute right-5 top-5 text-3xl text-white" onClick={() => setOpen(null)}>
            {data.close_icon}
          </button>
          <img src={active.src} alt={active.alt} className="max-h-[85vh] max-w-5xl rounded-2xl object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
