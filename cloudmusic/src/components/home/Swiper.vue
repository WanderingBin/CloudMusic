<template>
  <div id="swiper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      images: [],
    });
    onMounted(() => {
      axios.get("http://localhost:3000/banner?type=2").then((res) => {
        state.images = res.data.banners;
      });
    });
    return { state };
  },
};
</script>

<style lang="less">
.van-swipe {
  padding: 0.2rem;
}
.van-swipe-item {
  img {
    width: 7rem;
    height: 2.8rem;
    border-radius: 0.1rem;
  }
}
.van-swipe__indicators {
  margin-bottom: 0.2rem;
}
.van-swipe__indicator {
  width: 0.2rem;
  height: 0.05rem;
  border-radius: 0.05rem;
  background-color: rgba(0, 0, 0, 0.5);
}
.van-swipe__indicator--active {
  background-color: rgba(256, 256, 256);
}
</style>