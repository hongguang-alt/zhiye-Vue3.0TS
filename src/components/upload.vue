<template>
  <div>
    <div class="upload" @click="handleClick">
      <span class="upload-text" v-if="status === 'ready'">点击上传</span>
      <span class="upload-text" v-if="status === 'loading'">上传中...</span>
      <div v-if="status === 'success'" class="upload-img">
        <img :src="result && result.url" alt="" />
      </div>
      <span class="upload-text" v-if="status === 'error'">上传失败</span>
    </div>
    <input type="file" ref="uploadInput" class="input" @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { uploadImg, ResponseProps } from "@/axios/index";
type beforeUploadFun = (file: File) => boolean;
type loadStatus = "ready" | "loading" | "success" | "error";
type resultProps = {
  url: string;
};
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
  setup(props, context) {
    const status = ref<loadStatus>("ready");
    const uploadInput = ref<null | HTMLInputElement>(null);
    const result = ref<resultProps>({ url: "" });
    const handleChange = async (e: Event) => {
      status.value = "loading";
      const dom = e.target as HTMLInputElement;
      if (dom.files) {
        const files = Array.from(dom.files);
        const formdata = new FormData();
        formdata.append("file", files[0]);
        try {
          const res: ResponseProps = await uploadImg(formdata);
          if (res.status === 0) {
            result.value = res.result;
            status.value = "success";
            context.emit("upload-success", res.result);
          }
        } catch (e) {
          console.log(e);
          status.value = "error";
          context.emit("upload-error", e);
        }
      }
    };
    const handleClick = () => {
      if (uploadInput.value) {
        uploadInput.value.click();
      }
    };
    return {
      status,
      uploadInput,
      handleChange,
      handleClick,
      result,
    };
  },
});
</script>

<style scoped>
.upload {
  width: 50%;
  height: 100px;
  border: 2px dashed rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 100px;
  color: rgba(0, 0, 0, 0.8);
}
.upload:hover {
  border: 2px dashed #0d6efd;
}
.input {
  display: none;
}
.upload-img img {
  object-fit: cover;
  width: 100%;
  height: 100px;
  font-size: 0;
}
</style>
