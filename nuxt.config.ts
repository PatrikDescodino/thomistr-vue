export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Barber Shop Thomistr | Pánský holič Kralovice',
      meta: [
        {
          name: 'description',
          content: 'Barber Shop Thomistr v Kralovicích – kvalitní pánské střihy, úprava vousů a přátelský přístup. Rezervuj si svůj fresh cut ještě dnes.'
        },
        // Favicon and app meta
        { name: 'theme-color', content: '#d97706' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Thomistr' },
        { name: 'application-name', content: 'Barber Shop Thomistr' },
        { name: 'msapplication-TileColor', content: '#d97706' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        
        // Open Graph meta tags
        { property: 'og:site_name', content: 'Barber Shop Thomistr' },
        { property: 'og:type', content: 'business.business' },
        { property: 'og:title', content: 'Barber Shop Thomistr | Pánský holič Kralovice' },
        { property: 'og:description', content: 'Kvalitní pánské střihy, úprava vousů a přátelský přístup v Kralovicích. Rezervuj si svůj fresh cut ještě dnes!' },
        { property: 'og:url', content: 'https://barbershopthomistr.cz' },
        { property: 'og:image', content: 'https://barbershopthomistr.cz/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Barber Shop Thomistr - Kvalitní holičské práce v Kralovicích' },
        { property: 'og:locale', content: 'cs_CZ' },
        
        // Facebook specific
        { property: 'fb:app_id', content: '123456789' }, // Změň na skutečné FB App ID
        
        // Twitter Card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@thomistr_barber' }, // Změň na skutečný Twitter handle
        { name: 'twitter:creator', content: '@thomistr_barber' },
        { name: 'twitter:title', content: 'Barber Shop Thomistr | Pánský holič Kralovice' },
        { name: 'twitter:description', content: 'Kvalitní pánské střihy, úprava vousů a přátelský přístup v Kralovicích. Rezervuj si svůj fresh cut ještě dnes!' },
        { name: 'twitter:image', content: 'https://barbershopthomistr.cz/og-image.png' },
        { name: 'twitter:image:alt', content: 'Barber Shop Thomistr - Kvalitní holičské práce v Kralovicích' },
        
        // Business/Local SEO
        { name: 'geo.region', content: 'CZ-PL' },
        { name: 'geo.placename', content: 'Kralovice' },
        { name: 'geo.position', content: '49.9833;13.5000' },
        { name: 'ICBM', content: '49.9833, 13.5000' },
        
        // Additional meta tags
        { name: 'author', content: 'Barber Shop Thomistr' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      link: [
        // Favicons - všechny v /public/ root
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#d97706' }
      ]
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            'heading': ['Playfair Display', 'serif'],
            'body': ['Merriweather', 'serif'],
            'sans': ['Merriweather', 'serif']
          },
          colors: {
            gray: {
              850: '#1a202c',
              900: '#171923', 
              950: '#0d1117'
            },
            dark: {
              800: '#1a202c',
              900: '#171923',
              950: '#0d1117'
            }
          }
        }
      }
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
})