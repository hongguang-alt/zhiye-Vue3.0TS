<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="user && !user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2" @click.prevent="handleLogin"
          >登陆</a
        >
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <DropDown :title="`您好 , ${user && user.name}`">
        <DropDownItem> 新建文章</DropDownItem>
        <DropDownItem @click="logout"> 退出登录 </DropDownItem>
      </DropDown>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "./dropDown.vue";
import DropDownItem from "./dropDownItem.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export interface UserProps {
  isLogin: boolean;
  name?: string;
}
export default defineComponent({
  name: "gobalHeader",
  components: {
    DropDown,
    DropDownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const handleLogin = () => {
      router.push({ name: "login" });
    };
    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("userInfo");
      store.commit("setLogin", false);
      router.push({ name: "login" });
    };
    return {
      handleLogin,
      logout,
    };
  },
});
</script>

<style></style>
