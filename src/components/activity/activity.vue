<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/money.png" alt> 财务管理
    </div>
    <div class="content">
      <ul>
        <li>活动概况</li>
        <li class="first active">活动管理</li>
        <li>评论管理</li>
        <li>标签管理</li>
      </ul>
      <div class="info">
        <!-- 活动管理 -->
        <ac-man></ac-man>
        <!-- 活动概况组件 -->
        <!-- <sc-man></sc-man> -->
      </div>
    </div>
  </div>
</template>
<script>
import acMan from "./activity-man.vue";
import scMan from "./situation-activities";
export default {
  components: {
    acMan,
    scMan
  },
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

  margin-left: 4px;
}
.head {
  display: flex;
  width: 1504px;
  background: #f6f6f6;
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
