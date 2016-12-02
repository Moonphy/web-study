import {
  GET_NAVS,
  // SET_ROUTER,
  CURRENT_NAV
} from '../mutation-types'

import _ from 'lodash'

// 状态初始化
var state = {
  navs: [],
  curr: {}
}

// 状态变化
const mutations = {
  [GET_NAVS] (state, navs) {
    state.navs = navs
  },

  // [SET_ROUTER] (state, navs) {
  //   console.log('goooo')
  // },

  [CURRENT_NAV] (state, router) {
    var navs = state.navs.concat()
    var nav
    _.foreach(navs, (item) => {
      if (item.url === router) {
        nav = item
      }
    })
    state.curr = nav
    return nav
  }

}

export default {
  state,
  mutations
}
