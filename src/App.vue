<script setup>
import {ref} from "vue"
import ulamData from "./data/ulam.json"
import UlamCard from './components/UlamCard.vue';

const ulams = ref(ulamData);
</script>
<template>
  This is the main page
  <div v-for="ulam in ulams" class="card">
    <div class="card-header">
      <h2>{{ ulam.ulamName }}</h2>
    </div>
    <div class="card-body">
      <img :src="ulam.imageURL" alt="Ulam Image" height="100" width="100">
      <p>Click <a :href="ulam.ytLink" target="_blank">here</a> for the tutorial.</p>
    </div>
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