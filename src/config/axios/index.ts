/*
 * @Author: xxs
 * @Date: 2023-10-09 11:26:21
 * @LastEditTime: 2024-01-05 18:00:43
 * @FilePath: \newpark_native\src\config\axios\index.ts
 * @Description: desc
 */
import { service } from './service'

import { config } from './config'
import DateTimeUtils from '../../utils/DateTimeUtils'

const { default_headers } = config

const request = (option: any) => {
  const { url, method, params, data, headersType, responseType , token ,operationID ,openIMToken} = option
  
  return service({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: {
      'Content-Type': headersType
      || default_headers
      ,
      'Content-Token' : token
      ,
      'operationID' : operationID 
      ,
      'token' : openIMToken
    }
  })
}
export default {
  get: <T = any>(option: any) => {
    console.log('执行get请求')
    return request({ method: 'get', ...option }) as unknown as T
  },
  post: <T = any>(option: any) => {
    return request({ method: 'post', ...option }) as unknown as T
  },
  delete: <T = any>(option: any) => {
    return request({ method: 'delete', ...option }) as unknown as T
  },
  put: <T = any>(option: any) => {
    return request({ method: 'put', ...option }) as unknown as T
  }
}
