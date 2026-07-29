# Sprint 0: Project Foundation

## Scope completed

- Corrected EngTech HVAC Solutions USA positioning to South Florida residential and light-commercial HVAC.
- Centralized verified business details and service areas.
- Replaced the mailto form with a validated Resend lead endpoint and thank-you flow.
- Added privacy-conscious analytics helpers and CI quality gates.
- Updated local SEO metadata, HVACBusiness structured data, robots, and sitemap.

## Lead architecture

`components/forms/lead-form.tsx` submits validated fields to `app/api/leads/route.ts`. The API applies size limits, Zod validation, normalization, honeypot filtering, safe HTML escaping, and Resend delivery. No customer data is written to logs or a database.

## Analytics

Events are pushed only when a `window.dataLayer` already exists. Events contain no personal information. Google Tag Manager can initialize the data layer in a later sprint; no tracking IDs or scripts are present yet.

## Validation

Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, and `pnpm build` locally and in CI. The build does not require Resend configuration because missing email configuration is handled at request time.

## Deployment checklist

- [ ] Confirm `engtechusa.com` domain ownership.
- [ ] Verify the sender domain in Resend.
- [ ] Configure `LEAD_FROM_EMAIL`.
- [ ] Configure `RESEND_API_KEY`.
- [ ] Configure environment variables in Vercel.
- [ ] Connect GitHub to Vercel.
- [ ] Verify form delivery end to end.
- [ ] Verify mobile layout.
- [ ] Add GTM later.
- [ ] Test Google Ads conversion later.
- [ ] Add stronger rate limiting before high-volume advertising.
- [ ] Decide whether the repository should return to private visibility after integrations are configured.

## Known limitations

The lead form has lightweight abuse protection only. A production advertising campaign should add stronger rate limiting and monitoring. Sender verification and runtime environment configuration remain manual deployment steps.
