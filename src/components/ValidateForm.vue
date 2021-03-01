<template>
  <form>
    <slot name="default"></slot>
    <div class="form-submit mt-2" @click.prevent="submit">
      <slot name="submit">
        <button class="btn btn-primary" type="submit">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { emitter } from "./ValidateInput";
export type FunctionSubmit = () => boolean;
export default defineComponent({
  name: "validateForm",
  emits: ["form-submit"],
  setup(props, context) {
    const submitArr: FunctionSubmit[] = [];
    const submit = () => {
      const res = submitArr.map((item) => item()).every((item) => item);
      context.emit("form-submit", res);
    };
    emitter.on("form-item-created", (callback: FunctionSubmit) => {
      submitArr.push(callback);
    });
    onUnmounted(() => {
      emitter.off("form-item-create");
    });
    return {
      submit,
    };
  },
});
</script>

<style></style>
