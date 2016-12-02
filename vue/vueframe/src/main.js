import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由设置
import configRouter from './route-config'

import VueVlidator from 'vue-validator'
Vue.use(VueVlidator)

Vue.validator('url', function (val) {
  return /^(http:\/\/|https:\/\/)(.{4,})$/.test(val)
})

// 创建 vue 实例
var App = Vue.extend(require('./App'))

var router

// 加载路由插件
Vue.use(VueRouter)

// 路由及其配置
router = new VueRouter({
  // history: true
  // saveScrollPosition: true
})
configRouter(router)

// 启动 App
router.start(App, '#app')
// 加载路由插件

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
