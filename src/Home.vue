<script setup>
import { ref } from "vue";
import ulamData from "./data/ulam.json";
import { v4 as uuidv4 } from "uuid";
import UlamHomeCard from "./components/UlamHomeCard.vue";
import Nav from "./components/Nav.vue";
import UlamModal from "./components/UlamModal.vue"; 
import Swal from 'sweetalert2';


const openModal = ref(false); 
const selectedUlam = ref(null); 

const handleCardClick = (ulam) => {

  selectedUlam.value = ulam; 
  openModal.value = true; 
}; 

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
  Swal.fire({
  title: "Good job!",
  text: "You have successfully added an ulam!",
  icon: "success"
});
};

const deleteUlam = (ulamId) => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete this ulam!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your ulam has been deleted.",
      icon: "success"
    });
    ulams.value = ulams.value.filter((ulam) => ulam.id !== ulamId);
  const updatedUlamData = JSON.stringify(ulams.value);
  localStorage.setItem("ulamData", updatedUlamData);
  }
});

};
</script>
<template>
  <div>
    <Nav />
    <div class="main">
      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span @click="showModal = false" class="close">&times;</span>
          <h1>Input an Ulam</h1>
          <div class="modal-input">
            <input
              v-model="newUlam.ulamName"
              type="text"
              placeholder="Ulam Name"
              class="input-field"
            />
            <input
              v-model="newUlam.imageURL"
              type="text"
              placeholder="Ulam Image Link"
              class="input-field"
            />
            <input
              v-model="newUlam.ytLink"
              type="text"
              placeholder="Ulam YT video Link"
              class="input-field"
            />
            <input
              v-model="newUlamIngredients"
              type="text"
              placeholder="Ingredients"
              class="input-field"
            />
            <button @click="addUlam(newUlam)" class="add-button">
              Add Ulam
            </button>
          </div>
        </div>
      </div>
      <div class="row logo">
        <img src="/logo.png" height="250px" class="col" />
        <div class="col">
          <div class="row">
            <button class="generate-ulam-button text-white">
              <router-link to="/WheelVue">Generate</router-link>
            </button>
          </div>
          <div class="row">
            <button @click="showModal = true" class="add-ulam-button">
              ADD ULAM
            </button>
          </div>
        </div>
      </div>

      <!-- Ulam cards -->
      <div class="row row-cols-3 g-3">
        <UlamHomeCard
          v-for="ulam in ulams"
          :key="ulam.id"
          :ulam="ulam"
          :deleteUlam="deleteUlam"
          :onClick="() => handleCardClick(ulam)"
        />
      </div>
      <UlamModal
        v-if="openModal"
        :ulam="selectedUlam"
        :onClose="() => (openModal = false)"
      />
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #faedcd;
  height: 100%;
}
.row {
  padding: 5%;
  margin-left: auto;
  margin-right: auto;
}
.logo {
  margin-left: auto;
  margin-right: auto;
  padding: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
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
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  background-color: black;
}
.add-ulam-button,
.generate-ulam-button {
  width: 380px;
  height: 10vh;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.generate-ulam-button {
  background-color: #FE0100;
}
.add-ulam-button:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transform: translatey(-5px);
  
}

.generate-ulam-button:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transform: translatey(-5px);
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
