import {UPDATEINFO} from './mutations-types'

export default {
  //
  // [UPDATEINFO] (context, payload) {
  //   setTimeout(() => {
  //     context.commit({
  //       type: UPDATEINFO,
  //       name: payload.name
  //     })
  //   }, 1000)
  // }

  [UPDATEINFO] (context, payload) {
    console.log(context)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit({
          type: UPDATEINFO,
          name: payload.name
        })
        resolve('完成了')
      }, 1000)
    })
  }
}
