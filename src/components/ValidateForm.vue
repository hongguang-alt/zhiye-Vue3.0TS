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
import { emitter } from "./ValidateInput.vue";
export type FunctionSubmit = () => boolean;
export default defineComponent({
  name: "validateForm",
  emits: ["form-submit"],
  setup(props, context) {
    let submitArr: FunctionSubmit[] = [];
    const submit = () => {
      const res = submitArr.map((item) => item()).every((item) => item);
      context.emit("form-submit", res);
    };
    const addSubmit = (callback: FunctionSubmit | undefined) => {
      if (callback) {
        submitArr.push(callback);
      }
    };
    emitter.on("form-item-created", addSubmit);
    onUnmounted(() => {
      emitter.off("form-item-created", addSubmit);
      submitArr = [];
    });
    const clearFormItem = () => {
      emitter.emit("clear-form");
    };
    return {
      submit,
      clearFormItem,
    };
  },
});
</script>

<style></style>
