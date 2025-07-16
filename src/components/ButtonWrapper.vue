<template>
    <div :class="wrapperClass" class="d-flex flex-wrap">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="['btn', button.class, sizeClass, { 'me-3': index !== buttons.length - 1 }]"
        @click="$emit('click', button.action)"
      >
        {{ button.label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ButtonWrapper',
    props: {
      buttons: {
        type: Array,
        required: true
      },
      wrapperClass: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'lg'
      }
    },
    computed: {
  sizeClass() {
    return this.size ? `btn-${this.size}` : '';
  }
}

  };
  </script>
  