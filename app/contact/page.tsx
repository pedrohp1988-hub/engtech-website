import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { PageHero } from "@/components/sections/page-hero";
import { EmailLink, PhoneLink } from "@/components/ui/contact-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EngTech HVAC Solutions USA for AC repair, installation, maintenance, and light-commercial HVAC service in South Florida.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Comfort help for your South Florida property."
        description="Tell us what your home or light-commercial property needs. We will review your request and follow up with next steps."
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold">Start a conversation</h2>
            <p className="mt-4 leading-7 text-steel">
              For urgent AC service, call us directly. For planned work, send a
              request with the details below.
            </p>
            <div className="mt-9 grid gap-6">
              <PhoneLink
                phone={siteConfig.phone}
                location="contact"
                className="flex gap-4"
              >
                <Phone className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Phone
                  </p>
                  <p className="mt-1 font-semibold">
                    {siteConfig.phoneDisplay}
                  </p>
                </div>
              </PhoneLink>
              <EmailLink
                email={siteConfig.email}
                location="contact"
                className="flex gap-4"
              >
                <Mail className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Email
                  </p>
                  <p className="mt-1 font-semibold">{siteConfig.email}</p>
                </div>
              </EmailLink>
              <div className="flex gap-4">
                <MapPin className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Service area
                  </p>
                  <p className="mt-1 font-semibold">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
