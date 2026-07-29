import { ButtonLink } from "@/components/ui/button-link";

export function CTA() {
  return (
    <section className="bg-amber">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy">
            Ready for a clearer next step?
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
            Tell us about your HVAC system and we’ll help you find the right
            solution.
          </h2>
        </div>
        <ButtonLink
          href="/contact"
          variant="secondary"
          className="shrink-0 border-ink bg-ink text-white hover:bg-navy"
        >
          Request service
        </ButtonLink>
      </div>
    </section>
  );
}
