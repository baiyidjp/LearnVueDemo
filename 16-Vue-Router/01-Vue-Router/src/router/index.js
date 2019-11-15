// 配置路由相关的信息
// 导入Vue和VueRouter
import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入Vue文件
import Home from '../components/Home'
import About from '../components/About'

// 1.通过Vue.use() 安装插件
Vue.use(VueRouter)

// 抽取routes 配置路径
const routes = [
  /* 首次打开 重定向 */
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

// 2.创建路由对象
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  // 配置URL模式为history
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router对象传入Vue的实例中
// 此处导出 在main.js中导入 挂载
export default router
