import { createRouter, createWebHistory } from "vue-router";

import WheelVue from "@/Wheel.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/WheelVue",

      name: "WheelVue",

      component: WheelVue,
    },
  ],
});
