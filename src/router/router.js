import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import Weclome from '../views/wecome/wecome.vue'
import NotFound from '../views/404/notFound.vue'
import Article from '../views/article/article.vue'
import Image from '../views/image/image.vue'
import Publish from '../views/publish/publish.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { name: 'weclome', path: '/', component: Weclome },
        { name: 'article', path: '/article', component: Article },
        { name: 'image', path: '/image', component: Image },
        { name: 'publish', path: '/publish', component: Publish }

      ]
    },
    { name: '404', path: '*', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  const user = window.sessionStorage.getItem('hmtt')
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
