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
  This is the main page

  <RouterView />

  <RouterLink to="WheelVue">Wheel</RouterLink>
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
  <div v-for="ulam in ulams" class="card">
    <div class="card-header">
      <h2>{{ ulam.ulamName }}</h2>
    </div>
    <div class="card-body">
      <img :src="ulam.imageURL" alt="Ulam Image" height="100" width="100" />
      <p>
        Click <a :href="ulam.ytLink" target="_blank">here</a> for the tutorial.
      </p>
    </div>
    <button @click="deleteUlam(ulam.id)">Delete</button>
  </div>
</template>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
}

.card-header {
  background-color: #f2f2f2;
  padding: 10px;
}

.card-header h2 {
  margin: 0;
}

.card-body {
  padding: 20px;
}

.card-body img {
  max-width: 100%;
  height: auto;
}

.card-body p {
  margin-top: 10px;
}

.card-body a {
  color: blue;
  text-decoration: none;
}

.card-body a:hover {
  text-decoration: underline;
}
</style>
