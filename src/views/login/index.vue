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
      <template #submit>
        <button class="btn btn-primary w-100" type="submit">登陆</button>
      </template>
    </validate-form>
  </div>
  <Loading v-if="loading" text="加载中......" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput from "@/components/ValidateInput.vue";
import Loading from "@/components/loading.vue";
import { useRouter } from "vue-router";
import { login, ResponseProps } from "../../axios/index";

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
    Loading,
  },
  setup() {
    const router = useRouter();
    const email = ref<string>("");
    const password = ref<string>("");
    const loading = ref<boolean>(false);
    const handleSubmit = async (val: boolean) => {
      if (val) {
        try {
          const res: ResponseProps = await login({
            email: email.value,
            password: password.value,
          });
          loading.value = true;
          if (res.status === 0) {
            router.push("/");
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("token", res.token as string);
            localStorage.setItem("userInfo", JSON.stringify(res.result));
            loading.value = false;
          } else {
            console.log("登陆失败", res.message);
            loading.value = false;
          }
        } catch (e) {
          loading.value = false;
          console.log("登陆失败", e);
        }
      }
    };
    return {
      emailRules,
      passwordRules,
      handleSubmit,
      email,
      password,
      loading,
    };
  },
});
</script>

<style scoped>
.login {
  max-width: 330px;
}
</style>
