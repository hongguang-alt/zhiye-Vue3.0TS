import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";
import Lists from "../views/lists/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/lists/:id",
    name: "lists",
    component: Lists,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
