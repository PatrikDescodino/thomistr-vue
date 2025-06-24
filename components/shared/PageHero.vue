<template>
  <section class="bg-gradient-to-br from-black via-gray-950 to-black text-white py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 vintage-heading">
        <span v-if="highlightText" class="text-gold-400">{{ highlightText }}</span>
        {{ title }}
      </h1>
      <p v-if="description" class="text-xl text-gray-200 max-w-3xl mx-auto">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  highlightText?: string
  description?: string
}

defineProps<Props>()
</script>
