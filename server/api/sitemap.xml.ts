export default defineEventHandler(async (event) => {
  // Base URL - změň na produkční doménu
  const baseUrl = 'https://barbershopthomistr.cz'
  
  // Statické stránky s prioritami a frekvencí změn
  const staticRoutes = [
    { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/sluzby', priority: '0.9', changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/rezervace', priority: '0.8', changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/kontakt', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() }
  ]

  // Generování XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Nastavení správných headers pro XML
  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'max-age=3600') // Cache na 1 hodinu
  
  return sitemap
})