<template>
  <teleport to="#modal">
    <div class="modal d-block" tabindex="-1" v-if="visible">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="modalClose"
            ></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="modalClose"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="modalCheck">
              确认
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMount from "@/hooks/useMount";
export default defineComponent({
  name: "modal",
  props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
  emits: ["modal-close", "modal-check"],
  setup(props, context) {
    useMount("modal");
    const modalClose = () => {
      context.emit("modal-close");
    };
    const modalCheck = () => {
      context.emit("modal-check");
    };
    return {
      modalClose,
      modalCheck,
    };
  },
});
</script>

<style></style>
