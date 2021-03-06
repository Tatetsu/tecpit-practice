import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

import User from '@/views/User.vue'

// router.js

//コメント：宣言が重複していました。


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routers: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/uid',
      name: 'user',
      component: User
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ '@/views/About.vue')
        // コメント：パスの入れ方が違ったようです
      }
    }
  ]
})