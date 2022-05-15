/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios from 'axios'
import { AxiosInstance } from 'axios'
import BASE_URL from './config'
import type { RequestConfig, RequestInterCeptors } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

export default class network {
  // 实例属性
  instance: AxiosInstance
  interCeptors?: RequestInterCeptors
  loading?: LoadingInstance

  /**
   *
   * 拦截之所以这么多是因为想要设置全局的拦截、实例的拦截、请求的拦截
   */

  // 这里封装的方式是采用 axios({url || method}) 这种方式进行的封装
  constructor(config: RequestConfig) {
    config.baseURL = BASE_URL
    this.instance = axios.create(config)
    this.interCeptors = config.interCeptors
    // 设置拦截器
    this.setInterCeptors()
    // 设置通用拦截器
    this.setCommonInterCeptors()
  }

  // 实例的拦截
  setInterCeptors() {
    this.instance.interceptors.request.use(
      this.interCeptors?.requestInterCeptor,
      this.interCeptors?.requestInterCeptorCatch
    )

    this.instance.interceptors.response.use(
      this.interCeptors?.responseInterCeptor,
      this.interCeptors?.responseInterCeptorCatch
    )
  }

  // 全局的拦截
  setCommonInterCeptors() {
    this.instance.interceptors.request.use(
      (config) => {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading...',
          background: '#ccc'
        })
        // const token = '123'
        // if (token && config.headers.Authorization) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        console.log(config)

        return config
      },
      (err) => {
        return err
      }
    )
    // 服务器返回的错误数据有两类：
    // 1：是通过http请求的状态码进行判断，这种要在错误相应的拦截中进行判断；
    // 2：还有一种是returnCode的判断方式，这种需要在成功的相应拦截中进行判断。因为他的http状态码可能是成功的标识
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404报错')
        }
        return err
      }
    )
  }

  // 请求的拦截设置
  request(config: RequestConfig): void {
    // 这里是请求拦截
    if (config.interCeptors?.requestInterCeptor) {
      config = config.interCeptors?.requestInterCeptor(config)
    }
    this.instance.request(config).then(
      (response) => {
        // 这里是成功的回调，所以可以拿到响应头
        if (config.interCeptors?.responseInterCeptor) {
          config = config.interCeptors?.responseInterCeptor(response)
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
