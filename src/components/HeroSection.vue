<template>
  <section class="hero-section">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-lg-6 d-flex align-items-center">
          <div class="hero-content">
            <h1 class="text-white">Vos réservations à portée de main</h1>
            <p class="lead text-white">Resa & Pay, l’application qui rapproche les clients et les commerçants</p>
            <div class="hero-buttons">
              <ButtonWrapper
             :buttons="[
               { label: 'Comment ca marche', class: 'border-white text-white', action: 'Comment ca marche' },
               { label: 'Telecharger', class: 'btn-primary-resa-color', action: 'Telecharger' }
                       ]"
                   wrapperClass="ml-lg-3 mt-3 mt-lg-0"
            />
            </div>
          </div>
        </div>

        <div class="col-lg-6 p-0">
          <div class="hero-image-container">
            <BaseImage path="resa_and_pay.png" altText="Resan Pay" height="640"/>
          </div>
        </div>
      </div>
    </div>

    <div class="wave-wrapper">
      <div class="wave-animation">
         <WaveIcon />
         <WaveIcon />
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from './BaseImage.vue';
import WaveIcon from '@/assets/icons/waveIcon.vue';
import ButtonWrapper from "@/components/ButtonWrapper.vue";
export default {
  name: 'HeroSection',
  components: { BaseImage,WaveIcon,ButtonWrapper }
}
</script>

<style scoped>
.hero-section {
  background-color: #b5b5b6;
  position: relative;
  height: 80vh;
  min-height: 600px;
  overflow: hidden;
}

.hero-content {
  padding: 0 3rem;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 1rem;
}

.hero-content .lead {
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.hero-buttons .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px;
}

.hero-image-container {
  height: 100%;
  width: 100%;
}

.hero-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.wave-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  height: 120px;
}

.wave-animation {
  display: flex;
  width: 2400px; 
  animation: waveSlide 20s linear infinite;
}

.wave-animation svg {
  width: 1200px;
  height: 120px;
  transform: rotate(180deg);
}

@keyframes waveSlide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

@media (max-width: 992px) {
  .hero-content {
    padding: 0 2rem;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: auto;
    padding-bottom: 100px;
  }
  
  .hero-content {
    padding: 2rem 1rem;
    max-width: 100%;
  }
  
  .hero-image-container {
    height: 300px;
  }

  .wave-wrapper {
    height: 80px;
  }

  .wave-animation svg {
    height: 80px;
  }
}
</style>
