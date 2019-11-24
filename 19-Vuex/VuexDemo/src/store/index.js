import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
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
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
})

export default store
