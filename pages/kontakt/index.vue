<template>
  <div>
    <SharedPageHero 
      title="a lokace"
      highlight-text="Kontakt"
      description="Najdete nás přímo v centru Kralovic. Přijďte si užít prvotřídní péči do našeho moderního barbershopu – těšíme se na vaši návštěvu!"
    />
    <ContactInfo />
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
// Import local components
import ContactInfo from './ContactInfo.vue'
import FaqSection from './FaqSection.vue'

// SEO Head
useHead({
  title: 'Kontakt | Barber Shop Thomistr Kralovice',
  meta: [
    {
      name: 'description',
      content: 'Kontaktní údaje Barber Shop Thomistr v Kralovicích. Adresa: nám. Osvobození 84, telefon: +420 733 666 092. Rezervace online nebo telefonicky.'
    },
    {
      name: 'keywords',
      content: 'kontakt barbershop Kralovice, adresa holič, telefon rezervace, otevírací doba Thomistr'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Kontakt | Barber Shop Thomistr'
    },
    {
      property: 'og:description',
      content: 'Najdete nás v centru Kralovic. Rezervace online nebo na telefonu +420 733 666 092.'
    },
    {
      property: 'og:url',
      content: 'https://barbershopthomistr.cz/kontakt'
    },
    {
      property: 'og:image',
      content: 'https://barbershopthomistr.cz/images/interier.JPG'
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'Kontakt | Barber Shop Thomistr'
    },
    {
      name: 'twitter:description',
      content: 'Najdete nás v centru Kralovic. Rezervace online nebo na telefonu +420 733 666 092.'
    },
    {
      name: 'twitter:image',
      content: 'https://barbershopthomistr.cz/images/interier.JPG'
    }
  ]
})
</script>
