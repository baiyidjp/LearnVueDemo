import {UPDATEINFO} from './mutations-types'
import Vue from 'vue'

export default {
  add () {
    this.state.counter++
  },
  sub () {
    this.state.counter--
  },
  /* 传入一个参数， 第一个参数默认是 state， 第二个是传入的参数（多个参数，使用对象传递） */
  addAppCount (state, count) {
    state.counter += count
  },

  /* 对象风格的提交 */
  addAppObject (state, payload) {
    console.log(payload)
    state.counter += payload.count
  },

  // updateInfoName (state, payload) {
  //   state.kobeInfo.name = payload.name
  //   //  添加新属性并添加响应式
  //   Vue.set(state.kobeInfo, 'address', 'China')
  //   state.persons.push(state.kobeInfo)
  // },
  /* 使用常量替代 Mutation 事件类型 */
  [UPDATEINFO] (state, payload) {
    state.kobeInfo.name = payload.name
    //  添加新属性并添加响应式
    Vue.set(state.kobeInfo, 'address', 'China')
    state.persons.push(state.kobeInfo)
  }
}
