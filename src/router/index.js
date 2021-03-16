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
    component: () => import('../views/qrcode.vue')
  },
  {
    path: '/radix-convert',
    name: 'RadixConvert',
    component: () => import('../views/radix-convert.vue')
  },
  {
    path: '/json-beautiful',
    name: 'JsonBeautiful',
    component: () => import('../views/json-beautiful.vue')
  },
  {
    path: '/color-picker',
    name: 'ColorPicker',
    component: () => import('../views/color-picker/index.vue')
  },
  {
    path: '/code-img',
    name: 'CodeImg',
    component: () => import('../views/code-img/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
