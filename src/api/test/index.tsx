/*
 * @Author: xxs
 * @Date: 2023-10-07 09:56:26
 * @LastEditTime: 2023-10-07 11:50:26
 * @FilePath: \newpark_native\src\api\test\index.tsx
 * @Description: desc
 */
import request from '../../config/axios'

// 测试接口
export const getTest = (): Promise<IResponse> => {
  return request.get({ url: 'www.baidu.com' })
}