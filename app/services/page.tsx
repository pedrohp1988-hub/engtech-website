import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { services } from "@/content/services";

const serviceRouteBySlug: Record<string, string> = {
  "mini-splits": "mini-split-installation",
};

export const metadata: Metadata = {
  title: "HVAC Services in South Florida",
  description:
    "AC repair, installation, replacement, maintenance, mini-split, controls, indoor air quality, ductwork, and light-commercial HVAC service in South Florida.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="HVAC services for South Florida homes and businesses."
        description="Clear, practical help for AC repair, replacement, installation, maintenance, and indoor comfort."
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {services.map(
            ({ slug, title, description, icon: Icon, highlights }, index) => (
              <Link
                key={slug}
                href={`/${serviceRouteBySlug[slug] ?? slug}`}
                className="group block cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
              >
                <article
                  id={slug}
                  className="h-full scroll-mt-28 border border-slate-200 p-7 shadow-lift transition duration-300 group-hover:-translate-y-1 group-hover:border-amber/60 group-hover:shadow-xl sm:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid size-14 place-items-center bg-frost">
                      <Icon className="size-7 text-amber" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
                  <p className="mt-4 leading-7 text-steel">{description}</p>
                  <ul className="mt-6 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm font-semibold text-navy"
                      >
                        <Check className="size-4 text-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Link>
            ),
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
