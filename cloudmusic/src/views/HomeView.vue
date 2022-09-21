<template>
  <TopNav></TopNav>
  <Swiper></Swiper>
  <SwiperCell></SwiperCell>
  <MusicList></MusicList>
  <MyMusicList></MyMusicList>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import Swiper from "@/components/home/Swiper.vue";
import SwiperCell from "@/components/home/SwipeCell.vue";
import MusicList from "@/components/home/MusicList.vue";
import MyMusicList from "@/components/home/MyMusicList.vue";
export default {
  name: "HomeView",
  components: { TopNav, Swiper, SwiperCell, MusicList, MyMusicList },
};
</script>
<style lang="less" scoped>
</style>
