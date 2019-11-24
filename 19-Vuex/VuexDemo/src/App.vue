<template>
  <div id="app">
    <h2>App组件</h2>
    <h2>modules数据：{{ $store.state.moduleA.name }}</h2>
    <h3>{{ $store.getters.fullName }}</h3>
    <h3>{{ $store.getters.fullName2 }}</h3>
    <h3>{{ $store.getters.fullName3 }}</h3>
    <button @click="updateModuleName">修改module-name</button>
    <button @click="updateModuleNameAsync">异步修改module-name</button>
    <h2>验证对象是否是响应式的</h2>
    <h3>{{ $store.state.kobeInfo }}</h3>
    <h2>{{ $store.state.counter }}</h2>
    <h2>counter的平方{{ $store.getters.powerCounter }}</h2>
    <h2>年龄大于20</h2>
    <h3>{{ $store.getters.personAgeThan20 }}</h3>
    <h3>总数：{{ $store.getters.personAgeThan20Length }}</h3>

    <h3>-------------------</h3>
    <router-view/>
    <h3>-------------------</h3>
    <button @click="addApp">+</button>
    <button @click="subApp">-</button>
    <button @click="addAppCount(5)">+5</button>
    <button @click="addAppObject(10)">+10对象提交</button>
    <button @click="updateInfoName('coderby')">更换名字</button>
  </div>
</template>

<script>
import {UPDATEINFO} from './store/mutations-types'
export default {
  name: 'App',
  data () {
    return {
      message: '哈哈哈'
    }
  },
  methods: {

    /* 普通的提交 */
    addApp () {
      /* 提交改变 异步的方法建议先进行异步操作后再使用commit */
      this.$store.commit('add')
    },
    subApp () {
      this.$store.commit('sub')
    },
    addAppCount (count) {
      this.$store.commit('addAppCount', count)
    },

    /* 对象风格的提交方式 */
    addAppObject (count) {
      this.$store.commit({
        type: 'addAppObject',
        count: count
      })
    },

    updateInfoName (name) {
      /* this.$store.commit({
        type: UPDATEINFO,
        name: name
      }) */
      // this.$store.dispatch({
      //   type: UPDATEINFO,
      //   name: name
      // })
      this.$store.dispatch({
        type: UPDATEINFO,
        name: name
      }).then(res => {
        console.log(res)
      })
    },

    updateModuleName () {
      this.$store.commit('updateName')
    },
    updateModuleNameAsync () {
      this.$store.dispatch('updateNameAsync')
    }
  }
}
</script>

<style>

</style>
