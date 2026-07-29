import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { EmailLink, PhoneLink } from "@/components/ui/contact-link";
import { EngTechLogo } from "@/components/brand/engtech-logo";
import { navigation, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1.2fr]">
        <div>
          <EngTechLogo white className="h-12 w-auto" />
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
            Company
          </p>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
            Connect
          </p>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            <PhoneLink
              phone={siteConfig.phone}
              location="footer"
              className="flex gap-3 hover:text-white"
            >
              <Phone className="size-5 text-amber" />
              {siteConfig.phoneDisplay}
            </PhoneLink>
            <EmailLink
              email={siteConfig.email}
              location="footer"
              className="flex gap-3 hover:text-white"
            >
              <Mail className="size-5 text-amber" />
              {siteConfig.email}
            </EmailLink>
            <p className="flex gap-3">
              <MapPin className="size-5 shrink-0 text-amber" />
              {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-400">
        Copyright {new Date().getFullYear()} EngTech HVAC Solutions USA. All
        rights reserved.
      </div>
    </footer>
  );
}
