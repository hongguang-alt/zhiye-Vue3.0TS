import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";
import Detail from "../views/detail/index.vue";

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
    path: "/detail/:id",
    name: "detail",
    component: Detail,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
