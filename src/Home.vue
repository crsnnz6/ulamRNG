<template>
  <div>
    <Nav/>
    <button @click="showModal = true" class="add-ulam-button">Add Ulam</button>
    <div class="main">
      <!-- <img href="../public/logo.png" height="200px"> -->
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

    <!-- Ulam cards -->
    <UlamHomeCard
      v-for="ulam in ulams"
      :key="ulam.id"
      :ulam="ulam"
      :deleteUlam="deleteUlam"
      :onClick="() => handleCardClick(ulam)"
    />
    <UlamModal
        v-if="openModal"
        :ulam="selectedUlam"
        :onClose="() => (openModal = false)"
    />//

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ulamData from "./data/ulam.json";
import { v4 as uuidv4 } from "uuid";
import UlamHomeCard from "./components/UlamHomeCard.vue";
import Nav from './components/Nav.vue';
import UlamModal from "./components/UlamModal.vue"; //

const openModal = ref(false);//
const selectedUlam = ref(null);//

const handleCardClick = (ulam) => {//
    selectedUlam.value = ulam;//
    openModal.value = true;//
};//

if (!localStorage.getItem("ulamData")) {
  localStorage.setItem("ulamData", JSON.stringify(ulamData));
}

const ulams = ref(JSON.parse(localStorage.getItem("ulamData")));
const newUlamIngredients = ref("");
const newUlam = ref({});
const showModal = ref(false);

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

<style scoped>
.main{
  background-color: #FAEDCD;
  height: 100%;
}
/* Modal styles */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.modal-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-field {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-ulam-button {
  margin-left: 1750px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

.add-ulam-button:hover {
  background-color: #0056b3;
}

.close {
  color: #aaa;
  align-self: flex-end;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
