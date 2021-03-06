<template>
  <div>
    <div class="title">
      <img
        src="http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
        alt=""
      />
      <div class="content">
        <h2>Vehicle攻城狮</h2>
        <div class="content-tip">
          半吊子系统和程序狗，沉迷高端理论，日渐消瘦。
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="card-content" :key="item.id" v-for="item in lists">
      <div class="card mb-3 w-100">
        <div class="row g-0">
          <div class="col-md-4 p-2" v-if="item.avatarUrl">
            <img :src="item.avatarUrl" class="left-img" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <p class="card-text">
                <small class="text-muted">{{ item.time }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { lists } from "@/data";
const route = useRoute();
export default defineComponent({
  name: "lists",
  setup() {
    onMounted(() => {
      console.log(route);
    });
    return { lists };
  },
});
</script>

<style scoped>
.title {
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 150px;
}
.title img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.content {
  margin-left: 20px;
}
.content-tip {
  color: rgba(0, 0, 0, 0.4);
}
.divide {
  height: 1px;
  width: 60%;
  background-color: rgba(0, 0, 0, 0.1);
  margin: auto;
}
.card-content {
  margin-top: 20px;
  width: 60%;
  margin: 20px auto;
}
.left-img {
  width: 100%;
  height: 140px;
}
</style>
