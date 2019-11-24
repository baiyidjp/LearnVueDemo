export default {
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
}
