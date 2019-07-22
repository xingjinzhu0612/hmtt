import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import Weclome from '../views/wecome/wecome.vue'
import NotFound from '../views/404/notFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { name: 'weclome', path: '/', component: Weclome }
      ]
    },
    { name: '404', path: '*', component: NotFound }
  ]
})
export default router
