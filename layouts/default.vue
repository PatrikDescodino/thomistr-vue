<template>
  <div class="min-h-screen bg-dark-900">
    <!-- Navigation -->
    <nav class="bg-dark-950/95 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b border-gold-600/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-24">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center">
              <img 
                src="images/logo.png" 
                alt="Barber Shop Thomistr Logo" 
                class="h-[90px] w-auto"
              />
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
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo a popis -->
          <div class="flex flex-col items-center md:items-start">
            <img 
              src="/logo.png" 
              alt="Barber Shop Thomistr Logo" 
              class="h-[130px] w-auto mb-4"
            />
            <p class="text-gray-300 text-center md:text-left">
              Kvalitní pánské střihy v přátelském prostředí v centru Kralovic.
            </p>
          </div>

          <!-- Kontakt a umístění -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Kontakt a umístění</h3>
            <div class="space-y-2">
              <a 
                href="https://maps.app.goo.gl/zvWAfxumAAywWdi76"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-gray-300 hover:text-gold-400 transition-colors"
              >
                nám. Osvobození 84<br>
                331 41 Kralovice
              </a>
              <a 
                href="tel:+420733666092"
                class="block text-gray-300 hover:text-gold-400 transition-colors"
              >
                +420 733 666 092
              </a>
            </div>
          </div>

          <!-- Sociální sítě -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Sledujte nás</h3>
            <div class="flex flex-col space-y-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100094267122693"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-gray-300 hover:text-gold-400 transition-colors"
              >
                <svg class="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/thomistr_barber/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-gray-300 hover:text-gold-400 transition-colors"
              >
                <svg class="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.151-2.448-2.448s1.151-2.448 2.448-2.448 2.448 1.151 2.448 2.448-1.151 2.448-2.448 2.448zm7.139 0c-1.297 0-2.448-1.151-2.448-2.448s1.151-2.448 2.448-2.448 2.448 1.151 2.448 2.448-1.151 2.448-2.448 2.448z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright section -->
        <div class="mt-8 border-t border-gray-700 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-center md:text-left text-gray-300">
              © 2025 Barber Shop Thomistr. Všechna práva vyhrazena.
            </p>
            <div class="mt-4 md:mt-0">
              <img 
                src="images/vytvořili.png" 
                alt="Vytvořili" 
                class="h-8 w-auto"
              />
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