import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  /* 定义状态 */
  state: {
    counter: 0
  },
  /* 定义方法 */
  mutations: {
    add () {
      this.state.counter++
    },
    sub () {
      this.state.counter--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store
