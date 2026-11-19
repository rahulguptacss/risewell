'use client';

import { useState } from 'react';
import type { InvolveSectionData } from '../../types';
import Icon from '../../ui/Icons';

const field = 'w-full rounded-2xl border border-[#e6eef8] bg-[#f7f9fc] py-3.5 pl-11 pr-4 text-sm text-[#102a56] outline-none transition focus:border-[#1d4ed8] focus:bg-white focus:shadow-sm';

export default function Involve({ data }: { data: InvolveSectionData }) {
  const [sent, setSent] = useState(false);
  return (
    <section id={data.id} className="bg-[#f4f7fb] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 lg:grid-cols-2">
        <form
          className="rise flex flex-col rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(16,42,86,0.06)] sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <p className="flex items-center gap-3 text-sm font-semibold text-[#16325c]">
            <span className="h-1 w-8 rounded-full bg-[#f5a524]" />
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#102a56] sm:text-[40px]">
            {data.title} <span className="text-[#1d4ed8]">{data.title_accent}</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#6b7c93]">{data.lead}</p>
          <div className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
            <label className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8aa0bb]"><Icon name="user" className="h-4 w-4" /></span>
              <input required name="name" placeholder={data.name_placeholder} className={field} />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8aa0bb]"><Icon name="mail" className="h-4 w-4" /></span>
              <input required type="email" name="email" placeholder={data.email_placeholder} className={field} />
            </label>
            <label className="relative sm:col-span-2">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8aa0bb]"><Icon name="phone" className="h-4 w-4" /></span>
              <input required inputMode="numeric" name="phone" placeholder={data.phone_placeholder} className={field} onChange={(event) => { event.target.value = event.target.value.replace(/\D/g, ''); }} />
            </label>
            <label className="relative sm:col-span-2">
              <span className="pointer-events-none absolute left-4 top-4 text-[#8aa0bb]"><Icon name="message" className="h-4 w-4" /></span>
              <textarea required name="message" rows={4} placeholder={data.message_placeholder} className={`${field} resize-none`} />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1d4ed8]/25 transition hover:-translate-y-0.5 hover:bg-[#163a9a]">
              {data.button_text}
              <span aria-hidden>{data.button_icon}</span>
            </button>
            {sent && <p className="text-sm font-medium text-[#1d4ed8]">{data.success_message}</p>}
          </div>
        </form>
        <div className="rise relative min-h-[460px] overflow-hidden rounded-[28px]" style={{ animationDelay: '120ms' }}>
          <img src={data.image} alt={data.image_alt} className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/70 via-[#071a33]/10 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-[#0d2f73]/95 p-6 text-white shadow-xl backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#f5a524]">
              <Icon name={data.card_icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight">{data.card_title}</h3>
            <span className="mt-3 block h-1 w-12 rounded-full bg-[#f5a524]" />
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">{data.card_text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
