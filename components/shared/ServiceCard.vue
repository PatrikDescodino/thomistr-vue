<template>
  <div class="service-card hover:transform hover:scale-105 transition-all duration-300 group relative border-2 border-white/30 hover:border-gold-400 rounded-lg p-6 bg-dark-800/50 overflow-hidden">
    <!-- Golden gradient at top - smaller -->
    <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
    
    <div v-if="isPopular" class="absolute -top-2 -right-2 bg-gold-400 text-dark-900 px-3 py-1 rounded-full text-xs font-bold uppercase vintage-heading z-10">
      {{ popularText }}
    </div>
    
    <div class="aspect-w-16 aspect-h-9 bg-dark-800 rounded-lg overflow-hidden mb-6 vintage-frame relative border-2 border-white/20">
      <!-- Image placeholder for missing images -->
      <div v-if="!hasImage" class="w-full h-48 bg-dark-700 flex items-center justify-center">
        <div class="text-center">
          <div class="text-gray-400 text-4xl mb-2">✕</div>
          <div class="text-gray-400 text-sm font-semibold">Obrázek nyní není k dispozici</div>
        </div>
      </div>
      
      <!-- Actual image -->
      <img 
        v-else
        :src="image" 
        :alt="title"
        class="w-full h-48 object-cover filter sepia-[0.3] saturate-75"
      />
    </div>
    
    <div class="p-2">
      <h3 class="text-2xl font-bold text-white mb-3 vintage-heading">{{ title }}</h3>
      <p class="text-gray-300 mb-4 leading-relaxed">
        {{ description }}
      </p>
      <div class="flex items-center justify-between">
        <div v-if="priceFrom === -1 && priceTo === -1">
          <span class="text-3xl font-bold text-gold-400 vintage-heading">Dle domluvy</span>
        </div>
        <div v-else-if="priceFrom === 0 && priceTo === 0">
          <span class="text-3xl font-bold text-gold-400 vintage-heading">Zdarma</span>
        </div>
        <div v-else-if="priceFrom && priceTo && priceFrom !== priceTo">
          <span class="text-3xl font-bold text-gold-400 vintage-heading">{{ priceFrom }} - {{ priceTo }} Kč</span>
        </div>
        <div v-else-if="originalPrice">
          <span class="text-3xl font-bold text-gold-400 vintage-heading">{{ price }} Kč</span>
          <span class="text-gray-500 line-through ml-2">{{ originalPrice }} Kč</span>
        </div>
        <span v-else class="text-3xl font-bold text-gold-400 vintage-heading">{{ price || priceTo }} Kč</span>
        <span class="text-gray-400 flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ duration }} min
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  price?: number
  priceFrom?: number
  priceTo?: number
  duration: number
  image: string
  isPopular?: boolean
  popularText?: string
  originalPrice?: number
  hasImage?: boolean
}

withDefaults(defineProps<Props>(), {
  isPopular: false,
  popularText: 'OBLÍBENÉ',
  hasImage: true
})
</script>