<template>
    <div class="wrap">
        <div class="title">
            <img src="../../images/main/par.png" alt> 用户管理
        </div>
        <div class="screen">
            <img src="../../images/main/screen.png" alt> 筛选查询
        </div>
        <div class="sel">
            <div class="txt">关键词：</div>
            <input type="text" placeholder="用户名/手机号">
            <div class="btn">搜索</div>
        </div>
        <div class="clear"></div>
        <div class="table">
            <div class="thead">用户列表
            
            </div>
            <div class="sthead">
                <div class="userimg ">头像</div>
                <div class="username">用户名称</div>
                <div class="phone">手机号</div>
                <div class="zctime">注册时间</div>
                <div class="ctrl lastlist">操作</div>
            </div>
            <div class="tlists">
                <div class="tlist">
                    <div class="userimg"> 大法师</div>
                    <div class="username">魏小延</div>
                    <div class="phone">15865983256</div>
                    <div class="zctime">2018-10-20</div>
                    <div class="ctrl lastlist">
                        <!-- <ul>
                            <li class="firli">分佣设置</li>
                            <li class="firli">编辑</li>
                            <li>重置密码</li>
                            <li>详情</li>
                            <li @click="accParMan()">收款账号</li>
                            <li>取消冻结</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        methods: {
            addParMan: function () {
                this.$router.push({
                    path:'main/addParMan'
                })
            },
            accParMan: function () {
                this.$router.push({
                    path:'main/accParMan'
                })
            }
        }
    };
</script>
<style scoped>
    .wrap {
        padding: 68px 136px;
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
        background:#e0eefe;
    }
    .userimg {
        width: 310px;
    }
    .sthead > div {
        float: left;
        border-left: 1px solid #ddd;
        text-align: center;
        box-sizing: border-box;

    }
    .username {
        width: 267px;
    }
    .phone {
        width: 352px;
    }
    .zctime {
        width: 319px;
    }
    .table .thead {
        text-align: left;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #000000;
        height: 69px;
        line-height: 69px;
        padding-left: 15px;
        background:#e0eefe;
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
    .tbody .zctime {
        padding-left: 50px;
        box-sizing: border-box;
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
        width: 241px;
    }
    .tlist {
        height: 142px;
        line-height: 142px;
        border: 1px solid #ddd;
    }
    .lastlist {
        border-right: 1px solid #ddd;
    }
    .tlist > div {
        float: left;
        text-align: center;
        border-right: 1px solid #ddd;
        box-sizing: border-box;
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
