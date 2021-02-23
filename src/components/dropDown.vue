<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="setIsOpen"
      >{{ title }}</a
    >
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useClickOutSide from "../hooks/useClickOutside";
export default defineComponent({
  name: "dropDowm",
  components: {},
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const setIsOpen = () => {
      console.log(isOpen.value);
      isOpen.value = !isOpen.value;
    };
    const dropdownRef = ref<null | HTMLElement>(null);
    const clickOutside = useClickOutSide(dropdownRef);
    watch(clickOutside, () => {
      if (isOpen.value && clickOutside.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      setIsOpen,
      dropdownRef,
    };
  },
});
</script>

<style></style>
