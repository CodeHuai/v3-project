import { Module } from 'vuex'

import { ILoginState } from '@/store/login/loginType'
import { RootType } from '@/store/rootType'

const loginModule: Module<ILoginState, RootType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    set_userInfo(state, value) {
      state.userInfo = value
    }
  },
  actions: {
    handleLoginWithCount({ commit }, countInfo) {
      commit('set_userInfo', countInfo)
    }
  }
}

export default loginModule
