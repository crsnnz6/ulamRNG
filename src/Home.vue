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
    
</template>