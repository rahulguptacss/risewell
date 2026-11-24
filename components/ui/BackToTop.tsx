'use client';

import { useEffect, useState } from 'react';
import type { BackToTopData } from '../types';

export default function BackToTop({ data }: { data: BackToTopData }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      aria-label={data.aria_label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#ff8c42] text-white shadow-lg"
    >
      {data.icon}
    </button>
  );
}
