<template>
  <MyList>
    <template #listName>推荐歌单</template>
    <template #swipeList>
      <van-swipe :loop="false" :width="115">
        <van-swipe-item v-for="item in data.musicList" :key="item.id">
          <router-link :to="{ path: '/musiclistitem', query: { id: item.id } }">
            <div class="content">
              <span class="videoSpan">
                <img :src="item.picUrl" alt="" />
                <span class="iconfont icon-playfill">{{
                  playCount(item.playCount)
                }}</span>
              </span>
              <p>{{ item.name }}</p>
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </template>
  </MyList>
</template>

<script>
import { reqGetMusicList } from "@/api/home";
import MyList from "@/components/MyList/";
import { reactive } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  components: {
    MyList,
  },
  setup() {
    const data = reactive({
      musicList: [],
    });
    onMounted(async () => {
      const res = await reqGetMusicList();
      data.musicList = res.data.result;
    });
    let playCount = computed(() => (count) => {
      if (count < 10000) {
        return count;
      } else if (count >= 10000 || count < 100000000) {
        return (count / 10000).toFixed(1) + "万";
      } else {
        return (count / 100000000).toFixed(1) + "亿";
      }
    });
    return { data, playCount };
  },
};
</script>

<style lang="less">
.videoSpan {
  position: relative;
  .icon-playfill {
    position: absolute;
    bottom: 1.5rem;
    left: 0.5rem;
    width: 1.5rem !important;
    height: 0.4rem !important;
    background-color: rgba(0, 0, 0, 0.36);
    color: #fffffe;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.4rem;
  }
}
</style>