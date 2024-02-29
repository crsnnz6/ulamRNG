<script setup>
import { ref } from "vue";
import ulamData from "./data/ulam.json";
import { v4 as uuidv4 } from "uuid";
import UlamHomeCard from "./components/UlamHomeCard.vue";

if (!localStorage.getItem("ulamData")) {
  localStorage.setItem("ulamData", JSON.stringify(ulamData));
}

const ulams = ref(JSON.parse(localStorage.getItem("ulamData")));
const newUlamIngredients = ref("");
const newUlam = ref({});

const addUlam = (newUlamObj) => {
  newUlamObj.id = uuidv4();
  newUlamObj.ingredients = newUlamIngredients.value.split(", ");

  ulams.value.push(newUlamObj);
  const updatedUlamData = JSON.stringify(ulams.value);
  localStorage.setItem("ulamData", updatedUlamData);
  newUlam.value = {};
  newUlamIngredients.value = "";
};

const deleteUlam = (ulamId) => {
  ulams.value = ulams.value.filter((ulam) => ulam.id !== ulamId);
  const updatedUlamData = JSON.stringify(ulams.value);
  localStorage.setItem("ulamData", updatedUlamData);
};
</script>
<template>
  <div>
    <input v-model="newUlam.ulamName" type="text" placeholder="Ulam Name" />
    <input
      v-model="newUlam.imageURL"
      type="text"
      placeholder="Ulam Image Link"
    />
    <input
      v-model="newUlam.ytLink"
      type="text"
      placeholder="Ulam YT video Link"
    />
    <input v-model="newUlamIngredients" type="text" placeholder="Ingredients" />
    <button @click="addUlam(newUlam)">Add Ulam</button>
  </div>
  <UlamHomeCard
    v-for="ulam in ulams"
    :key="ulam.id"
    :ulam="ulam"
    :deleteUlam="deleteUlam"
  />
</template>
