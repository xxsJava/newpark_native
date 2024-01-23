/*
 * @Author: xxs
 * @Date: 2023-10-09 11:29:00
 * @LastEditTime: 2024-01-23 18:04:04
 * @FilePath: \newpark_native\src\api\test\index.tsx
 * @Description: desc
 */
import request from '../../config/axios'

export const test = ():Promise<IResponse> => {
  console.log('开始调试')
  return request.get({
    url: 'findAll'
  })
}

export const login = (data:any):Promise<IResponse> => {
  console.log('开始调试')
  return request.post({
    url: 'login/loginTk',data
  })
}
