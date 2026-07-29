import type { Metadata } from "next";
import { Award, Eye, Handshake, Shield } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EngTech HVAC Solutions USA and our local approach to residential and light-commercial HVAC service in South Florida.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Shield,
    title: "Safety first",
    text: "Every plan and field decision begins with protecting people, property, and operations.",
  },
  {
    icon: Eye,
    title: "Clear communication",
    text: "You get direct answers, visible next steps, and practical recommendations.",
  },
  {
    icon: Award,
    title: "Technical care",
    text: "We look for the underlying issue and explain the options before work begins.",
  },
  {
    icon: Handshake,
    title: "Ownership",
    text: "We stay accountable from the first call through the completed service visit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EngTech"
        title="A local HVAC partner for South Florida."
        description="EngTech HVAC Solutions USA helps homeowners and local businesses make informed HVAC decisions and keep their spaces comfortable."
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our purpose"
            title="Make HVAC decisions feel clear."
            description="We explain the problem, outline practical options, and help you choose the right next step for your property."
          />
          <div className="border-l-4 border-amber bg-frost p-8 sm:p-10">
            <p className="text-2xl font-medium leading-10 text-navy">
              Good HVAC service starts with listening, careful work, and clear
              next steps.
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-steel">
              The EngTech approach
            </p>
          </div>
        </div>
      </section>
      <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What guides us"
            title="Standards that matter on every visit."
            light
          />
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-ink p-7">
                <Icon className="size-8 text-amber" />
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
