import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'loginview',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue') //HomeView
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
  },
  {
    path: '/clientsview',
    name: 'clientsview',
    component:() => import( '../views/ClientsView.vue')
  },
  {
    path: '/clientview:clientId',
    name: 'clientview',
    component:() => import( '../views/ClientView.vue')
  },
  {
    path: '/helpview',
    name: 'helpview',
    component:() => import(/* webpackChunkName: "about" */ '../views/HelpView.vue')
  },
  {
    path: '/orcview',
    name: 'orcview',
    component:() => import(/* webpackChunkName: "about" */ '../views/OrcView.vue')
  },
  {
    path: '/adorcview',
    name: 'adorcview',
    component:() => import(/* webpackChunkName: "about" */ '../views/AdOrcView.vue')
  },
  {
    path: '/ambienteorc',
    name: 'ambienteorc',
    component:() => import(/* webpackChunkName: "about" */ '../views/AmbienteOrc.vue')
  },
  {
    path: '/productview',
    name: 'productview',
    component:() => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/productedit',
    name: 'productedit',
    component:() => import(/* webpackChunkName: "about" */ '../views/ProductEdit.vue')
  }
  // ,
  // {
  //   path: '/loginview',
  //   name: 'loginview',
  //   component:() => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  // }
  ,
  {
    path: '/homeview',
    name: 'homeview',
    component:() => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
