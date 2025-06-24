<template>
  <section class="py-20 bg-gradient-to-r from-gold-600 to-gold-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        {{ title }}
      </h2>
      <p class="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
        {{ description }}
      </p>
      <NuxtLink :to="buttonLink" class="btn-secondary text-lg px-8 py-4">
        {{ buttonText }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

withDefaults(defineProps<Props>(), {
  title: 'Připraven na svůj fresh cut?',
  description: 'Rezervuj si termín ještě dnes a vyzkoušej naše profesionální služby. Těšíme se na tebe!',
  buttonText: 'Rezervovat nyní',
  buttonLink: '/rezervace'
})
</script>
