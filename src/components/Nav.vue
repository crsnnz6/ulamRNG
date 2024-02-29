<template>
  <nav>
    <ul>
      <li><router-link to="/Home">Home</router-link></li>
      <li><router-link to="/WheelVue">Generate</router-link></li>
      
    </ul>

    <!-- Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span @click="showModal = false" class="close">&times;</span>
        <div class="modal-input">
          <input v-model="newUlam.ulamName" type="text" placeholder="Ulam Name" class="input-field" />
          <input v-model="newUlam.imageURL" type="text" placeholder="Ulam Image Link" class="input-field" />
          <input v-model="newUlam.ytLink" type="text" placeholder="Ulam YT video Link" class="input-field" />
          <input v-model="newUlamIngredients" type="text" placeholder="Ingredients" class="input-field" />
          <button @click="addUlam(newUlam)" class="add-button">Add Ulam</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

const showModal = ref(false);
const newUlam = ref({});
const newUlamIngredients = ref('');
const ulams = ref([]); // Initialize ulams array

const addUlam = (newUlamObj) => {
  newUlamObj.id = uuidv4();
  newUlamObj.ingredients = newUlamIngredients.value.split(", ");

  ulams.value.push(newUlamObj);
  const updatedUlamData = JSON.stringify(ulams.value);
  localStorage.setItem("ulamData", updatedUlamData);
  newUlam.value = {};
  newUlamIngredients.value = "";
  showModal.value = false; // Close the modal after adding Ulam
};

const deleteUlam = (ulamId) => {
  ulams.value = ulams.value.filter((ulam) => ulam.id !== ulamId);
  const updatedUlamData = JSON.stringify(ulams.value);
  localStorage.setItem("ulamData", updatedUlamData);
};

</script>

<style>
/* Optional styling for the navbar */
nav {
  background-color: #333;
  padding: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline;
  margin-right: 20px; /* Increase spacing between navbar items */
  padding: 0 10px; /* Add padding to horizontally center the text */
  color: white;
  font-family: Arial, sans-serif; /* Change font family */
  font-size: 16px; /* Adjust font size */
  cursor: pointer; /* Add cursor pointer for consistency */
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
