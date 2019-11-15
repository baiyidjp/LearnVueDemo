import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import User from '../components/User'

Vue.use(VueRouter)

const routes= [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home},
  /* 动态路由 可以自带参数 */
  { path: '/user/:user_id', component: User},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
