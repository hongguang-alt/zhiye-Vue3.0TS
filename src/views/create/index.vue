<template>
  <div>
    <Upload
      :action="action"
      :beforeUpload="beforeUpload"
      @upload-success="handleSuccess"
      @upload-error="handleError"
    ></Upload>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Upload from "../../components/upload.vue";
export default defineComponent({
  components: { Upload },
  name: "create-post",
  setup() {
    const action = ref<string>("");
    const beforeUpload = () => {
      return true;
    };
    const handleSuccess = () => {
      console.log("上传成功");
    };
    const handleError = () => {
      console.log("上传失败");
    };
    return {
      action,
      beforeUpload,
      handleSuccess,
      handleError,
    };
  },
});
</script>

<style></style>
