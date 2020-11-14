import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login') 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: 'user/info1', component: () => import('views/user/info1') },
      { path: 'user/info2', component: () => import('views/user/info2') },
      { path: 'user/info3', component: () => import('views/user/info3') },
      { path: 'system/info1', component: () => import('views/system/info1') },
      { path: 'system/info2', component: () => import('views/system/info2') }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
