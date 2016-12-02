import Vue from 'vue'
import Vuex from 'vuex'
import navs from './modules/nav'
import user from './modules/user'
import system from './modules/system'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组合各个模块
  modules: {
    navs,
    system,
    user
  }
})
