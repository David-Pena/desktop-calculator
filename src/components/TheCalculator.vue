<script setup lang="ts">
import { ref } from "vue";

const lastOperation = ref("");
const currentValue = ref("");
const previousValue = ref("");
const currentOperator = ref("");

const handleNumberClick = (number: string) => {
  currentValue.value += number;
};

const handleOperatorClick = (operator: string) => {
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
    let result = 0;

    switch (currentOperator.value) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = prev / curr;
        break;
    }

    lastOperation.value = `${previousValue.value} ${currentOperator.value} ${currentValue.value} =`;
    currentValue.value = result.toFixed(2);
    previousValue.value = "";
    currentOperator.value = "";
  }
};
</script>

<template>
  <div class="w-full mt-5">
    <div class="flex flex-col items-end">
      <p class="text-[11px] text-primary" style="letter-spacing: 1px">{{ lastOperation }}</p>
      <p class="text-5xl">{{ currentValue }}</p>
    </div>
    <div class="bg-secondary h-[350px] mt-3 rounded-xl">
      <div id="numbers-box" class="flex flex-col py-8 px-5">
        <!-- Row AC +- % + -->
        <div class="flex justify-around items-center">
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleClear">
            <span class="m-auto">AC</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12">
            <div><span class="m-auto">+-</span></div>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12">
            <div><span class="m-auto">%</span></div>
          </div>
          <div class="flex bg-terciary p-3 rounded-xl w-12" @click="handleOperatorClick('+')">
            <span class="text-xl m-auto">+</span>
          </div>
        </div>
        <!-- Row 7 8 9 - -->
        <div class="flex justify-around mt-2">
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('7')">
            <span class="m-auto">7</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('8')">
            <span class="m-auto">8</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('9')">
            <span class="m-auto">9</span>
          </div>
          <div class="flex bg-terciary p-3 rounded-xl w-12" @click="handleOperatorClick('-')">
            <span class="text-xl m-auto">-</span>
          </div>
        </div>
        <!-- Row 4 5 6 * -->
        <div class="flex justify-around mt-2">
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('4')">
            <span class="m-auto">4</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('5')">
            <span class="m-auto">5</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('6')">
            <span class="m-auto">6</span>
          </div>
          <div class="flex bg-terciary p-3 rounded-xl w-12" @click="handleOperatorClick('*')">
            <span class="text-xl m-auto">*</span>
          </div>
        </div>
        <!-- Row 1 2 3 / -->
        <div class="flex justify-around mt-2">
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('1')">
            <span class="m-auto">1</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('2')">
            <span class="m-auto">2</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('3')">
            <span class="m-auto">3</span>
          </div>
          <div class="flex bg-terciary p-3 rounded-xl w-12" @click="handleOperatorClick('/')">
            <span class="text-xl m-auto">/</span>
          </div>
        </div>
        <!-- Row 00 0 . = -->
        <div class="flex justify-around mt-2">
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('00')">
            <span class="m-auto">00</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('0')">
            <span class="m-auto">0</span>
          </div>
          <div class="flex bg-lightdark p-3 rounded-xl w-12" @click="handleNumberClick('.')">
            <span class="m-auto">.</span>
          </div>
          <div class="flex bg-terciary p-3 rounded-xl w-12" @click="computeResult">
            <span class="text-xl m-auto">=</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
