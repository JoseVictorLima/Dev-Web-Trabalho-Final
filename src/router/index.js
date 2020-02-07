import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/recuperarsenha',
    name: 'recuperarsenha',
    component: () => import('../views/recuperarSenha.vue')
  },

  {
    path: '/cadastrarreceita',
    name: 'cadastrarreceita',
    component: () => import('../views/cadastrarReceita.vue')
  },
  {
    path: '/receitas',
    name: 'receitas',
    component: () => import('../views/ReceitaLista.vue')
  },
  // {
  //   path: '/receita',
  //   name: 'receita',
  //   component: () => import('../views/Receita.vue')
  // },

  {
    path: '/receita/:id',
    name: 'receita',
    component: () => import('../views/Receita.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
