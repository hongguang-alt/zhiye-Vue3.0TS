<template>
  <div class="validate-container-input">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputInfo.error }"
      @blur="handleBlur"
      :value="inputInfo.value"
      @input="handleInput"
      v-bind="$attrs"
    />
    <span v-if="inputInfo.error" class="invalid-feedback">{{
      inputInfo.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from "vue";
import mitt from "mitt";
const emailReg = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
export interface InputRules {
  type: "required" | "email";
  message: string;
}
export const emitter = mitt();
export default defineComponent({
  name: "validateInput",
  props: {
    rules: {
      type: Array as PropType<InputRules[]>,
    },
    modelValue: {
      type: String,
    },
  },
  inheritAttrs: false,
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const inputInfo = reactive({
      value: props.modelValue || "",
      error: false,
      message: "",
    });
    const handleInput = (e: KeyboardEvent) => {
      const val = (e.target as HTMLInputElement).value;
      inputInfo.value = val;
      ctx.emit("update:modelValue", val);
    };
    const handleBlur = () => {
      if (!props.rules) return true;
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
      return allPass;
    };
    onMounted(() => {
      emitter.emit("form-item-created", handleBlur);
    });

    return {
      handleBlur,
      inputInfo,
      handleInput,
    };
  },
});
</script>

<style></style>
