# EngTech HVAC Website Architecture

## Principles

- Server Components are the default; client code is isolated to interactive UI.
- Site configuration, content, and domain types are separated from rendering.
- Shared page patterns live in `components`; route composition stays in `app`.
- Every public route owns canonical metadata and can be statically rendered.
- Service and future city pages should be data-driven, not duplicated by hand.

## Scaling service and city pages

Add structured entries under `content/` and expose them through dynamic App Router segments such as:

- `app/services/[service]/page.tsx`
- `app/locations/[state]/[city]/page.tsx`

Use `generateStaticParams` for known routes, shared validation in `lib/`, and typed content models in `types/`. Keep locality-specific proof, licensing, coverage, and contact details explicit; do not create thin or duplicated SEO pages.

## Integration boundaries

The contact form currently uses an email handoff so the foundation has no backend dependency. Before launch, connect it to an approved CRM or transactional form endpoint, add server-side validation, bot protection, consent tracking, and monitoring.
