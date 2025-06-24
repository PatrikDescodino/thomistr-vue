<template>
  <section 
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 transition-opacity duration-2000 ease-out"
    :class="{ 'opacity-100': showLandingPage, 'opacity-0': !showLandingPage }"
  >
    <!-- Background Images Slideshow -->
    <div 
      v-if="showContent" 
      class="absolute inset-0 z-0"
    >
      <div 
        v-for="(image, index) in images" 
        :key="image"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
      >
        <img 
          :src="`/images/${image}`" 
          :alt="`Barber Shop Thomistr`"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-dark-900/70"></div>
      </div>
    </div>

    <!-- Flying Images Animation -->
    <div 
      v-if="!animationComplete"
      class="absolute inset-0 z-10"
    >
      <div 
        v-for="(image, index) in images"
        :key="`flying-${image}`"
        class="absolute will-change-transform"
        :style="getImagePosition(index)"
      >
        <div 
          class="transition-all duration-2000 ease-in-out transform"
          :class="[
            flyingComplete ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100',
            `delay-${index * 200}`
          ]"
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <img 
            :src="`/images/${image}`" 
            :alt="`Flying image`"
            class="w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 object-cover rounded-lg shadow-2xl border border-gold-600/30 filter grayscale contrast-110 brightness-90"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div 
      class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h1 
        class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white transition-all duration-1000 ease-out vintage-heading"
        :class="{ 
          'opacity-100 translate-y-0': showTitle, 
          'opacity-0 translate-y-8': !showTitle 
        }"
      >
        Barber Shop 
        <span class="text-gold-400 block md:inline">Thomistr</span>
      </h1>
      <p 
        class="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out"
        :class="{ 
          'opacity-100 translate-y-0': showText, 
          'opacity-0 translate-y-8': !showText 
        }"
        style="transition-delay: 300ms"
      >
        Kvalitní pánské střihy a úprava vousů v přátelském prostředí. 
        Váš fresh cut čeká v Kralovicích.
      </p>
      <div 
        class="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out"
        :class="{ 
          'opacity-100 translate-y-0': showButtons, 
          'opacity-0 translate-y-8': !showButtons 
        }"
        style="transition-delay: 600ms"
      >
        <NuxtLink to="/rezervace" class="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
          Rezervovat termín
        </NuxtLink>
        <NuxtLink to="/sluzby" class="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-transform">
          Naše služby
        </NuxtLink>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div 
      v-if="showButtons"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-all duration-1000 ease-out"
      :class="{ 
        'opacity-100': showButtons, 
        'opacity-0': !showButtons 
      }"
      style="transition-delay: 900ms"
    >
      <svg class="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  'interier.JPG',
  'high-fade.jpg',
  'uprava_vousu.JPG',
  'dalsi_uprava vousu.JPG',
  'palka.jpg',
  'svetlo.jpg'
]

const showContent = ref(false)
const showTitle = ref(false)
const showText = ref(false)
const showButtons = ref(false)
const showLandingPage = ref(false)
const flyingComplete = ref(false)
const animationComplete = ref(false)
const currentImageIndex = ref(0)
let imageInterval: NodeJS.Timeout | null = null

const getImagePosition = (index: number) => {
  const positions = [
    { top: '10%', left: '15%' },
    { top: '20%', right: '20%' },
    { top: '45%', left: '5%' },
    { top: '55%', right: '10%' },
    { top: '30%', left: '40%' },
    { top: '15%', left: '60%' }
  ]
  
  return positions[index] || { top: '50%', left: '50%' }
}

onMounted(() => {
  // Preload images
  images.forEach(image => {
    const img = new Image()
    img.src = `/images/${image}`
  })

  // Fade in the whole landing page first
  setTimeout(() => {
    showLandingPage.value = true
  }, 300)

  // Start animation sequence
  setTimeout(() => {
    flyingComplete.value = true
    
    setTimeout(() => {
      animationComplete.value = true
      showContent.value = true
      
      // Postupný náběh obsahu
      setTimeout(() => {
        showTitle.value = true
      }, 200)
      
      setTimeout(() => {
        showText.value = true
      }, 500)
      
      setTimeout(() => {
        showButtons.value = true
      }, 800)
      
      // Start slideshow
      setTimeout(() => {
        imageInterval = setInterval(() => {
          currentImageIndex.value = (currentImageIndex.value + 1) % images.length
        }, 4000)
      }, 1200)
    }, 2000) // Wait for flying animation to complete
  }, 1300) // Initial delay after page fade in
})

onUnmounted(() => {
  if (imageInterval) {
    clearInterval(imageInterval)
  }
})
</script>
