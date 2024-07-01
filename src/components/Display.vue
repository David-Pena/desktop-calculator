<script setup lang="ts">
defineProps<{
  currentValue: string;
  lastestOperation: string;
}>();
</script>

<template>
  <div class="flex flex-col items-end">
    <p class="text-[10px] text-primary">{{ lastestOperation }}</p>
    <p class="text-4xl">{{ currentValue }}</p>
  </div>
</template>
