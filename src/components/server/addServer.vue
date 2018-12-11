<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/server.png" alt>
      <span class="back" @click="backParMan()">服务商管理</span>
      <img class="right" src="../../images/main/right.png" alt>
      <span>新增服务商</span>
    </div>
    <div class="clear"></div>
    <div class="body">
      <div class="list firlist">
        <span class="txt"><img class="red" src="../../images/main/red.png" alt>
        服务商名称：</span>
        <input type="text" class="input" placeholder="请输入服务商名称">
      </div>
      <div class="list">
        <span class="txt"><img class="red" src="../../images/main/red.png" alt>
        服务商账号：</span>
        <input type="text" class="input" placeholder="请输入服务商账号">
        <span class="tips">合伙人账号初始密码为：yunlehui2019</span>
      </div>
      <div class="list">
        <span class="txt"><img class="red" src="../../images/main/red.png" alt>
        手机号</span>
        <input type="text" class="input" placeholder="请输入手机号">
      </div>
      <div class="upload">
        <div class="uptitle">上传头像或logo：</div>
        <div class="upimg">
          <img src="../../images/main/upimg.png" alt>
          <div class="info">
            <div class="uptxt firtxt">温馨提示：</div>
            <div class="uptxt">建议上传尺寸为960*675，大小不超过4M,jpg或png格式。</div>
            <div class="btn">点击上传</div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="list" style="margin-top:110px;">
        <span class="txt"><img class="red" src="../../images/main/red.png" alt>
        服务区域：</span>
        <div class="radio">
          <img src="../../images/main/radio.png" alt>
          <span>天津</span>
          <img src="../../images/main/radio.png" alt>
          <span>北京</span>
        </div>
      </div>
      <div class="list">
        <span class="txt"><img class="red" src="../../images/main/red.png" alt>
        服务类别：</span>
        <input type="text" class="input" placeholder="请输入服务类别">
      </div>
      <div class="list lastlist">
        <span class="txt" style="float:left;"><img class="red" src="../../images/main/red.png" alt>
        服务商介绍：</span>
        <textarea name="" id="" cols="30" rows="10">

        </textarea>
      </div>
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
        path:'/main',
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
  height:1430px;
  margin-top: 70px;
  margin-left: 48px;
  padding-left: 233px;
  padding-top: 90px;
  box-sizing: border-box;
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
.lastlist {
  height: 182px;
}
.red {
  width: 10px;
  height: 10px;
}
.txt {
  width: 145px;
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
  margin-left: 50px;
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
  padding-top: 28px;
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
  margin-left: 25px;
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
textarea {
  width: 502px;
  height: 182px;
  margin-left: 50px;
  resize: none;
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
  margin-top: 83px;
  margin-left: 374px;
}
</style>
