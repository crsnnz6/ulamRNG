<script setup>
const props = defineProps({
  ulam: {
    imageURL: String,
    ytLink: String,
    ulamName: String,
    ingredients: Array,
  },
  onClose: Function,
});

function handleClose() {
  props.onClose();
}

console.log(props.ulam);
</script>

<template>
  <div class="backdrop" @click="handleClose">
    <div class="modal" @click="(e) => e.stopPropagation()">
      <button @click="handleClose">Close</button>
      <div class="container">
        <img :src="props.ulam?.imageURL" alt="Ulam" />
        <h1>{{ props.ulam?.ulamName }}</h1>
        <h2>Ingredients</h2>
        <ul v-for="ingredient of props.ulam?.ingredients">
          <li>{{ ingredient }}</li>
        </ul>
        <a target="_blank" :href="props.ulam?.ytLink">Video Link</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100svw;
  height: 100svh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 5svh 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  margin: auto;
  background-color: white;
  min-width: 300px;
  color: black;
}
</style>
