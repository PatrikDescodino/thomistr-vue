<template>
  <section class="py-20 section-dark-subtle">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4 vintage-heading">Často kladené otázky</h2>
      </div>

      <div class="space-y-6">
        <div 
          v-for="faq in faqs" 
          :key="faq.id"
          class="border-2 border-white/30 hover:border-gold-400/60 rounded-lg p-6 bg-dark-800/50 relative overflow-hidden transition-all duration-300"
        >
          <!-- Golden gradient at top -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          
          <h3 class="text-lg font-semibold text-white mb-2 vintage-heading">
            {{ faq.question }}
          </h3>
          <p class="text-gray-300">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FAQ {
  id: string
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 'appointment',
    question: 'Je nutné se objednat předem?',
    answer: 'Je lepší se objednat předem, ale pokud budeme mít volnou kapacitu, jsme schopni Vás obsloužit rovnou na místě.'
  },
  {
    id: 'booking-advance',
    question: 'Jak dlouho dopředu mohu rezervovat?',
    answer: 'Neomezeně dopředu, ale může se stát že v daný den si budeme muset něco zařídit, proto je lepší maximálně 6 týdnů dopředu.'
  },
  {
    id: 'payment',
    question: 'Máte možnost platby kartou?',
    answer: 'Platba je možna jen v hotovosti na místě.'
  },
  {
    id: 'cancellation',
    question: 'Co když se mi termín nehodí?',
    answer: 'Termín si můžete přesunout či zrušit telefonicky nejdéle 24h před termínem.'
  },
  {
    id: 'children',
    question: 'Potřebuji ostříhat dítě, od jakého věku je to možné?',
    answer: 'Dětské střihy provádíme od 7 let, samozřejmě za doprovodu rodiče.'
  },
  {
    id: 'women',
    question: 'Můžu se k vám objednat, ikdyž jsem žena?',
    answer: 'Bohužel, to není možné. Náš Barber Shop je specializován POUZE na pánské střihy.'
  }
]
</script>
