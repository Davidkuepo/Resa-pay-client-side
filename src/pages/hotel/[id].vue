<template>
  <Navbar />
  
  <div class="container py-4" v-if="hotel">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="row">
      <div class="col-md-6 mb-4 mb-md-0">
        <HotelImageCarousel :images="images" />
      </div>

      <div class="col-md-6">
        <HotelInfo
          :name="hotel.name"
          :category="hotel.category"
          :rating="hotel.rating"
          :commentsCount="hotel.commentsCount"
          :price="hotel.price"
          :discount="hotel.discount"
        />
        <HotelFeatures :features="hotel.features" class="mb-3" />
      </div>
    </div>

    <div class="mt-4">
      <HotelTabs :tabs="tabsData" />
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHotelService } from '@/store/hotel'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import HotelImageCarousel from '@/components/HotelImageCarousel.vue'
import HotelInfo from '@/components/HotelInfo.vue'
import HotelFeatures from '@/components/HotelFeatures.vue'
import HotelTabs from '@/components/HotelTabs.vue'


const route = useRoute()
const { getHotelById } = useHotelService()
const hotelId = route.params.id


const hotel = ref(null)
const images = ref([])
const breadcrumbItems = ref([
  { label: 'Accueil', link: '/' },
  { label: 'Hôtels', link: '/hotels' },
])

const tabsData = ref([
  {
    title: 'Caractéristiques',
    component: 'TabContent1',
  },
  {
    title: 'Commentaires',
    component: 'TabContent2',
  },
])

useAsyncData(async () => {
  const result = await getHotelById(hotelId)
  if (result) {
    hotel.value = result
    images.value = result.images || []
    breadcrumbItems.value.push({ label: result.name })
  }
})
</script>
