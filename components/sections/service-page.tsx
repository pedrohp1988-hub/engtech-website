import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PhoneLink } from "@/components/ui/contact-link";
import { CTA } from "@/components/sections/cta";
import { servicePageMap, type ServicePage } from "@/content/service-pages";
import { serviceAreas, siteConfig } from "@/lib/site-config";

export function ServicePageView({ page }: { page: ServicePage }) {
  const Icon = page.icon;
  const related = page.related
    .map((slug) => servicePageMap[slug])
    .filter(Boolean);
  return (
    <>
      <section className="relative overflow-hidden bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-slate-300"
            >
              <Link href="/" className="hover:text-amber">
                Home
              </Link>
              <span className="mx-2 text-amber">/</span>
              <Link href="/services" className="hover:text-amber">
                Services
              </Link>
              <span className="mx-2 text-amber">/</span>
              {page.eyebrow}
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber">
              {page.eyebrow} · South Florida
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request service</ButtonLink>
              <PhoneLink
                phone={siteConfig.phone}
                location={`service_${page.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                <Phone className="size-4" /> Call now {siteConfig.phoneDisplay}
              </PhoneLink>
            </div>
          </div>
          <div className="grid min-h-64 place-items-center rounded-3xl border border-white/15 bg-gradient-to-br from-navy via-navy/80 to-amber/15 p-10 shadow-2xl">
            <div className="text-center">
              <span className="mx-auto grid size-20 place-items-center rounded-2xl border border-amber/40 bg-amber/10">
                <Icon className="size-10 text-amber" />
              </span>
              <p className="mt-6 text-xl font-semibold">
                Residential &amp; light-commercial HVAC
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-300">
                <MapPin className="size-4 text-amber" /> Serving South Florida
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl text-xl leading-9 text-steel">{page.intro}</p>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-navy">
                When this service may help
              </h2>
              <ul className="mt-6 grid gap-4">
                {page.situations.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <Check className="mt-1 size-5 shrink-0 text-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-frost p-7">
              <h2 className="text-2xl font-semibold text-navy">
                What EngTech provides
              </h2>
              <ul className="mt-6 grid gap-4">
                {page.provides.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-steel">
                    <Check className="mt-1 size-5 shrink-0 text-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-frost px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
              System context
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy">
              A clear plan for the equipment and space.
            </h2>
          </div>
          <p className="text-lg leading-8 text-steel">{page.equipment}</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
            Our process
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">
            Understand the concern, then choose the next step.
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-4">
            {[
              "Tell us what is happening",
              "We review the request",
              "Options are explained",
              "Work is scheduled after approval",
            ].map((step, index) => (
              <li key={step} className="rounded-xl border border-slate-200 p-6">
                <span className="text-xs font-bold tracking-[0.2em] text-amber">
                  0{index + 1}
                </span>
                <p className="mt-5 font-semibold leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Helpful answers about {page.eyebrow}.
          </h2>
          <div className="mt-8 grid gap-3">
            {page.faqs.map(([question, answer]) => (
              <details key={question} className="border-b border-white/15 py-5">
                <summary className="cursor-pointer text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber">
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

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-navy">
            Serving South Florida
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-steel">
            EngTech provides residential and light-commercial HVAC service
            across {serviceAreas.join(", ")}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-frost px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold text-navy">
              Related HVAC services
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-5 font-semibold text-navy transition hover:-translate-y-1 hover:border-amber hover:shadow-lift"
                >
                  {item.title}
                  <ArrowRight className="ml-2 inline size-4 text-amber transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
