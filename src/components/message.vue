<template>
  <teleport to="#message">
    <div
      class="alert alert-dismissible fade show"
      :class="map.get(type)"
      v-if="show"
    >
      {{ message }}
      <button type="button" class="btn-close" @click="closeShow"></button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { typeProps } from "./message";
import useMount from "@/hooks/useMount";
export default defineComponent({
  name: "message",
  props: {
    message: {
      type: String,
      default: "这是一个消息",
    },
    type: {
      type: String as PropType<typeProps>,
      default: "warning",
    },
  },
  setup() {
    useMount("message");
    const map = new Map();
    map.set("success", "alert-success");
    map.set("danger", "alert-danger");
    map.set("warning", "alert-warning");
    const show = ref<boolean>(true);
    const closeShow = () => {
      show.value = false;
    };
    return {
      show,
      closeShow,
      map,
    };
  },
});
</script>

<style scoped>
.alert {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  width: 50%;
  margin: auto;
}
</style>
