<template>
  <img
    v-if="imageSrc"
    :src="imageSrc"
    :alt="altText"
    :class="$attrs.class"
    :height="$attrs.height"
  />
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  path: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'image'
  }
});

const imageSrc = ref('');

const images = import.meta.glob('@/assets/images/**/*', {
  eager: true,
  import: 'default'
});

watchEffect(() => {
  for (const [key, value] of Object.entries(images)) {
    if (key.endsWith(props.path)) {
      imageSrc.value = value;
      return;
    }
  }
  if (props.path.startsWith('http')) {
  imageSrc.value = props.path;
  return;
}
  console.warn(`Image not found: ${props.path}`);
});
</script>
