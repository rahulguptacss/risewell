'use client';

import { useEffect, useState } from 'react';
import type { HeaderData } from '../../types';
import Icon from '../../ui/Icons';

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <a href="#home" className="flex items-center" aria-label={alt}>
      <img src={src} alt={alt} className="h-[78px] w-auto" />
    </a>
  );
}

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(data.links[0]?.href ?? '#home');

  useEffect(() => {
    const ids = data.links.map((link) => link.href.replace('#', ''));
    const onScroll = () => {
      let current = data.links[0]?.href ?? '#home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [data.links]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#eef2f7] bg-white">
      <div className="mx-auto flex h-[84px] max-w-7xl flex-nowrap items-center gap-5 overflow-hidden px-4">
        <Logo src={data.logo} alt={data.logo_alt} />
        <span className="hidden h-8 w-px bg-[#d7dee8] lg:block" />
        <nav className="ml-auto hidden flex-nowrap items-center gap-2.5 lg:flex">
          {data.links.map((link) => {
            const on = active === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-semibold transition ${on ? 'bg-[#1d4ed8] text-white' : 'text-[#1e3a5f] hover:text-[#1d4ed8]'}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        <span className="hidden h-8 w-px bg-[#d7dee8] lg:block" />
        <a href={data.button_href} className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#f5a524] px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#e89412] lg:inline-flex">
          <Icon name={data.button_icon} className="h-4 w-4" />
          {data.button_text}
        </a>
        <button type="button" className="ml-auto lg:hidden" aria-label={open ? data.close_label : data.menu_label} onClick={() => setOpen((v) => !v)}>
          <span className="block h-0.5 w-6 bg-[#1e3a5f]" />
          <span className="mt-1.5 block h-0.5 w-6 bg-[#1e3a5f]" />
          <span className="mt-1.5 block h-0.5 w-6 bg-[#1e3a5f]" />
        </button>
      </div>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-[#eef2f7] bg-white px-4 py-4">
            {data.links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-[#1e3a5f]">
                {link.name}
              </a>
            ))}
            <a href={data.button_href} onClick={() => setOpen(false)} className="mt-2 inline-flex rounded-full bg-[#f5a524] px-5 py-2 text-sm font-semibold text-white">
              {data.button_text}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
