<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt>
      <span class="back" @click="backServer()">服务商管理</span>
      <img class="right" src="../../images/main/right.png" alt>
      <span>收款账号</span>
    </div>
    <div class="clear"></div>
    <div class="body">
      <div class="list firlist">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">姓名：</span>
        <div class="input">魏晨</div>
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">银行名称：</span>
        <div class="input">中国银行</div>
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">银行账号：</span>
        <div class="input">120120121218218218217</div>
      </div>
    
      <div class="submit" @click="reaccServer()">修改资料</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    reaccServer: function () {
      this.$router.push({
        path:'reaccServer'
      })
    },
    backServer: function () {
      this.$router.push({
        path: 'server'
      })
    }
  }
};
</script>
<style scoped>
.wrap {
  padding: 68px 136px;
  width: 100%;
}
.title {
  height: 33px;
  line-height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: bold;
}
.title span {
  float: left;
}
.title img {
  width: 28px;
  height: 26px;
  float: left;
  padding-top: 5px;
  margin-right: 10px;
}
.title .right {
  width: 11px;
  height: 18px;
  padding-top: 9px;
  margin-left: 5px;
  margin-right: 6px;
}
.body {
  background: #ffffff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 1490px;
  height:710px;
  margin-top: 70px;
  margin-left: 48px;
  padding-left: 539px;
  padding-top: 91px;
  box-sizing: border-box;
}
.list {
  height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  line-height:25px;
  margin-top: 64px;
}
.firlist {
  margin-top: 0;
}
.red {
  width: 10px;
  height: 10px;
}
.txt {
  width: 101px;
  display: inline-block;
  text-align: left;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}
.input {
  
  margin-left: 90px;
  display: inline-block;
font-family:PingFangSC-Medium;
font-size:18px;
color:#888888;
}

.submit {
  background: #085dab;
  width: 255px;
  height: 55px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #ffffff;
  line-height: 55px;
  text-align: center;
  margin-top: 240px;
  margin-left: 79px;
  cursor: pointer;
}
.back {
  cursor: pointer;
}
</style>
