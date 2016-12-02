// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
import * as types from '../store/mutation-types'
import api from '../api/api'

export const getNavs = ({ dispatch }, navs) => {
  dispatch(types.GET_NAVS, navs)
}

export const getCurrent = ({ dispatch }, router) => {
  dispatch(types.GET_NAVS, router)
}

export const setState = ({ dispatch }, states) => {
  dispatch(types.SET_STATE, states)
}

export const setRouter = ({ dispatch }, router) => {
  dispatch(types.SET_ROUTER, router)
}

export const getUsers = ({ dispatch }, params) => {
  api.user.getUsers().then((res) => {
    dispatch(types.GET_USERS, res.data.rst)
  }).catch((res) => {
    // this.handleError(res)
  })
  // dispatch(types.SET_STATE, states)
}

export const getUser = ({ dispatch }, user) => {
  dispatch(types.SET_ROUTER, user)
}

export const addUser = ({ dispatch }, user) => {
  dispatch(types.ADD_USER, user)
}
