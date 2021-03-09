<template>
  <div class="app">
    <GobalHeader :user="user" />
    <router-view></router-view>
    <div class="bottom">© honggaung版权所有</div>
  </div>
  <Loading v-if="loading" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import GobalHeader, { UserProps } from "./components/gobalHeader.vue";
import Loading from "@/components/loading.vue";
export default defineComponent({
  name: "App",
  components: {
    GobalHeader,
    Loading,
  },
  setup() {
    const store = useStore();
    const user = computed<UserProps>(() => ({
      isLogin: store.state.isLogin,
      name: store.state.userInfo.name,
    }));
    const loading = computed(() => store.state.loading);
    return {
      user,
      loading,
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
