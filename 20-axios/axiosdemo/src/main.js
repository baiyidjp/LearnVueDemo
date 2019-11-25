import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1. 默认是get请求
// axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/multidata',
// }).then(result => {
//   console.log(result)
// })

// 2. 并发请求
// axios.all([axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/multidata'
// }), axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]).then(result => {
//   console.log(result)
// })

// 3. 全局配置
// axios.defaults.baseURL = 'http://106.54.54.237:8000/api/v1'
// axios.defaults.timeout = 10000
//
// // 全局配置过的URL
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// })]).then(axios.spread((result1, result2) => {
//   /* 对结果延展 */
//   console.log(result1)
//   console.log(result2)
// }))

// 4.axios 创建对应的实例
// const axios1 = axios.create({
//   baseURL: 'http://106.54.54.237:8000/api/v1',
//   timeout: 10000
// })
//
// axios1({
//   url: '/home/multidata',
// }).then(result => {
//   console.log(result)
// })

// 5.axios 模块封装
import {request} from "./network/request";

request({
  url: '/home/multidata',
}).then(result => {
  console.log(result)
})
