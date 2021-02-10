import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/utils/mixins/global'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
