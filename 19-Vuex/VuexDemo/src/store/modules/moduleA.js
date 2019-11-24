export default {
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
