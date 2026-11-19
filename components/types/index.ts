import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  logo_mark: string;
  logo_text: string;
  logo_tagline: string;
  logo_alt: string;
  links: LinkType[];
  button_text: string;
  button_href: string;
  button_icon: string;
  menu_label: string;
  close_label: string;
}

export interface FooterData {
  logo: string;
  logo_mark: string;
  logo_text: string;
  logo_alt: string;
  description: string;
  links_title: string;
  link_mark: string;
  links: LinkType[];
  explore_title: string;
  explore: LinkType[];
  contact_title: string;
  address: string;
  phone: string;
  phone_href: string;
  email: string;
  email_href: string;
  socials: LinkType[];
  copyright: string;
}

export interface BackToTopData {
  aria_label: string;
  icon: string;
}

export interface HeroSectionData {
  id: string;
  eyebrow: string;
  eyebrow_icon: string;
  title_line: string;
  title_mid: string;
  title_accent: string;
  lead: string;
  button_text: string;
  button_href: string;
  image: string;
  image_alt: string;
}

export interface AboutSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  text: string;
  image: string;
  image_alt: string;
  image_front: string;
  image_front_alt: string;
  points: { icon: string; title: string }[];
}

export interface ServicesSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  items: { icon: string; title: string; text: string }[];
}

export interface WhySectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  text: string;
  image: string;
  image_alt: string;
  points: { icon: string; title: string }[];
  stats: { icon: string; value: string; label: string }[];
  banner: string;
  banner_mid: string;
  banner_accent: string;
}

export interface MomentsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  close_label: string;
  close_icon: string;
  images: { src: string; alt: string }[];
}

export interface InvolveSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  message_placeholder: string;
  button_text: string;
  button_icon: string;
  success_message: string;
  image: string;
  image_alt: string;
  card_icon: string;
  card_title: string;
  card_text: string;
}

export interface TestimonialsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  quote_mark: string;
  star: string;
  prev_label: string;
  next_label: string;
  prev_icon: string;
  next_icon: string;
  close_label: string;
  close_icon: string;
  items: { quote: string; name: string; role: string; stars: number; image: string; image_alt: string }[];
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Charity.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
