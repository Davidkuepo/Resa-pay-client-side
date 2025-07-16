<template>
  <section class="benefits-section py-5">
    <div class="container">
      <h2 class="text-center mb-5 text-resa">Pourquoi choisir notre plateforme ?</h2>
      <div class="row text-center">
        <div
          class="col-md-4 mb-4 animated-benefit"
          v-for="(benefit, index) in benefits"
          :key="index"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="benefit-item p-4 shadow-sm h-100 border rounded">
            <i :class="`bi ${benefit.icon} benefit-icon mb-3`"></i>
            <h5 class="text-resa font-weight-bold">{{ benefit.title }}</h5>
            <p class="text-muted">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BenefitsSection",
  data() {
    return {
      benefits: [
        {
          icon: "bi-shield-check",
          title: "Sécurité",
          description: "Paiements sécurisés et données protégées"
        },
        {
          icon: "bi-currency-euro",
          title: "Meilleur prix",
          description: "Garantie du meilleur prix pour votre séjour"
        },
        {
          icon: "bi-headset",
          title: "Support 24/7",
          description: "Assistance disponible à tout moment"
        },
        {
          icon: "bi-clock-history",
          title: "Réservations rapides",
          description: "Réservez en quelques clics sans tracas"
        },
        {
          icon: "bi-star",
          title: "Avis fiables",
          description: "Des milliers d'avis vérifiés par des voyageurs"
        },
        {
          icon: "bi-globe",
          title: "Couverture internationale",
          description: "Des hôtels dans plus de 100 pays"
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
.benefit-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}
.benefit-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.1);
}
.benefit-icon {
  font-size: 3rem;
  color: #3c8376;
}
.animated-benefit {
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
