<template>
  <section class="homepage">
    <Navbar />
    <HeroSection />
    <HotelFilters :hotels="hotels" @filter="applyFilters" />
    
    <div v-if="isLoading" class="loader">Loading...</div>
    
    <FeaturedHotels v-else :hotels="filteredHotels" />
    <BenefitsSection />
    <PopularDestinations />
    <TestimonialsSection />
    <Footer />
  </section>
</template>

<script setup>
import { ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import HotelFilters from '@/components/HotelFilters.vue'
import FeaturedHotels from '@/components/FeaturedHotels.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import PopularDestinations from '@/components/PopularDestinations.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import Footer from '~/components/Footer.vue'

import { useHotelService } from '@/store/hotel'

const { getHotels } = useHotelService()

const hotels = ref([])
const filteredHotels = ref([])
const isLoading = ref(true) 

useAsyncData(async () => {
  try {
    const response = await getHotels()
    console.log('Données reçues de l’API :', response)

    if (Array.isArray(response)) {
      hotels.value = response
      filteredHotels.value = [...response]
    } else {
      console.error('getHotels() ne retourne pas un tableau')
      hotels.value = []
      filteredHotels.value = []
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des hôtels :', error)
  } finally {
    isLoading.value = false 
  }
})

function applyFilters({ city, sort }) {
  let result = [...hotels.value]

  if (city) {
    result = result.filter(h => h.city === city)
  }

  if (sort === 'priceAsc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sort === 'priceDesc') {
    result.sort((a, b) => b.price - a.price)
  } else if (sort === 'ratingDesc') {
    result.sort((a, b) => b.rating - a.rating)
  }

  filteredHotels.value = result
}
</script>

<style scoped>
.homepage {
  overflow-x: hidden;
}

.loader {
  text-align: center;
  font-size: 1.5rem;
  margin: 20px;
}
</style>