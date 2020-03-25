import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Styles from './assets/css/Styles.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import * as services from "./services/";
import './mixins'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css"

Vue.prototype.$services = services;

Vue.config.productionTip = false

Vue.use(
  Toast,{closeOnClick:true}
),

new Vue({
  router,
  store,
  BootstrapVue,
  Styles,
  Toast,
  vSelect,
  // axios,
  render: h => h(App)
}).$mount('#app')
