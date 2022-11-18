<template>
  <div class="back">
    <span class="iconfont icon-xitongfanhui" @click="goBack"></span>
  </div>
  <div class="avatar">
    <img :src="data.pic" alt="" />
  </div>
  <p>{{ data.name }}位云村村民</p>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      pic: localStorage.getItem("pic"),
      name: localStorage.getItem("name"),
    });
    const router = useRouter();
    function goBack() {
      router.back();
    }
    return { data, goBack };
  },
};
</script>

<style lang="less" scoped>
.back {
  height: 1rem;
  line-height: 1rem;
  span {
    font-size: 0.5rem;
    margin-left: 0.2rem;
  }
}
.avatar {
  text-align: center;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
}
p {
  text-align: center;
  font-size: 0.4rem;
}
</style>