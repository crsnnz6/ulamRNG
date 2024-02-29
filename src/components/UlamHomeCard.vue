<script setup>
import { defineProps } from "vue";
const props = defineProps({
    ulam: {
        id: String,
        imageURL: String,
        ytLink: String,
        ulamName: String,
        ingredients: Array,
    },
    deleteUlam: Function,
});
</script>
<template>
  <div class="card-list">
      <div class="card col">
          <div class="card-body" @click="onClick">
              <img
                  :src="props.ulam.imageURL"
                  alt="Ulam Image"
                  max-width="100%"
                  height="20px"
                  display="block"
              />
          </div>
          <div class="card-header">
              <a>{{ props.ulam.ulamName }}</a>
          </div>
          <button @click="props.deleteUlam(props.ulam.id)" class="delButton">Delete</button>
      </div>
  </div>
</template>
<style scoped>
.card-list {
  width: 90%;
  max-width: 400px;
}
.card {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  padding: 1.25rem;
  position: relative;
  transition: 0.15s ease-in;
  color:#000;

}
.card:hover,
.card:focus-within {
  box-shadow: 0 0 0 2px #16c79a, 0 10px 60px 0 rgba(#000, 0.1);
  transform: translatey(-5px);
}
.card-header {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header a {
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.25;
  padding-right: 1rem;
  text-decoration: none;
  color: inherit;
  will-change: transform;
}
.card-header after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.card-body {
  padding: 20px;
}

.card-body img {
  max-width: 100%;
  height: 250px;
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
.delButton{
  background-color: #FE0100;
  color: white;
  border: #FE0100;
}

.delButton:hover{
  background-color: black;

}
</style>