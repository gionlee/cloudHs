<template>
    <div>
        <div class="nav">
            <div class="logo">
                <img src="../images/main/logo.png" alt="">
            </div>
            <nav>
                <div :class="navbg.parman" @click="goparMan()">合伙人管理</div>
                <div :class="navbg.server" @click="goServer()">服务商管理</div>
                <div :class="navbg.finance"  @click="goFinance()">财务管理</div>
                <div :class="navbg.activity" @click="goActivity()">活动管理</div>
                <div :class="navbg.user" @click="goUserMan()">用户管理</div>
                <div :class="navbg.staff" @click="goStaffMan()">员工管理</div>
            </nav>
            <div class="admin">
                <div class="user" @mouseover="showCtrl()" @mouseout="hideCtrl()">
                    <img src="../images/main/user.png" alt="">
                    <div class="username">admin</div>
                </div>
                <div class="lists" v-show="ctrl" @mouseover="showCtrl()" @mouseout="hideCtrl()">
                    <div class="list first">
                        修改密码
                    </div>
                    <div class="list">
                        退出登录
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ctrl: false,
                navbg: {
                    parman: 'name active',
                    server: 'name',
                    finance: 'name',
                    activity: 'name',
                    user: 'name',
                    staff: 'name',
                }
            }
        },
        methods: {
            showCtrl: function() {
                this.ctrl = true
            },
            hideCtrl: function() {
                this.ctrl = false
            },
            goparMan: function () {
                for( var key in this.navbg ) {
                    this.navbg[key] = 'name'
                }
                this.navbg.parman = 'name active'
                this.$router.push({
                    path:'/main'
                })
            },
            goServer: function () {
                for( var key in this.navbg ) {
                    this.navbg[key] = 'name'
                }
                this.navbg.server = 'name active'
                this.$router.push({
                    path:'/main/server'
                })
            },
            goFinance: function () {
                for( var key in this.navbg ) {
                    this.navbg[key] = 'name'
                }
                this.navbg.finance = 'name active'
                this.$router.push({
                    path:'/main/finance'
                })
            },
            goActivity: function () {
                for( var key in this.navbg ) {
                    this.navbg[key] = 'name'
                }
                this.navbg.activity = 'name active'
                this.$router.push({
                    path:'/main/activity'
                })
            },
            goUserMan: function () {
                for( var key in this.navbg ) {
                    this.navbg[key] = 'name'
                }
                this.navbg.user = 'name active'
                this.$router.push({
                    path:'/main/userMan'
                })
            },
            goStaffMan: function () {
                for( var key in this.navbg ) {
                    this.navbg[key] = 'name'
                }
                this.navbg.staff = 'name active'
                this.$router.push({
                    path:'/main/staffMan'
                })
            }
        }
    }
</script>
<style scoped>
    .nav {
        height: 109px;
        background: #353948;
        border: 1px solid #353948;
        width: 100%;
    }
    .logo {
        width: 187px;
        height: 72px;
        margin: 20px 93px 19px 13px;
        float: left;
    }
    .logo img {
        width: 100%;
    }
    nav {
        width: 1000px;
        display: flex;
        color: #fff;
        line-height: 110px;
        float: left;
    }
    .name {
        flex: 1;
        cursor: pointer;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
    }
    .admin {
        width: 160px;
        float: right;
        margin-right: 100px;
        color: #fff;
        cursor: pointer;
        background: #085dab;
        border: 1px solid #085dab;
        width: 159px;
        height: 109px;
        box-sizing: border-box;
    }
    .user {
        background: #24476f;
        width: 128px;
        height: 62px;
        padding: 23px 16px;
        line-height: 62px;
    }
    .user img {
        border: 1px solid #979797;
        width: 66px;
        height: 66px;
        border-radius: 50%;
        float: left;
    }
    .username {
        margin-left: 10px;
        float: left;
    }
    .list {
        height: 40px;
        border: 1px solid #888888;
        width: 160px;
        background: #24476f;
        box-sizing: border-box;
        line-height: 40px;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #ffffff;
    }
    .first {
        border-bottom: 0px;
    }
    .active {
        background-image: url('../images/main/navbg.png');
        background-size: 123px 69px;
        background-repeat: no-repeat;
        background-position: 22px 20px;
    }
</style>

