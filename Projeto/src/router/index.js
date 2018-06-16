import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/GeneralViews/Home'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
