<template>
  <div id="swipeCell">
    <van-swipe :loop="false" :width="70">
      <van-swipe-item>
        <div>
          <span class="iconfont icon-rili"></span>
          <p>每日推荐</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-a-tupianyihuifu-10"></span>
          <p>私人FM</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-24gf-playlistMusic"></span>
          <p>歌单</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-rankfill"></span>
          <p>排行榜</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-shu"></span>
          <p>有声书</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-zhuanji"></span>
          <p>数字专辑</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-live"></span>
          <p>直播</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-yinle"></span>
          <p>关注新歌</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-xingqiu"></span>
          <p>歌房</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <span class="iconfont icon-game"></span>
          <p>游戏专区</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#swipeCell {
  .van-swipe-item {
    div {
      text-align: center;
      width: 1.3rem;
    }
    span {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      background-color: #ffdfdeda;
      line-height: 0.8rem;
      text-align: center;
      margin: 0 auto;
      border-radius: 0.4rem;
    }
    .iconfont {
      color: #fd3938;
      font-size: 0.5rem;
    }
    p {
      font-size: 0.25rem;
      color: #828282;
    }
  }
  .van-swipe__indicator {
    display: none;
  }
  hr {
    margin-top: 0.1rem;
    color: #f8f8f8;
  }
}
</style>