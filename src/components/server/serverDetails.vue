<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt>
      <span class="back" @click="backParMan()">合伙人管理</span>
      <img class="right" src="../../images/main/right.png" alt>
      <span>合伙人详情</span>
    </div>
    <div class="clear"></div>
    <div class="nowParman">
      <span class="peopleType">当前合伙人：</span>
      <span class="nows">正常</span>
    </div>
    <div class="mans">
      <span>服务商信息</span>
    </div>
    <div class="body">
      <div class="titleImg">
        <img src="../../images/login/logo.png" alt="">
      </div>
      <div class="list">
        <ul class="listBody">
          <li>
            <span class="listTitle">服务商信息：</span>
            <span class="listValue">天津云乐汇科技有限公司</span>
          </li>
          <li>
            <span class="listTime">开通时间：</span>
            <span class="listValue">2018-10-28 16：00：00</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">服务商账号：</span>
            <span class="listValue">admino1</span>
          </li>
          <li>
            <span class="listTime">服务区域：</span>
            <span class="listValue">北京，天津</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">手机号：</span>
            <span class="listValue">13363235271</span>
          </li>
          <li>
            <span class="listTime">服务技能：</span>
            <span class="listValue">亲子早教</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li class="edit">
            <span class="listTitle">服务商介绍：</span>
            <span class="listValue notes">
              中国著名亲子教育专家，中国教育电视台《孕婴专家》栏目
              主讲，中国关心下一代委员会指定亲子教育讲师。
            </span>
          </li>
          <li style="left: 995px;
    position: absolute;">
            <span class="listTitle">平台佣金：</span>
            <span class="listValue">10%</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    backParMan: function() {
      this.$router.push({
        path: "/main",
        name: "parMan"
      });
    }
  }
};
</script>
<style scoped>
.wrap {
  padding: 68px 136px;
  width: 100%;
}
.list {
  margin-top: 41px;
}
.nowParman {
  margin-top: 37px;
  margin-left: 48px;
}
.nowParman span {
  font-size: 18px;
  font-weight: bold;
}
.nows {
  color: #d81e06;
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
  border: 1px solid #dddddd;
  width: 1492px;
  height: 618px;
  margin-top: -1px;
  margin-left: 45px;
  padding-left: 139px;
  padding-top: 29px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.mans {
  margin-top: 41px;
  background: #e0eefe;
  border: 1px solid #dddddd;
  width: 1490px;
  height: 67px;
  margin-left: 45px;
}
.mans span {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  letter-spacing: 0.02px;
  text-align: left;
  font-weight: bold;
  line-height: 70px;
  margin-left: 39px;
  display: inline-block;
  width: 136px;
  text-align: right;
}
.listBody {
  width: 1376px;
  display: inline-block;
}
.listValue {
  margin-left: 25px;
  width: 516px;
  display: inline-block;
}
.listBody li {
  float: left;
}
.edit {
  position: relative;
}
.notes {
  width: 325px;
  display: inline-block;
  position: absolute;
  top: -5px;
  line-height: 32px;
  left: 142px;
}
.listBody li .listTitle {
  display: inline-block;
  width: 136px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #727272;
  letter-spacing: 0.02px;
  text-align: right;
  font-weight: bold;
}
.listTime {
  display: inline-block;
  width: 128px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #727272;
  letter-spacing: 0.02px;
  text-align: right;
  font-weight: bold;
}
.listValue {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  letter-spacing: 0.02px;
  text-align: left;
  font-weight: bold;
}
.list .clear {
  height: 33px;
}
.endDetail {
  position: relative;
}
.imgsBuy {
  background: white;
  box-shadow: 0 1px 5px 0 #b8b7b9;
  width: 320px;
  height: 205px;
  position: absolute;
  left: 170px;
}
.titleImg img {
  width: 318px;
  height: 122px;
  margin-left: 524px;
}
</style>