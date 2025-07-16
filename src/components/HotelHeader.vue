<template>
    <div class="hotel-header">
      <h1 class="text-2xl font-bold">{{ name }}</h1>
      <div class="flex items-center gap-2 mt-1">
        <span v-for="i in category" :key="i">⭐</span>
        <span class="text-sm text-gray-600">{{ rating }} ({{ comments }} avis)</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    category: Number,
    rating: Number,
    comments: Number
  })
  </script>
  