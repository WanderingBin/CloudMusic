<template>
  <TopNav></TopNav>
  <Swiper></Swiper>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import Swiper from "@/components/home/Swiper.vue";
export default {
  name: "HomeView",
  components: { TopNav, Swiper },
};
</script>
<style lang="less" scoped>
</style>
