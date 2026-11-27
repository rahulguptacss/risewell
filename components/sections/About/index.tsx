import type { AboutSectionData } from '../../types';
import Icon from '../../ui/Icons';

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section id={data.id} className="bg-white pt-16 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="rise flex items-center gap-3 text-base font-semibold text-[#16325c]">
            <span className="h-1 w-8 rounded-full bg-[#ff8c42]" />
            {data.eyebrow}
          </p>
          <h2 className="rise mt-4 text-3xl font-extrabold leading-tight text-[#102a56] sm:text-4xl lg:text-[42px]" style={{ animationDelay: '80ms' }}>
            {data.title}
            <span className="mt-1 block text-[#1d4ed8]">{data.title_accent}</span>
          </h2>
          <p className="rise mt-5 max-w-md text-sm leading-7 text-[#6b7c93]" style={{ animationDelay: '160ms' }}>{data.text}</p>
          <ul className="rise mt-4 max-w-sm" style={{ animationDelay: '240ms' }}>
            {data.points.map((point, index) => (
              <li key={point.title} className={`flex items-center gap-3 py-2 ${index < data.points.length - 1 ? 'border-b border-[#e7edf5]' : ''}`}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#e7edf5] text-[#1d4ed8] transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <Icon name={point.icon} />
                </span>
                <span className="text-[15px] font-bold text-[#102a56]">{point.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto h-[520px] w-full max-w-lg sm:h-[600px]">
          <div className="absolute right-0 top-4 h-[90%] w-[72%]">
            <span className="pointer-events-none absolute -right-1 -top-1 z-10 h-14 w-14 rounded-tr-[22px] border-r-[5px] border-t-[5px] border-[#1d4ed8]" />
            <img src={data.image} alt={data.image_alt} className="rise h-full w-full rounded-[22px] object-cover shadow-md" style={{ animationDelay: '120ms' }} />
          </div>
          <div className="absolute bottom-4 left-0 h-[64%] w-[48%]">
            <span className="pointer-events-none absolute -left-1 -top-1 z-10 h-12 w-12 rounded-tl-[22px] border-l-[5px] border-t-[5px] border-[#ff8c42]" />
            <span className="pointer-events-none absolute -bottom-1 -right-1 z-10 h-12 w-12 rounded-br-[22px] border-b-[5px] border-r-[5px] border-[#ff8c42]" />
            <img src={data.image_front} alt={data.image_front_alt} className="rise h-full w-full rounded-[22px] object-cover shadow-xl" style={{ animationDelay: '240ms' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
