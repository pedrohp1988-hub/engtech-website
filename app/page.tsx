import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Snowflake,
  Wind,
} from "lucide-react";
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

const brands = [
  "Carrier",
  "Trane",
  "Rheem",
  "Goodman",
  "Lennox",
  "Daikin",
  "Mitsubishi",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/hero-hvac-technician.png"
          alt="HVAC technician inspecting an outdoor air-conditioning system"
          fill
          priority
          sizes="100vw"
          className="contrast-105 object-cover object-center opacity-85 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="absolute -right-36 top-0 h-full w-2/3 -skew-x-12 bg-gradient-to-br from-navy/20 via-navy to-amber/10" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-ink/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber backdrop-blur-sm">
              <Snowflake className="size-4" />
              Residential & light-commercial HVAC • South Florida
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              We repair, install, and replace{" "}
              <span className="text-amber">air conditioning systems.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Practical HVAC service for South Florida homes and
              light-commercial properties — from a no-cooling call to a planned
              system upgrade.
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
          <div className="relative hidden min-h-[360px] lg:block">
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-navy/80 to-amber/10 p-8 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                <span>Comfort system</span>
                <Snowflake className="size-5 text-amber" />
              </div>
              <div className="mt-16 flex items-center gap-5">
                <div className="grid size-24 place-items-center rounded-full border border-amber/50 bg-amber/10">
                  <Wind className="size-12 text-amber" />
                </div>
                <div>
                  <p className="text-3xl font-semibold">Cool air.</p>
                  <p className="mt-1 text-slate-300">Clear next steps.</p>
                </div>
              </div>
              <div className="mt-16 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-amber" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-slate-400">
                <span>Residential</span>
                <span>Light-commercial</span>
              </div>
            </div>
          </div>
          <div className="hidden border-l border-white/15 pl-10 lg:hidden">
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
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-lift"
              >
                <h2 className="text-lg font-semibold">{point.title}</h2>
                <p className="mt-2 leading-7 text-steel">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Equipment familiarity"
            title="We service all major HVAC brands."
            description="Brand names are shown for familiarity only. Service options depend on the specific system and property."
          />
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group grid min-h-24 place-items-center rounded-xl border border-slate-200 bg-white px-3 text-center text-lg font-bold tracking-tight text-navy shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-lift"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-frost px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Coming soon"
            title="Google Reviews coming soon"
            description="We are preparing this space for verified customer feedback. No reviews or ratings are displayed until they are available."
          />
          <div className="grid size-28 place-items-center rounded-full border-2 border-dashed border-amber bg-white text-center text-xs font-bold uppercase tracking-wider text-navy">
            Verified
            <br />
            feedback
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our services"
            title="Repair, installation, and replacement — clearly explained."
            description="From a no-cooling call to a planned replacement, EngTech brings clear recommendations and careful service to every job."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, summary, icon: Icon }) => (
              <Link
                key={slug}
                href={`/services#${slug}`}
                className="group bg-white p-8 transition duration-300 hover:-translate-y-1 hover:bg-frost hover:shadow-lift"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-navy/5 transition group-hover:bg-amber/15">
                  <Icon className="size-8 text-amber" />
                </span>
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
