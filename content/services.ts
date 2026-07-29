import {
  Building2,
  Fan,
  Gauge,
  House,
  RefreshCw,
  ShieldCheck,
  Snowflake,
  Wind,
  Wrench,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ac-repair",
    title: "AC Repair",
    summary:
      "Troubleshooting and repair for South Florida homes and light-commercial properties.",
    description:
      "Practical diagnostics and repair recommendations for air-conditioning systems that are not cooling properly.",
    icon: Wrench,
    highlights: ["System diagnostics", "Cooling issues", "Component repair"],
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    summary:
      "Thoughtful equipment selection and installation for dependable indoor comfort.",
    description:
      "Installation planning considers property needs, system sizing, comfort priorities, and manufacturer requirements.",
    icon: Snowflake,
    highlights: [
      "System selection",
      "New installations",
      "Installation planning",
    ],
  },
  {
    slug: "ac-replacement",
    title: "AC Replacement",
    summary:
      "Replacement options for aging, unreliable, or inefficient cooling systems.",
    description:
      "Clear replacement guidance based on the existing system, property conditions, and comfort goals.",
    icon: RefreshCw,
    highlights: [
      "Existing-system review",
      "Equipment options",
      "Planned replacement",
    ],
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    summary:
      "Routine service designed to support reliable operation and identify developing issues.",
    description:
      "Maintenance visits cover core system checks, cleaning needs, and practical observations about equipment condition.",
    icon: ShieldCheck,
    highlights: [
      "Routine inspections",
      "System care",
      "Condition observations",
    ],
  },
  {
    slug: "mini-splits",
    title: "Mini-Split Service",
    summary:
      "Ductless mini-split installation and repair for targeted comfort.",
    description:
      "Support for new ductless applications and troubleshooting of existing mini-split systems.",
    icon: Fan,
    highlights: [
      "Mini-split installation",
      "Mini-split repair",
      "Ductless comfort",
    ],
  },
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    summary:
      "HVAC service for light-commercial properties across the South Florida service area.",
    description:
      "Repair, installation, replacement, and maintenance support suited to light-commercial building needs.",
    icon: Building2,
    highlights: [
      "Light-commercial service",
      "Equipment replacement",
      "Maintenance",
    ],
  },
  {
    slug: "thermostats-controls",
    title: "Thermostats & HVAC Controls",
    summary:
      "Thermostat and control solutions that support convenient, consistent comfort.",
    description:
      "Assessment, replacement, and setup support for compatible thermostats and HVAC controls.",
    icon: Gauge,
    highlights: ["Thermostats", "Control setup", "Comfort scheduling"],
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    summary:
      "Practical indoor air quality options based on the home or property.",
    description:
      "Evaluation of filtration and other appropriate indoor air quality improvements for the HVAC system.",
    icon: Wind,
    highlights: ["Filtration", "Air quality options", "System evaluation"],
  },
  {
    slug: "ductwork",
    title: "Ductwork",
    summary:
      "Ductwork assessment and service for airflow and comfort concerns.",
    description:
      "Inspection and recommendations for duct conditions that may affect airflow and room-to-room comfort.",
    icon: House,
    highlights: ["Duct assessment", "Airflow concerns", "Ductwork service"],
  },
];
