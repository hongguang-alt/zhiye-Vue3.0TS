<template>
  <div>
    <input type="file" ref="uploadInput" @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { uploadImg } from "@/axios/index";
type beforeUploadFun = (file: File) => boolean;
type loadStatus = "ready" | "loading" | "success" | "error";
export default defineComponent({
  name: "upload",
  props: {
    action: {
      type: String,
    },
    beforeUpload: {
      type: Function as PropType<beforeUploadFun>,
    },
  },
  emits: ["upload-success", "upload-error"],
  setup() {
    const status = ref<loadStatus>("ready");
    const uploadInput = ref<null | HTMLInputElement>(null);
    const handleChange = async (e: Event) => {
      const dom = e.target as HTMLInputElement;
      if (dom.files) {
        const files = Array.from(dom.files);
        const formdata = new FormData();
        formdata.append("file", files[0]);
        try {
          const res = await uploadImg(formdata);
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      }
    };
    return {
      status,
      uploadInput,
      handleChange,
    };
  },
});
</script>

<style></style>
