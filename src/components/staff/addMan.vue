`<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt>
      <span class="back" @click="backParMan()">合伙人管理</span>
      <img class="right" src="../../images/main/right.png" alt>
      <span>增加人员</span>
    </div>
    <div class="clear"></div>
    <div class="body">
      <div class="list firlist">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">员工名称：</span>
        <input type="text" class="input" placeholder="请输入员工名称">
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">员工账号：</span>
        <input type="text" class="input" placeholder="请输入员工账号">
        <span class="tips">员工账号初始密码为：yunlehui2019</span>
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">手机号：</span>
        <input type="text" class="input" placeholder="请输入手机号">
      </div>
      <div class="list">
        <img class="red" src="../../images/main/red.png" alt>
        <span class="txt">角色名称：</span>
        <input type="text" class="input" placeholder="请输入角色名称">
      </div>
      <div class="clear"></div>
      <div class="submit">提交</div>
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
    backParMan: function () {
     this.$router.push({
       path: '/main',
       name: 'parMan'
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
  height: 709px;
  margin-top: 70px;
  margin-left: 48px;
  padding-left: 233px;
  padding-top: 90px;
  box-sizing: border-box;
}
.list {
  height: 40px;
}
.list {
  height: 40px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  line-height: 40px;
  margin-top: 49px;
}
.firlist {
  margin-top: 0;
}
.red {
  width: 10px;
  height: 10px;
}
.txt {
  width: 154px;
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
  margin-left: 25px;
  padding-left: 10px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #888888;
  box-sizing: border-box;
  text-align: center;
}
.tips {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #727272;
  margin-left: 35px;
}
.upload {
  margin-top: 55px;
}
.uptitle {
  height: 25px;
  line-height: 25px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  font-weight: bold;
}
.upimg {
  margin-top: 21px;
}
.upimg img {
  width: 320px;
  height: 205px;
  float: left;
  margin-left: 195px;
}
.info {
  width: 475px;
  padding-top: 38px;
  float: left;
  margin-left: 90px;
}
.uptxt {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #888888;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
}
.firtxt {
  margin-top: 0;
}
.btn {
  width: 255px;
  height: 55px;
  background: #085dab;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #ffffff;
  margin-top: 47px;
  text-align: center;
  line-height: 55px;
}
.clear {
  clear: both;
}
.radio {
  display: inline-block;
  padding-left: 25px;
}
.radio img {
  width: 25px;
  height: 25px;
  float: left;
  border-radius: 50%;
}
.radio span {
  width: 37px;
  height: 25px;
  line-height: 25px;
  margin-left: 17px;
  float: left;
  margin-right: 59px;
  font-weight: bold;
}
.date {
  width: 172px;
  border-right: 0px;
}
.year {
  background: #085dab;
  border: 1px solid #979797;
  width: 45px;
  height: 38px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #ffffff;
  line-height: 38px;
  text-align: center;
  display: inline-block;
  font-weight: bold;
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
  margin-top: 153px;
  margin-left: 374px;
}
.back {
  cursor: pointer;
}
</style>
