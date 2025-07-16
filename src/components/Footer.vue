<template>
    <footer class="footer-section py-5 text-white">
      <div class="container">
        <div class="row">
  

          <div class="col-md-4 mb-4">
            <BaseImage path="logo-footer.png" altText="logo" height="100" class="mb-3" />
            <p class="small">
              Plateforme de réservation d’hôtels simple, rapide et sécurisée. Réservez votre séjour en toute confiance.
            </p>
          </div>
  
          <div class="col-md-4 mb-4">
            <h5>Navigation</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="footer-link">Accueil</a></li>
              <li><a href="#" class="footer-link">Réserver</a></li>
              <li><a href="#" class="footer-link">Société</a></li>
              <li><a href="#" class="footer-link">Contact</a></li>
            </ul>
          </div>
  

          <div class="col-md-4 mb-4">
            <h5>Contact</h5>
            <ul class="list-unstyled small">
              <li><i class="bi bi-geo-alt-fill"></i> Ndokotti, Cameroun</li>
              <li><i class="bi bi-envelope-fill"></i> contact@resanpay.com</li>
              <li><i class="bi bi-telephone-fill"></i> +237 672 58 98 23</li>
            </ul>
          </div>
        </div>
  
        <hr class="bg-white opacity-50" />
      </div>
      <div class="container text-center">
        <small>&copy; {{ new Date().getFullYear() }} Hôtel & Meublés. Tous droits réservés.</small>
      </div>
    </footer>
  </template>
  
  <script>
  import BaseImage from "@/components/BaseImage.vue";
  
  export default {
    name: "FooterSection",
    components: {
      BaseImage
    }
  };
  </script>
  
  <style scoped>
  .footer-section {
    background-color: #3c8376;
  }
  
  .footer-link {
    color: #ffffff;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
  }
  
  .footer-link:hover {
    color: #d4f5ee;
  }
  </style>
  