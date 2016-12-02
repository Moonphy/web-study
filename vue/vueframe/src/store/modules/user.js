import {
  GET_USER,
  GET_USERS,
  ADD_USER
} from '../mutation-types'

// 状态初始化
var state = {
  users: [],
  currentUser: {}
}

// 状态变化
const mutations = {
  [GET_USERS] (state, users) {
    state.users = users
  },

  [GET_USER] (state, user) {
    state.currentUser = user
  },

  [ADD_USER] (state, user) {
    state.users.push(user)
  }

}

export default {
  state,
  mutations
}
