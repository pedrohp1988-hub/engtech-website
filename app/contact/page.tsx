import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EngTech HVAC Solutions for commercial HVAC service, projects, maintenance, and emergency support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s solve the HVAC challenge in front of you."
        description="Tell us what your facility needs. Our team will connect you with the right technical and field resources."
      />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold">Start a conversation</h2>
            <p className="mt-4 leading-7 text-steel">
              For active equipment failures, call our response line. For planned
              work, use the details below.
            </p>
            <div className="mt-9 grid gap-6">
              <a href={`tel:${siteConfig.phone}`} className="flex gap-4">
                <Phone className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Phone
                  </p>
                  <p className="mt-1 font-semibold">
                    {siteConfig.phoneDisplay}
                  </p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex gap-4">
                <Mail className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Email
                  </p>
                  <p className="mt-1 font-semibold">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex gap-4">
                <Clock className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Response
                  </p>
                  <p className="mt-1 font-semibold">
                    Emergency support available 24/7
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="size-6 text-amber" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Coverage
                  </p>
                  <p className="mt-1 font-semibold">
                    Commercial facilities nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            className="grid gap-5 bg-frost p-7 sm:grid-cols-2 sm:p-10"
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
          >
            {[
              ["Full name", "name", "text"],
              ["Work email", "email", "email"],
              ["Phone number", "phone", "tel"],
              ["Company", "company", "text"],
            ].map(([label, name, type]) => (
              <label key={name} className="grid gap-2 text-sm font-semibold">
                {label}
                <input
                  required
                  name={name}
                  type={type}
                  className="min-h-12 border border-slate-300 bg-white px-4 outline-none focus:border-amber focus:ring-2 focus:ring-amber/20"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              How can we help?
              <textarea
                required
                name="message"
                rows={6}
                className="border border-slate-300 bg-white p-4 outline-none focus:border-amber focus:ring-2 focus:ring-amber/20"
              />
            </label>
            <button
              type="submit"
              className="min-h-12 bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-navy sm:col-span-2"
            >
              Send request
            </button>
            <p className="text-xs leading-5 text-steel sm:col-span-2">
              By submitting, you agree to be contacted about your service
              request. Do not include sensitive information.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
