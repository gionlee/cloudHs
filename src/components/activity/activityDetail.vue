<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt>
      <span class="back" @click="backParMan()">活动详情</span>
    </div>
    <div class="clear"></div>
    <div class="nowParman">
      <span class="peopleType">当前合伙人：</span>
      <span class="nows">待签到</span>
    </div>
    <div class="mans">
      <span>活动信息</span>
    </div>
    <div class="body">
      <div class="list">
        <ul class="listBody">
          <li>
            <span class="listTitle">订单编号：</span>
            <span class="listValue">hd134515415</span>
          </li>
          <li>
            <span class="listTime">订单时间：</span>
            <span class="listValue">2018-10-28 16：00：00</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">活动开始时间：</span>
            <span class="listValue">2018-10-29 13：00：00</span>
          </li>
          <li>
            <span class="listTime">报名截止时间：</span>
            <span class="listValue">2018-12-20 12：00：00</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">活动可参与人数：</span>
            <span class="listValue">6-12人</span>
          </li>
          <li>
            <span class="listTime">当前报名人数：</span>
            <span class="listValue">0人（还差8人成团）</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">客户报名费：</span>
            <span class="listValue">40元/人</span>
          </li>
          <li>
            <span class="listTime">活动成分：</span>
            <span class="listValue">服务商70%，门店30%</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">活动地址：</span>
            <span class="listValue">广东省 深圳市 南山区 科兴科学园C栋504</span>
          </li>
          <li>
            <span class="listTime">门店名称：</span>
            <span class="listValue">云乐汇阳光乐园</span>
          </li>
        </ul>
        <div class="clear"></div>

        <ul class="listBody">
          <li>
            <span class="listTitle">场地类型：</span>
            <span class="listValue">广 科兴科</span>
          </li>
        </ul>
      </div>
    </div>
      <div class="table">
        <div class="sthead">
          <div class="parname">logo</div>
          <div class="parnum">服务商名称</div>
          <div class="phone">服务类别</div>
          <div class="area">服务商账号</div>
          <div class="monkey">平台佣金</div>
          <div class="date">服务区域</div>
          <div class="update">更新时间</div>
          <div class="state">当前状态</div>
        </div>
        <div class="tlists">
          <div class="tlist">
            <div class="parname">
              <img class="tlogo" src="../../images/main/tlogo.png" alt>
            </div>
            <div class="parnum">阿里巴巴</div>
            <div class="phone">音乐早教</div>
            <div class="area">admin01</div>
            <div class="monkey">10%</div>
            <div class="date">天津</div>
            <div class="update">
              <div class="day">2018-10-20</div>
              <div class="time">12:00:00</div>
            </div>
            <div class="state">正常</div>
          </div>
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
  background: rgb(236, 238, 243);
  width: 100%;
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
  background: white;
  border: 1px solid #dddddd;
  width: 1492px;
  height: 415px;
  margin-top: -1px;
  margin-left: 45px;
  padding-left: 139px;
  padding-top: 63px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.mans {
  margin-top: 74px;
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
  width: 74px;
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
.listBody li .listTitle {
  display: inline-block;
  width: 146px;
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
.title img {
  width: 28px;
  height: 26px;
  float: left;
  padding-top: 5px;
  margin-right: 10px;
}
.screen {
  width: 1490px;
  height: 60px;
  background: #f6f6f6;
  margin-left: 38px;
  margin-top: 24px;
  line-height: 60px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #888888;
}
.screen img {
  float: left;
  width: 27px;
  height: 27px;
  margin-left: 10px;
  margin-top: 16px;
  margin-right: 18px;
}
.sel {
  margin-top: 27px;
  padding-left: 38px;
  height: 40px;
  line-height: 40px;
}
.sel .txt {
  float: left;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  font-weight: bold;
  width: 73px;
}
.sel input {
  float: left;
  background: #ffffff;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  width: 317px;
  height: 40px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #888888;
  margin-left: 17px;
  text-align: center;
  box-sizing: border-box;
}
.btn {
  float: left;
  color: #fff;
  background: #085dab;
  border: 1px solid #085dab;
  width: 140px;
  height: 38px;
  text-align: center;
  margin-left: 37px;
}
.table {
  width: 1490px;
  margin-top: 43px;
  margin-left: 45px;
}
.table .sthead {
  border-bottom: 1px solid #dddddd;
  height: 67px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #000000;
  line-height: 67px;
  font-weight: bold;
  background: #e0eefe;
}
.parname {
  width: 187px;
}
.parname img {
  margin: 18px 0 0 9px;
  width: 170px;
  height: 90px;
  float: left;
}
.sthead > div {
  float: left;
  border-left: 1px solid #ddd;
  text-align: center;
  box-sizing: border-box;
}
.parnum {
  width: 149px;
}
.phone {
  width: 162px;
}
.area {
  width: 137px;
}
.monkey {
  width: 147px;
}
.date {
  width: 140px;
}
.update {
  width: 184px;
}
.state {
  width: 142px;
}
.table .thead {
  text-align: left;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #000000;
  height: 69px;
  line-height: 69px;
  padding-left: 15px;
  background: #e0eefe;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  font-weight: bold;
}
.addpar {
  background: #f6f6f6;
  border: 1px solid #085dab;
  border-radius: 2px;
  width: 107px;
  height: 33px;
  float: right;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 33px;
  margin-top: 17px;
  margin-right: 20px;
  color: #085dab;
  cursor: pointer;
}
.add {
  width: 18px;
  height: 18px;
  float: left;
  margin: 8px;
}
.tlist > div {
  height: 142px;
}
.tlist .update {
  line-height: 25px;
  padding-top: 43px;
  height: 142px;
}
.day,
.time {
  height: 25px;
  line-height: 25px;
}
.ctrl {
  width: 242px;
}
.tlist {
  height: 142px;
  line-height: 142px;
}
.lastlist {
  border-right: 1px solid #ddd;
}
.tlist > div {
  float: left;
  text-align: center;
  border-left: 1px solid #ddd;
  box-sizing: border-box;
}
.tlist:last-of-type {
  background: white;
  border-bottom: 1px solid #ddd;
}
.ctrl ul {
  width: 179px;
  padding: 18px 19px 20px 31px;
  height: 104px;
}
.ctrl ul li {
  float: left;
  width: 72px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #085dab;
  margin-top: 15px;
  font-weight: bold;
  cursor: pointer;
}
.ctrl ul li:nth-of-type(2n) {
  margin-left: 35px;
}
.ctrl .firli {
  margin-top: 0px;
}
.clear {
  clear: both;
}
</style>