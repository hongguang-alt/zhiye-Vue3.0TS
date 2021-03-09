<template>
  <teleport to="#back">
    <div class="loading">
      <div>
        <div class="spinner-border">
          <span class="visually-hidden">{{ text }}</span>
        </div>
        <div>{{ text }}</div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMount from "@/hooks/useMount";

export default defineComponent({
  name: "loading",
  props: {
    text: {
      type: String,
      default: "加载中......",
    },
  },
  setup() {
    useMount("back");
  },
});
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
