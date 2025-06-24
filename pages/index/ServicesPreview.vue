<template>
  <section class="py-20 section-dark-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Naše služby
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Specializujeme se na kvalitní pánské střihy a úpravu vousů s důrazem na detail a osobní přístup.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="text-center p-6 bg-dark-800 rounded-lg hover:bg-dark-700 transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/10"
        >
          <div class="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <component :is="service.icon" class="w-8 h-8 text-gold-400" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ service.title }}</h3>
          <p class="text-gray-300">{{ service.description }}</p>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/sluzby" class="btn-primary">
          Zobrazit všechny služby
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// Lazy load icons
const ScissorsIcon = defineAsyncComponent(() => import('~/components/icons/ScissorsIcon.vue'))
const CheckCircleIcon = defineAsyncComponent(() => import('~/components/icons/CheckCircleIcon.vue'))
const HeartIcon = defineAsyncComponent(() => import('~/components/icons/HeartIcon.vue'))

interface Service {
  id: string
  title: string
  description: string
  icon: any
}

const services: Service[] = [
  {
    id: 'haircut',
    title: 'Pánský střih',
    description: 'Klasické i moderní střihy přizpůsobené vašemu stylu a typu obličeje.',
    icon: ScissorsIcon
  },
  {
    id: 'beard',
    title: 'Úprava vousů',
    description: 'Profesionální tvarování a úprava vousů pro dokonalý vzhled.',
    icon: CheckCircleIcon
  },
  {
    id: 'skincare',
    title: 'Péče o pleť',
    description: 'Relaxační procedury a ošetření pleti pro kompletní zážitek.',
    icon: HeartIcon
  }
]
</script>
