<template>
  <section class="py-20 section-dark-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SharedServiceCard
          v-for="service in services"
          :key="service.id"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  id: string
  title: string
  description: string
  priceFrom: number
  priceTo: number
  duration: number
  image: string
  isPopular?: boolean
  hasImage?: boolean
}

const services: Service[] = [
  {
    id: 'classic-haircut',
    title: 'Klasický střih',
    description: 'Nadčasová elegance s moderním švihem. Precizní technika ostré břitvy v rukou mistra řemesla, doplněná o prémiové produkty. Pro muže, který ví, že pravý styl nikdy nevyjde z módy.',
    priceFrom: Math.ceil((580 * 0.7) / 10) * 10,
    priceTo: 580,
    duration: 45,
    image: '/images/high-fade.jpg',
    hasImage: true
  },
  {
    id: 'classic-haircut-beard',
    title: 'Klasický střih + úprava vousů',
    description: 'Dokonalá harmonie tradice a současnosti. Mistrovský střih vlasů a pečlivé tvarování vousů s použitím horkých ručníků a kvalitních olejů. Kompletní proměna gentlemana, který si zaslouží jen to nejlepší.',
    priceFrom: Math.ceil((780 * 0.7) / 10) * 10,
    priceTo: 780,
    duration: 70,
    image: '/images/dalsi_uprava vousu.JPG',
    isPopular: true,
    hasImage: true
  },
  {
    id: 'master-service',
    title: 'Majstršťyk služba',
    description: 'Vrchol barberského umění. Exkluzivní zážitek zahrnující vše od prémiového střihu po relaxační procedury a signature drink. Dokonalý únik od všedního dne v atmosféře naprostého luxusu.',
    priceFrom: Math.ceil((1480 * 0.7) / 10) * 10,
    priceTo: 1480,
    duration: 120,
    image: '/images/interier.JPG',
    hasImage: false
  },
  {
    id: 'beard-trim',
    title: 'Úprava vousů',
    description: 'Umění vousů povýšené na novou úroveň. Tradiční techniky s moderním přístupem, horké ručníky a prvotřídní péče. Vaše vousy jsou vaší vizitkou - nechte je promuvit.',
    priceFrom: Math.ceil((380 * 0.7) / 10) * 10,
    priceTo: 380,
    duration: 30,
    image: '/images/uprava_vousu.JPG',
    hasImage: true
  },
  {
    id: 'father-son',
    title: 'Táta a syn (7-12let)',
    description: 'Gentleman\'s heritage. Výjimečný okamžik, kdy otec zasvěcuje syna do rituálu péče o vzhled. Dva mistrovské střihy a jedna cenná lekce o tom, jak se stát pravým mužem.',
    priceFrom: Math.ceil((980 * 0.7) / 10) * 10,
    priceTo: 980,
    duration: 90,
    image: '/images/svetlo.jpg',
    hasImage: false
  },
  {
    id: 'hair-tattoo',
    title: 'Hair Tattoo',
    description: 'Tradiční řemeslo s uměleckým přesahem. Precizní vyholené vzory, které podtrhnou váš osobitý styl. Klasická technika s moderním nádechem pro muže, který se nebojí vystoupit z řady.',
    priceFrom: -1,
    priceTo: -1,
    duration: 90,
    image: '/images/palka.jpg',
    hasImage: false
  }
]
</script>
