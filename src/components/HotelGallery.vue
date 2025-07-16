<template>
    <div class="hotel-gallery">
      <carousel :autoplay="true" :loop="true">
        <slide v-for="(img, index) in images" :key="index">
          <img :src="img" class="w-full h-64 object-cover rounded-lg" />
        </slide>
      </carousel>
    </div>
  </template>
  
  <script setup>
  defineProps({
    images: Array
  })
  </script>
  