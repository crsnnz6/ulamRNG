<script setup>
import { ref } from "vue";
import UlamModal from "./components/UlamModal.vue";
import { Wheel } from "vue3-fortune-wheel";
import ulamData from "./data/ulam.json";
import Nav from './components/Nav.vue';

if (!localStorage.getItem("ulamData")) {
  localStorage.setItem("ulamData", JSON.stringify(ulamData));
}

const ulams = ref(JSON.parse(localStorage.getItem("ulamData")));
const openModal = ref(false);
const selectedUlam = ref(null);

const wheel = ref(null);

const data = ref(
  ulams.value.map((ulam) => {
    return {
      id: ulam.id,
      value: ulam.ulamName,
      color: "#ffffff",
      bgColor: getRandomColor(),
    };
  })
);

function getRandomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

const gift = ref(1);

function launchWheel() {
  gift.value = Math.floor(Math.random() * data.value.length) + 1;
  console.log(gift.value);

  setTimeout(() => {
    wheel.value.spin();
  }, 0);

  setTimeout(() => {
    openModal.value = true;
    selectedUlam.value = ulams.value[gift.value - 1];
  }, 5000);
}
</script>

<template>
<Nav></Nav>  
  This is the wheel page.
  <button @click="launchWheel">Spin</button>
  <Wheel v-model="data" ref="wheel" :gift="gift" />

  <div v-for="ulam in ulams">{{ ulam.ulamName }}</div>

  <UlamModal
    v-if="openModal"
    :onClose="() => (openModal = false)"
    :ulam="selectedUlam"
  />
</template>
