import type { NavLink, SocialLink, StatItem } from "../types";

export const navLinks: NavLink[] = [
  { id: "work", label: "Work", href: "#work" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "Studio", href: "#about" },
  { id: "contact", label: "Start Project", href: "#contact", isPrimary: true },
];

export const stats: StatItem[] = [
  { id: "projects", target: 150, suffix: "+", label: "Projects" },
  { id: "awards", target: 12, suffix: "", label: "Awards" },
  { id: "years", target: 8, suffix: "", label: "Years" },
];

export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "behance", label: "Behance", href: "https://behance.net" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

export const siteConfig = {
  name: "Laser Frame Studio",
  tagline: "Motion & Animation",
  contactEmail: "hello@laserframe.com",
  copyrightYear: new Date().getFullYear(),
};
