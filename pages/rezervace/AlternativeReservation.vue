<template>
  <section class="py-20 section-dark">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4 vintage-heading">Alternativní způsoby rezervace</h2>
        <p class="text-lg text-gray-300">
          Pokud preferujete osobní kontakt, můžete rezervovat i jinými způsoby
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="method in reservationMethods" 
          :key="method.id"
          class="border-2 border-white/30 hover:border-gold-400 rounded-lg p-6 bg-gray-900/50 relative overflow-hidden text-center hover:transform hover:scale-105 transition-all duration-300"
        >
          <!-- Golden gradient at top -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          
          <div class="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-6 vintage-frame border border-gold-400/30">
            <component :is="method.icon" class="w-8 h-8 text-gold-400" />
          </div>
          <h3 class="text-xl font-bold text-white mb-4 vintage-heading">{{ method.title }}</h3>
          <p class="text-gray-300 mb-6">
            {{ method.description }}
          </p>
          
          <a
            :href="method.link"
            :target="method.external ? '_blank' : undefined"
            :rel="method.external ? 'noopener noreferrer' : undefined"
            :class="method.buttonClass"
          >
            {{ method.buttonText }}
          </a>
          
          <p v-if="method.additionalInfo" class="text-sm text-gray-400 mt-4" v-html="method.additionalInfo"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const PhoneIcon = defineAsyncComponent(() => import('~/components/icons/PhoneIcon.vue'))
const LocationIcon = defineAsyncComponent(() => import('~/components/icons/LocationIcon.vue'))

interface ReservationMethod {
  id: string
  title: string
  description: string
  icon: any
  link: string
  external?: boolean
  buttonText: string
  buttonClass: string
  additionalInfo?: string
}

const reservationMethods: ReservationMethod[] = [
  {
    id: 'phone',
    title: 'Telefonní rezervace',
    description: 'Zavolejte nám přímo a domluvte si termín osobně s naším týmem',
    icon: PhoneIcon,
    link: 'tel:+420733666092',
    external: false,
    buttonText: '+420 733 666 092',
    buttonClass: 'btn-primary',
    additionalInfo: 'Středa, Pátek: 8:00 - 17:00<br>Soboty dle domluvy'
  },
  {
    id: 'walk-in',
    title: 'Přijďte osobně',
    description: 'Navštivte nás přímo v salonu. Obsloužíme vás, pokud máme volnou kapacitu',
    icon: LocationIcon,
    link: 'https://maps.app.goo.gl/TMAkwLDMJRtXZmB68',
    external: true,
    buttonText: 'Zobrazit adresu',
    buttonClass: 'btn-secondary',
    additionalInfo: 'nám. Osvobození 84<br>331 41 Kralovice'
  }
]
</script>