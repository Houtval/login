import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse:true
  },
  getters: {
  },
  mutations: {
    updateisCollapse (state) {
      state.isCollapse=!state.isCollapse
      localStorage.setItem('isCollapse',state.isCollapse)
    },
    setisCollapse(state,payload)
    {
      state.isCollapse=payload
    }
  },
  actions: {
    getisCollapse: ({commit},data) =>{
        commit('setisCollapse', data)
    }
  },
  modules: {
  }
})
