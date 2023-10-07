import request from '../../config/axios'

// 获取所有字典
export const getTest = (): Promise<IResponse> => {
  return request.get({ url: 'www.baidu.com' })
}