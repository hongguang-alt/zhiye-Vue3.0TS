<template>
  <div class="app">
    <GobalHeader :user="user" />
    <router-view></router-view>
    <div class="bottom">© honggaung版权所有</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GobalHeader, { UserProps } from "./components/gobalHeader.vue";
const user: UserProps = {
  isLogin: true,
  name: "红光",
};
export default defineComponent({
  name: "App",
  components: {
    GobalHeader,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const onFormSubmit = (value) => {
      // 返回验证的值
      console.log(value);
    };
    return {
      user,
      email,
      password,
      onFormSubmit,
    };
  },
});
</script>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
}
.bottom {
  width: 100%;
  text-align: center;
  position: absolute;
  padding: 20px;
  color: #6c757d;
  background-color: #f8f9fa;
  bottom: 0;
}
</style>
