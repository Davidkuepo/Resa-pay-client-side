<template>
  <section class="testimonials-section py-5">
    <div class="container">
      <h2 class="text-center mb-5 text-resa">Ce que disent nos clients</h2>
      <div class="row">
        <div
          class="col-md-4 mb-4 animated-testimonial"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="testimonial-card p-4 h-100 shadow-sm rounded bg-white">
            <div class="d-flex align-items-center mb-3">
              <BaseImage
                :path="testimonial.avatar"
                class="rounded-circle mr-3"
                width="60"
                height="60"
                :altText="testimonial.name"
              />
              <div>
                <h5 class="mb-0">{{ testimonial.name }}</h5>
                <div class="text-warning">
                  <span v-for="n in 5" :key="n">
                    <i class="bi bi-star-fill" v-if="n <= testimonial.rating"></i>
                    <i class="bi bi-star" v-else></i>
                  </span>
                </div>
              </div>
            </div>
            <p class="text-muted font-italic">"{{ testimonial.comment }}"</p>
            <small class="text-muted">{{ testimonial.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from "@/components/BaseImage.vue"
export default {
  name: "TestimonialsSection",
  components: {
    BaseImage
    },
  data() {
    return {
      testimonials: [
        {
          name: 'Marie Tsafack',
          rating: 5,
          comment: 'Service exceptionnel et hôtel magnifique. Je recommande vivement !',
          date: '15 Juin 2025',
          avatar: 'user.webp'
        },
        {
          name: 'Jean Marie Tsama',
          rating: 4,
          comment: 'Très bon rapport qualité-prix. Le personnel était très accueillant.',
          date: '2 Mai 2025',
          avatar: 'user.webp'
        },
        {
          name: 'Sophie Kuete',
          rating: 5,
          comment: 'Expérience parfaite du début à la fin. Je reviendrai certainement.',
          date: '22 Avril 2025',
          avatar: 'user.webp'
        }
      ]
    };
  }
};
</script>

<style scoped>
.text-resa {
  color: #3c8376;
}

.testimonials-section {
  background-color: #f8f9fa;
}

.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #3c8376;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1);
}

.animated-testimonial {
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
