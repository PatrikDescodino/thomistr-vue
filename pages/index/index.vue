<template>
  <div>
    <AnimatedHero />
    <ServicesPreview />
    <AboutSection />
    <SharedCtaSection />
  </div>
</template>

<script setup lang="ts">
// Import local components
import AnimatedHero from './AnimatedHero.vue'
import ServicesPreview from './ServicesPreview.vue'
import AboutSection from './AboutSection.vue'

// SEO Head
useHead({
  title: 'Barber Shop Thomistr | Pánský holič Kralovice',
  meta: [
    {
      name: 'description',
      content: 'Barber Shop Thomistr v Kralovicích – kvalitní pánské střihy, úprava vousů a přátelský přístup. Rezervuj si svůj fresh cut ještě dnes.'
    },
    {
      name: 'keywords',
      content: 'barber Kralovice, pánský střih, holič Kralovice, vousy, barbershop'
    },
    {
      property: 'og:title',
      content: 'Barber Shop Thomistr | Pánský holič Kralovice'
    },
    {
      property: 'og:description',
      content: 'Kvalitní střih, přátelský přístup a rezervace online. Navštiv nás v Kralovicích.'
    }
  ]
})
</script>
