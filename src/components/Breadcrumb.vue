<template>
  <nav class="text-sm mb-4" aria-label="breadcrumb">
    <ol class="breadcrumb d-flex p-0 m-0">
      <template v-for="(crumb, index) in items" :key="index">
        <li class="breadcrumb-item d-flex align-items-center">
          <router-link
            v-if="crumb.link"
            :to="crumb.link"
            class="text-primary-resa-color font-medium"
          >
            {{ crumb.label }}
          </router-link>
          <span
            v-else
            class="text-gray-500 font-semibold"
          >
            {{ crumb.label }}
          </span>
        </li>
        <li v-if="index < items.length - 1" class="text-gray-400 px-1">/</li>
      </template>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
}
</style>