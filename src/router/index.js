import { createRouter, createWebHistory } from "vue-router";

import WheelVue from "@/Wheel.vue";
import Home from "../Home.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",

      name: "Home",

      component: Home,
    },
    {
      path: "/WheelVue",

      name: "WheelVue",

      component: WheelVue,
    },
  ],
});
