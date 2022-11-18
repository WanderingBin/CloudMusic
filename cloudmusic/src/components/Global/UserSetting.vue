<template>
  <div class="userSetting">
    <div class="userCenter" @click="getUserCenter">
      <div class="avatar">
        <img :src="data.pic" alt="" />
      </div>
      <div class="userName">
        <p v-if="data.name">{{ data.name }}位云村村民</p>
        <p v-else="data.name">未登录</p>
        <div class="iconfont icon-right"></div>
      </div>
      <div class="scan"><span class="iconfont icon-scan"></span></div>
    </div>
    <div class="vipCenter">
      <div class="vipTop">
        <div class="left">
          <p class="continue">续费黑胶VIP</p>
          <div>
            <p>立享超21项专属特权</p>
            <div class="iconfont icon-right"></div>
          </div>
        </div>
        <div class="right">会员中心</div>
      </div>
      <hr />
      <div class="vipFooter">受邀专享，黑胶首月仅0.88元 !</div>
    </div>
    <div class="news">
      <div>
        <span class="iconfont icon-mail"></span>
        我的消息<span class="iconfont icon-right"></span>
      </div>
      <div>
        <span class="iconfont icon-SanMiAppoutlinei8"></span>
        云贝中心<span class="iconfont icon-right"></span>
      </div>
      <div>
        <span class="iconfont icon-SanMiAppoutlinei12"></span>
        创作者中心<span class="iconfont icon-right"></span>
      </div>
    </div>
    <div class="logout">退出登录/关闭</div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      pic: localStorage.getItem("pic"),
      name: localStorage.getItem("name"),
    });
    const router = useRouter();
    function getUserCenter() {
      router.push("/userInfo");
    }
    return { data, getUserCenter };
  },
};
</script> 

<style lang="less" scoped>
.userSetting {
  height: 100%;
  background-color: rgb(235, 235, 235);
  .userCenter {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar {
      width: 0.6rem;
      height: 0.6rem;
      padding-left: 0.2rem;
      img {
        width: 0.6rem;
        height: 100%;
        vertical-align: middle;
        border-radius: 0.3rem;
      }
    }
    .userName {
      width: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 1rem;
      font-size: 0.4rem;
      .icon-right {
        font-size: 0.4rem;
        padding-top: 0.06rem;
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .scan {
      margin-right: 0.2rem;
      span {
        font-size: 0.6rem;
      }
    }
  }
  .vipCenter {
    width: 5.5rem;
    height: 3rem;
    margin: 0.2rem auto;
    background-image: linear-gradient(90deg, #3d3938, #5e4e4e);
    border-radius: 0.4rem;
    color: #fee3df;
    .vipTop {
      display: flex;
      justify-content: space-around;
      .left {
        .continue {
          font-size: 0.5rem;
          padding-top: 0.2rem;
          padding-bottom: 0.1rem;
        }
        div {
          display: flex;
          opacity: 0.7;
          height: 0.4rem;
          line-height: 0.4rem;
          padding-bottom: 0.3rem;
        }
      }
      .right {
        width: 1.5rem;
        height: 0.5rem;
        border: 1px solid #fee3dfb8;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 0.5rem;
        opacity: 0.7;
        margin-top: 0.4rem;
      }
    }
    hr {
      width: 5rem;
      border: none;
      border-bottom: 0.5px solid #fee3df;
      margin-left: 0.25rem;
    }
    .vipFooter {
      margin-left: 0.2rem;
      margin-top: 0.4rem;
      opacity: 0.7;
    }
  }
  .news {
    width: 5.5rem;
    height: 3rem;
    background-color: #fff;
    border-radius: 0.4rem;
    margin: 0.2rem auto;
    div {
      height: 1rem;
      line-height: 1rem;
      font-size: 0.4rem;
      position: relative;
      span {
        font-size: 0.4rem;
        margin: 0 0.2rem;
      }
    }
    div span:last-child {
      color: #999;
      float: right;
    }
  }
  .news div:first-child:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #999;
    margin-top: 1rem;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .logout {
    width: 5.5rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fd3938;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 0.2rem;
  }
}
</style>