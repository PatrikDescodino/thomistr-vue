# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern barbershop website for "Barber Shop Thomistr" located in Kralovice, Czech Republic. Built with Nuxt 3, TypeScript, and Tailwind CSS, featuring a dark vintage design with gold accents.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Generate static files
npm run generate

# Preview production build
npm run preview

# Install dependencies (also runs Nuxt prepare)
npm install
```

## Tech Stack & Architecture

- **Framework**: Nuxt 3 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: Headless UI Vue + custom components
- **Icons**: Heroicons Vue
- **Fonts**: Playfair Display (headings) + Merriweather (body)
- **Language**: Czech (cs)

## Project Structure

```
├── pages/               # File-based routing (Nuxt 3)
│   ├── index/          # Homepage components
│   ├── sluzby/         # Services page
│   ├── kontakt/        # Contact page
│   └── rezervace/      # Reservation page
├── components/
│   ├── ui/             # Reusable UI components
│   ├── shared/         # Shared components across pages
│   └── icons/          # Custom icon components
├── layouts/
│   └── default.vue     # Main layout with navigation & footer
├── assets/css/         # Global styles and Tailwind config
└── public/             # Static assets
```

## Design System

### Color Palette
- **Gold**: Primary brand color (`gold-400` to `gold-900`)
- **Dark**: Background and text (`dark-800`, `dark-900`, `dark-950`)
- **Gray**: Secondary elements (`gray-300` to `gray-950`)

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Merriweather (serif, readable)
- **Classes**: `.vintage-heading`, `.elegant-text`

### Component Classes
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost`
- **Sections**: `.section-dark`, `.section-dark-alt`, `.section-dark-subtle`
- **Cards**: `.service-card` with hover effects

## Key Features

### SEO & Meta
- Comprehensive meta tags in `nuxt.config.ts`
- Structured data (JSON-LD) for business info
- Czech language optimization
- Open Graph and Twitter Card support

### Reservation System
- External Reservio integration at `/rezervace`
- Iframe implementation: `https://barber-shop-thomistr.reservio.com`
- Fallback contact info for phone reservations

### Business Information
- **Address**: nám. Osvobození 84, 331 41 Kralovice
- **Phone**: +420 733 666 092
- **Email**: info@barbershopthomistr.cz
- **Hours**: Wed-Fri 08:00-17:00

## Component Architecture

### Page Components
- Pages are in directories with `index.vue` as main component
- Local components co-located with their parent pages
- Shared components in `/components/shared/`

### Layout System
- Single `default.vue` layout with sticky navigation
- Mobile-responsive navigation with hamburger menu
- Footer with business info and social links

### Custom Components
- `AnimatedHero.vue` - Homepage hero section
- `ServiceCard.vue` - Service display component
- `PageHero.vue` - Reusable page headers
- `CtaSection.vue` - Call-to-action sections

## Styling Conventions

- Dark theme with vintage barbershop aesthetic
- Custom Tailwind components in `assets/css/main.css`
- Responsive design with mobile-first approach
- Smooth transitions and hover effects
- Gold accent color for CTAs and highlights

## Important Notes

- All content is in Czech language
- Uses file-based routing (Nuxt 3 convention)
- TypeScript strict mode enabled
- No external API calls (static business website)
- Reservation handled by external Reservio service