import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/qrcode',
    name: 'Qrcode',
    component: () => import(/* webpackChunkName: "about" */ '../views/qrcode.vue')
  },
  {
    path: '/radix-convert',
    name: 'RadixConvert',
    component: () => import(/* webpackChunkName: "about" */ '../views/radix-convert.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
