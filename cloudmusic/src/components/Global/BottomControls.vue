  <template>
  <div class="bottomControls" v-if="isFooterShow">
    <div class="songImg">
      <img
        :src="playlist[playlistIndex].al.picUrl"
        alt=""
        :class="isbtnshow ? 'picUrl_pause' : 'picUrl_active'"
      />
    </div>
    <div class="songName" @click="updateDetailShow">
      <span>{{ playlist[playlistIndex].name }}</span>
      <span v-for="item in playlist[playlistIndex].ar"> - {{ item.name }}</span>
    </div>
    <div class="list">
      <span class="iconfont icon-bofang" v-if="isbtnshow" @click="play"></span>
      <span
        class="iconfont icon-zanting"
        v-else="isbtnshow"
        @click="play"
      ></span>
      <span class="iconfont icon-24gf-playlist"></span>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistIndex].id}.mp3`"
      preload
    ></audio>
  </div>

  <van-popup
    v-model:show="detailShow"
    position="bottom"
    :style="{ height: '100%', width: '100%' }"
  >
    <IyricsDetails
      :musicList="playlist[playlistIndex]"
      :play="play"
      :isbtnshow="isbtnshow"
      :updateTime="updateTime"
      :addDuration="addDuration"
    ></IyricsDetails>
  </van-popup>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import IyricsDetails from "@/components/Global/IyricsDetails.vue";
export default {
  components: { IyricsDetails },
  computed: {
    ...mapState([
      "playlist",
      "playlistIndex",
      "arIndex",
      "isbtnshow",
      "detailShow",
      "isFooterShow",
    ]),
  },
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    this.$store.dispatch("getLyric", this.playlist[this.playlistIndex].id);
  },
  update() {
    this.addDuration();
  },
  methods: {
    play: function () {
      // 判断音乐是否播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsBtnShow(false);
        // 更新播放时间
        if (this.timer != null) {
          this.updateTime();
        }
      } else {
        this.$refs.audio.pause();
        this.updateIsBtnShow(true);
        //清除定时器
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    ...mapMutations([
      "updateIsBtnShow",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration",
    ]),
    // 改变当前时间
    updateTime() {
      this.timer = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 50);
    },
    //添加总时长
    addDuration() {
      this.updateDuration(this.$refs.audio.duration);
    },
  },
  watch: {
    playlist: function () {
      if (!this.isbtnshow) {
        this.$refs.audio.autoplay = true;
        this.updateIsBtnShow(false);
      }
    },
    playlistIndex: function () {
      if (!this.isbtnshow) {
        this.$refs.audio.autoplay = true;
        this.updateIsBtnShow(false);
      }
      this.$store.dispatch("getLyric", this.playlist[this.playlistIndex].id);
    },
  },
};
</script>

<style lang="less" scoped>
.bottomControls {
  width: 100%;
  height: 1rem;
  background-color: #ebebeb;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(214, 214, 214, 0.315);
  position: fixed;
  bottom: 0;
  left: 0;
  .songImg {
    width: 1rem;
    height: 1rem;
    margin: -0.1rem 0.2rem 0 0.2rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
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

  .songName {
    width: 4rem;
    line-height: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
  }
  .songName span:first-child {
    color: #000;
  }
  .songName span:last-child {
    font-size: 12px;
  }
  .list {
    width: 1rem;
    margin-right: 1rem;
    line-height: 1rem;
    span {
      margin: 0 0.3rem;
      font-size: 0.55rem;
      margin-right: 0.2rem;
    }
  }
}
</style>