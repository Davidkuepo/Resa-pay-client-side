<template>
    <div class="tabs-bootstrap">
      <ul class="nav nav-tabs border-b border-gray-200">
        <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
          <a
            href="#"
            role="tab"
            class="nav-link px-4 py-2 text-sm transition-all duration-300 position-relative"
            :class="{ active: index === activeTabIndex, 'text-primary-resa-color': index === activeTabIndex }"
            @click.prevent="setActiveTab(index)"
          >
            {{ tab.title }}
 
            <span
              class="d-block position-absolute bottom-0 start-0 w-100"
              :style="{
                height: '2px',
                backgroundColor: index === activeTabIndex ? 'var(--primary)' : 'transparent',
                transition: 'background-color 0.3s ease'
              }"
            ></span>
          </a>
        </li>
      </ul>
  

      <div class="tab-content py-4">
        <transition name="fade" mode="out-in">
          <div
            class="tab-pane fade show active"
            :key="activeTabIndex"
            role="tabpanel"
          >
            <component :is="tabs[activeTabIndex].component" />
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        activeTabIndex: 0
      }
    },
    methods: {
      setActiveTab(index) {
        this.activeTabIndex = index
      }
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .nav-tabs .nav-link.active {
    border-color: transparent;
    font-weight: 600;
    background-color: transparent;
  }
  </style>
  