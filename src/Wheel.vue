<script setup>
import { ref } from "vue";
import UlamModal from "./components/UlamModal.vue";

const openModal = ref(false);
const selectedUlam = ref(null);

</script>

<template>
    This is the wheel page.

    <UlamModal v-if="openModal" :onClose="() => openModal = false" :ulam="selectedUlam" />
</template>