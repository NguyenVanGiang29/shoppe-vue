import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/store",
      name: "store",
      component: () => import("../views/StoreView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/khunggiosale",
      name: "timesale",
      component: () => import("../views/TimeSaleView.vue"),
    },
    {
      path: "/notication",
      name: "notication",
      component: () => import("../views/NoticationView.vue"),
    },
  ],
});

export default router;
