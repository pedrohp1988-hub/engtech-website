import {
  Building2,
  Gauge,
  Settings,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    summary:
      "Engineered systems for offices, retail, industrial, and mission-critical facilities.",
    description:
      "Right-sized equipment, coordinated installation, commissioning, and turnover from one accountable team.",
    icon: Building2,
    highlights: ["Design-build", "Rooftop systems", "Chillers & boilers"],
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    summary:
      "Data-informed service programs that reduce failures and operating costs.",
    description:
      "Asset-specific maintenance plans, documented inspections, and clear capital planning.",
    icon: ShieldCheck,
    highlights: ["Multi-site programs", "Asset reporting", "Priority response"],
  },
  {
    slug: "building-automation",
    title: "Building Automation",
    summary:
      "Controls that turn building data into comfort, visibility, and savings.",
    description:
      "Open-protocol controls, sequence optimization, remote monitoring, and system integration.",
    icon: Gauge,
    highlights: ["BAS integration", "Energy analytics", "Remote monitoring"],
  },
  {
    slug: "emergency-repair",
    title: "Emergency Repair",
    summary:
      "Rapid diagnostics and decisive field response when operations are at risk.",
    description:
      "Experienced technicians, disciplined escalation, and transparent updates from dispatch to recovery.",
    icon: Wrench,
    highlights: [
      "24/7 response",
      "Root-cause diagnostics",
      "Temporary cooling",
    ],
  },
  {
    slug: "refrigeration",
    title: "Refrigeration",
    summary:
      "Reliable temperature control for food service, retail, and industrial applications.",
    description:
      "Installation, service, leak detection, and performance optimization for critical refrigeration assets.",
    icon: Snowflake,
    highlights: ["Walk-ins", "Rack systems", "Compliance support"],
  },
  {
    slug: "retrofits-optimization",
    title: "Retrofits & Optimization",
    summary:
      "Practical upgrades that improve reliability, efficiency, and occupant comfort.",
    description:
      "Lifecycle analysis and phased implementation designed around your operational priorities.",
    icon: Settings,
    highlights: [
      "Equipment replacement",
      "Electrification",
      "Efficiency upgrades",
    ],
  },
];
