<template>
  <section class="py-20 section-dark-alt">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-white mb-4">Rezervační systém</h2>
        <p class="text-lg text-gray-300">
          Vyberte si volný termín v našem online kalendáři
        </p>
      </div>
      
      <div class="text-center flex justify-center">
        <a 
          href="https://barber-shop-thomistr.reservio.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform inline-flex items-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          Vytvořit rezervaci
        </a>
      </div>
      
      <div class="mt-6 p-4 bg-gold-600/10 rounded-lg border-2 border-gold-600/30 hover:border-gold-600/50 transition-colors duration-300">
        <div class="flex items-start">
          <svg class="w-6 h-6 text-gold-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="text-sm font-semibold text-white mb-1 vintage-heading">Důležité informace</h3>
            <ul class="text-sm text-gray-300 space-y-1">
              <li v-for="info in importantInfo" :key="info.id">• {{ info.text }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ImportantInfo {
  id: string
  text: string
}

const importantInfo: ImportantInfo[] = [
  {
    id: 'cancellation',
    text: 'Rezervaci můžete zrušit nejpozději 2 hodiny před termínem'
  },
  {
    id: 'delay',
    text: 'V případě zpoždění více než 15 minut si vyhrazujeme právo zrušit rezervaci'
  },
  {
    id: 'first-visit',
    text: 'Při první návštěvě doporučujeme dorazit 5 minut před termínem'
  }
]

// Remove Reservio script loading since we're using our own button
// onMounted(() => {
//   if (!document.querySelector('script[src="https://cdn.reservio.com/widget/button-bundle.js"]')) {
//     const script = document.createElement('script')
//     script.src = 'https://cdn.reservio.com/widget/button-bundle.js'
//     script.async = true
//     document.head.appendChild(script)
//   }
// })
</script>