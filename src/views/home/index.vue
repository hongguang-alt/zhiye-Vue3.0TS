<template>
  <div class="home container">
    <div><img src="@/assets/logo.svg" class="img-top" alt="..." /></div>
    <div class="btn btn-primary mt-3">开始写文章</div>
    <h3 class="mt-3 mb-4">发现精彩</h3>
    <ColumLists :lists="data" />
    <div class="btn btn-outline-primary mt-3 mb-4 w-50">加载更多</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ColumLists from "@/components/columLists.vue";
import { getLists, listProps, ResponseProps } from "@/axios/index";
export default defineComponent({
  name: "home",
  components: {
    ColumLists,
  },
  setup() {
    const data = ref<listProps[]>([]);
    onMounted(async () => {
      try {
        const res: ResponseProps = await getLists();
        data.value = res.result;
      } catch (e) {
        console.log(e);
      }
    });
    return {
      data,
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
