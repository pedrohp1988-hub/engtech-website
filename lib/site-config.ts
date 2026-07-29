import type { NavItem } from "@/types";

export const serviceAreas = [
  "Hollywood",
  "Fort Lauderdale",
  "Pembroke Pines",
  "Miramar",
  "Davie",
  "Plantation",
  "Hallandale Beach",
  "Dania Beach",
  "Sunrise",
  "Aventura",
] as const;

export const serviceNames = [
  "AC repair",
  "AC installation",
  "AC replacement",
  "Preventive maintenance",
  "Mini-split installation and repair",
  "Commercial HVAC",
  "Thermostats and HVAC controls",
  "Indoor air quality",
  "Ductwork",
] as const;

export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "").slice(-10);
  if (digits.length !== 10) return phone;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const publicPhone = process.env.NEXT_PUBLIC_PHONE ?? "+17868540115";

export const siteConfig = {
  name: "EngTech HVAC Solutions USA",
  shortName: "EngTech HVAC",
  description:
    "Residential and light-commercial HVAC repair, installation, replacement, maintenance, and indoor comfort services in South Florida.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://engtechusa.com",
  phone: publicPhone,
  phoneDisplay: formatPhoneDisplay(publicPhone),
  email: process.env.NEXT_PUBLIC_EMAIL ?? "engtechusahvac@gmail.com",
  market: "South Florida",
  address: "Serving South Florida",
} as const;

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
