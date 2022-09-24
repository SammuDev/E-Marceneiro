import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './store'

createApp(App).use(store).use(router).mount('#app')


router.beforeEach((to, from, next) => {
    if (to.path!=='/' && store.state.users.usrLogado<1) {
      next('/');
    } else {
      next();  
    }
  })
