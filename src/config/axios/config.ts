/*
 * @Author: xxs
 * @Date: 2023-10-09 11:26:21
 * @LastEditTime: 2023-11-13 18:37:45
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
    base: 'http://192.168.2.232:50000/',

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
  request_timeout: 6000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json'
}

export { config }
