import { ref, Ref, onMounted, onUnmounted } from "vue";

// 判断是否在外侧
const useClickOutside = (dropdownRef: Ref<HTMLElement | null>) => {
  const clickOutside = ref(false);
  const handleClickoutSide = (e: MouseEvent) => {
    if (dropdownRef.value) {
      if (dropdownRef.value.contains(e.target as HTMLElement)) {
        clickOutside.value = false;
      } else {
        clickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handleClickoutSide);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleClickoutSide);
  });
  return clickOutside;
};

export default useClickOutside;
