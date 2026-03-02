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
  about.tsx
  skills.tsx
  projects.tsx
  certifications.tsx
  experience.tsx
  ctf.tsx
  blog-preview.tsx
  contact.tsx
  footer.tsx

lib/
  data.ts
  utils.ts

public/
  profile.jpg

types/
  index.ts
```

## Sections Included

- Sticky blurred navbar with section anchors
- Hero with branding, CTA buttons, and profile image
- About summary
- Skills card grid
- Projects card grid with GitHub links
- CTF/Platform section (HackTheBox + TryHackMe)
- Experience timeline-style layout
- Certifications badge list
- Blog preview cards with placeholder routes
- Contact links + frontend-only contact form
- Footer

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

## Notes for Windows Environment

This repo includes a small compatibility preload script for specific Windows/Node readlink behavior:

- `scripts/readlink-compat.cjs`

It is used by the `build:win` script in `package.json`.

## Personalization Checklist

Before deploying, update the following:

- `public/profile.jpg` with your final portrait
- Contact and platform links in `lib/data.ts`
- Email in `lib/data.ts`
- Resume file (add `public/resume.pdf`)
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