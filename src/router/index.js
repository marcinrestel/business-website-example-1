import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import test from '@/components/Test'
import index from '@/views/Index'
import about from '@/views/About'
import contact from '@/views/Contact'
// import data from '@/components/data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
