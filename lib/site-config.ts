import type { NavItem } from "@/types";

export const siteConfig = {
  name: "EngTech HVAC Solutions",
  shortName: "EngTech HVAC",
  description:
    "Commercial HVAC engineering, installation, maintenance, controls, and emergency response delivered nationwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://engtechhvac.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+1-800-555-0147",
  phoneDisplay: "1-800-555-0147",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "service@engtechhvac.com",
  address: "Serving commercial facilities nationwide",
} as const;

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
