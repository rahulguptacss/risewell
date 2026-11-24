'use client';

import { useEffect, useRef, useState } from 'react';
import type { WhySectionData } from '../../types';
import Icon from '../../ui/Icons';

function Counter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCount(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Why({ data }: { data: WhySectionData }) {
  return (
    <section id={data.id} className="bg-white pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[28px] bg-[#f4f7fb] p-4 sm:p-6">
          <div className="grid items-center gap-8 lg:grid-cols-[280px_1fr_240px]">
            <div className="rise relative mx-auto h-[280px] w-full max-w-sm lg:h-[300px]">
              <span className="absolute -left-1 -top-1 z-10 h-10 w-10 rounded-tl-2xl border-l-[5px] border-t-[5px] border-[#ff8c42]" />
              <span className="absolute -bottom-1 -right-1 z-10 h-10 w-10 rounded-br-2xl border-b-[5px] border-r-[5px] border-[#1d4ed8]" />
              <img src={data.image} alt={data.image_alt} className="h-full w-full rounded-2xl object-cover object-[center_20%]" />
            </div>
            <div className="rise" style={{ animationDelay: '100ms' }}>
              <p className="flex items-center gap-3 text-base font-semibold text-[#16325c]">
                <span className="h-1 w-8 rounded-full bg-[#ff8c42]" />
                {data.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#102a56] sm:text-4xl">
                {data.title} <span className="text-[#1d4ed8]">{data.title_accent}</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#6b7c93]">{data.text}</p>
            </div>
            <ul className="rise space-y-4 border-[#e1e8f2] lg:border-l lg:pl-6" style={{ animationDelay: '180ms' }}>
              {data.points.map((point) => (
                <li key={point.title} className="flex items-center gap-3 text-sm font-bold text-[#102a56]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ff8c42] text-white">
                    <Icon name={point.icon} className="h-3.5 w-3.5" />
                  </span>
                  {point.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6 sm:grid sm:grid-cols-[1.3fr_auto_1fr_auto_1fr] sm:items-center">
          <p className="rise text-[26px] font-extrabold leading-tight text-[#102a56] sm:text-[34px]">
            {data.banner}
            <span className="mt-1 block">
              {data.banner_mid} <span className="text-[#1d4ed8]">{data.banner_accent}</span>
            </span>
            <span className="mt-2 block h-1 w-14 rounded-full bg-[#ff8c42]" />
          </p>
          <div className="grid grid-cols-2 gap-4 sm:contents">
            {data.stats.map((stat) => (
              <div key={stat.label} className="contents">
                <span className="hidden h-12 w-px bg-[#e1e8f2] sm:block" />
                <div className="rise flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#e7edf5] text-[#ff8c42] sm:h-12 sm:w-12">
                    <Icon name={stat.icon} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-3xl font-extrabold text-[#102a56] sm:text-5xl"><Counter value={stat.value} /></p>
                    <p className="text-sm text-[#6b7c93] sm:text-base">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
