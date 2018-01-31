import Vue from 'vue'
import Router from 'vue-router'

/**以下是引入的组件 */
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'entry',
      component:Home
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      redirect:'/'
    }
  ]
})
