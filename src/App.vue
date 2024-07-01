<template>
  <main>
    <h1 class="text-lg font-semibold text-center">This is a sample calculator</h1>
    <p class="text-xs text-center">
      Made with Vue3 + Electron Forge (vite-typescript template)
    </p>

    <TheCalculator />
  </main>
</template>

<script setup>
import TheCalculator from "./components/TheCalculator.vue";

console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
