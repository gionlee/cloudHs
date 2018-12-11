<template>
  <div class="wrap">
    <div class="login">
      <div class="logo">
        <img src="../images/login/logo.png" alt>
      </div>
      <div class="title">亲子产业共创管理中心</div>
      <div class="input first">
        <input type="text" placeholder="请输入手机号" v-model="userInfo.name">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入密码" v-model="userInfo.pwd">
      </div>
      <div class="input">
        <input type="text" class="code" placeholder="请输入验证码" v-model="code">
        <div class="num">{{recode}}</div>
      </div>
      <button class="input btn" @click="login()">登 录</button>
      <div class="info">忘记密码请联系门店管理员进行重置</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: "login",
  data() {
    return {
      userInfo: {
        name: "",
        pwd: ""
      },
      code: "",
      recode: ""
    };
  },
  methods: {
    /**
     * 登录
     */
    login: function() {
      let that = this;
      if (that.recode == that.code) {
        axios({
          method:'post',
          url:`${that.$store.state.url}/sysEmployee/login`,
          data:qs.stringify(that.userInfo)
        }).then(res => {
            if (res.data.code == 0) {
              that.$router.push({
                path: "/main"
              });
            } else {
              alert(res.data.msg)
            }
          });
      } else {
        alert("验证码错误!");
      }
    },
    /**
     * 获取验证码 随机生成6位的验证码
     */
    getCode: function() {
      for (var i = 0; i < 6; i++) {
        this.recode += Math.floor(Math.random() * 10);
      }
      console.log(this.recode);
    }
  },
  mounted() {
    this.getCode();
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: url("../images/login/bg.png");
}
.login {
  padding: 9px 27px;
  background: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  width: 700px;
  height: 562px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-top: 158px;
}
.logo {
  width: 140px;
  height: 54px;
}
.title {
  height: 50px;
  line-height: 50px;
  font-family: PingFangSC-Medium;
  font-size: 36px;
  color: #000;
  text-align: center;
  margin-top: 5px;
}
.input {
  box-shadow: 0 2px 4px 0 rgba(143, 143, 143, 0.5);
  border-radius: 100px;
  width: 338px;
  height: 49px;
  border: 1px solid #0e64e1;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 19px;
  color: #9b9b9b;
}
.first {
  margin-top: 50px;
}
input {
  width: 100%;
  border: 0;
  outline: none;
  height: 100%;
  background: none;
  text-indent: 2em;
}
.num {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #333333;
  float: right;
  border-left: 1px solid #0e64e1;
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 1.54px;
}
.code {
  width: calc(100% - 81px);
  float: left;
}
.btn {
  margin: 0 auto;
  margin-top: 45px;
  background: #0e64e1;
  color: #fff;
  box-shadow: 0 0 8px #bcbcbc;
  outline: none;
  cursor: pointer;
  font-family: PingFangSC-Medium;
  display: block;
}
.info {
  margin-top: 34px;
  line-height: 20px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #9b9b9b;
  height: 20px;
}
</style>
