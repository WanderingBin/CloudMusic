<template>
  <div class="vipsongs">
    <div class="left">
      <span class="iconfont icon-musicfill"></span>
      <span>含<i>9</i>首VIP专享歌曲</span>
    </div>
    <div class="right">
      <span>vip首月0.88元</span>
      <span class="iconfont icon-right"></span>
    </div>
  </div>
  <div class="controls">
    <div class="playall">
      <span class="iconfont icon-video_fill_light"></span>
      <span>播放全部</span>
      <span>（{{ length }}）</span>
    </div>
    <div class="musiclist">
      <span class="iconfont icon-down"></span>
      <span class="iconfont icon-24gl-playlistMusic3"></span>
    </div>
  </div>
  <div class="songslist">
    <div class="song" v-for="(item, index) in songs" :key="item.id">
      <div class="id">{{ index + 1 }}</div>
      <div class="songname" @click="playMusic(item, index)">
        <p>{{ item.name }}</p>
        <div>
          <span class="quality" v-show="item.sq != null">SQ</span>
          <span v-for="(item1, i) in item.ar">
            {{ item1.name }}
          </span>
        </div>
      </div>
      <div class="more">
        <span class="iconfont icon-shipin" v-if="item.mv"> </span>
        <span class="iconfont icon-liebiao-dian"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { nextTick } from "vue";
import { mapMutations, mapState } from "vuex";
export default {
  props: ["songs"],
  setup(props) {
    const data = reactive({
      songs: "",
    });
    return { data };
  },
  methods: {
    ...mapState(["playlist", "playlistIndex"]),
    ...mapMutations([
      "updateIsBtnShow",
      "updatePlaylist",
      "updatePlaylistIndex",
      "updateAr",
    ]),
    playMusic: function (item, index) {
      this.updatePlaylist(this.songs);
      this.updatePlaylistIndex(index);
      this.updateIsBtnShow(false);
      this.$store.dispatch("getLyric", item.id);
    },
  },
  computed: {
    length() {
      return this.songs.length;
    },
  },
};
</script>

<style lang="less" scoped>
.vipsongs {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  background-color: #ebebeb;
  transform: translateY(-0.1rem);
  border-radius: 0.2rem 0.2rem 0 0;
  justify-content: space-between;
  border-bottom: 1px solid #dadcdb;
  .left {
    margin-left: 0.2rem;
    span {
      font-size: 0.32rem;
      vertical-align: middle;
    }
    i {
      font-style: normal;
      color: #5b85b3;
      margin: 0 0.1rem;
    }
  }
  .left span:nth-child(1) {
    color: #ed6c6c;
    margin-right: 0.2rem;
  }
  .right {
    color: #96979a;
  }
  .right span:last-child {
    vertical-align: middle;
  }
}
.controls {
  position: sticky;
  top: 0.8rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  background-color: #fff;
  .playall span:first-child {
    font-size: 0.6rem;
    color: #fe4a3b;
    vertical-align: middle;
    margin-right: 0.2rem;
  }
  .playall span:last-child {
    font-size: 0.24rem;
    color: #999999;
  }
  .musiclist span:first-child {
    margin-right: 0.2rem;
  }
}
.songslist {
  padding-bottom: 1rem;

  .song {
    display: flex;
    justify-content: space-around;
    height: 1rem;
    align-items: center;
    .id {
      font-size: 12px;
      color: #999;
    }
    .songname {
      width: 4.5rem;
      p {
        width: 4rem;
        overflow: hidden;
        white-space: nowrap;
      }
      div span:first-child {
        display: inline-block;
        font-size: 0.24rem;
        margin-right: 0.1rem;
        border: 1px solid #e85151;
        color: #e85151;
        border-radius: 0.08rem;
      }
      div {
        overflow: hidden;
        white-space: nowrap;
      }
      div span {
        font-size: 0.24rem;
        color: #999;
      }
    }
    .more {
      width: 1.8rem;
    }
    .more span {
      margin: 0 0.2rem;
      color: #999;
    }
    .more span:last-child {
      display: inline-block;
      float: right;
    }
  }
}
</style>