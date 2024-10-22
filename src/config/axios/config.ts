
/*
 * @Author: xxs
 * @Date: 2023-10-09 11:26:21
 * @LastEditTime: 2024-04-12 09:30:32
 * @FilePath: \newpark_native\src\config\axios\config.ts
 * @Description: desc
 */
const config: {
  base_url: {
    base: string
    dev: string
    pro: string
    test: string
  }
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
} = {
  /**
   * api请求基础路径
   */
  base_url: {
    // 开发环境接口前缀
    // base: 'https://www.newpark.sougouhihg.top',
    base: 'https://www.newpark.sougouhihg.top',
    // 打包开发环境接口前缀
    dev: 'http://192.168.13.1:60001/',

    // 打包生产环境接口前缀
    pro: 'http://127.0.0.1:60000',

    // 打包测试环境接口前缀
    test: 'http://localhost:60000'
  },

  /**
   * 接口成功返回状态码
   */
  result_code: 200,

  /**
   * 接口请求超时时间
   */
  request_timeout: 10000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json'
}

export { config }

