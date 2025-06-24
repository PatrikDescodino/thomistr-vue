<template>
  <div>
    <!-- Rezervační systém -->
    <ReservationSystem />

    <!-- Alternativní rezervace -->
    <AlternativeReservation />

    <!-- Rychlý přehled služeb -->
    <ServicesOverview />
  </div>
</template>

<script setup lang="ts">
// Import local components
import ReservationSystem from './ReservationSystem.vue'
import AlternativeReservation from './AlternativeReservation.vue'
import ServicesOverview from './ServicesOverview.vue'

// SEO Head
useHead({
  title: 'Rezervace | Barber Shop Thomistr Kralovice',
  meta: [
    {
      name: 'description',
      content: 'Online rezervace termínu v Barber Shop Thomistr. Rychlé a jednoduché objednání střihu nebo úpravy vousů v Kralovicích.'
    },
    {
      name: 'keywords',
      content: 'rezervace barber Kralovice, online objednání, termín střih, rezervační systém holič'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Rezervace | Barber Shop Thomistr'
    },
    {
      property: 'og:description',
      content: 'Rezervujte si termín online nebo zavolejte na +420 733 666 092. Rychlé a jednoduché objednání.'
    },
    {
      property: 'og:url',
      content: 'https://barbershopthomistr.cz/rezervace'
    },
    {
      property: 'og:image',
      content: 'https://barbershopthomistr.cz/og-image.jpg'
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'Rezervace | Barber Shop Thomistr'
    },
    {
      name: 'twitter:description',
      content: 'Rezervujte si termín online nebo zavolejte na +420 733 666 092. Rychlé a jednoduché objednání.'
    },
    {
      name: 'twitter:image',
      content: 'https://barbershopthomistr.cz/og-image.jpg'
    }
  ]
})
</script>