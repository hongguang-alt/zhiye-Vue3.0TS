<template>
  <teleport to="#message"></teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMount from "@/hooks/useMount";

export default defineComponent({
  name: "message",
  setup() {
    useMount("message");
  },
});
</script>

<style></style>
