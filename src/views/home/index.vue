<template>
  <div class="home container">
    <modal
      :visible="visible"
      title="加载更多"
      @modal-close="close"
      @modal-check="close"
    >
      <span>没有更多加载了...</span>
    </modal>
    <div><img src="@/assets/logo.svg" class="img-top" alt="..." /></div>
    <router-link to="/create" tag="div" class="btn btn-primary mt-3"
      >开始写文章</router-link
    >
    <h3 class="mt-3 mb-4">发现精彩</h3>
    <ColumLists :lists="data" />
    <div class="btn btn-outline-primary mt-3 mb-4 w-50" @click="handleModal">
      加载更多
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ColumLists from "@/components/columLists.vue";
import Modal from "@/components/modal.vue";
import { getLists, listProps, ResponseProps } from "@/axios/index";

export default defineComponent({
  name: "home",
  components: {
    ColumLists,
    Modal,
  },
  setup() {
    const data = ref<listProps[]>([]);
    const visible = ref<boolean>(false);
    onMounted(async () => {
      try {
        const res: ResponseProps = await getLists();
        data.value = res.result;
      } catch (e) {
        console.log(e);
      }
    });
    const handleModal = () => {
      visible.value = true;
    };
    const close = () => {
      visible.value = false;
    };
    return {
      data,
      handleModal,
      visible,
      close,
    };
  },
});
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.img-top {
  width: 300px;
}
</style>
