import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  // render函数 传入一个回调函数
  render: function (creatElement) {
    // creatElement 函数
    // 1. 可以传入标签（三个参数 1.标签名，2标签的属性（可不传），3标签内容）
    // return creatElement('h2', { class: 'box' }, ['我是h2'])
    // return creatElement('button', ['我是按钮'])

    // 2. 可直接传入组件对象
    return creatElement(App)
  }
})

// 使用runtime-compiler 需要一个template来加载对应的组件 Vue的编译过程是 template -> AST -> render函数 -> 虚拟DOM -> 真实DOM(UI)
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

// 而使用runtime-only 直接给render函数传入一个template来加载对应的组件 Vue的编译过程是 render函数 -> 虚拟DOM -> 真实DOM(UI)
// 性能高 代码量少
