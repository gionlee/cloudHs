<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt>
      <span class="back" @click="backParMan()">员工管理</span>
      <img class="right" src="../../images/main/right.png" alt>
      <span>权限配置</span>
    </div>
    <div class="clear"></div>
    <div class="body">
      <div class="list">
        <span class="htmls">页面权限</span>
        <span class="misslz">操作权限</span>
      </div>
      <ul class="wrapper">
        <li class="widthed">
          <span>
            <input class="checkboxeds" type="checkbox">
            <span class="checkName">服务商管理</span>
          </span>
        </li>
        <li class="whites">
          <span>
            <input class="checkboxeds" type="checkbox">
            <span class="checkName">增加服务商</span>
          </span>
        </li>
        <li class="whites">
          <span>
            <input class="checkboxeds" type="checkbox">
            <span class="checkName">冻结/解除冻结</span>
          </span>
        </li>
        <li class="whites">
          <span>
            <input class="checkboxeds" type="checkbox">
            <span class="checkName">编辑服务商</span>
          </span>
        </li>
        <li class="whites">
          <span>
            <input class="checkboxeds" type="checkbox">
            <span class="checkName">分佣设置</span>
          </span>
        </li>
        <li class="whites">
          <span>
            <input class="checkboxeds" type="checkbox">
            <span class="checkName">收款账号</span>
          </span>
        </li>
      </ul>
      <div class="submit">提交</div>
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
  background: #ffffff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  width: 1492px;
  height: 569px;
  margin-top: 60px;
  margin-left: 70px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.list {
  background: #f6f6f6;
  width: 1492px;
  line-height: 60px;
  height: 60px;
}
.list span {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  letter-spacing: 0.03px;
  font-weight: bold;
}
.htmls {
  display: inline-block;
  width: 161px;
  text-align: center;
}
.misslz {
  margin-left: 68px;
}
.checkboxeds {
  width: 17px;
  height: 17px;
  background-color: #fff;
}
.checkName {
  margin-left: 8px;
}
.wrapper {
  width: 1492px;
  height: 60px;
}
.checkName {
  margin-left: -6px;
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #4a4a4a;
  letter-spacing: 0.75px;
  text-align: left;
  font-weight: bold;
}
.widthed {
  background: #f6f6f6;
  width: 161px;
  height: 60px;
  float: left;
  line-height: 60px;
  text-align: center;
}
.wrapper {
  border-bottom: 1px solid #e0e0e0;
}
.wrapper .whites {
  width: 212px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  float: left;
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
  margin-top: 350px;
  margin-left: 617px;
}
</style>