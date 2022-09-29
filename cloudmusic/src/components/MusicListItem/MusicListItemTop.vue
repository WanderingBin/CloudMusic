<template>
  <div class="musicItemTop">
    <div class="top">
      <div class="return">
        <span class="iconfont icon-xitongfanhui" @click="returnLastPage">
        </span>
        <span>歌单</span>
        <span class="iconfont icon-shangbiao"></span>
      </div>
      <div class="search">
        <span class="iconfont icon-search"></span>
        <span class="iconfont icon-liebiao-dian"></span>
      </div>
    </div>
    <div class="body">
      <div class="bodyhead">
        <div class="img">
          <img :src="playlist.coverImgUrl" alt="" />
        </div>
        <div class="right">
          <div class="listdescription">
            <span class="description">
              {{ playlist.name }}
            </span>
            <span class="iconfont icon-unfold"></span>
          </div>
          <div class="creatorInfo">
            <div class="img">
              <img
                v-if="playlist.creator"
                :src="playlist.creator.avatarUrl"
                alt=""
              />
            </div>
            <span class="creator" v-if="playlist.creator">{{
              playlist.creator.nickname
            }}</span>
            <div class="focus">
              <span class="iconfont icon-add">关注</span>
            </div>
          </div>
          <div class="score" v-if="playlist.algTags || playlist.score">
            <span>{{
              playlist.score ? playlist.score : playlist.algTags[0]
            }}</span
            ><span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <div class="name">
        {{ playlist.description }}
      </div>
      <span class="namespan iconfont icon-right"></span>
      <div class="btns">
        <div>
          <span class="iconfont icon-share"></span
          >{{
            playlist.shareCount > 10000
              ? (playlist.shareCount / 10000).toFixed(1) + "万"
              : playlist.shareCount
          }}
        </div>
        <div>
          <span class="iconfont icon-mark"></span
          >{{
            playlist.commentCount > 10000
              ? (playlist.commentCount / 10000).toFixed(1) + "万"
              : playlist.commentCount
          }}
        </div>
        <div>
          <span class="iconfont icon-favor"></span
          >{{
            playlist.subscribedCount > 10000
              ? (playlist.subscribedCount / 10000).toFixed(1) + "万"
              : playlist.subscribedCount
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  props: ["playlist"],
  setup(props) {
    // 判断props是否传值
    if (props.playlist.creator == "") {
      props.playlist.creator = JSON.parse(
        sessionStorage.getItem("itemDetail")
      ).playlist.creator;
    }
    const data = reactive({
      playlist: {},
    });
    const router = useRouter();
    function returnLastPage() {
      router.back();
    }
    return { data, returnLastPage };
  },
};
</script>

<style lang="less" scoped>
.musicItemTop {
  background-color: #707378;
  .top {
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-between;
    background-color: #707378;
    color: #ffffff;
    .return {
      margin-left: 0.16rem;
    }
    .return span:nth-child(2) {
      margin-left: 0.2rem;
    }
    .return span:nth-child(3) {
      font-size: 0.2rem;
      vertical-align: top;
    }
    .search span {
      margin: 0 0.3rem;
    }
  }
  .body {
    width: 100%;
    height: 5rem;
    margin-top: 0.8rem;
    .bodyhead {
      display: flex;
      justify-content: space-around;
      .img {
        width: 2rem;
        height: 2rem;
        margin: 0.2rem;
        img {
          width: 2rem;
          height: 2rem;
          border-radius: 0.2rem;
        }
      }
      .right {
        margin-top: 0.2rem;
      }
      .listdescription span {
        display: block;
      }
      .listdescription {
        width: 5rem;
        display: flex;
        .description {
          width: 4rem;
          height: 0.8rem;
          line-height: 0.4rem;
          font-size: 0.28rem;
          color: #ffffff;
        }
        .icon-unfold {
          width: 0.4rem;
          height: 0.4rem;
          font-size: 0.28rem;
          line-height: 0.4rem;
          text-align: center;
          border-radius: 0.2rem;
          margin-left: 0.2rem;
          margin-top: 5px;
          color: #ffffff;
          background-color: rgba(141, 141, 141, 0.3);
        }
      }
      .creatorInfo {
        .img {
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        span {
          font-size: 12px;
          color: #babdc0;
        }
      }
      .focus {
        display: inline-block;
        margin-left: 0.2rem;
        span {
          display: block;
          width: 0.9rem;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          border-radius: 0.2rem;
          color: #ffffff;
          background-color: rgba(205, 205, 205, 0.3);
        }
      }
      .score {
        width: 0.8rem;
        height: 0.32rem;
        text-align: center;
        line-height: 0.32rem;
        border-radius: 0.1rem;
        background-color: rgba(199, 199, 199, 0.285);
        span {
          font-size: 12px;
          color: #ffffff;
        }
      }
    }
    .name {
      display: inline-block;
      width: 6.5rem;
      font-size: 0.28rem;
      margin-left: 0.2rem;
      color: #babdc0;
      overflow: hidden;
      white-space: nowrap;
    }
    .namespan {
      font-size: 0.28rem;
      vertical-align: text-top;
      color: #babdc0;
    }
    .btns {
      display: flex;
      justify-content: space-around;
      margin-top: 0.2rem;
      div {
        width: 2.1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        background-color: rgba(186, 186, 186, 0.508);
        color: #ffffff;
        margin-top: 0.3rem;
        span {
          font-size: 20px;
          margin-right: 0.1rem;
          vertical-align: bottom;
          color: #ffffff;
        }
      }
    }
    .btns div:last-child {
      background: linear-gradient(90deg, #ff2657, #ff383d);
    }
  }
}
</style>