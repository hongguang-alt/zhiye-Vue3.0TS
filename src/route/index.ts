import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";
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

router.beforeEach((to, _form, next) => {
  // 判断登陆信息
  const isLogin = localStorage.getItem("isLogin") || "false";
  const userInfo = localStorage.getItem("userInfo") || "{}";
  const token = localStorage.getItem("token") || "";
  if (JSON.parse(isLogin)) {
    store.commit("setLogin", true);
    store.commit("setUserInfo", JSON.parse(userInfo));
    store.commit("setToken", token);
  }
  next();
});
export default router;
