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
      <span>合伙人/企业信息</span>
    </div>
    <div class="body">
      <div class="list">
        <ul class="listBody">
          <li>
            <span class="listTitle">个人企业信息：</span>
            <span class="listValue">{{userInfo.partnerName}}</span>
          </li>
          <li>
            <span class="listTime">开通时间：</span>
            <span class="listValue">{{setDate(userInfo.time)+' '+setTime(userInfo.time)}}</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">合伙人账号：</span>
            <span class="listValue">{{userInfo.partnerAccount}}</span>
          </li>
          <li>
            <span class="listTime">经营区域：</span>
            <span class="listValue">{{userInfo.region}}</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">联系人：</span>
            <span class="listValue">{{userInfo.contacts}}</span>
          </li>
          <li>
            <span class="listTime">加盟年限：</span>
            <span class="listValue">{{userInfo.joinAge}}</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">手机号：</span>
            <span class="listValue">{{userInfo.partnerPhone}}</span>
          </li>
          <li>
            <span class="listTime">当前门店数量：</span>
            <span class="listValue">{{userInfo.store_num}}</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li>
            <span class="listTitle">平台佣金：</span>
            <span class="listValue">{{userInfo.commission}}</span>
          </li>
        </ul>
        <div class="clear"></div>
        <ul class="listBody">
          <li class="endDetail">
            <span class="listTitle">营业执照：</span>
            <div class="imgsBuy">
              <img :src="userInfo.businessLicense" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Global from '../tool/Global.vue'
import axios from 'axios'
import qs from 'qs'
export default {
  data() {
    return {
      userInfo : {}
    };
  },
  methods: {
    backParMan: function() {
      this.$router.push({
        path: "/main",
        name: "parMan"
      });
    },
    /**
     * 获取合伙人详情
     */
    getParManDetails: function() {
      let that = this;
        axios({
          method:'post',
          url:`${that.$store.state.url}/tPartner/selectPartnerDateils`,
          data:qs.stringify({
            id:Global.userId
          })
        }).then(res => {
            if (res.data.code == 0) {
            that.userInfo = res.data.data
          } else {
            alert(res.msg); 
          }
          });
    },
    /**
     * 根据时间毫秒数 返回年月日
     */
    setDate: function (str) {
        let times = new Date(str)
        return `${times.getFullYear()}-${times.getMonth() < 10 ? '0' + times.getMonth() : times.getMonth()}-${times.getDate() < 10 ? '0' + times.getDate() : times.getDate()}`
    },
    /**
     * 根据时间毫秒数 返回时分秒
     */
    setTime: function (str) {
        let times = new Date(str)
        return `${times.getHours() < 10 ? '0' + times.getHours() : times.getHours()}:${times.getMinutes() < 10 ? '0' + times.getMinutes() : times.getMinutes()}:${times.getSeconds() < 10 ? '0' + times.getSeconds() : times.getSeconds()}`
    },
  },
  mounted () {
    this.getParManDetails()
  }
};
</script>
<style scoped>
.wrap {
  padding: 68px 136px;
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
  border: 1px solid #dddddd;
  width: 1492px;
  height: 618px;
  margin-top: -1px;
  margin-left: 45px;
  padding-left: 139px;
  padding-top: 63px;
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
.imgsBuy img {
  width: 100%;
  height: 100%;
}
.back {
  cursor: pointer;
}
</style>