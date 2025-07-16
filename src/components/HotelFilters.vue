<template>
    <div class="d-flex flex-col md:flex-row justify-center items-center mb-6 mx-auto" style="max-width: 600px;">
      
      <div class="flex-grow-1 d-flex justify-center gap-2 w-full md:w-auto md:mr-4">
        <select
          v-model="selectedCity"
          class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring focus:ring-primary-resa-color/40 w-full md:w-auto"
        >
          <option value="">Toutes les villes</option>
          <option v-for="city in uniqueCities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>
  
      <div class="flex-grow-1 d-flex justify-center gap-2 w-full md:w-auto">
        <select
          v-model="selectedSort"
          class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring focus:ring-primary-resa-color/40 w-full md:w-auto"
        >
          <option value="priceAsc">Prix croissant</option>
          <option value="priceDesc">Prix décroissant</option>
          <option value="ratingDesc">Note décroissante</option>
        </select>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  
  const props = defineProps({
    hotels: {
      type: Array,
      required: true
    }
  })
  const emit = defineEmits(['filter'])
  
  const selectedCity = ref('')
  const selectedSort = ref('priceAsc')
  
  const uniqueCities = computed(() => {
    return [...new Set(props.hotels.map(hotel => hotel.city))]
  })
  
  watch([selectedCity, selectedSort], () => {
    emit('filter', {
      city: selectedCity.value,
      sort: selectedSort.value
    })
  }, { immediate: true })
  </script>
  
  <style scoped>
  select {
    min-width: 160px;
  }
  
  .d-flex {
    width: 100%; 
    align-items: center;
  }
  </style>