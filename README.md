# Thomistr Vue - Modern Barbershop Website

Moderní webová stránka pro Barber Shop Thomistr v Kralovicích, postavená na Nuxt 3 s TypeScriptem a Tailwind CSS.

## Technologie

- **Framework:** Nuxt 3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Components:** Headless UI

## Funkcionalita

- ✅ Responzivní design pro všechna zařízení
- ✅ Moderní a čistý vzhled
- ✅ SEO optimalizace s strukturovanými daty
- ✅ Online rezervační systém (Reservio iframe)
- ✅ Kontaktní formulář
- ✅ Přehled služeb s cenami
- ✅ Interaktivní navigace
- ✅ Accessibility podpora

## Struktura stránek

- **Domů** (`/`) - Hero sekce, přehled služeb, call-to-action
- **Služby** (`/sluzby`) - Detailní seznam služeb s cenami
- **Kontakt** (`/kontakt`) - Kontaktní údaje, mapa, formulář, FAQ
- **Rezervace** (`/rezervace`) - Online rezervační systém

## Instalace a spuštění

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev

# Build pro produkci
npm run build

# Generování statických souborů
npm run generate
```

## SEO a Performance

- Strukturovaná data (JSON-LD)
- Optimalizované meta tagy
- Open Graph protokol
- Lazy loading obrázků
- Optimalizované fonty (Google Fonts)
- Responzivní obrázky

## Rezervační systém

Projekt využívá externí rezervační systém Reservio:
- URL: `https://barber-shop-thomistr.reservio.com`
- Implementováno jako iframe na stránce `/rezervace`
- Alternativní rezervace telefonicky: +420 733 666 092

## Kontaktní údaje

- **Adresa:** nám. Osvobození 84, 331 41 Kralovice
- **Telefon:** +420 733 666 092
- **Email:** info@barbershopthomistr.cz

## Deployment

Projekt je připraven pro deployment na:
- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify

## Licence

© 2024 Barber Shop Thomistr. Všechna práva vyhrazena.
