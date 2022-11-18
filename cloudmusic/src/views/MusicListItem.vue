<template>
  <MusicListItemTop :playlist="data.playlist"></MusicListItemTop>
  <MusicListItemAll :songs="data.songs"></MusicListItemAll>
</template>

<script>
import { computed, onMounted, reactive } from "@vue/runtime-core";
import {
  reqGetMusicListItem,
  reqGetMusicListSongs,
} from "@/api/musicList/musicItem";
import MusicListItemTop from "@/components/MusicListItem/MusicListItemTop.vue";
import MusicListItemAll from "@/components/MusicListItem/MusicListItemAll.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    MusicListItemTop,
    MusicListItemAll,
  },
  setup() {
    const data = reactive({
      playlist: {},
      songs: [],
    });
    onMounted(async () => {
      const route = useRoute();
      let id = route.query.id;
      //获取歌单详情
      let res = await reqGetMusicListItem(id);
      data.playlist = res.data.playlist;
      // 获取歌单歌曲
      let result = await reqGetMusicListSongs(id);
      data.songs = result.data.songs;
    });

    return { data };
  },
};
</script>

<style>
</style>