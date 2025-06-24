<template>
  <section class="py-20 section-dark-alt">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Details -->
        <div class="border-2 border-white/30 hover:border-gold-400/60 rounded-lg p-8 bg-dark-800/50 relative overflow-hidden transition-all duration-300">
          <!-- Golden gradient at top -->
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          
          <h2 class="text-3xl font-bold text-white mb-8 vintage-heading">Kontaktní údaje</h2>
          
          <div class="space-y-6">
            <div 
              v-for="contact in contacts" 
              :key="contact.id"
              class="flex items-start group p-4 rounded-lg border border-white/20 hover:border-gold-400/40 bg-dark-900/30 hover:bg-dark-900/50 transition-all duration-300"
            >
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gold-600/20 rounded-lg flex items-center justify-center vintage-frame group-hover:scale-110 transition-transform border border-gold-400/30">
                  <component :is="contact.icon" class="w-6 h-6 text-gold-400" />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white vintage-heading">{{ contact.title }}</h3>
                <div v-if="contact.link">
                  <a 
                    :href="contact.link" 
                    class="text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    {{ contact.value }}
                  </a>
                </div>
                <div v-else-if="contact.socialLinks">
                  <div class="flex space-x-4">
                    <a 
                      v-for="social in contact.socialLinks"
                      :key="social.name"
                      :href="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      {{ social.name }}
                    </a>
                  </div>
                </div>
                <div v-else-if="Array.isArray(contact.value)">
                  <p v-for="line in contact.value" :key="line" class="text-gray-300">{{ line }}</p>
                </div>
                <div v-else>
                  <p class="text-gray-300">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="mt-8 space-y-4">
            <NuxtLink to="/rezervace" class="btn-primary w-full text-center block">
              Rezervovat termín
            </NuxtLink>
            <a href="tel:+420733666092" class="btn-secondary w-full text-center block">
              Zavolat nyní
            </a>
          </div>
        </div>

        <!-- Map Section -->
        <div>
          <h2 class="text-3xl font-bold text-white mb-8 vintage-heading">Kde nás najdete</h2>
          <div class="bg-dark-800 rounded-lg overflow-hidden vintage-frame border-2 border-white/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.6384294972486!2d13.485083676409324!3d49.980638921080036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a5bdcfb20a0bb%3A0xdbcb726b6e21d73e!2sBarber%20shop%20Thomistr!5e0!3m2!1scs!2scz!4v1750593466844!5m2!1scs!2scz" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Mapa - Barber Shop Thomistr, Kralovice"
            ></iframe>
          </div>
          
          <!-- Directions -->
          <div class="mt-6 p-4 bg-gold-600/10 rounded-lg border-2 border-gold-600/30 hover:border-gold-600/50 transition-colors duration-300">
            <h3 class="font-semibold text-white mb-2 vintage-heading">Jak se k nám dostat</h3>
            <p class="text-gray-300 text-sm">
              Najdete nás přímo v centru Kralovic na náměstí Osvobození. 
              Parkování je možné na náměstí nebo v přilehlých ulicích.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const LocationIcon = defineAsyncComponent(() => import('~/components/icons/LocationIcon.vue'))
const PhoneIcon = defineAsyncComponent(() => import('~/components/icons/PhoneIcon.vue'))
const ClockIcon = defineAsyncComponent(() => import('~/components/icons/ClockIcon.vue'))
const EmailIcon = defineAsyncComponent(() => import('~/components/icons/EmailIcon.vue'))
const CheckCircleIcon = defineAsyncComponent(() => import('~/components/icons/CheckCircleIcon.vue'))
const HeartIcon = defineAsyncComponent(() => import('~/components/icons/HeartIcon.vue'))

interface ContactInfo {
  id: string
  title: string
  value: string | string[]
  icon: any
  link?: string
  socialLinks?: Array<{ name: string; url: string }>
}

const contacts: ContactInfo[] = [
  {
    id: 'address',
    title: 'Adresa',
    value: ['nám. Osvobození 84', '331 41 Kralovice'],
    icon: LocationIcon
  },
  {
    id: 'phone',
    title: 'Telefon',
    value: '+420 733 666 092',
    icon: PhoneIcon,
    link: 'tel:+420733666092'
  },
  {
    id: 'email',
    title: 'E-mail',
    value: 'thomistr@barbershopthomistr.cz',
    icon: EmailIcon,
    link: 'mailto:thomistr@barbershopthomistr.cz'
  },
  {
    id: 'ico',
    title: 'IČO',
    value: '19395990',
    icon: CheckCircleIcon
  },
  {
    id: 'hours',
    title: 'Provozní doba',
    value: ['Středa: 08:00–17:00', 'Pátek: 08:00–17:00'],
    icon: ClockIcon
  },
  {
    id: 'social',
    title: 'Sociální sítě',
    value: '',
    icon: HeartIcon,
    socialLinks: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thomistr_barber/'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=100094267122693'
      }
    ]
  }
]
</script>
