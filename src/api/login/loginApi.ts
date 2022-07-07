import { networkAxiosInstance } from '@/service'
import { loginCountType } from './loginType'
import { IDataType, ILoginResult } from '@/store/login/loginType'

const fetchLoginData = function (params: loginCountType) {
  return networkAxiosInstance.post<IDataType<ILoginResult>>({
    url: `/login`,
    data: params
  })
}

export const repLoginModule = {
  fetchLoginData
}
