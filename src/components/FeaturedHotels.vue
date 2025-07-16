<template>
  <section class="featured-hotels py-5">
    <div class="container">
      <div class="row">
        <div
          class="animated-card col-md-4 mb-4"
          v-for="(hotel, index) in hotels"
          :key="hotel.id"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="card h-100 border-0 shadow rounded-lg overflow-hidden">
            <BaseImage
              :path="hotel.image"
              class="card-img-top"
              :altText="hotel.name"
              style="height: 200px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title text-resa">{{ hotel.name }}</h5>
              <p class="card-text text-muted mb-1">{{ hotel.city }}</p>
              <p class="card-text small">{{ hotel.description }}</p>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="badge badge-resa">{{ hotel.rating }} ★</span>
                <strong class="text-resa">{{ hotel.price }} € / nuit</strong>
              </div>
            </div>
            <div class="card-footer bg-white border-0">
              <router-link :to="`/hotel/${hotel.id}`" class="btn btn-outline-resa btn-block">
              Voir les détails
            </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="#" class="btn btn-outline-resa px-4">Voir tous nos hôtels</a>
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from './BaseImage.vue';
export default {
  name: 'FeaturedHotels',
  props: {
    hotels: Array
  },
  components: {
    BaseImage
  }
}
</script>

<style scoped>
.text-resa {
  color: #3c8376;
}
.badge-resa {
  background-color: #3c8376;
  color: white;
  font-size: 0.85rem;
  padding: 0.5em 0.75em;
  border-radius: 0.5rem;
}
.btn-outline-resa {
  border: 2px solid #3c8376;
  color: #3c8376;
  transition: 0.3s;
}
.btn-outline-resa:hover {
  background-color: #3c8376;
  color: white;
}
.animated-card {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}
@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
