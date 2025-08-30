<template>
  <div class="min-h-screen bg-dark-900">
    <!-- Navigation -->
    <nav class="bg-black bg-opacity-95 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b border-gold-600/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24 md:h-28 lg:h-32">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center">
              <!-- Logo image -->
              <img 
                src="/images/logo.png" 
                alt="Barber Shop Thomistr" 
                class="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain transition-all duration-200 hover:scale-105"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';"
              />
              <!-- Fallback text if logo fails to load -->
              <span class="text-xl md:text-2xl font-bold text-gold-400 vintage-heading" style="display: none;">
                Thomistr
              </span>
            </NuxtLink>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-gold-400"
            >
              Domů
            </NuxtLink>
            <NuxtLink 
              to="/sluzby" 
              class="text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-gold-400"
            >
              Služby
            </NuxtLink>
            <NuxtLink 
              to="/kontakt" 
              class="text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-gold-400"
            >
              Kontakt
            </NuxtLink>
            <NuxtLink 
              to="/rezervace" 
              class="btn-primary"
            >
              Rezervace
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-300 hover:text-gold-400 focus:outline-none focus:text-gold-400"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-950 border-t border-gold-600/20">
            <NuxtLink 
              to="/" 
              @click="mobileMenuOpen = false"
              class="block text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-base font-medium"
              active-class="text-gold-400"
            >
              Domů
            </NuxtLink>
            <NuxtLink 
              to="/sluzby" 
              @click="mobileMenuOpen = false"
              class="block text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-base font-medium"
              active-class="text-gold-400"
            >
              Služby
            </NuxtLink>
            <NuxtLink 
              to="/kontakt" 
              @click="mobileMenuOpen = false"
              class="block text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-base font-medium"
              active-class="text-gold-400"
            >
              Kontakt
            </NuxtLink>
            <NuxtLink 
              to="/rezervace" 
              @click="mobileMenuOpen = false"
              class="block btn-primary mt-2"
            >
              Rezervace
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-black bg-opacity-90 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Left: Google Reviews -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gold-400">Jak nás hodnotí zákazníci</h3>
            <div class="flex items-center mb-3">
              <div class="flex text-gold-400 mr-2">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-white font-semibold">5.0 / 5</span>
            </div>
            <a 
              href="https://www.google.com/maps/place/Barber+shop+Thomistr/@49.9806355,13.4876586,17z/data=!4m8!3m7!1s0x470a5bdcfb20a0bb:0xdbcb726b6e21d73e!8m2!3d49.9806355!4d13.4876586!9m1!1b1!16s%2Fg%2F11w24jhbn1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block border-2 border-gold-600 text-gold-400 hover:bg-gold-600 hover:text-white px-4 py-2 rounded transition-colors duration-200 text-sm font-medium"
            >
              Ohodnoťte nás na Google
            </a>
            <p class="text-gray-300 text-sm mt-3">Kvalitní pánské střihy v centru Kralovic.</p>
          </div>

          <!-- Middle: Interactive Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gold-400">Kontakt a umístění</h3>
            <div class="space-y-2">
              <a 
                href="https://www.google.com/maps/dir//Barber+shop+Thomistr,+n%C3%A1m.+Osvobozen%C3%AD+84,+331+41+Kralovice/@49.9807167,13.4052581,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x470a5bdcfb20a0bb:0xdbcb726b6e21d73e!2m2!1d13.4876054!2d49.980648?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-gold-400 transition-colors block cursor-pointer"
              >
                nám. Osvobození 84<br>
                331 41 Kralovice
              </a>
              <a 
                href="tel:+420733666092"
                class="text-gray-300 hover:text-gold-400 transition-colors block cursor-pointer"
              >
                +420 733 666 092
              </a>
            </div>
          </div>

          <!-- Right: Social Media -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gold-400">Sledujte nás</h3>
            <div class="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100094267122693" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-gold-400 transition-colors flex items-center space-x-2"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span class="sr-only md:not-sr-only">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/thomistr_barber/" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-gold-400 transition-colors flex items-center space-x-2"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.151-2.448-2.448s1.151-2.448 2.448-2.448 2.448 1.151 2.448 2.448-1.151 2.448-2.448 2.448zm7.139 0c-1.297 0-2.448-1.151-2.448-2.448s1.151-2.448 2.448-2.448 2.448 1.151 2.448 2.448-1.151 2.448-2.448 2.448z"/>
                </svg>
                <span class="sr-only md:not-sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom: Copyright with Company Logo -->
        <div class="mt-8 border-t border-gray-700 pt-8">
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <p class="text-gray-300 text-sm">
              &copy; 2025 Barber Shop Thomistr. Všechna práva vyhrazena.
            </p>
            <div class="flex items-center mt-4 sm:mt-0">
              <a 
                href="https://descodino.studio/"
                target="_blank"
                rel="noopener noreferrer"
                class="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img 
                  src="/images/vytvorilo_descodino.png" 
                  alt="Descodino studio" 
                  class="h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
