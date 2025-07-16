<template>
  <section class="destinations-section py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 text-resa">Destinations populaires</h2>
      <div class="row">
        <div
          class="col-md-3 col-6 mb-4 animated-city"
          v-for="(city, index) in cities"
          :key="index"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="destination-card position-relative overflow-hidden rounded shadow-sm h-100">
            <BaseImage
              :path="city.image"
              class="img-fluid w-100"
              :altText="city.name"
              style="height: 180px; object-fit: cover;"
            />
            <div class="destination-overlay p-3">
              <h5 class="text-white mb-1">{{ city.name }}</h5>
              <small class="text-white">{{ city.count }} hôtels</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from "@/components/BaseImage.vue"
export default {
  name: 'DestinationsSection',
  components: {
    BaseImage
    },
  data() {
    return {
      cities: [
        { name: 'Paris', count: 42, image: 'paris.jpg' },
        { name: 'Lyon', count: 18, image: 'Lyon.jpg' },
        { name: 'Marseille', count: 15, image: 'Marseille.jpg' },
        { name: 'Nice', count: 12, image: 'Nice.jpg' },
      ]
    };
  }
};
</script>

<style scoped>
.text-resa {
  color: #3c8376;
}

.destination-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}
.destination-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1);
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: white;
}

.animated-city {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
