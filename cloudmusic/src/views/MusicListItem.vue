<template>歌单详情页</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { reqGetMusicListItem } from "@/api/musicList/musicItem";
export default {
  setup() {
    const data = reactive({});
    onMounted(async () => {
      const route = useRoute();
      let id = route.query.id;
      let res = await reqGetMusicListItem(id);
      console.log(res);
    });
    return { data };
  },
};
</script>

<style>
</style>