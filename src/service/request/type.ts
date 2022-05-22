import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterCeptors {
  requestInterCeptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterCeptorCatch?: (err: any) => any
  responseInterCeptor?: (res: any) => any
  responseInterCeptorCatch?: (err: any) => any
}

// 这一步是对拦截器的一个拓展
export interface RequestConfig extends AxiosRequestConfig {
  interCeptors?: RequestInterCeptors
  showLoading?: boolean
}
