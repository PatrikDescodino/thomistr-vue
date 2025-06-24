<template>
  <section class="py-20 section-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Váš osobní barbershop v Kralovicích
          </h2>
          <p class="text-lg text-gray-300 mb-6">
            Vítejte v našem barbershopu v samotném srdci Kralovic. Jsme místem, kde se tradice klasického holičství snoubí s moderním stylem a přístupem. U nás nejde jen o střih – jde o celkový zážitek, po kterém odcházíte sebevědomější a maximálně spokojení.
          </p>
          <p class="text-lg text-gray-300 mb-8">
            Každému klientovi věnujeme individuální péči, protože víme, že každý detail se počítá. Pracujeme s prvotřídními produkty a nejnovějšími technikami, abychom zajistili perfektní výsledek při každé návštěvě. Vaše spokojenost je pro nás prioritou – a zároveň největší odměnou.
          </p>
          <div class="grid grid-cols-4 gap-4">
            <div 
              v-for="stat in stats" 
              :key="stat.id"
              class="text-center"
            >
              <div class="text-2xl font-bold text-gold-400 mb-2">{{ stat.value }}</div>
              <div class="text-gray-300 text-xs">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-w-4 aspect-h-3 bg-dark-800 rounded-lg overflow-hidden">
            <img 
              src="/images/interier.JPG" 
              alt="Interiér Barber Shop Thomistr" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  id: string
  value: string
  label: string
}

const stats: Stat[] = [
  {
    id: 'experience',
    value: '+5',
    label: 'let zkušeností'
  },
  {
    id: 'clients',
    value: '2000+',
    label: 'spokojených klientů'
  },
  {
    id: 'approach',
    value: '100%',
    label: 'individuální přístup'
  },
  {
    id: 'booking',
    value: '24/7',
    label: 'online rezervace'
  }
]
</script>
