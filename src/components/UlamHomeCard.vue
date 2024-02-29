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
    <div class="card">
        <div class="card-header">
            <h2>{{ props.ulam.ulamName }}</h2>
        </div>
        <div class="card-body">
            <img
                :src="props.ulam.imageURL"
                alt="Ulam Image"
                height="100"
                width="100"
            />
            <iframe
                :src="props.ulam.ytLink"
                width="800"
                height="600"
                frameborder="0"
            ></iframe>
        </div>
        <button @click="props.deleteUlam(props.ulam.id)">Delete</button>
    </div>
</template>
<style scoped>
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
