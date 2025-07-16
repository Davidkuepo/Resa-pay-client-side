<template>
    <div class="features mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
        <i :class="feature.icon"></i>
        <span>{{ feature.label }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    features: Array
  })
  </script>
  