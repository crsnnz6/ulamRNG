<script setup>
import { ref } from "vue";
import ulamData from "./data/ulam.json";
import { v4 as uuidv4 } from "uuid";


if (!localStorage.getItem("ulamData")) {
  localStorage.setItem("ulamData", JSON.stringify(ulamData));
}

const ulams = ref(JSON.parse(localStorage.getItem("ulamData")));
const newUlamIngredients = ref("");
const newUlam = ref({});
</script>
<template>

  <RouterView />
 
</template>
