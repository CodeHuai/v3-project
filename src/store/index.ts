import { createStore } from 'vuex'

import { RootType } from './rootType'
import login from './login/login'

const store = createStore<RootType>({
  state() {
    return {
      name: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
