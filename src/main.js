import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Styles from './assets/css/Styles.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as services from "./services/";
Vue.prototype.$services = services;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  Styles,
  axios,
  render: h => h(App)
}).$mount('#app')
