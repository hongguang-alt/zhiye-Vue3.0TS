import { onUnmounted } from "vue";

// 挂载
const useMount = (id: string) => {
  const dom = document.createElement("div");
  dom.id = id;
  document.body.appendChild(dom);
  onUnmounted(() => {
    document.body.removeChild(dom);
  });
};

export default useMount;
