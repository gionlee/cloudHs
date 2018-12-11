<template>
    <div>
        <div class="nav"></div>
        <div class="wrap">
            <div class="body">
                <div class="title">首次登陆系统，请先修改初始密码</div>
                <div class="line"></div>
                <div class="list">
                    <img class="red" src="../images/main/red.png" alt="">
                    <span class="txt">当前密码：</span>
                    <input type="text" class="input" placeholder="请输入当前密码">
                </div>
                <div class="list">
                    <img class="red" src="../images/main/red.png" alt="">
                    <span class="txt">新密码：</span>
                    <input type="text" class="input" placeholder="请输入新密码">
                </div>
                <div class="list">
                    <img class="red" src="../images/main/red.png" alt="">
                    <span class="txt">确认新密码：</span>
                    <input type="text" class="input" placeholder="请输入新密码">
                </div>
                <div class="save" @click="save()">
                    保存
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
            save: function () {
                this.$router.push({
                    path:'/main'
                })
            }
        }
    }
</script>
<style scoped>
    .nav {
        background: #353948;
        width: 1920px;
        height: 111px;
    }
    .wrap {
        width: 100%;
        height: clac(100vh - 211px);
        background: #eceef3;
        padding-top: 100px;
    }
    .body {
        background: #ffffff;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        width: 1071px;
        height: 658px;
        margin: 0 auto;
    }
    .title {
        height: 115px;
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0;
        line-height: 115px;
        text-align: center;
        font-weight: bold;
    }
    .line {
        background: #f5f5f5;
        width: 861px;
        height: 3px;
        margin: 0 auto;
    }
    .list {
        height: 40px;
        margin-top: 64px;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #000000;
        line-height: 40px;
    }
    .red {
        width: 10px;
        height: 10px;
        margin-left: 285px;
    }
    .txt {
        width: 109px;
        display: inline-block;
        text-align: left;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        font-weight: bold;
        color: #000000;
    }
    .input {
        background: #ffffff;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.50);
        width: 307px;
        height: 40px;
        margin-left: 10px;
        padding-left: 10px;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #888888;
        box-sizing: border-box;
    }
    .save {

        background: #085dab;
        width: 255px;
        height: 55px;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #ffffff;
        margin-left: 420px;
        margin-top: 102px;
        cursor: pointer;
        line-height: 55px;
    }
</style>
