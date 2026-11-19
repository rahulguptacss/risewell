import type { HeroSectionData } from '../../types';
import Icon from '../../ui/Icons';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id} className="relative flex h-[calc(100svh-84px)] flex-col overflow-hidden bg-[#1a6fd4]">
      <img
        src={data.image}
        alt={data.image_alt}
        className="h-[38%] w-full shrink-0 object-cover object-[center_18%] motion-safe:animate-[hero-zoom_14s_ease_both] md:absolute md:right-0 md:top-0 md:h-full md:w-[58%]"
      />
      <div className="relative flex min-h-0 flex-1 bg-[#1a6fd4] md:bg-transparent">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] bg-[#1a6fd4] [clip-path:ellipse(100%_130%_at_-8%_50%)] md:block" />
        <div className="relative mx-auto flex w-full max-w-6xl items-center px-5 py-6 md:px-8">
          <div className="max-w-xl text-white">
            <p className="rise flex items-center gap-2 text-sm font-medium">
              <span className="text-white"><Icon name={data.eyebrow_icon} className="h-5 w-5" /></span>
              {data.eyebrow}
            </p>
            <h1 className="rise mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[58px]" style={{ animationDelay: '120ms' }}>
              {data.title_line}
              <span className="mt-1 block">
                {data.title_mid} <span className="text-[#f5a524]">{data.title_accent}</span>
              </span>
            </h1>
            <p className="rise mt-5 max-w-md text-sm leading-7 text-white/90 sm:text-[15px]" style={{ animationDelay: '220ms' }}>
              {data.lead}
            </p>
            <a
              href={data.button_href}
              className="rise mt-7 inline-flex items-center gap-2 rounded-full border border-white/80 px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-[#1a6fd4]"
              style={{ animationDelay: '320ms' }}
            >
              <Icon name="heart" className="h-4 w-4" />
              {data.button_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
