'use client';

import { useEffect, useState } from 'react';
import type { TestimonialsSectionData } from '../../types';

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const [index, setIndex] = useState(0);
  const [per, setPer] = useState(3);
  const [animate, setAnimate] = useState(true);
  const [photo, setPhoto] = useState<number | null>(null);
  const count = data.items.length;
  const canSlide = count > 3;
  const track = canSlide ? [...data.items, ...data.items.slice(0, per)] : data.items;

  useEffect(() => {
    const sync = () => setPer(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  useEffect(() => {
    if (!canSlide || index < count) return;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 520);
    return () => window.clearTimeout(timer);
  }, [index, count, canSlide]);

  useEffect(() => {
    if (!canSlide) return;
    const timer = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [canSlide]);

  const next = () => {
    setAnimate(true);
    setIndex((current) => current + 1);
  };
  const prev = () => {
    if (index === 0) {
      setAnimate(false);
      setIndex(count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(count - 1);
        });
      });
      return;
    }
    setAnimate(true);
    setIndex((current) => current - 1);
  };
  const openPhoto = photo === null ? null : data.items[photo];

  return (
    <section id={data.id} className="bg-white pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rise flex items-center justify-center gap-3 text-base font-semibold text-[#16325c]">
            <span className="h-1 w-8 rounded-full bg-[#ff8c42]" />
            {data.eyebrow}
          </p>
          <h2 className="rise mt-4 text-3xl font-extrabold text-[#102a56] sm:text-4xl" style={{ animationDelay: '80ms' }}>
            {data.title} <span className="text-[#1d4ed8]">{data.title_accent}</span>
          </h2>
          <p className="rise mt-3 text-sm leading-7 text-[#6b7c93]" style={{ animationDelay: '140ms' }}>{data.lead}</p>
        </div>
        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div className={canSlide ? `flex ${animate ? 'transition-transform duration-500 ease-out' : ''}` : 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'} style={canSlide ? { transform: `translateX(-${index * (100 / per)}%)` } : undefined}>
              {(canSlide ? track : data.items).map((item, itemIndex) => (
                <article key={`${item.name}-${itemIndex}`} className={canSlide ? 'shrink-0 px-2' : ''} style={canSlide ? { width: `${100 / per}%` } : undefined}>
                  <div className="h-full rounded-[22px] border border-[#e6eef8] bg-[#f6f8fc] p-6 shadow-[0_8px_24px_rgba(16,42,86,0.04)]">
                    <p className="font-serif text-5xl leading-none text-[#ff8c42]">{data.quote_mark}</p>
                    <p className="mt-2 min-h-[108px] text-[15px] leading-7 text-[#4d627c]">{item.quote}</p>
                    <div className="mt-4 flex items-center gap-3">
                        <button type="button" onClick={() => setPhoto(itemIndex % count)} className="shrink-0">
                        <img src={item.image} alt={item.image_alt} className="h-12 w-12 rounded-full object-cover" />
                      </button>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#1d4ed8]">{item.name}</p>
                        <p className="text-xs text-[#7b8ba3]">{item.role}</p>
                      </div>
                      <span className="ml-auto h-9 w-px bg-[#d5dfec]" />
                      <p className="text-sm tracking-[0.12em] text-[#ff8c42]">{data.star.repeat(item.stars)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {canSlide && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button type="button" aria-label={data.prev_label} onClick={prev} className="grid h-11 w-11 place-items-center rounded-full border border-[#d7e3f5] bg-white text-[#1d4ed8] shadow-md">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              {data.items.map((item, dot) => (
                <button key={item.name} type="button" aria-label={item.name} onClick={() => { setAnimate(true); setIndex(dot); }} className={`h-2.5 w-2.5 rounded-full transition ${dot === index % count ? 'bg-[#1d4ed8]' : 'bg-[#d5deea]'}`} />
              ))}
              <button type="button" aria-label={data.next_label} onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-[#d7e3f5] bg-white text-[#1d4ed8] shadow-md">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>
      {openPhoto && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#071a33]/80 p-4" onClick={() => setPhoto(null)}>
          <button type="button" aria-label={data.close_label} className="absolute right-5 top-5 text-3xl text-white" onClick={() => setPhoto(null)}>
            {data.close_icon}
          </button>
          <img src={openPhoto.image} alt={openPhoto.image_alt} className="max-h-[80vh] max-w-lg rounded-2xl object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
