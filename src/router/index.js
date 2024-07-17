import { createRouter, createWebHistory } from "vue-router";
import home from "../components/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../components/blog.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/contact.vue"),
    },
    ,
    {
      path: "/about",
      name: "about",
      component: () => import("../components/about.vue"),
    },
  ],
});

export default router;
