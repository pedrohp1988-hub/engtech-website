import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneLink } from "@/components/ui/contact-link";
import { services } from "@/content/services";
import { serviceAreas, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "South Florida HVAC Services",
  description:
    "AC repair, installation, replacement, maintenance, mini-split, controls, indoor air quality, and ductwork services for South Florida homes and light-commercial properties.",
  alternates: { canonical: "/" },
};

const trustPoints = [
  {
    title: "Clear communication",
    text: "Straightforward explanations and practical next steps.",
  },
  {
    title: "Technical care",
    text: "Thoughtful service for the equipment and property you rely on.",
  },
  {
    title: "Local service",
    text: "Focused on homeowners and businesses across South Florida.",
  },
  {
    title: "Right-sized support",
    text: "Residential and light-commercial HVAC help under one roof.",
  },
];

const faqs = [
  [
    "What should I do if my AC is not cooling?",
    "Contact EngTech with the symptoms, property city, and any recent changes you have noticed. We can review the request and explain service options. Avoid opening electrical panels or attempting refrigerant work yourself.",
  ],
  [
    "How do I decide between AC repair and replacement?",
    "The right choice depends on the system condition, repair scope, equipment age, comfort needs, and property. We can explain the practical options after reviewing the system.",
  ],
  [
    "What does preventive maintenance include?",
    "Maintenance can include system checks, cleaning needs, airflow observations, and identifying developing issues. The exact scope depends on the equipment and property.",
  ],
  [
    "Do you service mini-splits?",
    "Yes. EngTech provides mini-split installation and repair for residential and light-commercial applications.",
  ],
  [
    "Which South Florida cities do you serve?",
    `Primary service areas include ${serviceAreas.join(", ")}. Nearby South Florida requests can be reviewed as well.`,
  ],
  [
    "Do you work with both homes and businesses?",
    "Yes. EngTech serves residential properties and light-commercial spaces with AC repair, installation, replacement, maintenance, controls, indoor air quality, and ductwork services.",
  ],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="absolute -right-36 top-0 h-full w-2/3 -skew-x-12 bg-gradient-to-br from-navy/20 via-navy to-amber/10" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-amber">
              Residential & light-commercial HVAC • South Florida
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Comfort help, <span className="text-amber">done clearly.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              AC repair, installation, replacement, maintenance, mini-splits,
              controls, indoor air quality, and ductwork for local homes and
              businesses.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request service</ButtonLink>
              <PhoneLink
                phone={siteConfig.phone}
                location="hero"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
              >
                Call {siteConfig.phoneDisplay}
              </PhoneLink>
            </div>
          </div>
          <div className="hidden border-l border-white/15 pl-10 lg:block">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              The local EngTech standard
            </p>
            <ul className="mt-7 space-y-5">
              {[
                "Straightforward recommendations",
                "Careful work in your home or business",
                "South Florida service coverage",
                "A clear path from problem to solution",
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

      <section className="border-b border-slate-200 bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why EngTech"
            title="A better service experience starts with clarity."
            description="You deserve to understand what is happening with your HVAC system and what your options are. That is the standard we bring to every request."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="border-t-2 border-amber pt-5"
              >
                <h2 className="text-lg font-semibold">{point.title}</h2>
                <p className="mt-2 leading-7 text-steel">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our services"
            title="HVAC support for the work your property needs."
            description="From a no-cooling call to a planned replacement, EngTech brings clear recommendations and careful service to every job."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, summary, icon: Icon }) => (
              <Link
                key={slug}
                href={`/services#${slug}`}
                className="group bg-white p-7 transition hover:bg-frost"
              >
                <Icon className="size-9 text-amber" />
                <h2 className="mt-8 text-xl font-semibold">{title}</h2>
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
            eyebrow="Where we work"
            title="Local service across South Florida."
            description={`EngTech serves ${serviceAreas.join(", ")}, and nearby South Florida communities.`}
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {serviceAreas.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-white px-4 py-4 text-sm font-semibold"
              >
                <MapPin className="size-4 shrink-0 text-amber" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="A simple path from HVAC concern to next step."
            description="Every request is reviewed on its own details. Service is scheduled after the options are understood and approved."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              "Tell us what is happening",
              "We review the request",
              "Service options are explained",
              "Work is scheduled after approval",
            ].map((step, index) => (
              <li key={step} className="border border-slate-200 p-7">
                <span className="text-xs font-bold tracking-[0.2em] text-amber">
                  0{index + 1}
                </span>
                <p className="mt-8 text-lg font-semibold leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Useful answers before you reach out."
            description="If your question is not covered here, send us the details and we will help clarify the next step."
            light
          />
          <div className="mt-10 grid gap-3">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group border-b border-white/15 py-5"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber">
                  {question}
                </summary>
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur sm:hidden">
        <ButtonLink href="/contact" className="min-h-11 flex-1 px-3">
          Request service
        </ButtonLink>
        <PhoneLink
          phone={siteConfig.phone}
          location="mobile_sticky"
          className="ml-2 inline-flex min-h-11 flex-1 items-center justify-center rounded-sm border border-ink px-3 text-xs font-bold uppercase tracking-[0.1em] text-ink"
        >
          Call {siteConfig.phoneDisplay}
        </PhoneLink>
      </div>
    </>
  );
}
