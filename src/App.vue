<template>
  <div class="container">
    <GobalHeader :user="user" />
    <!-- <ColumnLists :lists="testData" /> -->
    <ValidateForm @form-submit="onFormSubmit">
      <div>
        <label for="" class="form-label">邮箱</label>
        <ValidateInput :rules="rules" v-model="email" type="text" />
      </div>
      <div>
        <label for="" class="form-label">密码</label>
        <ValidateInput
          :rules="rulespassword"
          v-model="password"
          type="password"
        />
      </div>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import ColumnLists, { ColumnListProps } from "./components/columLists.vue";
import GobalHeader, { UserProps } from "./components/gobalHeader.vue";
import ValidateInput, { InputRules } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
const testData: ColumnListProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    // avatarUrl:
    //   "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatarUrl:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 3,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatarUrl:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 4,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatarUrl:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 5,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatarUrl:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];
const rules: InputRules[] = [
  {
    type: "required",
    message: "填写内容不能为空",
  },
  {
    type: "email",
    message: "填写正确的格式",
  },
];
const rulespassword: InputRules = [
  {
    type: "required",
    message: "填写内容不能为空",
  },
];
const user: UserProps = {
  isLogin: true,
  name: "红光",
};
export default defineComponent({
  name: "App",
  components: {
    // ColumnLists,
    GobalHeader,
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const onFormSubmit = (value) => {
      // 返回验证的值
      console.log(value);
    };
    return {
      testData,
      user,
      rules,
      email,
      password,
      onFormSubmit,
      rulespassword,
    };
  },
});
</script>

<style></style>
