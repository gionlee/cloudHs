import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import cpass from '@/components/cpass'
import main from '@/components/main'
import parMan from '@/components/partner/parMan'
import addParMan from '@/components/partner/addParMan'
import accParMan from '@/components/partner/accParMan'
import reaccParMan from '@/components/partner/reaccParMan'
import server from '@/components/server/server'
import addServer from '@/components/server/addServer'
import accServer from '@/components/server/accServer'
import reaccServer from '@/components/server/reaccServer'
import finance from '@/components/finance/finance'
import activity from '@/components/activity/activity'
import userMan from '@/components/user/userMan'
import staffMan from '@/components/staff/staffMan'
import subCommission from '@/components/partner/subCommission'
import partnerDetails from '@/components/partner/partnerDetails'
import serverDeatils from '@/components/server/serverDetails'
import addMan from '@/components/staff/addMan'
import permissionConfig from '@/components/staff/permissionConfiguration'
import activityDetail from '@/components/activity/activityDetail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/cpass',
      name: 'cpass',
      component: cpass
    },{
      path: '/main',
      name: 'main',
      component: main,
      children: [{
        path: '/',
        name:'parMan',
        component: parMan
      },{
        path: 'server',
        name:'server',
        component: server
      },{
        path: 'addParMan',
        name:'addParMan',
        component: addParMan
      },{
        path: 'addServer',
        name:'addServer',
        component: addServer
      },{
        path: 'reaccServer',
        name:'reaccServer',
        component: reaccServer
      },{
        path: 'reaccParMan',
        name:'reaccParMan',
        component: reaccParMan
      },{
        path: 'accServer',
        name:'accServer',
        component: accServer
      },{
        path: 'accParMan',
        name:'accParMan',
        component: accParMan
      },{
        path: 'finance',
        name:'finance',
        component: finance
      },{
        path: 'activity',
        name:'activity',
        component: activity
      },{
        path: 'userMan',
        name:'userMan',
        component: userMan
      },{
        path: 'staffMan',
        name:'staffMan',
        component: staffMan
      }, {
        path: 'subCommission',
        name: 'subCommission',
        component: subCommission
      }, {
        path: 'partnerDetails',
        name: 'partnerDetails',
        component: partnerDetails
      }, {
        path: 'serverDeatils',
        name: 'serverDeatils',
        component: serverDeatils
      }, {
        path: 'addMan',
        name: 'addMan',
        component: addMan
      }, {
        path: 'permissionConfig',
        name: 'permissionConfig',
        component: permissionConfig
      }, {
        path:'activityDetail',
        name: 'activityDetail',
        component: activityDetail
      }]
    }
  ]
})
