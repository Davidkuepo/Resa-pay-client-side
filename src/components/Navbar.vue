<template>
  <nav class="navbar-custom">
    <div class="container d-flex align-items-center justify-content-between">
      <RouterLink to="/"" class="logo">
        <BaseImage path="logo-header.png" altText="Logo" height="40" />
      </RouterLink>

      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <label for="nav-toggle" class="nav-toggle-label">
        <BaseImage path="Hamburger.png" altText="Menu" height="30" />
      </label>

      <ul class="nav-links bg-white">
        <li v-for="(item, i) in menuItems" :key="i">
          <a :href="item.href">{{ item.label }}</a>
        </li>
        <li class="mobile-btn d-block d-lg-none">
          <ButtonWrapper
            :buttons="[
              {
                label: 'Login',
                class: 'border-primary-resa-color text-primary-resa-color bg-white',
                action: 'login'
              },
              {
                label: 'Register',
                class: 'btn-primary-resa-color text-white',
                action: 'register'
              }
            ]"
            wrapperClass="d-flex flex-column align-items-center gap-2 mt-3"
          />
        </li>
      </ul>

      <div class="desktop-buttons d-none d-lg-flex">
        <ButtonWrapper
          :buttons="[
            {
              label: 'Login',
              class: 'border-primary-resa-color text-primary-resa-color bg-white',
              action: 'login'
            },
            {
              label: 'Register',
              class: 'btn-primary-resa-color text-white',
              action: 'register'
            }
          ]"
          wrapperClass="d-flex"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import BaseImage from "@/components/BaseImage.vue";
import ButtonWrapper from "@/components/ButtonWrapper.vue";

export default {
  name: "Navbar",
  components: {
    BaseImage,
    ButtonWrapper
  },
  data() {
    return {
      menuItems: [
        { label: "Accueil", href: "#" },
        { label: "Réserver", href: "#" },
        { label: "Société", href: "#" },
        { label: "Contact", href: "#" }
      ]
    };
  }
};
</script>

<style scoped>
.navbar-custom {
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
}

.logo img {
  height: 40px;
}

.nav-toggle {
  display: none;
}

.nav-toggle-label {
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 20;
  display: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #3c8376;
  font-weight: 500;
  font-size: 1.1rem;
}

.nav-links a:hover {
  color: #2e655c;
}

.desktop-buttons {
  gap: 1rem;
}

@media (max-width: 991px) {
  .nav-toggle-label {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    padding: 1.5rem 2rem;
    display: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links li {
    margin: 0.7rem 0;
    text-align: center;
  }

  .nav-toggle:checked ~ .nav-links {
    display: flex;
  }

  .desktop-buttons {
    display: none !important;
  }

  .mobile-btn {
    width: 100%;
  }
}
</style>
