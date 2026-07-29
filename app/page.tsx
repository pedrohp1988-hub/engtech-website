import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Map,
  ShieldCheck,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";

const proof = [
  { value: "24/7", label: "Emergency response", icon: Clock3 },
  { value: "50", label: "States supported", icon: Map },
  { value: "100%", label: "Accountability", icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="absolute -right-36 top-0 h-full w-2/3 -skew-x-12 bg-gradient-to-br from-navy/20 via-navy to-amber/10" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-amber">
              Commercial HVAC • Nationwide
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Building performance,{" "}
              <span className="text-amber">engineered.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              One accountable partner for commercial HVAC engineering, field
              service, controls, and multi-site facility programs across the
              USA.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request service</ButtonLink>
              <ButtonLink href="/services" variant="light">
                Explore capabilities
              </ButtonLink>
            </div>
          </div>
          <div className="hidden border-l border-white/15 pl-10 lg:block">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              The EngTech standard
            </p>
            <ul className="mt-7 space-y-5">
              {[
                "Engineering-led solutions",
                "Clear communication at every stage",
                "Safety and quality without shortcuts",
                "Measurable lifecycle value",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="size-5 text-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3">
          {proof.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-5 border-b border-slate-200 px-6 py-8 last:border-0 sm:border-b-0 sm:border-r"
            >
              <Icon className="size-8 text-amber" />
              <div>
                <p className="text-2xl font-bold text-ink">{value}</p>
                <p className="text-sm text-steel">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Integrated capabilities"
            title="One team. Every phase of your HVAC lifecycle."
            description="From early planning through emergency response, EngTech connects engineering discipline with practical field execution."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, summary, icon: Icon }) => (
              <Link
                key={slug}
                href={`/services#${slug}`}
                className="group bg-white p-7 transition hover:bg-frost"
              >
                <Icon className="size-9 text-amber" />
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-steel">{summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy">
                  Learn more{" "}
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-frost px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Built for complexity"
            title="Consistency across every site, system, and stakeholder."
            description="We bring enterprise-level process to real-world facility challenges: standardized scopes, documented decisions, performance reporting, and a single point of accountability."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "National accounts",
              "Mission-critical facilities",
              "Portfolio programs",
              "Capital replacements",
            ].map((item, index) => (
              <div key={item} className="bg-white p-6 shadow-lift">
                <span className="text-xs font-bold text-amber">
                  0{index + 1}
                </span>
                <p className="mt-8 text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
