/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import network from './request/index'
import type { RequestConfig } from './request/type'

const networkConfig: RequestConfig = {
  timeout: 5000,
  interCeptors: {
    requestInterCeptor: (config) => {
      return config
    },
    requestInterCeptorCatch: (err) => {
      return err
    },
    responseInterCeptor: (res) => {
      return res
    },
    responseInterCeptorCatch: (err) => {
      return err
    }
  }
}
const networkAxiosInstance = new network(networkConfig)

// 注意这里的es6模块要求，这里是不可以赋值又导出的！
export { networkAxiosInstance }
