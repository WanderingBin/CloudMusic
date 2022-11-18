<template>
  <img :src="musicList.al.picUrl" alt="" class="bcImg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <span class="iconfont icon-unfold" @click="updateDetailShow"></span>
    </div>
    <div class="name">
      <Vue3Marquee>{{ musicList.name }}</Vue3Marquee>
      <span v-for="(item, i) in musicList.ar" :key="item">
        {{ item.name }}</span
      >
      <span class="iconfont icon-right"></span>
    </div>
    <div class="detailTopRight">
      <span class="iconfont icon-share"></span>
    </div>
  </div>
  <div class="detailContent">
    <transition>
      <div v-show="!isLyricShow">
        <img
          src="@/assets/needle-ab.png"
          alt=""
          class="needle_ab"
          :class="{ needle_ab_active: !isbtnshow }"
        />
        <img src="@/assets/cd.png" alt="" class="cd" />
        <img
          :src="musicList.al.picUrl"
          alt=""
          class="picUrl"
          :class="isbtnshow ? 'picUrl_pause' : 'picUrl_active'"
          @click="isLyricShow = true"
        />
      </div>
    </transition>
    <transition>
      <div class="lyricList" v-show="isLyricShow" ref="lyricList">
        <p
          v-for="(item, index) in lyric"
          :key="index"
          :class="{
            active:
              currentTime * 1000 >= item.time && currentTime * 1000 <= item.pre,
          }"
          @click="isLyricShow = false"
        >
          <span v-if="item">
            {{ item.lrc }}
          </span>
        </p>
      </div>
    </transition>
  </div>
  <div class="detailFooter">
    <div class="top">
      <span class="iconfont icon-like"></span>
      <span class="iconfont icon-down"></span>
      <span class="iconfont icon-voice"></span>
      <span class="iconfont icon-comment"></span>
      <span class="iconfont icon-liebiao-dian"></span>
    </div>
    <div class="center">
      <span>{{ currentSec }}</span>
      <input
        type="range"
        class="range"
        min="0"
        :max="duration"
        ref="range"
        v-model="currentTime"
      />
      <span>{{ durationSec }}</span>
    </div>
    <div class="bottom">
      <span class="iconfont icon-xunhuanbofang"></span>
      <span
        class="iconfont icon-SanMiAppoutlinei2"
        @click="switchMusic(-1)"
      ></span>
      <span class="iconfont icon-bofang" v-if="isbtnshow" @click="play"></span>
      <span
        class="iconfont icon-zanting"
        v-else="isbtnshow"
        @click="play"
      ></span>
      <span
        class="iconfont icon-SanMiAppoutlinei"
        @click="switchMusic(1)"
      ></span>
      <span class="iconfont icon-24gf-playlist"></span>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  props: ["musicList", "isbtnshow", "play", "updateTime", "addDuration"],
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      isLyricShow: false,
    };
  },
  mounted() {
    this.addDuration();
    this.updateTime();
  },
  methods: {
    ...mapMutations([
      "updateDetailShow",
      "updatePlaylistIndex",
      "updateIsBtnShow",
      "updateDuration",
    ]),
    switchMusic(value) {
      let index = this.playlistIndex + value;
      if (index < 0) {
        this.updatePlaylistIndex(this.playlist.length - 1);
      } else if (index > this.playlist.length - 1) {
        this.updatePlaylistIndex(0);
      } else {
        this.updatePlaylistIndex(index);
        this.updateIsBtnShow(false);
        this.updateTime();
      }
    },
  },
  computed: {
    ...mapState([
      "lyricList",
      "currentTime",
      "playlistIndex",
      "playlist",
      "duration",
    ]),
    lyric: function () {
      let arr;
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/\n/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
          }
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          return { min, sec, mill, lrc, time };
        });
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
      return arr;
    },
    currentSec: function () {
      let seconds = parseInt(this.currentTime);
      let min =
        Math.floor(seconds / 60) >= 10
          ? Math.floor(seconds / 60)
          : "0" + Math.floor(seconds / 60);
      seconds -= 60 * min;
      let sec = seconds >= 10 ? seconds : "0" + seconds;
      return min + ":" + sec;
    },
    durationSec: function () {
      let seconds = parseInt(this.duration);
      let min =
        Math.floor(seconds / 60) >= 10
          ? Math.floor(seconds / 60)
          : "0" + Math.floor(seconds / 60);
      seconds -= 60 * min;
      let sec = seconds >= 10 ? seconds : "0" + seconds;
      return min + ":" + sec;
    },
  },
  watch: {
    currentTime: function (newValue) {
      let p = document.querySelector(".active");
      if (p && this.$refs.lyricList && p.offsetTop > 200) {
        this.$refs.lyricList.scrollTop = p.offsetTop - 200;
      } else {
        this.$refs.lyricList.scrollTop = -50;
      }
      this.$refs.range.style.cssText = `background-size:${
        (this.currentTime / this.duration) * 100
      }% 100%`;
      if (newValue === this.duration) {
        this.updatePlaylistIndex(this.playlistIndex + 1);
      }
      this.addDuration();
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.bcImg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(20px) brightness(70%);
}
.detailTop {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  color: rgb(255, 255, 255);
  .detailTopLeft {
    span {
      line-height: 1rem;
      padding-left: 0.2rem;
    }
  }
  .name {
    text-align: center;
    margin-top: 0.1rem;
    padding: 0 1rem;
    span {
      font-size: 0.28rem;
      color: rgb(218, 218, 218);
    }
  }
  .detailTopRight {
    span {
      line-height: 1rem;
      padding-right: 0.2rem;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.detailContent {
  width: 100%;
  height: 11.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .lyricList {
    width: 100%;
    height: 8rem;
    padding-top: 2rem;
    overflow: scroll;
    scroll-behavior: smooth;
    p {
      text-align: center;
      font-size: 0.32rem;
      color: rgba(255, 255, 255, 0.701);
      span {
        height: 0.8rem;
        line-height: 0.8rem;
      }
    }
    .active {
      color: rgb(255, 255, 255);
      font-size: 0.36rem;
    }
  }
  .needle_ab {
    width: 2.5rem;
    height: 4rem;
    margin-left: 1rem;
    position: absolute;
    transform: rotate(-9deg);
    transform-origin: left top;
    transition: all 2s;
  }
  .needle_ab_active {
    width: 2.5rem;
    height: 4rem;
    margin-left: 1rem;
    position: absolute;
    transform: rotate(3deg);
    transform-origin: left top;
    transition: all 1s;
  }
  .cd {
    width: 5rem;
    height: 5rem;
    padding-top: 3rem;
    position: absolute;
    right: 1.1rem;
    z-index: -1;
  }
  .picUrl {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-top: 3.9rem;
    margin-left: 0.4rem;
    animation: picUrl_rotate 10s linear infinite;
  }
  .picUrl_active {
    animation-play-state: running;
  }
  .picUrl_pause {
    animation-play-state: paused;
  }
  @keyframes picUrl_rotate {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
.detailFooter {
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      display: block;
      font-size: 0.4rem;
      color: rgb(255, 255, 255);
    }
  }
  .center {
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .range {
      height: 0.04rem;
    }
    span {
      display: inline-block;
      color: #ffffff;
    }
    input[type="range"] {
      -webkit-appearance: none;
      width: 70%;
      background: rgba(255, 255, 255, 0.5);
      background-image: linear-gradient(#ffffff, #ffffff);
      background-repeat: no-repeat;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #d2bdbd;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      display: block;
      font-size: 0.4rem;
      color: rgb(255, 255, 255);
    }
  }
  .bottom span:nth-child(3) {
    font-size: 0.8rem;
  }
}
</style>