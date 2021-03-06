import Vue from 'vue'
import Router from 'vue-router'
import record from '@/components/record'
import login from '@/components/login'
import oilrecord from '@/components/oilrecord'
import xiyaoperson from '@/components/xiyaoperson'
import liferecord from '@/components/liferecord'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/oilrecord',
      name: 'oilrecord',
      component: oilrecord
    },
    {
      path: '/xiyaoperson',
      name: 'xiyaoperson',
      component: xiyaoperson
    },
    {
      path: '/liferecord',
      name: 'liferecord',
      component: liferecord
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }

  ]
})
