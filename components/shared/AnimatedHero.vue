<template>
  <div>
    <!-- Animated Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
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
            :alt="`Barber Shop Thomistr - ${image}`"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-dark-900/70"></div>
        </div>
      </div>

      <!-- Flying Images Animation -->
      <div 
        v-if="!showContent"
        class="absolute inset-0 z-10"
      >
        <div 
          v-for="(image, index) in images"
          :key="`flying-${image}`"
          class="absolute"
          :style="getImagePosition(index)"
        >
          <div 
            class="transition-all duration-1000 ease-out transform"
            :class="flyingImageClasses(index)"
          >
            <img 
              :src="`/images/${image}`" 
              :alt="`Flying image ${index + 1}`"
              class="w-32 h-24 sm:w-48 sm:h-36 object-cover rounded-lg shadow-2xl border border-copper-600/30"
            />
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div 
        class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': showContent, 'opacity-0 translate-y-8': !showContent }"
      >
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Barber Shop 
          <span class="text-copper-400 block md:inline">Thomistr</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Kvalitní pánské střihy a úprava vousů v přátelském prostředí. 
          Váš fresh cut čeká v Kralovicích.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
        v-if="showContent"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <svg class="w-6 h-6 text-copper-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
