import type { HeroSectionData } from '../../types';
import Icon from '../../ui/Icons';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id} className="relative flex flex-col bg-[#1a6fd4] md:h-[calc(100svh-84px)] md:overflow-hidden">
      <img
        src={data.image}
        alt={data.image_alt}
        className="h-[34%] w-full shrink-0 object-cover object-[center_18%] motion-safe:animate-[hero-zoom_14s_ease_both] md:absolute md:right-0 md:top-0 md:h-full md:w-[58%]"
      />
      <div className="relative flex min-h-0 flex-1 bg-[#1a6fd4] pt-5 md:bg-transparent md:pt-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[58%] bg-[#1a6fd4] [clip-path:ellipse(100%_130%_at_-8%_50%)] md:block" />
        <div className="relative mx-auto flex w-full max-w-6xl items-center px-5 py-6 md:px-8">
          <div className="max-w-xl text-white">
            <p className="rise flex items-center gap-2 text-base font-medium">
              <span className="text-white"><Icon name={data.eyebrow_icon} className="h-5 w-5" /></span>
              {data.eyebrow}
            </p>
            <h1 className="rise mt-4 line-clamp-2 text-[28px] font-extrabold leading-[1.2] md:hidden" style={{ animationDelay: '120ms' }}>
              {data.title_line} {data.title_mid} <span className="text-[#ff8c42]">{data.title_accent}</span>
            </h1>
            <h1 className="rise mt-5 hidden text-4xl font-extrabold leading-[1.08] sm:text-5xl md:block lg:text-[58px]" style={{ animationDelay: '120ms' }}>
              {data.title_line}
              <span className="mt-1 block">
                {data.title_mid} <span className="text-[#ff8c42]">{data.title_accent}</span>
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
