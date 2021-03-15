<template>
  <div>
    <Upload
      :action="action"
      :beforeUpload="beforeUpload"
      @upload-success="handleSuccess"
      @upload-error="handleError"
    ></Upload>
    <validate-form class="form w-50" @form-submit="handleSubmit">
      <label class="mb-3 mt-3">文章标题：</label>
      <validate-input type="text" v-model="title"></validate-input>
      <label class="mb-3 mt-3">文章内容：</label>
      <validate-input type="textarea" v-model="content"></validate-input>
      <template #submit>
        <button class="btn btn-primary mt-3" type="submit">提交</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Upload from "../../components/upload.vue";
import ValidateForm from "@/components/ValidateForm.vue";
import ValidateInput from "@/components/ValidateInput.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { Upload, ValidateForm, ValidateInput },
  name: "create-post",
  setup() {
    const action = ref<string>("");
    const title = ref<string>("");
    const content = ref<string>("");
    const router = useRouter();
    const beforeUpload = () => {
      return true;
    };
    const handleSuccess = () => {
      console.log("上传成功");
    };
    const handleError = () => {
      console.log("上传失败");
    };
    const handleSubmit = (value: boolean) => {
      if (value) {
        router.push("/");
      }
    };
    return {
      action,
      beforeUpload,
      handleSuccess,
      handleError,
      title,
      content,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.form {
  margin: auto;
  margin-top: 20px;
}
</style>
