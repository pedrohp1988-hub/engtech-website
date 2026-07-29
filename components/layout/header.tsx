"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigation, siteConfig } from "@/lib/site-config";
import { PhoneLink } from "@/components/ui/contact-link";
import { EngTechLogo } from "@/components/brand/engtech-logo";
import { servicePages } from "@/content/service-pages";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="EngTech HVAC home"
        >
          <EngTechLogo className="hidden sm:block" />
          <EngTechLogo compact className="sm:hidden" />
        </Link>
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <PhoneLink
          phone={siteConfig.phone}
          location="header"
          className="hidden items-center gap-2 text-sm font-bold text-amber sm:flex"
        >
          <Phone className="size-4" /> {siteConfig.phoneDisplay}
        </PhoneLink>
        <button
          type="button"
          className="grid size-11 place-items-center lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="hidden border-t border-white/10 bg-navy/60 sm:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300 sm:px-8">
          <span>Serving South Florida</span>
          <span className="hidden md:inline">
            Residential &amp; light-commercial HVAC
          </span>
          <span className="hidden lg:inline">
            Repair · Installation · Replacement
          </span>
          <PhoneLink
            phone={siteConfig.phone}
            location="header_trust_bar"
            className="text-amber"
          >
            {siteConfig.phoneDisplay}
          </PhoneLink>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-base font-semibold hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-3">
              <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-amber">
                HVAC services
              </p>
              <div className="mt-1 grid gap-1 sm:grid-cols-2">
                {servicePages.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-white/5"
                  >
                    {service.eyebrow}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
