import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    usuarioLogado:{}
  },
  mutations: {
    setUsuario(state, usuario){
      state.usuarioLogado = usuario
    },
    unSetUsuario(state){
      state.usuarioLogado = {}
    },
  },
  getters:{
    getUsuario: state => state.usuarioLogado,
  },
  actions: {
  },
  modules: {
  }
})
