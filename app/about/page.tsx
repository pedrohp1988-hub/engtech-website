import type { Metadata } from "next";
import { Award, Eye, Handshake, Shield } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the engineering-led team and operating principles behind EngTech HVAC Solutions.",
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
    title: "Radical clarity",
    text: "Clients get direct answers, visible progress, and documentation they can trust.",
  },
  {
    icon: Award,
    title: "Technical rigor",
    text: "We solve root causes with disciplined engineering—not temporary workarounds.",
  },
  {
    icon: Handshake,
    title: "Ownership",
    text: "We stay accountable from the first call through verified completion.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EngTech"
        title="Engineering judgment. Field-tested execution."
        description="EngTech HVAC Solutions was built to close the gap between sophisticated facility needs and dependable service delivery."
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our purpose"
            title="Make complex HVAC work feel controlled."
            description="Our teams coordinate technical, operational, and commercial priorities into one clear path forward. Whether managing a planned upgrade or an urgent outage, we bring structure to the work and confidence to every decision."
          />
          <div className="border-l-4 border-amber bg-frost p-8 sm:p-10">
            <p className="text-2xl font-medium leading-10 text-navy">
              “The best service partner is the one who sees the whole system,
              communicates clearly, and owns the outcome.”
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-steel">
              The EngTech operating principle
            </p>
          </div>
        </div>
      </section>
      <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What guides us"
            title="Standards that scale with the challenge."
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
