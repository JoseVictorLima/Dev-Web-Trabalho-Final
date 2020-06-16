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
    path: '/usuario/new',
    name: 'novousuario',
    component: () => import('../views/cadastrarPerfil.vue')
  },
  {
    path: '/usuario/:id/edit',
    name: 'editarusuario',
    component: () => import('../views/cadastrarPerfil.vue')
  },
  {
    path: '/recuperarsenha',
    name: 'recuperarsenha',
    component: () => import('../views/recuperarSenha.vue')
  },

  {
    path: '/receitas/new',
    name: 'cadastrarreceita',
    component: () => import('../views/cadastrarReceita.vue')
  },
  {
    path: '/minhasreceitas',
    name: 'minhasreceitas',
    component: () => import('../views/MinhaReceitaLista.vue')
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
    path: '/receitas/:id',
    name: 'receita',
    component: () => import('../views/Receita.vue')
  },
  {
    path: '/receitas/:id/edit',
    name: 'receitaEdit',
    component: () => import('../views/cadastrarReceita.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
