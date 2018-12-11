<template>
  <div class="wrap">
    <div class="title">
      <img src="../images/main/money.png" alt> 财务管理
    </div>
    <div class="content">
      <ul>
        <li class="first active">活动概况</li>
        <li>活动管理</li>
        <li>评论管理</li>
        <li>标签管理</li>
      </ul>
      <div class="info">
        <div class="head">
          <div>
            <div class="name">服务商发起活动次数</div>
            <div class="count">85次</div>
          </div>
          <div>
            <div class="name">服务商发起活动次数</div>
            <div class="count">85次</div>
          </div>
          <div>
            <div class="name">门店预约成功次数</div>
            <div class="count">50次</div>
          </div>
          <div>
            <div class="name">成功举办次数</div>
            <div class="count">30次</div>
          </div>
          <div>
            <div class="name">参加活动人数</div>
            <div class="count">300人</div>
          </div>
        </div>
        <div class="tabs">
          <div>门店</div>
          <div class="tabac">服务商</div>
        </div>
        <div class="table">
          <div class="thead">
            <div class="servername">服务商名称</div>
            <div class="account">活动次数</div>
            <div class="ysuccess">预约成功次数</div>
            <div class="successed">成功举办次数</div>
            <div class="cjpeople">参与总人数</div>
            <div class="qdpeople">签到人数</div>
          </div>
          <div class="tbody">
            <div class="servername firstchild">魏小延</div>
            <div class="account">85次</div>
            <div class="ysuccess">85次</div>
            <div class="successed">85次</div>
            <div class="cjpeople">300人</div>
            <div class="qdpeople lastchild">300人</div>
          </div>
          <div class="tbody">
            <div class="servername firstchild">魏小延</div>
            <div class="account">85次</div>
            <div class="ysuccess">85次</div>
            <div class="successed">85次</div>
            <div class="cjpeople">300人</div>
            <div class="qdpeople lastchild">300人</div>
          </div>
          <div class="tbody">
            <div class="servername firstchild">魏小延</div>
            <div class="account">85次</div>
            <div class="ysuccess">85次</div>
            <div class="successed">85次</div>
            <div class="cjpeople">300人</div>
            <div class="qdpeople lastchild">300人</div>
          </div>
          <div class="tbody">
            <div class="servername firstchild">魏小延</div>
            <div class="account">85次</div>
            <div class="ysuccess">85次</div>
            <div class="successed">85次</div>
            <div class="cjpeople">300人</div>
            <div class="qdpeople lastchild">300人</div>
          </div>
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
  methods: {}
};
</script>
<style scoped>
.wrap {
  padding-top: 70px;
  padding-left: 129px;
}
.title {
  height: 33px;
  line-height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: bold;
  padding-left: 7px;
}
.title img {
  width: 28px;
  height: 26px;
  float: left;
  padding-top: 5px;
  margin-right: 10px;
}
.content {
  margin-top: 83px;
}
.content ul {
  float: left;
  background: #f6f6f6;
  width: 148px;
  height: 278px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
}
.content ul li.first {
  margin-top: 31px;
}
.content ul li.active {
  background: #085dab;
  color: #fff;
}
.content ul li {
  margin: 35px 0px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
}
.info {
  width: 1504px;
  float: left;
  height: 140px;
  background: #f6f6f6;
  margin-left: 4px;
}
.head {
  display: flex;
  width: 1504px;
}
.head > div {
  flex: 1;
  border-left: 1px solid #fff;
  height: 140px;
}
.head :first-child {
  border-left: 0px solid #fff;
}
.name {
  font-size: 18px;
  color: #000000;
  height: 24px;
  text-align: center;
  margin-top: 23px;
  margin-bottom: 27px;
  font-weight: bold;
}
.count {
  height: 50px;
  font-size: 36px;
  color: #085dab;
  text-align: center;
  line-height: 50px;
}
.tabs {
  margin-top: 38px;
  border: 1px solid #dddddd;
  width: 398px;
  height: 67px;
  display: flex;
  font-size: 20px;
}
.tabs > div {
  flex: 1;
  font-size: 20px;
  height: 67px;
  line-height: 67px;
  text-align: center;
  font-weight: bold;
}
.tabs:first-child {
  border-right: 1px solid #ddd;
}
.tabs .tabac {
  background: #e0eefe;
}
.thead {
  background: #e0eefe;
  border: 1px solid #dddddd;
  width: 1488px;
  height: 67px;
  line-height: 67px;
}
.thead > div {
  float: left;
  height: 67px;
  border-right: 1px solid #ddd;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.tbody {
  width: 1488px;
  display: inline-block;
  overflow: hidden;
  height: 160px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  margin-top: -2px;
}
.tbody > div {
  height: 158px;
  line-height: 160px;
  float: left;
  border-right: 1px solid #ddd;
  text-align: center;
  font-size: 18px;
  color: #4a4a4a;
}
.thead .lastchild {
  border: 0px;
  border-left: 1px solid #ddd;
}
.tbody .lastchild {
  border: 0px;
  border-left: 1px solid #ddd;
}
.servername {
  width: 200px;
}
.account {
  width: 249px;
}
.ysuccess {
  width: 280px;
}
.successed {
  width: 262px;
}
.cjpeople {
  width: 270px;
}
.qdpeople {
  width: 220px;
}
</style>
