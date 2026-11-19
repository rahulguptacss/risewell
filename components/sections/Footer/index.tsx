import type { FooterData, LinkType } from '../../types';
import Icon from '../../ui/Icons';

function Column({ title, links, mark }: { title: string; links: LinkType[]; mark: string }) {
  return (
    <div className="rise lg:border-l lg:border-white/25 lg:pl-8">
      <h3 className="text-[17px] font-bold">{title}</h3>
      <span className="mt-2 block h-[3px] w-9 rounded-full bg-[#f5a524]" />
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="group flex items-center gap-3 text-sm text-white/80 transition hover:translate-x-1 hover:text-white">
              <span className="text-sm text-white/70">{mark}</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const socialIcon: Record<string, string> = {
  Facebook: 'facebook',
  Instagram: 'instagram',
  YouTube: 'youtube',
  LinkedIn: 'linkedin',
};

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#071a3a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rise">
          <a href="#home">
            <img src={data.logo} alt={data.logo_alt} className="h-24 w-auto" />
          </a>
          <p className="-mt-2 max-w-xs text-sm leading-5 text-white/70">{data.description}</p>
          <div className="mt-5 flex gap-2">
            {data.socials.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name} className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 text-white/80 transition hover:-translate-y-0.5 hover:border-[#f5a524] hover:text-[#f5a524]">
                <Icon name={socialIcon[social.name] ?? 'heart'} className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
        <Column title={data.links_title} links={data.links} mark={data.link_mark} />
        <Column title={data.explore_title} links={data.explore} mark={data.link_mark} />
        <div className="rise lg:border-l lg:border-white/25 lg:pl-8" style={{ animationDelay: '160ms' }}>
          <h3 className="text-[17px] font-bold">{data.contact_title}</h3>
          <span className="mt-2 block h-[3px] w-9 rounded-full bg-[#f5a524]" />
          <ul className="mt-5 space-y-4 text-sm text-white/85">
            <li className="flex items-center gap-3"><Icon name="pin" className="h-5 w-5 shrink-0 text-[#f5a524]" />{data.address}</li>
            <li className="flex items-center gap-3"><Icon name="phone" className="h-5 w-5 shrink-0 text-[#f5a524]" /><a href={data.phone_href} className="hover:text-white">{data.phone}</a></li>
            <li className="flex items-center gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-[#f5a524]" /><a href={data.email_href} className="hover:text-white">{data.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/60">{data.copyright}</p>
      </div>
    </footer>
  );
}
