import type { ServicesSectionData } from '../../types';
import Icon from '../../ui/Icons';

export default function Services({ data }: { data: ServicesSectionData }) {
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
          <p className="rise mt-4 text-sm leading-7 text-[#6b7c93]" style={{ animationDelay: '160ms' }}>{data.lead}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => {
            const tones = ['#2563eb', '#16a34a', '#e11d48', '#0d9488', '#f97316', '#7c3aed', '#0284c7', '#db2777'];
            const tone = tones[index % tones.length];
            return (
            <article
              key={item.title}
              className="rise rounded-2xl border border-[#e6edf6] bg-white px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl" style={{ backgroundColor: `${tone}1a`, color: tone }}>
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-[#102a56]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7c93]">{item.text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
