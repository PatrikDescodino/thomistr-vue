<template>
  <section class="py-20 section-dark-subtle">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4 vintage-heading">Rychlý přehled služeb</h2>
        <p class="text-lg text-gray-300">
          Připomenutí našich hlavních služeb a orientačních cen
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="border-2 border-white/30 hover:border-gold-400/60 rounded-lg p-6 bg-gray-900/50 relative overflow-hidden text-center transition-all duration-300"
        >
          <!-- Golden gradient at top -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          
          <h3 class="text-lg font-semibold text-white mb-3 vintage-heading">{{ service.name }}</h3>
          <p class="text-sm text-gray-300 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <NuxtLink to="/sluzby" class="text-gold-400 hover:text-gold-300 font-medium transition-colors">
          Zobrazit všechny služby a ceny →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ServiceQuick {
  id: string
  name: string
  description: string
}

const services: ServiceQuick[] = [
  {
    id: 'classic-haircut',
    name: 'Klasický střih',
    description: 'Nadčasová elegance s moderním švihem pro muže, který ví, že pravý styl nikdy nevyjde z módy.'
  },
  {
    id: 'classic-haircut-beard',
    name: 'Klasický střih + úprava vousů',
    description: 'Dokonalá harmonie tradice a současnosti s pečlivým tvarováním vousů pro kompletní proměnu gentlemana.'
  },
  {
    id: 'master-service',
    name: 'Majstršťyk služba',
    description: 'Vrchol barberského umění zahrnující vše od prémiového střihu po relaxační procedury v atmosféře luxusu.'
  },
  {
    id: 'beard-trim',
    name: 'Úprava vousů',
    description: 'Umění vousů povýšené na novou úroveň s tradičními technikami a prvotřídní péčí.'
  },
  {
    id: 'father-son',
    name: 'Táta a syn (7-12let)',
    description: 'Výjimečný okamžik, kdy otec zasvěcuje syna do rituálu péče o vzhled.'
  },
  {
    id: 'hair-tattoo',
    name: 'Hair Tattoo',
    description: 'Tradiční řemeslo s uměleckým přesahem pro muže, který se nebojí vystoupit z řady.'
  }
]
</script>
