<template>
  <MusicListItemTop :playlist="data.playlist"></MusicListItemTop>
</template>

<script>
import { computed, onMounted, reactive } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { reqGetMusicListItem } from "@/api/musicList/musicItem";
import MusicListItemTop from "@/components/MusicListItem/MusicListItemTop.vue";
export default {
  components: {
    MusicListItemTop,
  },
  setup() {
    const data = reactive({
      playlist: {},
    });
    onMounted(async () => {
      const route = useRoute();
      let id = route.query.id;
      let res = await reqGetMusicListItem(id);
      data.playlist = res.data.playlist;
      sessionStorage.setItem("itemDetail", JSON.stringify(data));
    });

    return { data };
  },
};
</script>

<style>
</style>