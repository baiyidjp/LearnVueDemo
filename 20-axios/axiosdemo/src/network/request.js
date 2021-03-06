import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/v1',
    timeout: 10000
  })

  // 拦截器
  /* 请求拦截 */
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, error => {
    console.log(error)
  })

  /* 响应拦截 */
  instance.interceptors.response.use(result => {
    console.log(result)
    return result.data
  }, error => {
    console.log(error)
  })

  // instance(config) 本身就是返回一个promise
  return instance(config)
}

// export function request(config) {
//
//   return new Promise((resolve, reject) => {
//
//     const instance = axios.create({
//       baseURL: 'http://106.54.54.237:8000/api/v1',
//       timeout: 10000
//     })
//
//     instance(config)
//       .then(result => {
//
//       })
//       .catch(error => {
//
//       })
//
//   })
// }
