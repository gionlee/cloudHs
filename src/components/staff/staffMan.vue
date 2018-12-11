<template>
  <div class="wrap">
    <div class="title">
      <img src="../../images/main/par.png" alt> 员工管理
    </div>
    <div class="clear"></div>
    <div class="table">
      <div class="thead">员工列表
        <div class="addpar" @click="addMans()">
          <img class="add" src="../../images/main/add.png" alt> 增加员工
        </div>
      </div>
      <div class="sthead">
        <div class="staffname">员工姓名</div>
        <div class="staffacc">员工账号</div>
        <div class="phone">员工手机号</div>
        <div class="rolename">角色名称</div>
        <div class="creator">创建时间</div>
        <div class="ctrl lastlist">操作</div>
      </div>
      <div class="tlists">
        <div class="tlist">
          <div class="staffname">魏小延</div>
          <div class="staffacc">admin01</div>
          <div class="phone">123123123</div>
          <div class="rolename">天津</div>
          <div class="creator">
            <div class="day">2018-10-20</div>
            <div class="time">12:00:00</div>
          </div>
          <div class="ctrl lastlist">
            <ul>
              <li @click="permissionConfiged()">权限配置</li>
              <li>编辑</li>
              <li @click="accParMan()">删除</li>
              <li>重置密码</li>
            </ul>
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
  methods: {
      // 增加人员
    addMans: function() {
      this.$router.push({
        path: "main/addMan"
      });
    },
    accParMan: function() {
      this.$router.push({
        path: "main/accParMan"
      });
    },
    // 权限配置
    permissionConfiged: function () {
      this.$router.push({
        path: 'main/permissionConfig'
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
.staffname {
  width: 200px;
}
.sthead > div {
  float: left;
  border-left: 1px solid #ddd;
  text-align: center;
  box-sizing: border-box;
}
.staffacc {
  width: 246px;
}
.phone {
  width: 278px;
}
.rolename {
  width: 254px;
}
.creator {
  width: 150px;
}
.creator {
  width: 270px;
}
.tlist .creator {
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
  border-bottom: 1px solid #ddd;
}
.ctrl ul {
  text-align: center;
  width: 179px;
  padding: 18px 19px 20px 31px;
  height: 104px;
}
.ctrl ul li {
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  margin-top: 3px;
  color: #085dab;
  font-weight: bold;
  cursor: pointer;
}
.ctrl .firli {
  margin-top: 0px;
}
.clear {
  clear: both;
}
</style>
