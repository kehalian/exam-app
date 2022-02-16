import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Exam.vue'
import Home from '../views/dashboard/Index.vue'
import Items from '../views/items/Item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/items',
        name: 'Home',
        component: Items
      }

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
