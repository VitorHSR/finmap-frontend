import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/GeneralViews/Home'
import Login from '@/components/GeneralViews/Login'
import Cadastro from '@/components/GeneralViews/Cadastro'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    }
  ]
})
