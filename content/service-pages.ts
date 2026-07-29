import {
  Building2,
  Fan,
  RefreshCw,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  icon: LucideIcon;
  situations: string[];
  provides: string[];
  equipment: string;
  faqs: [string, string][];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "ac-repair",
    title: "AC Repair in South Florida",
    eyebrow: "AC repair",
    description:
      "Clear diagnosis and repair options when your air conditioner is not cooling properly.",
    intro:
      "Warm air, weak airflow, short cycling, water around the air handler, or unusual sounds can have several possible causes. EngTech reviews the symptoms and system before recommending a repair.",
    icon: Wrench,
    situations: [
      "AC not cooling or blowing warm air",
      "Weak airflow or uneven temperatures",
      "Short cycling, unusual noise, or high humidity",
      "Frozen coil, water near the air handler, or thermostat concerns",
    ],
    provides: [
      "Customer concern and thermostat review",
      "Airflow and accessible electrical inspection",
      "Refrigerant-side evaluation when applicable",
      "Findings with practical repair options",
    ],
    equipment:
      "We work with split systems, central air-conditioning equipment, thermostats, and related residential or light-commercial components.",
    faqs: [
      [
        "Why is my AC running but not cooling?",
        "Several conditions can produce that symptom, including airflow, controls, electrical, refrigerant-side, or equipment issues. Proper diagnosis is needed before choosing a repair.",
      ],
      [
        "Should I turn the AC off if the coil is frozen?",
        "If you see a frozen coil, turning the system off and contacting a qualified HVAC professional is a prudent step. Avoid removing panels or attempting refrigerant work.",
      ],
      [
        "Why does my AC keep turning on and off?",
        "Short cycling can relate to controls, airflow, system condition, or sizing. EngTech can review the system and explain the next step.",
      ],
      [
        "When should I consider replacement instead of repair?",
        "Consider the repair scope, system condition, equipment age, parts availability, comfort performance, and future maintenance expectations. Repair may still be appropriate.",
      ],
    ],
    related: ["preventive-maintenance", "ac-replacement", "ac-installation"],
  },
  {
    slug: "ac-installation",
    title: "Professional AC Installation in South Florida",
    eyebrow: "AC installation",
    description:
      "Thoughtful air-conditioning installation based on your property, comfort goals, and existing systems.",
    intro:
      "A good installation starts before equipment arrives. EngTech considers the property layout, load requirements, duct condition, electrical needs, drainage, controls, and compatibility so the system is set up for the space.",
    icon: Snowflake,
    situations: [
      "New construction or a property without central cooling",
      "Replacing an incomplete or mismatched system",
      "Adding cooling to an extension or remodeled space",
      "Planning a new system around comfort and humidity needs",
    ],
    provides: [
      "Property and comfort-goal review",
      "Equipment sizing and indoor/outdoor compatibility review",
      "Ductwork, electrical, condensate, and control planning",
      "Startup and performance verification",
    ],
    equipment:
      "System selection may include central split systems, compatible thermostats, ductwork considerations, and other equipment suited to the property.",
    faqs: [
      [
        "How is the correct AC size determined?",
        "Sizing considers the property, layout, insulation, windows, occupancy, duct condition, and comfort goals. A simple square-feet rule is not a complete sizing method.",
      ],
      [
        "What happens if an AC system is oversized?",
        "Oversizing can affect run time, humidity control, comfort, and equipment operation. Proper evaluation helps match the system to the property.",
      ],
      [
        "Should ductwork be inspected during installation?",
        "Yes. Duct condition and airflow are important parts of an installation review, especially when connecting to an existing system.",
      ],
      [
        "What should be checked after a new system starts?",
        "The installation should include startup checks, airflow and operating observations, controls, drainage, and a clear explanation of operation.",
      ],
    ],
    related: [
      "ac-replacement",
      "mini-split-installation",
      "preventive-maintenance",
    ],
  },
  {
    slug: "ac-replacement",
    title: "AC Replacement in South Florida",
    eyebrow: "AC replacement",
    description:
      "Balanced guidance when an existing air-conditioning system needs repair, replacement, or a closer review.",
    intro:
      "Replacement is not automatic. EngTech reviews the existing equipment, recurring concerns, comfort performance, repair scope, compatibility, and property needs so you can compare practical options.",
    icon: RefreshCw,
    situations: [
      "Frequent repairs or recurring breakdowns",
      "Declining cooling, comfort, or humidity control",
      "Corrosion, excessive noise, or aging components",
      "Mismatched indoor and outdoor equipment or parts limitations",
    ],
    provides: [
      "Existing-system and comfort review",
      "Duct, electrical, drain, and controls assessment",
      "Suitable replacement options explained clearly",
      "Removal, installation, commissioning, and operating guidance",
    ],
    equipment:
      "Replacement planning can include central split systems, compatible indoor and outdoor components, thermostats, ductwork, and condensate systems.",
    faqs: [
      [
        "How do I know whether to repair or replace my AC?",
        "Compare repair scope, equipment condition and age, parts availability, failure frequency, comfort performance, and future maintenance expectations.",
      ],
      [
        "Can only the outdoor unit be replaced?",
        "Sometimes, but compatibility between indoor and outdoor components matters. The existing system should be evaluated before that decision.",
      ],
      [
        "Should ductwork be checked before replacement?",
        "Yes. Duct condition and airflow can affect how a replacement system performs in the property.",
      ],
      [
        "Can a new system improve humidity control?",
        "A properly matched and installed system may improve comfort and humidity control, but results depend on the property and existing conditions.",
      ],
    ],
    related: ["ac-repair", "ac-installation", "preventive-maintenance"],
  },
  {
    slug: "mini-split-installation",
    title: "Mini-Split Installation in South Florida",
    eyebrow: "Mini-split installation",
    description:
      "Ductless cooling options for targeted comfort in rooms, additions, and light-commercial spaces.",
    intro:
      "Mini-splits can be useful where ductwork is limited or targeted cooling is needed. EngTech reviews capacity, placement, routing, drainage, electrical requirements, and zone compatibility before installation.",
    icon: Fan,
    situations: [
      "Room additions, guest rooms, garages, or home offices",
      "Spaces with inadequate or unavailable ductwork",
      "Single-room or targeted supplemental cooling",
      "Light-commercial rooms needing independent comfort control",
    ],
    provides: [
      "Single-zone or multi-zone planning",
      "Indoor and outdoor unit placement",
      "Line-set, drain, electrical, and communication routing",
      "Vacuum, startup, and commissioning checks",
    ],
    equipment:
      "Mini-split solutions may include single-zone and multi-zone ductless systems, with capacity and placement matched to the space.",
    faqs: [
      [
        "What is the difference between single-zone and multi-zone mini-splits?",
        "Single-zone systems serve one indoor unit; multi-zone systems connect multiple indoor units to a compatible outdoor unit.",
      ],
      [
        "Can a mini-split cool multiple rooms?",
        "A compatible multi-zone system can serve multiple rooms. Layout, capacity, and zone planning determine whether it is appropriate.",
      ],
      [
        "Where should the indoor unit be installed?",
        "Placement should support airflow, comfort, service access, and the room layout. EngTech reviews the space before recommending a location.",
      ],
      [
        "Do mini-splits require a drain line?",
        "Condensate management is part of installation planning. The exact drainage approach depends on the unit and installation conditions.",
      ],
    ],
    related: ["ac-installation", "ac-repair", "preventive-maintenance"],
  },
  {
    slug: "preventive-maintenance",
    title: "HVAC Preventive Maintenance in South Florida",
    eyebrow: "Preventive maintenance",
    description:
      "Routine HVAC inspection and care focused on airflow, drainage, controls, and developing issues.",
    intro:
      "Maintenance is an opportunity to inspect, clean where appropriate, observe system operation, and identify developing concerns. It cannot guarantee that a system will never break down, but it can create a clearer picture of equipment condition.",
    icon: ShieldCheck,
    situations: [
      "Seasonal system checks",
      "Drainage, airflow, or filter concerns",
      "Unusual vibration, noise, or operating changes",
      "Home and light-commercial equipment care",
    ],
    provides: [
      "Filter, airflow, and thermostat review",
      "Accessible coil, drain, and pan inspection",
      "Electrical, blower, and fan observations",
      "Operating temperature review and documented recommendations",
    ],
    equipment:
      "The checklist can cover central systems, split systems, mini-splits, thermostats, condensate management, and accessible components.",
    faqs: [
      [
        "How often should HVAC maintenance be scheduled?",
        "The appropriate interval depends on equipment, property conditions, use, and manufacturer guidance. EngTech can discuss a practical schedule after reviewing the system.",
      ],
      [
        "Does maintenance guarantee the system will not break down?",
        "No. Maintenance does not prevent every failure, but it can identify visible wear, operating changes, and developing concerns.",
      ],
      [
        "Why are drain lines important in South Florida?",
        "Condensate drainage is part of normal cooling operation. Blockage or pan concerns can affect the system and surrounding property.",
      ],
      [
        "Should a system be maintained even if it is cooling?",
        "Yes. A system can be cooling while still developing airflow, drainage, electrical, or wear concerns.",
      ],
    ],
    related: ["ac-repair", "ac-replacement", "commercial-hvac"],
  },
  {
    slug: "commercial-hvac",
    title: "Light-Commercial HVAC Services in South Florida",
    eyebrow: "Light-commercial HVAC",
    description:
      "Planned HVAC repair, maintenance, and replacement support for offices, retail spaces, and small commercial properties.",
    intro:
      "EngTech focuses on residential and light-commercial HVAC. For businesses, clear communication and documented equipment condition help owners and managers plan service without promising zero disruption.",
    icon: Building2,
    situations: [
      "Offices, retail spaces, and small commercial buildings",
      "Split systems, mini-splits, and rooftop units where applicable",
      "Airflow, controls, comfort, or operating concerns",
      "Planned maintenance, repair, or replacement discussions",
    ],
    provides: [
      "Property and equipment review",
      "Repair and replacement options",
      "Condition documentation and maintenance planning",
      "Communication around practical service scheduling",
    ],
    equipment:
      "Service may include light-commercial split systems, mini-splits, rooftop units where applicable, thermostats, controls, and related HVAC components.",
    faqs: [
      [
        "What types of commercial properties do you service?",
        "EngTech focuses on offices, retail spaces, and other small light-commercial properties alongside residential HVAC work.",
      ],
      [
        "Do you work on rooftop HVAC units?",
        "Rooftop units may be reviewed where applicable to a light-commercial property and the service request.",
      ],
      [
        "Can maintenance be scheduled for multiple systems?",
        "Multiple systems can be reviewed as part of a planned maintenance discussion based on the property and equipment.",
      ],
      [
        "What information is included after an inspection?",
        "EngTech can explain observed condition, operating concerns, and practical repair or replacement options based on the visit.",
      ],
    ],
    related: ["preventive-maintenance", "ac-repair", "ac-replacement"],
  },
];

export const servicePageMap = Object.fromEntries(
  servicePages.map((page) => [page.slug, page]),
) as Record<string, ServicePage>;
