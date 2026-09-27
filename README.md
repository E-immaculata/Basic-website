# Remedy Connect prototype

A responsive Vite, React, and Tailwind CSS prototype for The Remedy Foundation's Nigeria pilot.

## Run locally

Prerequisites: Node.js and pnpm.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Vite. To build the production files, run `pnpm run build`.

## Prototype flows

- Five role previews: Foundation Admin, Guardian, Mentor, Volunteer, and Donor.
- Admin child directory, application review, direct child referral, mentor matching, sessions, progress reports, events, donation ledger, impact summaries, and CSV export.
- Guardian household progress, support application status, document selection, events, and messages.
- Mentor assigned caseload, session scheduling, progress reporting, and care-team messages.
- Volunteer events, sign-up, hours logging, and certificate threshold.
- Donor one-time or monthly giving, receipts, and anonymized impact updates.
- Demo registration, sign-in, password reset, profile editing, notifications, and FAQ support.

Switch roles using **Preview as** in the sidebar. Form submissions update sample state in the browser for a walkthrough.

## Prototype limits

This is a front-end demo using sample records. Changes are not saved to a server. Firebase Authentication, PostgreSQL, document storage, Paystack, Stripe, push/email notifications, AI recommendations, and production access controls are not connected. File selections remain local and no payments are processed. The role screens demonstrate intended privacy boundaries, but are not a substitute for server-side authorization.
