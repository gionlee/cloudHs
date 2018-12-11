<template>
  <div class="ac-wrap">
    <div class="screen">
      <img src="../../images/main/screen.png" alt> 筛选查询
    </div>
    <div class="sel">
      <span>活动名称：</span>
      <input class="ac-name" type="text" placeholder="活动名称">
      <span>活动时间：</span>
      <input class="ac-start-date" type="date" placeholder="选择开始日期">
      <input class="ac-end-date" type="date" placeholder="选择结束日期">
      <span>活动状态：</span>
      <select class="ac-change" type="text" placeholder="请选择"></select>
    </div>
    <div class="clear"></div>
    <div class="ac-tabs">
      <div class="ac-title ac-title-active">
        全部
      </div>
      <div class="ac-title">
        待合作
      </div>
      <div class="ac-title">
        待审核
      </div>
      <div class="ac-title">
        待报名
      </div>
      <div class="ac-title">
        已成团
      </div>
      <div class="ac-title">
        待签到
      </div>
      <div class="ac-title">
        已结束
      </div>
      <div class="ac-title">
        已关闭
      </div>
    </div>
    <div class="table">
      <div class="thead">
      <div class="ac-poster ">活动海报</div>
      <div class="ac-bt">活动标题</div>
      <div class="ac-ybm">已报名</div>
      <div class="ac-jzdate">截止报名时间</div>
      <div class="ac-state">活动状态</div>
      <div class="ac-ctrl">操作</div>
    </div>
    <div class="tbody">
      <div class="ac-poster "><img src="" alt=""></div>
      <div class="ac-bt">美吉姆亲子早教分享会，分享亲子的快乐！</div>
      <div class="ac-ybm">0人（还差8人成团）</div>
      <div class="ac-jzdate">
        <div class="day">2018-10-20</div>
        <div class="time">12:00:00</div>
      </div>
      <div class="ac-state">待合作</div>
      <div class="ac-ctrl" @click="queryDetail()">查看详情</div>
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
      queryDetail: function () {
      this.$router.push({
        path:'/main/activityDetail'
      })
      }
    }
  };
</script>
<style scoped>
  .ac-wrap {
    margin-left: 21px;
  }
  .screen {
    width: 1490px;
    height: 60px;
    background: #f6f6f6;
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
    margin-top: 48px;
    height: 40px;
    line-height: 40px;
    width: 1490px;
  }
  .sel>span {
    width: 90px;
    line-height: 40px;
    height: 40px;
    float: left;
    font-size: 18px;
    font-weight: bold;
  }
  .sel > input {
    background: #ffffff;
    border: 1px solid #979797;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.50);
    width: 248px;
    height: 38px;
    font-size: 18px;
    color: #888888;
    text-align: center;
    float: left;
    outline: none;
  }
  .sel > select {
    background: #ffffff;
    border: 1px solid #979797;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.50);
    width: 248px;
    height: 38px;
    font-size: 18px;
    color: #888888;
    text-align: center;
    float: left;
    outline: none;
  }
  .ac-name {
    margin-left: 24px;
    margin-right: 55px;
  }
  .ac-start-date {
    margin-left: 23px;
    margin-right: 30px;
  }
  .ac-end-date {
    margin-left: 0px;
    margin-right: 63px;
  }
  .ac-change {
    margin-left: 22px;
  }
  .ac-tabs {
    width: 1303px;
    height: 55px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 54px;
    border-bottom: 1px solid #ddd;
  }
  .ac-title {
    width: 69px;
    line-height: 28px;
    height: 55px;
    float: left;
    box-sizing: border-box;
    margin-left: 100px;
  }
  .ac-title-active {
    border-bottom: 3px solid #085dab;
  }
  .ac-title:first-child {
    margin-left: 0;
  }
  .table {
    margin-left: 13px;
    width: 1293px;
  }
  .thead {
    background: #e0eefe;
    border: 1px solid #dddddd;
    width: 1293px;
    height: 67px;
    line-height: 67px;
    font-size:20px;
    text-align: center;
    margin-top: 24px;

  }
  .thead > div {
    float: left;
    height: 67px;
    font-weight: bold;
    text-align: center;
    border-right: 1px solid #ddd;
  }
  .tbody {
    border: 1px solid #dddddd;
    width: 1293px;
    border-top: 0px;
    height: 161px;
  }
  .tbody > div {
    float: left;
    height: 161px;
    line-height: 161px;
    text-align: center;
    font-size:18px;
color:#4a4a4a;
 border-right: 1px solid #ddd;
  }
  
  .tbody > .ac-ybm {
    color:#fe0000;
  }
  .tbody .ac-bt {
    line-height: 25px;
    box-sizing: border-box;
    padding:56px  18px 0 18px;
    text-align: left;
    font-weight: bold;
  }
  .tbody .ac-jzdate {
    line-height: 25px;
        padding-top: 43px;
        height: 142px;
  }
  .tbody .ac-ctrl {
    color:#085dab;
    border-right: 0px;
    
  }
    .day,.time{
        height: 25px;
        line-height: 25px;
    }
  .ac-poster {
    width: 189px;
  }
  .ac-bt {
    width: 242px;
  }
  .ac-ybm {
    width: 189px;
  }
  .ac-jzdate {
    width: 224px;
  }
  .ac-state {
    width: 219px;
  }
  .ac-ctrl {
    width: 224px;
    
    
  }
  .clear {
    clear: both;
  }
</style>
