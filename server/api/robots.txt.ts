export default defineEventHandler(async (event) => {
  // Robots.txt obsah optimalizovaný pro SEO
  const robotsContent = `# Robots.txt pro Barber Shop Thomistr
# Generováno automaticky

User-agent: *
Allow: /

# Sitemap odkazy
Sitemap: https://barbershopthomistr.cz/api/sitemap.xml

# Blokování vývojových a systémových souborů
Disallow: /_nuxt/
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/

# Optimalizace pro hlavní crawlery
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 3

# Host directive pro canonical
Host: https://barbershopthomistr.cz`

  // Nastavení správných headers
  setHeader(event, 'Content-Type', 'text/plain')
  setHeader(event, 'Cache-Control', 'max-age=86400') // Cache na 24 hodin
  
  return robotsContent
})