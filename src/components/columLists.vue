<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="item in columnLists" :key="item.id">
      <div class="card">
        <div class="card-body text-center">
          <img
            :src="item.avatarUrl"
            :alt="item.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">
            {{ item.description }}
          </p>
          <a class="btn btn-outline-primary">去专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
export interface ColumnListProps {
  id: number;
  avatarUrl?: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: "columLists",
  props: {
    lists: {
      type: Array as PropType<ColumnListProps[]>,
      request: true,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    const columnLists = computed(() => {
      return props.lists.map((item) => {
        if (!item.avatarUrl) {
          item.avatarUrl = require("@/assets/logo.png");
        }
        return item;
      });
    });
    return {
      columnLists,
    };
  },
});
</script>

<style scoped></style>
