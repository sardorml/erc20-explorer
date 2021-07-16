import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: []
  },
  getters: {
    getTransactions: (state) => state.transactions.slice(0,10)
  },
  mutations: {
    setTransactions: (state,transactions) => state.transactions = transactions
  },
  actions: {
  },
  modules: {
  }
})
