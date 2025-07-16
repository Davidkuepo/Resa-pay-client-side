<template>
    <div class="carousel-container">
      <div v-for="(img, index) in images" :key="index" class="carousel-image" :class="{ active: index === current }">
        <BaseImage :path="img" altText="image" class="w-100 h-100 object-cover rounded" />
      </div>
  
      <div class="carousel-controls">
        <button @click="prev">‹</button>
        <button @click="next">›</button>
      </div>
    </div>
  </template>
  
  <script>
  import BaseImage from './BaseImage.vue';
  export default {
    props: {
      images: Array
    },
    components: {
        BaseImage
  },
    data() {
      return { current: 0 }
    },
    methods: {
      next() {
        this.current = (this.current + 1) % this.images.length;
      },
      prev() {
        this.current = (this.current - 1 + this.images.length) % this.images.length;
      }
    }
  }
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    overflow: hidden;
    height: 300px;
  }
  .carousel-image {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .carousel-image.active {
    display: block;
  }
  .carousel-controls {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .carousel-controls button {
    background: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    margin: 0 2px;
  }
  </style>
  