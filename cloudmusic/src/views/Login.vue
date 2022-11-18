<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/netease-music.png" alt="" />
      <p>云音乐</p>
    </div>
    <h1>登录</h1>
    <div class="form">
      <input type="tel" placeholder="手机号" id="phone" v-model="data.phone" />
      <input type="text" placeholder="验证码" v-model="data.captcha" />
      <button class="captcha">
        <span v-if="data.show" @click="getCaptcha">获取验证码</span>
        <span v-else="data.show">{{ data.count }}s后获取</span>
      </button>
      <br />
      <button class="confirm" @click="login">登录</button>
    </div>
    <div class="terms">
      <input type="checkbox" name="" id="" v-model="data.checkValue" />
      我已阅读<a href="">《服务条款》</a>、<a href="">《隐私条款》</a><br />
      <a href="">《中国移动认证服务协议》</a>
    </div>
    <div class="problem">
      登录遇到问题？| 其他登录方式
      <span class="iconfont icon-right"></span>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { reqGetSent, reqVerify } from "@/api/login";
import { reqGetDetail } from "../api/user";
import { useRouter } from "vue-router";
import { Notify } from "vant";
import "vant/es/notify/style";
import { mapMutations, useStore } from "vuex";

export default {
  setup() {
    const data = reactive({
      phone: "",
      captcha: "",
      checkValue: true,
      timer: null,
      count: "",
      show: true,
    });
    const router = useRouter();
    const store = useStore();
    const storeMutations = mapMutations([
      "updateIsLogin",
      "updateToken",
      "updateUser",
    ]);
    //获取验证码
    async function getCaptcha() {
      const res = await reqGetSent(data.phone);
      // 设置60秒倒计时
      let TIME_COUNT = 60;
      if (!data.timer) {
        data.count = TIME_COUNT;
        data.show = false;
        data.timer = setInterval(() => {
          if (data.count > 0 && data.count <= TIME_COUNT) {
            data.count--;
          } else {
            data.show = true;
            clearInterval(data.timer);
            data.timer = null;
          }
        }, 1000);
      }
    }
    //登录
    async function login() {
      if (data.checkValue === false) {
        Notify({
          message: "请勾选下方同意服务条款选项",
          color: "#ad0000",
          background: "#ffe1e1",
          duration: 1000,
        });
      } else {
        try {
          const res = await reqVerify({
            phone: data.phone,
            captcha: data.captcha,
          });
          // 判断验证码是否正确
          if (res.data.code === 200) {
            let result = await store.dispatch("getLogin", {
              phone: data.phone,
              captcha: data.captcha,
            });
            // 判断是否登录成功
            if (result.data.code === 200) {
              store.commit("updateIsLogin", true);
              store.commit("updateToken", result.data.token);
              let info = await reqGetDetail(result.data.account.id);
              store.commit("updateUser", info.data);
              router.push("/");
            } else {
              Notify({
                message: "登录失败",
                color: "#ad0000",
                background: "#ffe1e1",
                duration: 1000,
              });
            }
          }
        } catch (error) {
          Notify({
            message: "验证码错误",
            color: "#ad0000",
            background: "#ffe1e1",
            duration: 1000,
          });
        }
      }
    }
    return { data, getCaptcha, login, ...storeMutations };
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  .logo {
    height: 3rem;
    margin-top: 1.5rem;
    text-align: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    p {
      color: #e20000;
      font-size: 0.6rem;
      font-weight: 800;
    }
  }
  h1 {
    text-align: center;
    color: #e20000;
  }
  .form {
    margin-top: 1rem;
    text-align: center;
    input {
      width: 3rem;
      height: 0.8rem;
      font-size: 0.4rem;
      border-radius: 0.2rem;
      border: 1px solid #999;
      font-weight: 800;
      padding-left: 0.2rem;
      margin-bottom: 0.4rem;
    }
    input:focus {
      border: 1px solid;
    }
    #phone {
      width: 5.6rem;
    }
    button {
      height: 0.8rem;
      border-radius: 0.2rem;
      border: 1px solid #999;
      font-weight: 800;
      padding: 0 0.2rem;
      font-size: 0.4rem;
    }
    .captcha {
      margin-left: 0.2rem;
      background-color: #999;
      color: rgb(229, 229, 229);
      span {
        display: inline-block;
        width: 2rem;
      }
    }
    .captcha:active {
      background-color: rgb(206, 206, 206);
    }
    .confirm {
      width: 3rem;
      background-color: #e20000;
      color: #fff;
      margin-top: 0.6rem;
    }
    .confirm:active {
      background-color: #c31414;
    }
  }
  .terms {
    margin-top: 0.2rem;
    text-align: center;
    a {
      color: rgb(0, 174, 255);
    }
  }
  .problem {
    text-align: center;
    margin-top: 3rem;
    color: #999;
  }
}
</style>