<template>
  <div class="search">
    <div class="top">
      <div class="topSearch">
        <div class="iconfont icon-xitongfanhui" @click="goBack"></div>
        <div class="key">
          <span class="iconfont icon-search"></span>
          <input
            type="search"
            placeholder="大家都在搜..."
            @keydown.enter="search"
            v-model="state.searchKey"
            ref="myRef"
          />
        </div>
        <div class="goSearch" @click="search">搜索</div>
      </div>
      <div class="partition">
        <div>
          <span class="iconfont icon-SanMiAppoutlinei14"></span
          ><span>歌手</span>
        </div>
        <div><span class="iconfont icon-shu"></span><span>曲风</span></div>
        <div>
          <span class="iconfont icon-musicfill"></span><span>专区</span>
        </div>
        <div><span class="iconfont icon-voice"></span><span>识曲</span></div>
      </div>
    </div>
    <div v-if="state.searchList.length === 0">
      <div class="history">
        <div class="historyTop">
          <div>历史</div>
          <div>
            <span class="iconfont icon-delete" @click="deleteHistory"></span>
          </div>
        </div>
        <div class="historyContent">
          <span
            v-for="(item, index) in state.historyList"
            key="index"
            @click="reSearch($event)"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="recommend">
        <div class="recommendTop">
          <div>推荐</div>
          <div>
            <span class="iconfont icon-refresh_light"></span>
          </div>
        </div>
        <div class="recommendContent">
          <span>林俊杰</span>
          <span>周杰伦</span>
          <span>张杰</span>
        </div>
      </div>
      <div class="searchList">
        <van-swipe :loop="false" :width="250">
          <van-swipe-item>
            <div>
              <div class="listTop">
                <div class="hot">热搜榜</div>
                <div class="playButton">
                  <span class="iconfont icon-playfill"></span>
                  <span>播放</span>
                </div>
              </div>
              <hr />
              <div class="listItem">
                <div>
                  <span>1</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>2</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>3</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <div class="listTop">
                <div class="hot">热搜榜</div>
                <div class="playButton">
                  <span class="iconfont icon-playfill"></span>
                  <span>播放</span>
                </div>
              </div>
              <hr />
              <div class="listItem">
                <div>
                  <span>1</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>2</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>3</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <div class="listTop">
                <div class="hot">热搜榜</div>
                <div class="playButton">
                  <span class="iconfont icon-playfill"></span>
                  <span>播放</span>
                </div>
              </div>
              <hr />
              <div class="listItem">
                <div>
                  <span>1</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>2</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>3</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <div class="listTop">
                <div class="hot">热搜榜</div>
                <div class="playButton">
                  <span class="iconfont icon-playfill"></span>
                  <span>播放</span>
                </div>
              </div>
              <hr />
              <div class="listItem">
                <div>
                  <span>1</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>2</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>3</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div>
              <div class="listTop">
                <div class="hot">热搜榜</div>
                <div class="playButton">
                  <span class="iconfont icon-playfill"></span>
                  <span>播放</span>
                </div>
              </div>
              <hr />
              <div class="listItem">
                <div>
                  <span>1</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>2</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>3</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
                <div>
                  <span>4</span>
                  <span>林俊杰</span>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div v-else="state.searchList.length !== 0">
      <div class="songslist">
        <div
          class="song"
          v-for="(item, index) in state.searchList"
          :key="item.id"
        >
          <div class="id">{{ index + 1 }}</div>
          <div class="songname" @click="updateIndex(item)">
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
    </div>
  </div>
</template>         

<script>
import { ref, reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { reqGetSearchList } from "@/api/home/search";
import { useStore } from "vuex";
import { useState } from "../hooks/useMapper";
import { mapMutations } from "vuex";
export default {
  setup() {
    const state = reactive({
      historyList: [],
      searchKey: "",
      searchList: [],
    });
    const myRef = ref(null);
    const router = useRouter();
    const store = useStore();
    const storeState = useState(["playlist", "playlistIndex"]);
    const storeMutations = mapMutations([
      "updateIsBtnShow",
      "updatePlaylist",
      "updatePlaylistIndex",
      "updateCurrentTime",
    ]);
    // 返回上一页
    function goBack() {
      router.back();
    }
    // 搜索
    async function search() {
      if (state.searchKey.trim() !== "") {
        state.historyList.unshift(state.searchKey);
        // 去重
        state.historyList = [...new Set(state.historyList)];
        // 限制长度
        if (state.historyList.length > 10) {
          state.historyList.pop(state.historyList[length - 1]);
        }
        let res = await reqGetSearchList(state.searchKey);
        state.searchList = res.data.result.songs;
        localStorage.setItem("historyList", JSON.stringify(state.historyList));
      }
    }
    //删除历史记录
    function deleteHistory() {
      state.historyList = [];
      localStorage.setItem("historyList", "[]");
    }
    //点击历史记录进行搜索
    async function reSearch(event) {
      state.searchKey = event.target.innerHTML;
      let res = await reqGetSearchList(state.searchKey);
      state.searchList = res.data.result.songs;
      focus();
    }
    //输入框获取焦点
    async function focus() {
      myRef.value.focus();
    }
    // 更新播放歌曲的下标
    function updateIndex(item) {
      store.commit("pushPlaylist", item);
      store.commit("updatePlaylistIndex", store.state.playlist.length - 1);
      store.commit("updateIsBtnShow", false);
      store.commit("updateCurrentTime", 0);
      store.dispatch("getLyric", item.id);
    }

    onMounted(() => {
      state.historyList = JSON.parse(localStorage.getItem("historyList"));
      focus();
    });
    watchEffect(() => {
      const searchKey = state.searchKey;
      if (searchKey === "") {
        state.searchList = [];
      }
    });
    return {
      state,
      myRef,
      goBack,
      search,
      deleteHistory,
      reSearch,
      updateIndex,
      ...storeMutations,
      ...storeState,
    };
  },
};
</script>

<style lang="less">
.search {
  background-color: rgb(232, 232, 232);
  .top {
    height: 1.8rem;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
    .topSearch {
      height: 1rem;
      line-height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .key {
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
          margin-right: 0.2rem;
        }
        input {
          height: 0.7rem;
          outline: none;
          border: none;
          background-color: #e7e7e7;
        }
        input[type="search"]::-webkit-search-cancel-button {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          background: url(https://yxs-web.oss-cn-beijing.aliyuncs.com/328e4d97f9d0d68ea04e872f68e508e3.png)
            no-repeat;
          background-size: contain;
        }
        p {
          font-size: 0.32rem;
          color: #cdcdcd;
        }
      }
    }
    .partition {
      width: 100%;
      height: 0.8rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        border-right: 1px solid #9c9c9c;
        span {
          padding-right: 12px;
        }
        .iconfont {
          color: #fd5151;
          vertical-align: middle;
        }
      }
    }
    .partition div:last-child {
      border: none;
    }
  }
  .history {
    width: 100%;
    .historyTop {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.2rem 0;
    }
    .historyTop span {
      color: #999;
    }
    .historyContent {
      padding-bottom: 0.2rem;
      margin: 0.2rem 0 0 0.2rem;
      span {
        display: inline-block;
        max-width: 4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.1rem;
        border-radius: 0.3rem;
        background-color: #fff;
        margin-right: 0.2rem;
      }
    }
  }
  .recommend {
    width: 100%;
    .recommendTop {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.2rem 0;
    }
    .recommendTop span {
      color: #999;
    }
    .recommendContent {
      padding-bottom: 0.2rem;
      margin: 0.2rem 0 0 0.2rem;
      span {
        display: inline-block;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.1rem;
        border-radius: 0.3rem;
        background-color: #fff;
        margin-right: 0.2rem;
      }
    }
  }
  .searchList {
    .van-swipe__indicator {
      display: none;
    }
    .van-swipe-item {
      margin-bottom: 1.1rem;
      div {
        background-color: #fff;
        margin-right: 0.5rem;
        border-radius: 0.2rem;
        .listTop {
          width: 4.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .hot {
            font-weight: 800;
            font-size: 0.35rem;
            padding: 0.2rem 0.3rem;
          }
          .playButton {
            border: 1px solid #999;
            border-radius: 0.26rem;
            padding: 0.04rem 0.08rem;
            span {
              font-size: 0.24rem;
            }
          }
          .playButton span:last-child {
            color: #999;
          }
        }
        hr {
          width: 4rem;
          border: none;
          border-bottom: 1px solid #999;
          margin-left: 0.25rem;
        }
        .listItem > div {
          padding: 0.2rem 0 0.2rem 0.3rem;
          span {
            margin-right: 0.4rem;
          }
        }
        .listItem div:nth-child(-n + 3) {
          font-weight: 750;
        }
        .listItem div:nth-child(-n + 3) span:first-child {
          color: #fd5151;
        }
      }
    }
  }
  .songslist {
    padding-bottom: 1rem;
    background-color: rgb(245, 245, 245);
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
        div span::after {
          content: "/";
        }
        div span:last-child::after {
          content: "";
        }
        div span:first-child::after {
          content: "";
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
}
</style>    