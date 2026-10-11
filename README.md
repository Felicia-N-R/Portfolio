# Felicia’s portfolio

A responsive personal portfolio built with Next.js, React, TypeScript, and CSS. The contact form posts to a server-side route, validates the submission, and sends it using Resend.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Enable contact email

1. Create a Resend account and an API key.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_EMAIL`.
3. For production, verify a sending domain with Resend and set `CONTACT_FROM_EMAIL` to an address on that domain.
4. Restart the development server after changing environment variables.

Keep `.env.local` private. Without the two required email settings, the contact form responds with a clear setup message instead of pretending the email was delivered.

## Personalize

Edit `app/page.tsx` for the introduction and areas of interest, `app/certificates/page.tsx` for certificate details, `components/Hero.tsx` for the opening section, and `app/globals.css` for the visual style. Replace `public/felicia-portrait.jpeg` to change the hero photo. Certificate PDFs and their preview images live in `public/certificates/`.
