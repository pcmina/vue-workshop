import Vue from 'vue'
import { BootstrapVue  } from 'bootstrap-vue'

import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'


defineCustomElements(window);

Ionic.install(Vue, {mode: 'ios'})
Vue.use(AllIosIcon)
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
