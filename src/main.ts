import { createApp } from "vue";
import App from "./App.vue";
import router from "./route/index";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
