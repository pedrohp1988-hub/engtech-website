import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PhoneLink } from "@/components/ui/contact-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request received",
  description: "Your EngTech HVAC service request was received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="bg-frost px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle2
          className="mx-auto size-16 text-amber"
          aria-hidden="true"
        />
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-amber">
          Request received
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Thanks for reaching out.
        </h1>
        <p className="mt-6 text-lg leading-8 text-steel">
          Your request is with the EngTech team. We will review the details and
          follow up about next steps. For urgent service needs, call us
          directly.
        </p>
        <PhoneLink
          phone={siteConfig.phone}
          location="thank-you"
          className="mt-8 inline-flex text-lg font-bold text-navy underline decoration-amber decoration-2 underline-offset-4"
        >
          {siteConfig.phoneDisplay}
        </PhoneLink>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            View services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
