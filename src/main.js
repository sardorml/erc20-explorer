import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import Web3 from 'web3'
import './assets/css/tailwind.css';
import store from './store'

const provider = 'https://mainnet.infura.io/v3/1d6df4156b1a4080b7a8c1e3dafe44fc'
const HttpProvider = new Web3.providers.HttpProvider(provider)
const web3 = new Web3(HttpProvider)
Vue.prototype.$web3 = web3

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
