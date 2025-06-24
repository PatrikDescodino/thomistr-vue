<template>
  <section class="py-20 section-dark-subtle">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4 vintage-heading">Co je v ceně zahrnuto</h2>
        <p class="text-lg text-gray-300">Každá služba zahrnuje profesionální konzultaci a péči o detail</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="text-center group"
        >
          <div class="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-4 vintage-frame group-hover:scale-110 transition-transform">
            <component :is="feature.icon" class="w-8 h-8 text-gold-400" />
          </div>
          <h3 class="font-semibold text-white mb-2 vintage-heading">{{ feature.title }}</h3>
          <p class="text-gray-300 text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ChatIcon = defineAsyncComponent(() => import('~/components/icons/ChatIcon.vue'))
const CheckIcon = defineAsyncComponent(() => import('~/components/icons/CheckIcon.vue'))
const ClockIcon = defineAsyncComponent(() => import('~/components/icons/ClockIcon.vue'))
const HeartIcon = defineAsyncComponent(() => import('~/components/icons/HeartIcon.vue'))

interface Feature {
  id: string
  title: string
  description: string
  icon: any
}

const features: Feature[] = [
  {
    id: 'consultation',
    title: 'Konzultace',
    description: 'Osobní konzultace o vašem požadovaném stylu',
    icon: ChatIcon
  },
  {
    id: 'quality',
    title: 'Kvalitní produkty',
    description: 'Používáme pouze prémiové značky',
    icon: CheckIcon
  },
  {
    id: 'time',
    title: 'Bez spěchu',
    description: 'Věnujeme vám dostatek času',
    icon: ClockIcon
  },
  {
    id: 'aftercare',
    title: 'Aftercare',
    description: 'Rady pro péči doma',
    icon: HeartIcon
  }
]
</script>
