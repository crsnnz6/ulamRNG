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
        <div class="ulam-modal" @click="(e) => e.stopPropagation()">
            <button @click="handleClose">Close</button>
            <div class="container">
                <div class="iframe-container">
                    <iframe :src="props.ulam.ytLink" frameborder="0"></iframe>
                </div>
                <h1>{{ props.ulam?.ulamName }}</h1>
                <h2>Ingredients</h2>
                <ul v-for="ingredient of props.ulam?.ingredients">
                    <li>{{ ingredient }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    margin-top: 10px;
}

.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
.ulam-modal {
    background-color: white;
    width: 80%;
    max-width: 800px;
    padding: 20px;
    border-radius: 10px;
    color: black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    text-align: left;
}

h1,
h2 {
    font-weight: bold;
}

h1 {
    font-size: 2.5em;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    font-size: 2em;
    color: #666;
}

ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    text-align: left;
}

li {
    display: block;
    margin: 0;
    padding: 0;
    color: #333;
}

button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 20px;
    margin-bottom: 10px;
}

button:hover {
    background-color: darkred;
}
</style>
