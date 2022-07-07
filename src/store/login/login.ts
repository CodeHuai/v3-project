import { Module } from 'vuex'

import { ILoginState } from '@/store/login/loginType'
import { RootType } from '@/store/rootType'
import { loginCountType } from '@/api/login/loginType'
import { repLoginModule } from '@/api/login/loginApi'
import { ElMessage } from 'element-plus'
import Cache from '@/utils/cache'

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
    async handleLoginWithCount({ commit }, countInfo: loginCountType) {
      try {
        const result = await repLoginModule.fetchLoginData(countInfo)
        if (result && result.data && result.data.id) {
          //登录成功
          commit('set_userInfo', result)
          ElMessage({
            message: '登陆成功',
            type: 'success'
          })
        } else {
          ElMessage({
            message: '登录失败，请重新登录！',
            type: 'error'
          })
          Cache.clearCache()
        }
      } catch (e) {
        ElMessage({
          message: '登录失败，请重新登录！',
          type: 'error'
        })
        Cache.clearCache()
      }
    }
  }
}

export default loginModule
