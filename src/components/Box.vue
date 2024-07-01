<script setup lang="ts">
withDefaults(
  defineProps<{
    value: string;
    isOperator: boolean;
  }>(),
  {
    isOperator: false,
  }
);

const emit = defineEmits(["pressed"]);
</script>

<template>
  <div
    :class="`flex bg-${isOperator ? 'terciary' : 'lightdark'} p-3 rounded-xl w-12`"
    @click="() => emit('pressed', value)"
  >
    <span class="m-auto">{{ value }}</span>
  </div>
</template>
