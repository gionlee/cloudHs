<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt> 合伙人管理
    </div>
    <div class="screen">
      <img src="../../images/main/screen.png" alt> 筛选查询
    </div>
    <div class="sel">
      <div class="txt">关键词：</div>
      <input type="text" placeholder="合伙人名称/手机号" v-model="params.keyWord">
      <div class="btn" @click="getParManList()">搜索</div>
    </div>
    <div class="clear"></div>
    <div class="table">
      <div class="thead">合伙人列表
        <div class="addpar" @click="addParMan()">
          <img class="add" src="../../images/main/add.png" alt> 增加合伙人
        </div>
      </div>
      <div class="sthead">
        <div class="parname">合伙人/企业名称</div>
        <div class="parnum">合伙人账号</div>
        <div class="phone">手机号</div>
        <div class="area">经营区域</div>
        <div class="monkey">平台佣金</div>
        <div class="date">加盟期限</div>
        <div class="update">更新时间</div>
        <div class="state">当前状态</div>
        <div class="ctrl lastlist">操作</div>
      </div>
      <div class="tlists">
        <div class="tlist" v-for="(item,index) in userList" :key="index">
          <div class="parname">{{item.partner_name}}</div>
          <div class="parnum">{{item.partner_account}}</div>
          <div class="phone">{{item.partner_phone}}</div>
          <div class="area">{{item.region}}</div>
          <div class="monkey">{{item.commission}}%</div>
          <div class="date">{{item.join_age}}</div>
          <div class="update">
            <div class="day">{{setDate(item.time)}}</div>
            <div class="time">{{setTime(item.time)}}</div>
          </div>
          <div class="state">{{(item.states == 0) ? '正常' : '冻结中'}}</div>
          <div class="ctrl lastlist">
            <ul>
              <li class="firli" @click="subCommission()">分佣设置</li>
              <li class="firli">编辑</li>
              <li>重置密码</li>
              <li @click="partnerDeatils(item.id)">详情</li>
              <li @click="accParMan()">收款账号</li>
              <li>取消冻结</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Global from '../tool/Global.vue'
import axios from 'axios'
import qs from 'qs' // 将请求转换成form 表单提交形式
export default {
  data() {
    return {
      params: {
        page: 1,
        limit: 10,
        keyWord: ""
      },
      userList:[]


    };
  },
  methods: {
    addParMan: function() {
      this.$router.push({
        path: "/main/addParMan"
      });
    },
    accParMan: function() {
      this.$router.push({
        path: "/main/accParMan"
      });
    },
    // 分佣设置
    subCommission: function() {
      this.$router.push({
        path: "main/subCommission"
      });
    },
    //  合伙人详情
    partnerDeatils: function(id) {
        Global.userId = id
      this.$router.push({
        path: "/main/partnerDetails"
      });
    },
    /**
     * 获取合伙人列表
     */
    getParManList: function() {
      let that = this;
      axios({
          method: 'post',
          url:`${that.$store.state.url}/tPartner/getPartnerList`,
            data:qs.stringify(that.params)
      }).then(res => {
            console.log(res)
          if (res.data.code == 0) {
            that.userList = res.data.data
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
      this.getParManList()
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
  margin-left: 38px;
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
/* .table div {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #4a4a4a;
        border: 1px solid #dddddd;
        height: 142px;
        text-align: center;
    } */
.ctrl {
  width: 242px;
}
.tlist {
  height: 142px;
  line-height: 142px;
  border-bottom: 1px solid #ccc;
}
.lastlist {
  border-right: 1px solid #ddd;
}
.tlist > div {
  float: left;
  text-align: center;
  border-left: 1px solid #ddd;
  box-sizing: border-box;
  height: 142px;
}
.tlist:last-of-type {
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
