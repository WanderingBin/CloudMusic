<template>
  <div class="list">
    <div class="listTop">
      <div class="playlist">
        <slot name="listName">推荐歌单</slot>
      </div>
      <div class="more">
        <span>更多</span>
        <span class="iconfont icon-right"></span>
      </div>
    </div>
    <div class="listContent">
      <slot name="swipeList">
        <van-swipe :loop="false" :width="115">
          <van-swipe-item>
            <div>
              <span>
                <img src="https://dummyimage.com/500x320/000/fff.png" alt="" />
              </span>
              <p>2022全网最火的歌曲全部都在这里</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.list {
  width: 100%;
  height: 4rem;
  .listTop {
    height: 0.6rem;
    margin: 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .playlist {
      margin: 0 0.2rem;
      font-size: 0.4rem;
    }
    .more {
      width: 1.1rem;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.26rem;
      text-align: center;
      border: 0.02rem solid rgba(51, 51, 51, 0.468);
      border-radius: 0.2rem;
      color: rgb(78, 78, 78);
      margin: 0 0.2rem;
      .iconfont {
        font-size: 0.26rem;
      }
    }
  }
  .listContent {
    .van-swipe-item {
      div {
        width: 2rem;
        height: 2.7rem;
        overflow: hidden;
      }
      span {
        display: block;
        width: 2rem;
        height: 2rem;
        border-radius: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 0.24rem;
        line-height: 0.36rem;
        color: rgb(78, 78, 78);
      }
    }
    .van-swipe__indicator {
      display: none;
    }
  }
}
</style>