# Ashutosh Choudhari – Portfolio

Modern personal site built with Next.js 15, TypeScript, Tailwind CSS, and a curated component system to highlight AI, data science, and consulting work.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Production Build & Deployment](#production-build--deployment)
- [Customization Guide](#customization-guide)
- [Available Scripts](#available-scripts)
- [License](#license)

## Overview
This repository powers the single-page portfolio hosted at `4ashutosh98.github.io`. The landing experience stitches together a sticky header, storytelling hero, skills matrix, dynamic project grid, Tableau dashboards, and multiple contact touchpoints. Components live under `components/` and are rendered via the App Router entry point `app/page.tsx`.

## Features
- **Story-driven sections** – Hero, About, Skills, Projects, Work Experience, Education, Tableau, and Contact blocks render in sequence for a cohesive narrative.
- **Rich project gallery** – `components/projects.tsx` lists AI, ML, LLM, and analytics initiatives with tech badges, links, and optional demos.
- **Interactive contact form** – `components/get-in-touch.tsx` uses EmailJS to deliver inquiries without running a server.
- **Tableau embeds** – `components/tableau.tsx` lazy-loads multiple public dashboards with responsive fallbacks.
- **Utility components** – A sticky header, footer, and back-to-top button keep navigation accessible on long pages.
- **Shadcn-inspired UI kit** – Components inside `components/ui/` plus Tailwind utilities allow rapid design tweaks.

## Tech Stack
- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) and `tailwindcss-animate`
- [shadcn/ui](https://ui.shadcn.com/) patterns with Radix UI primitives
- [Lucide](https://lucide.dev/) icons
- [EmailJS](https://www.emailjs.com/) for serverless form delivery
- [Tableau Public](https://public.tableau.com/) embedded analytics

## Project Structure
```text
.
├─ app/
│  ├─ globals.css        # Tailwind base styles
│  └─ page.tsx           # Renders all portfolio sections
├─ components/
│  ├─ hero.tsx           # Landing hero + CTAs
│  ├─ about.tsx          # Bio and mission
│  ├─ skills.tsx         # Skills and certifications grid
│  ├─ projects.tsx       # Showcase cards (edit data here)
│  ├─ work-experience.tsx
│  ├─ education.tsx
│  ├─ tableau.tsx        # Tableau iframe embeds
│  ├─ get-in-touch.tsx   # EmailJS-powered form
│  ├─ footer.tsx / back-to-top.tsx
│  └─ ui/                # Reusable shadcn components
├─ public/               # Images, resume PDF, favicons
├─ tailwind.config.ts
├─ next.config.mjs
├─ package.json
└─ README.md
```

## Getting Started
1. **Install prerequisites**
	- Node.js 18.18+ (Next.js 15 requirement)
	- npm 10+ (ships with Node 20, but works with Node 18)
2. **Clone and install**
	```bash
	git clone https://github.com/4ashutosh98/4ashutosh98.github.io.git
	cd 4ashutosh98.github.io
	npm install
	```
3. **Configure environment** (see [Environment Variables](#environment-variables)).

## Environment Variables
The contact form depends on EmailJS public keys. Create a `.env.local` file in the repo root with:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
```

Restart `npm run dev` after editing environment files. Without these values, the form displays an alert and aborts submission.

## Local Development
```bash
npm run dev
```

This starts the dev server on `http://localhost:3000/` with hot reloading. Lint errors are shown in the terminal but will not block builds because `next.config.mjs` is configured to ignore them during production builds.

## Production Build & Deployment
```bash
npm run build
npm run start
```

- `npm run build` generates an optimized Next.js build.
- `npm run start` serves the production bundle locally.
- `npm run export` creates a static export inside `out/` if you want to host on GitHub Pages or any static hosting provider.

Deploy options:
1. **Vercel** – Drop the repo in Vercel, set the EmailJS environment variables, and deploy via the default Next.js preset.
2. **GitHub Pages** – Run `npm run export`, push the `out` directory to the `gh-pages` branch, and point Pages to that branch.

## Customization Guide
- **Branding & copy** – Update Hero, About, and Footer text in their respective files under `components/`.
- **Skills & certifications** – Modify the arrays inside `components/skills.tsx`.
- **Projects list** – Add, remove, or reorder entries in the `projects` array inside `components/projects.tsx`. Each entry supports `title`, `description`, `technologies`, `duration`, `image`, `github`, and `demo` keys.
- **Experience & education** – Curated via arrays in `components/work-experience.tsx` and `components/education.tsx`.
- **Tableau dashboards** – Edit the `visualizations` array in `components/tableau.tsx` with your own Tableau Public workbook IDs.
- **Contact details** – Update phone, email, and location inside `components/get-in-touch.tsx`. Remember to align the visible contact info with your EmailJS template fields.
- **Styling** – Tailwind design tokens are defined in `tailwind.config.ts`. For theme toggling or additional palettes, extend the CSS variables in `app/globals.css`.

## Available Scripts
- `npm run dev` – Start the Next.js dev server.
- `npm run lint` – Run Next.js/ESLint checks.
- `npm run build` – Produce a production build.
- `npm run start` – Serve the production build locally.
- `npm run export` – Output a static site to `out/`.

## License
Distributed under the terms of the MIT License. See [LICENSE](LICENSE) for details.
