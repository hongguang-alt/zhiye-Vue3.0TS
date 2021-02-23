<template>
  <li class="dropdown-item" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "dropDownItem",
  props: {
    disabled: {
      type: Boolean,
    },
  },
});
</script>

<style>
.dropdown-item.is-disabled {
  pointer-events: none;
  background-color: transparent;
  color: #6c757d;
}
</style>
