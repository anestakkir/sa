// src/pages/HomePage.vue
<script setup lang="ts">
import Calculator from '../components/Calculator.vue';
</script>

<template>
  <main class="home-page">
    <Calculator />
  </main>
</template>

<style scoped>

.home-page {
  padding: 1rem;
  min-height: 100vh;
  background-color: #f0f2f5; 
}
</style>