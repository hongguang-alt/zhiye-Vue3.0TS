import Message from "./message.vue";
import { createApp } from "vue";
export type typeProps = "warning" | "danger" | "success";

const message = (type: typeProps, message: string, timeout = 3000) => {
  const app = createApp(Message, {
    type,
    message,
  });
  const dom = document.createElement("div");
  app.mount(dom);
  document.body.appendChild(dom);
  setTimeout(() => {
    app.unmount(dom);
    document.body.removeChild(dom);
  }, timeout);
};

export default message;
