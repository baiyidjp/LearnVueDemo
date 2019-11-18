import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import User from '../components/User'
// 路由懒加载 打包的js是单独 用户在请求对应的组件时才会加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

Vue.use(VueRouter)

const routes= [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: Home,
  //  嵌套路由 子路由
    children: [
      { path: '', component: HomeNews },
      { path: 'news', component: HomeNews },
      { path: 'message', component: HomeMessage }
    ],
    meta: {
      title: 'Home'
    }
  },
  /* 动态路由 可以自带参数 */
  {
    path: '/user/:user_id',
    component: User,
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 前置导航守卫 路由跳转前
router.beforeEach((to, from, next) => {
  // 从 from 跳转到 to 替换title
  document.title = to.matched[0].meta.title
  console.log(to);
  /* next 方法必须调用，正常的跳转路由*/
  next()
})

// 后置导航钩子 路由跳转后
router.afterEach((to, from) => {
  console.log(to);
})

export default router
