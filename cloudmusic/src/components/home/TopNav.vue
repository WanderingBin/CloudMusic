<template>
  <div class="topNav">
    <div class="iconfont icon-31liebiao" @click="showPopup"></div>
    <van-popup
      v-model:show="show"
      position="left"
      :style="{ height: '100%', width: '80%' }"
    >
      <UserSetting></UserSetting>
    </van-popup>
    <router-link to="search">
      <div class="search">
        <span class="iconfont icon-search"></span>
        <p>大家都在搜...</p>
      </div>
    </router-link>
    <div class="sing iconfont icon-voicefill"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import UserSetting from "../Global/UserSetting.vue";
export default {
  components: { UserSetting },
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
</script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  margin-top: 0.2rem;
  height: 0.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.iconfont {
  color: #333333;
}
.search {
  height: 0.7rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e7e7;
  border-radius: 0.35rem;
  .iconfont {
    font-size: 0.32rem;
    color: #9c9c9c;
    margin-right: 0.1rem;
  }
  p {
    font-size: 0.32rem;
    color: #cdcdcd;
  }
}
</style>