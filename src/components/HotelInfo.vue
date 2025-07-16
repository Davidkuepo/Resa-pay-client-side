<template>
    <div class="price-box mt-6 p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">

      <div class="mb-4">
        <h2 class="text-2xl font-bold text-gray-900">{{ name }}</h2>
        <p class="text-sm text-gray-600">{{ category }}</p>
      </div>
  

      <div class="flex items-center gap-2 text-sm mb-3">
        <span class="text-yellow-500 flex items-center">
          ⭐ <span class="ml-1 font-semibold">{{ rating }}</span>
        </span>
        <span class="text-gray-500">({{ commentsCount }} avis)</span>
      </div>
  

      <div class="mb-4">
        <div class="text-3xl font-semibold text-gray-800">
          {{ price }} €
          <span class="text-sm font-normal text-gray-500">/ nuit</span>
        </div>
        <div v-if="discount" class="text-green-600 text-sm mt-1 font-medium">
          🎉 Réduction : {{ discount }}%
        </div>
      </div>
  

      <button class="w-full py-3 bg-primary-resa-color text-white rounded-lg text-lg font-medium hover:bg-opacity-90 transition duration-300">
        Réserver maintenant
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      commentsCount: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      discount: {
        type: Number,
        default: null
      }
    }
  }
  </script>
  
  <style scoped>
  .price-box {
    transition: transform 0.2s;
  }
  .price-box:hover {
    transform: translateY(-5px);
  }
  </style>