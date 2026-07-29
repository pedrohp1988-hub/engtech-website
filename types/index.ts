import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}
