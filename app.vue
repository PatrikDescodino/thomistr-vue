<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global meta configuration
useHead({
  htmlAttrs: {
    lang: 'cs'
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap'
    }
  ]
})

// Structured data for organization
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Barbershop',
        name: 'Barber Shop Thomistr',
        image: 'https://barbershopthomistr.cz/logo.svg',
        description: 'Barber Shop Thomistr nabízí profesionální střihy a úpravu vousů v přátelském prostředí v Kralovicích.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'nám. Osvobození 84',
          addressLocality: 'Kralovice',
          postalCode: '33141',
          addressCountry: 'CZ'
        },
        telephone: '+420733666092',
        priceRange: 'CZK',
        url: 'https://barbershopthomistr.cz',
        openingHours: [
          'We 08:00-17:00',
          'Fr 08:00-17:00'
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 49.9833,
          longitude: 13.5000
        }
      })
    }
  ]
})
</script>