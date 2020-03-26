import Vue from "vue"
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css"
import { ValidationProvider, extend } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('min_value', {
  validate(value, args) {
    return value >= args.min;
  },
  params: ['min'],
  message: `O valor esta menor do que o aceito.`
});
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: 'Este campo é obrigatorio.'
});

export default {
    components:{
      vSelect,
    },
}