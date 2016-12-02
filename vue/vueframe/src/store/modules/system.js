import {
  SET_STATE,
  SET_ROUTER
} from '../mutation-types'

// 状态初始化
var state = {
  loading: false,
  router: '/index'
}

// 状态变化
const mutations = {

  [SET_STATE] (state, isLoading) {
    state.loading = isLoading
  },

  [SET_ROUTER] (state, router) {
    state.router = router
  }

}

export default {
  state,
  mutations
}
