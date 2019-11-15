import {sum, mul} from "./js/utils.js";

console.log(sum(20, 540))
console.log(mul(2, 80))

/* 依赖css文件 */
// 安装了 css-loader style-loader 才可以正确打包 css 文件
require('./css/normal.css')

// 依赖 less 文件
require('./css/special.less')

document.writeln('<h2>Hello Less</h2>')

// 使用Vue开发
import Vue from 'vue'
/* 1. 创建Vue实例 */
// const vm = new Vue({
//   el: '#app',
//   template: `
//     <div>
//       <h2>{{ message }}</h2>
//     </div>
//   `,
//   data: {
//     message: 'Hell Vue'
//   }
// })

/* 2. 将template抽取出来，作为一个组件的模板 */
// 将写好的组件作为子组件加载到App实例中
// const App = {
//   template: `
//     <div>
//       <h2>{{ message }}</h2>
//     </div>
//   `,
//   data() {
//     return {
//       message: 'Hello Vue Component'
//     }
//   }
// }

/* 3. 将组件代码(对象)抽取到一个文件中 vue/app.js 使用export default 将对象App导出*/
// import App from './vue/app'

/* 4. 将模块代码抽取到 App.vue 中实现 */
import App from './vue/App.vue'

new Vue({
  el: '#app',
  // 在模板中使用子组件，Vue编译时内部会替换当前挂载的标签内容，其实就是加载的子组件的内容
  template: `<App/>`,
  // 将写好的组件作为子组件加载到App实例中
  components: {
    App
  }
})

/*
* 1. 同时有el和template时，Vue内部会将template完全复制替换el挂载的标签,如果挂载的标签原先有内容也不会展示，会被替换
* */
