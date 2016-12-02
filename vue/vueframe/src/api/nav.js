import * as http from 'src/http'

export default {
  /**
   * 企业帐号注册
   * @param  {Object} params 注册信息
   * @return {Promise}
   */
  getNavs (params) {
    return http.post(
      `${http.API_SERVER_FARE}/football/navs`, params
    )
  }
}
