import { createRouter, createWebHistory } from 'vue-router'

import App from '../../src/App.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/crudteste',
    name: 'crudteste',
    component:() => import(/* webpackChunkName: "about" */ '../views/CrudTeste.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
