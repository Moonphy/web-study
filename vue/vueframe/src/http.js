/**
 * 封装请求
 */

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

function defaults () {
  return {
  }
}

function extend (a, b) {
  Object.keys(b).forEach(k => {
    if (!a[k]) {
      a[k] = b[k]
    }
  })
  return a
}

export const API_SERVER = 'http://dev.phpmvc.com/index.php?ctl=admin&'
export const API_SERVER_FARE = 'http://dev.fake.gaofen.com'

export const get = (url, data, options) => {
  return Vue.http.get(url, JSON.stringify(data), extend(options || {}, defaults()))
}

export const post = (url, data, options) => {
  return Vue.http.post(url, JSON.stringify(data), extend(options || {}, defaults()))
}

export const put = (url, data, options) => {
  return Vue.http.put(url, JSON.stringify(data), extend(options || {}, defaults()))
}

export const del = (url, data, options) => {
  return Vue.http.delete(url, JSON.stringify(data), extend(options || {}, defaults()))
}

export const upload = (url, data, options) => {
  return Vue.http.post(url, data, extend(options || {}, defaults()))
}
