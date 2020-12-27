import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  baseUrl: "/metting/",
  routes: [
    {
      path: '/',
      name: 'test',
      component: () => import('@/views/test')
    }
  ]
})
