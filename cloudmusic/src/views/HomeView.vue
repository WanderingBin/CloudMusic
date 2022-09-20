<template>
  <TopNav></TopNav>
  <Swiper></Swiper>
  <SwiperCell></SwiperCell>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import Swiper from "@/components/home/Swiper.vue";
import SwiperCell from "@/components/home/SwipeCell.vue";
export default {
  name: "HomeView",
  components: { TopNav, Swiper, SwiperCell },
};
</script>
<style lang="less" scoped>
</style>
