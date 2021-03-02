<template>
  <div class="login mx-auto p-3">
    <h3>账号登陆</h3>
    <validate-form @form-submit="handleSubmit">
      <label class="mb-1">邮箱：</label>
      <validate-input
        type="text"
        :rules="emailRules"
        v-model="email"
      ></validate-input>
      <label class="mb-1">密码：</label>
      <validate-input
        type="password"
        :rules="passwordRules"
        v-model="password"
      ></validate-input>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput from "@/components/ValidateInput.vue";
const emailRules = [
  {
    type: "required",
    message: "请填写邮箱",
  },
  {
    type: "email",
    message: "请填写正确的格式",
  },
];
const passwordRules = [
  {
    type: "required",
    message: "请输入你的密码",
  },
];
export default defineComponent({
  name: "login",
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const handleSubmit = (val: boolean) => {
      console.log(111, val);
    };
    return {
      emailRules,
      passwordRules,
      handleSubmit,
      email,
      password,
    };
  },
});
</script>

<style scoped>
.login {
  max-width: 330px;
}
</style>
