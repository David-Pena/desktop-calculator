<script setup lang="ts">
const props = defineProps({
  value: String,
  isOperator: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["pressed"]);
</script>

<template>
  <div
    :class="`flex cursor-pointer bg-${
      props.isOperator ? 'terciary' : 'lightdark'
    } p-3 rounded-xl w-12 hover:scale-125 ease-in-out transition-all`"
    @click="() => emit('pressed', value)"
  >
    <span class="m-auto">{{ value }}</span>
  </div>
</template>
