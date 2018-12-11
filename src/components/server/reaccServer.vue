<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/server.png" alt>
      <span class="back" @click="backServer()">服务商管理</span>
      <img class="right" src="../../images/main/right.png" alt>
      <span>收款账号</span>
    </div>
    <div class="clear"></div>
    <div class="body">
      <div class="list firlist">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">姓名：</span>
        <input type="text" class="input" placeholder="请输入姓名">
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">银行名称：</span>
        <input type="text" class="input" placeholder="请输入银行名称">
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">银行账号：</span>
        <input type="text" class="input" placeholder="请输入银行账号">
      </div>
    
      <div class="submit">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
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
  padding-left: 349px;
  padding-top: 108px;
  box-sizing: border-box;
}
.list {
  height: 40px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  line-height: 40px;
  margin-top: 47px;
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
  background: #ffffff;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  width: 502px;
  height: 40px;
  margin-left: 90px;
  padding-left: 10px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #888888;
  box-sizing: border-box;
  text-align: center;
  border-width: 1px;
}
.clear {
  clear: both;
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
  margin-left: 269px;
  cursor: pointer;
}
.back {
  cursor: pointer;
}
</style>
