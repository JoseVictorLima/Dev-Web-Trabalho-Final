import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    usuarioLogado:{},
    isLoading:false
  },
  mutations: {
    setUsuario(state, usuario){
      state.usuarioLogado = usuario
    },
    unSetUsuario(state){
      state.usuarioLogado = {}
    },
    changeLoading(state,bool = false){
      state.isLoading = bool
    }
  },
  getters:{
    getUsuario: state => state.usuarioLogado,
  },
  actions: {
  },
  modules: {
  }
})
