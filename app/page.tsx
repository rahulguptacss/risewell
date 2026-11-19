import type { ReactNode } from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Why from '../components/sections/Why';
import Moments from '../components/sections/Moments';
import Involve from '../components/sections/Involve';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections } from '../components/types';

const sectionMap: Record<string, ReactNode> = {
  Hero: <Hero data={sections.hero} />,
  About: <About data={sections.about} />,
  Services: <Services data={sections.services} />,
  Why: <Why data={sections.why} />,
  Moments: <Moments data={sections.moments} />,
  Involve: <Involve data={sections.involve} />,
  Testimonials: <Testimonials data={sections.testimonials} />,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1c3d66]">
      <Header data={common.Header} />
      <main className="flex-1">
        {pages.home.components.map((block) => (
          <div key={block.key}>{sectionMap[block.component]}</div>
        ))}
      </main>
      <Footer data={common.Footer} />
      <BackToTop data={common.BackToTop} />
    </div>
  );
}
