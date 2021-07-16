import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [],
    address: ''
  },
  getters: {
    getTransactions: (state) => state.transactions.slice(0,10),
    getAddress: (state) => state.address
  },
  mutations: {
    setTransactions: (state,transactions) => state.transactions = transactions,
    setAddress: (state,address) => state.address = address
  },
  actions: {
  },
  modules: {
  }
})
