import * as http from 'src/http'

export default {
  /**
   * 获取用户列表
   * @param  {Object} params
   * @return {Promise}
   */
  getUsers (params) {
    return http.post(
      `${http.API_SERVER_FARE}/football/getuser`, params
    )
  },

  /**
   * 增加用户
   * @param  {Object} params
   * @return {Promise}
   */
  addUser (params) {
    return http.post(
      `${http.API_SERVER_FARE}/football/adduser`, params
    )
  }
}
