# Social Media Meta Tagy - Checklist

## ✅ Implementované meta tagy

### Open Graph (Facebook, LinkedIn, WhatsApp)
- ✅ `og:site_name` - název webu
- ✅ `og:type` - typ obsahu (business.business)
- ✅ `og:title` - název stránky
- ✅ `og:description` - popis stránky
- ✅ `og:url` - URL stránky
- ✅ `og:image` - hlavní obrázek
- ✅ `og:image:width` - šířka obrázku (1200px)
- ✅ `og:image:height` - výška obrázku (630px)
- ✅ `og:image:alt` - alt text obrázku
- ✅ `og:locale` - jazyk (cs_CZ)

### Twitter Cards
- ✅ `twitter:card` - typ karty (summary_large_image)
- ✅ `twitter:site` - Twitter účet webu
- ✅ `twitter:creator` - Twitter účet autora
- ✅ `twitter:title` - název pro Twitter
- ✅ `twitter:description` - popis pro Twitter
- ✅ `twitter:image` - obrázek pro Twitter
- ✅ `twitter:image:alt` - alt text obrázku

### Lokální SEO
- ✅ `geo.region` - region (CZ-PL)
- ✅ `geo.placename` - město (Kralovice)
- ✅ `geo.position` - GPS souřadnice
- ✅ `ICBM` - GPS souřadnice

## 📋 Co je potřeba udělat

### 1. Vytvořit Open Graph obrázky
Potřebuješ vytvořit tyto obrázky v `/public/`:

**Hlavní OG obrázek:**
- `og-image.jpg` (1200x630px)
- Design: Logo + "Barber Shop Thomistr" + "Kralovice"
- Barvy: zlatá (#d97706) + černá (#0d1117)

### 2. Aktualizovat social media údaje
V `nuxt.config.ts` změň:
- `fb:app_id` - na skutečné Facebook App ID
- `twitter:site` a `twitter:creator` - na skutečné Twitter handle

### 3. Testování
Po vytvoření obrázků otestuj na:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 4. Doporučené rozměry obrázků
- **Open Graph**: 1200x630px (ideální pro Facebook, LinkedIn)
- **Twitter Card**: 1200x630px (summary_large_image)
- **Instagram**: čtvercový formát 1080x1080px

### 5. Design tipy pro OG obrázek
- **Hlavní text**: "Barber Shop Thomistr"
- **Podtext**: "Kralovice | Pánské střihy | +420 733 666 092"
- **Vizuály**: Logo, nůžky, hřeben, vintage prvky
- **Barvy**: Zlatá + černá (brand colors)
- **Font**: Playfair Display (vintage heading)

## 🎯 Výsledek
Po dokončení bude web perfektně sdílený na:
- ✅ Facebook
- ✅ Instagram
- ✅ Twitter/X
- ✅ LinkedIn
- ✅ WhatsApp
- ✅ Telegram
- ✅ Discord

Všechny technické části jsou hotové! 🚀