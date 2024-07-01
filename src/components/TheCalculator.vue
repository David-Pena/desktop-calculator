<script setup lang="ts">
import { OPERATIONS_MAP, Operator } from "../utils/constants";
import { ref } from "vue";
import Box from "./Box.vue";
import Display from "./Display.vue";

const lastOperation = ref("");
const currentValue = ref("");
const previousValue = ref("");
const currentOperator = ref<Operator>("");

const handleNumberClick = (number: string) => {
  currentValue.value += number;
};

const handleOperatorClick = (operator: Operator) => {
  if (currentValue.value) {
    if (previousValue.value && currentOperator.value) {
      // If there's already a previous value and operator, compute the result
      computeResult();
    } else {
      previousValue.value = currentValue.value;
      currentValue.value = "";
    }
    currentOperator.value = operator;
    lastOperation.value = `${previousValue.value} ${operator}`;
  }
};

const handleClear = () => {
  currentValue.value = "";
  previousValue.value = "";
  currentOperator.value = "";
  lastOperation.value = "";
};

const computeResult = () => {
  if (previousValue.value && currentValue.value && currentOperator.value) {
    const prev = parseFloat(previousValue.value);
    const curr = parseFloat(currentValue.value);
    let result = OPERATIONS_MAP[currentOperator.value](prev, curr);

    lastOperation.value = `${previousValue.value} ${currentOperator.value} ${currentValue.value} =`;

    // Format the result to show up to 2 decimal places, but only if necessary
    currentValue.value = result.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    previousValue.value = "";
    currentOperator.value = "";
  }
};
</script>

<template>
  <div class="w-full mt-5">
    <Display :current-value="currentValue || '0'" :lastest-operation="lastOperation || '0'" />
    <div class="bg-secondary h-[350px] mt-3 rounded-xl">
      <div id="numbers-box" class="flex flex-col py-8 px-5">
        <div class="flex justify-around items-center">
          <Box value="AC" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="±" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="%" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="+" @pressed="(evt) => handleOperatorClick(evt)" is-operator />
        </div>

        <div class="flex justify-around mt-2">
          <Box value="7" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="8" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="9" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="-" @pressed="(evt) => handleOperatorClick(evt)" is-operator />
        </div>

        <div class="flex justify-around mt-2">
          <Box value="4" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="5" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="6" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="*" @pressed="(evt) => handleOperatorClick(evt)" is-operator />
        </div>

        <div class="flex justify-around mt-2">
          <Box value="1" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="2" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="3" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="/" @pressed="(evt) => handleOperatorClick(evt)" is-operator />
        </div>

        <div class="flex justify-around mt-2">
          <Box value="00" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="0" @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="." @pressed="(evt) => handleNumberClick(evt)" />
          <Box value="=" @pressed="computeResult" is-operator />
        </div>
      </div>
    </div>
  </div>
</template>
