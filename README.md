# EngTech HVAC Solutions USA

South Florida residential and light-commercial HVAC foundation built with Next.js 15, TypeScript, Tailwind CSS, and the App Router.

## Local setup

Requires Node.js 22 and pnpm 9. Copy `.env.example` to `.env.local`, fill the Resend values, then run:

```bash
pnpm install
pnpm dev
```

Quality and production commands:

```bash
pnpm format
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

## Environment variables

Public defaults are provided for `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE`, and `NEXT_PUBLIC_EMAIL`. Server-only lead delivery requires `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, and a verified `LEAD_FROM_EMAIL`. Never commit `.env`, `.env.local`, API keys, or tokens.

## Lead capture

The contact form posts to `/api/leads`, validates with Zod, and sends through Resend. Verify the sender domain before enabling production delivery. Stronger rate limiting should be added before a high-volume advertising campaign.

## Analytics

Typed helpers support `form_start`, `form_error`, `generate_lead`, `phone_click`, and `email_click` through an existing `window.dataLayer`. Google Tag Manager can be connected later; no IDs or tracking scripts are included now.

## Service area

EngTech serves Hollywood, Fort Lauderdale, Pembroke Pines, Miramar, Davie, Plantation, Hallandale Beach, Dania Beach, Sunrise, Aventura, and nearby South Florida communities.

## Branch workflow

Work on feature branches, push the branch, and open a pull request into `main`. CI runs formatting, linting, type checking, and the production build for pull requests and pushes to `main`.

See `docs/SPRINT-0.md` for deployment steps, decisions, and limitations.
