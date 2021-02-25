<template>
  <div class="validate-container-input">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputInfo.error }"
      @blur="handleBlur"
      :value="inputInfo.value"
      @input="handleInput"
    />
    <span v-if="inputInfo.error" class="invalid-feedback">{{
      inputInfo.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
const emailReg = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
export interface InputRules {
  type: "required" | "email";
  message: string;
}
export default defineComponent({
  name: "validateInput",
  props: {
    rules: {
      type: Array as PropType<InputRules[]>,
    },
    emial: {
      type: String,
    },
  },
  emits: ["update:emial"],
  setup(props, ctx) {
    const inputInfo = reactive({
      value: props.emial || "",
      error: false,
      message: "",
    });
    const handleInput = (e: KeyboardEvent) => {
      const val = (e.target as HTMLInputElement).value;
      inputInfo.value = val;
      ctx.emit("update:emial", val);
    };
    const handleBlur = () => {
      if (!props.rules) return;
      const allPass = props.rules.every((rule: InputRules) => {
        inputInfo.message = rule.message;
        switch (rule.type) {
          case "required":
            return inputInfo.value.trim() !== "";
          case "email":
            return emailReg.test(inputInfo.value);
          default:
            break;
        }
      });
      inputInfo.error = !allPass;
    };
    return {
      handleBlur,
      inputInfo,
      handleInput,
    };
  },
});
</script>

<style></style>
