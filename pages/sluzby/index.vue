<template>
  <div>
    <SharedPageHero 
      title="služby"
      highlight-text="Naše"
      description="Objevte širokou škálu profesionálních služeb pro péči o vaše vlasy a vousy. Každá služba je prováděna s maximální péčí a přesností."
    />
    <ServicesGrid />
    <IncludedFeatures />
    <SharedCtaSection 
      title="Vyberte si svou službu"
      description="Rezervujte si termín online a vyberte si ze široké nabídky našich služeb"
      button-text="Rezervovat termín"
    />
  </div>
</template>

<script setup lang="ts">
// Import local components
import ServicesGrid from './ServicesGrid.vue'
import IncludedFeatures from './IncludedFeatures.vue'

// SEO Head
useHead({
  title: 'Služby | Barber Shop Thomistr Kralovice',
  meta: [
    {
      name: 'description',
      content: 'Kompletní přehled služeb Barber Shop Thomistr - pánské střihy, úprava vousů, péče o pleť a více. Kvalitní služby za fair ceny v Kralovicích.'
    },
    {
      name: 'keywords',
      content: 'pánský střih cena, úprava vousů Kralovice, holení břitvou, barbershop služby, péče o pleť muži'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Služby | Barber Shop Thomistr'
    },
    {
      property: 'og:description',
      content: 'Profesionální pánské střihy, úprava vousů a další služby za fair ceny. Podívejte se na naši kompletní nabídku.'
    },
    {
      property: 'og:url',
      content: 'https://barbershopthomistr.cz/sluzby'
    },
    {
      property: 'og:image',
      content: 'https://barbershopthomistr.cz/images/high-fade.jpg'
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'Služby | Barber Shop Thomistr'
    },
    {
      name: 'twitter:description',
      content: 'Profesionální pánské střihy, úprava vousů a další služby za fair ceny v Kralovicích.'
    },
    {
      name: 'twitter:image',
      content: 'https://barbershopthomistr.cz/images/high-fade.jpg'
    }
  ]
})
</script>
