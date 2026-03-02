# Gurupranesh J Kulkarni — Cybersecurity Portfolio

A modern, minimal, dark-themed, production-ready cybersecurity portfolio built with Next.js App Router.

## Overview

This portfolio presents:

- Red Teaming focus and methodology
- Active Directory exploitation labs
- Web pentesting project work
- AI-driven cybersecurity research direction

The site is fully responsive, SEO-ready, and prepared for deployment on Vercel.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn-style reusable UI primitives
- Framer Motion (subtle reveal animations)
- Lucide React icons

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  navbar.tsx
  hero.tsx
  hobbies.tsx
  about.tsx
  skills.tsx
  projects.tsx
  labs.tsx
  certifications.tsx
  experience.tsx
  ctf.tsx
  blog-preview.tsx
  contact.tsx
  footer.tsx
  initial-loader.tsx

lib/
  auth.ts
  db.ts
  models.ts
  data.ts
  utils.ts

public/
  profile.jpg

types/
  index.ts
```

## Sections Included

- Sticky blurred navbar with section anchors
- Hero with branding, CTA buttons, and animated security console
- First-load cinematic hacker-style loading scene
- About + education highlights
- Hobbies section
- Skills card grid
- Projects card grid with GitHub links
- Labs section + `/labs` coming-soon route
- CTF/Platform section (HackTheBox + TryHackMe)
- Experience timeline-style layout
- Certifications badge list
- Writeups preview (coming soon)
- Contact links + functional Formspree contact form
- Footer

## Admin Backend (Projects / Writeups / Certifications)

This project now includes an admin backend with login and content management, suitable for Vercel deployment.

- Admin login page: `/admin/login`
- Admin dashboard: `/admin/dashboard`
- Manage content blocks for:
  - Projects
  - Writeups
  - Certifications

Public sections automatically fetch this managed content via API routes.

### Required Environment Variables

Set these in `.env.local` and in your Vercel Project Settings:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>?retryWrites=true&w=majority
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change-this-password
ADMIN_JWT_SECRET=change-this-super-long-random-secret
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mkovlnab
```

Recommended deployment stack:

- MongoDB Atlas (free tier) for database
- Vercel for hosting

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build & Production Run

Build:

```bash
npm run build
```

If you face Windows-specific readlink issues locally, use:

```bash
npm run build:win
```

Start production server:

```bash
npm run start
```

## Contact Form Setup (View Messages)

The contact form is wired to Formspree so you can receive and view viewer messages.

1. Create a free form at Formspree and copy your endpoint (`https://formspree.io/f/...`).
2. Add environment variable in local `.env.local` and in Vercel:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

This project currently includes a fallback endpoint in code:

- `https://formspree.io/f/mkovlnab`

Using environment variables is still recommended for long-term configuration.

3. Redeploy after setting the variable on Vercel.

You can view all incoming messages in your Formspree dashboard.

## Notes for Windows Environment

This repo includes a small compatibility preload script for specific Windows/Node readlink behavior:

- `scripts/readlink-compat.cjs`

It is used by the `build:win` script in `package.json`.

## Personalization Checklist

Before deploying, update the following:

- Contact and platform links in `lib/data.ts`
- Email in `lib/data.ts`
- Metadata base URL in `app/layout.tsx`

## GitHub + Vercel Deployment

Initialize and push:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

Deploy with Vercel:

1. Open Vercel dashboard
2. Import the GitHub repository
3. Framework preset: Next.js
4. Keep default build settings
5. Deploy

## Performance & SEO

Implemented:

- Semantic section structure
- Metadata + OpenGraph configuration
- Optimized image handling via Next Image
- Clean typography and spacing
- Minimal, performant UI interactions

For best Lighthouse scores, ensure final production image assets are compressed and all external links are valid.

---

Built for Gurupranesh J Kulkarni — Cybersecurity Student @ RVCE (CSE-CY'28)