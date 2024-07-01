<template>
  <main>
    <h1 class="text-md font-semibold text-center">This is a sample calculator</h1>
    <p class="text-[10px] text-center">
      Made with Vue3 + Electron Forge (vite-typescript template)
    </p>

    <TheCalculator />

    <TheFooter />
  </main>
</template>

<script setup>
import TheCalculator from "./components/TheCalculator.vue";
import TheFooter from "./components/TheFooter.vue";
</script>
