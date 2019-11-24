import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATEINFO} from './mutations-types'

Vue.use(Vuex)

/* 创建模块 */
const moduleA = {
  /* 调用和直接写在store中不一样 $store.state.moduleA.name */
  state: {
    name: 'module-name'
  },
  mutations: {
    updateName (state) {
      state.name = 'updated name'
    }
  },
  actions: {

    // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
    // updateNameAsync (context) {
    //   console.log(context)
    //   setTimeout(() => {
    //     context.commit('updateName')
    //   }, 1000)
    // }
    /* 对象的解构 */
    updateNameAsync ({ state, commit, rootState }) {
      setTimeout(() => {
        commit('updateName')
      }, 1000)
    }
  },
  getters: {
    fullName (state) {
      return state.name + '1'
    },
    fullName2 (state, getters) {
      return getters.fullName + '2'
    },
    // rootState 根的state
    fullName3 (state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}

const store = new Vuex.Store({
  /* 定义状态 */
  state: {
    counter: 0,
    persons: [
      {'id': 1, 'name': 'kobe1', 'age': 18},
      {'id': 2, 'name': 'kobe2', 'age': 28},
      {'id': 3, 'name': 'kobe3', 'age': 38}
    ],
    kobeInfo: {
      'id': 1,
      'name': 'kobe',
      'age': 38
    }
  },
  /* 定义方法 */
  mutations: {
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
  },
  /* 异步操作放在Actions中执行 */
  // 执行完异步后，在调用commit
  actions: {
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
  },
  /* 相当于计算属性 */
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    },
    personAgeThan20 (state) {
      return state.persons.filter(p => p.age > 20)
    },
    personAgeThan20Length (state, getters) {
      return getters.personAgeThan20.length
    },
    /* 传参,返回一个函数接收参数 */
    personAgeThan (state) {
      return age => {
        return state.persons.filter(p => p.age > age)
      }
    }
  },
  modules: {
    moduleA
  }
})

export default store
