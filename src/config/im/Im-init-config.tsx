/*
 * @Author: xxs
 * @Date: 2023-11-13 15:43:51
 * @LastEditTime: 2023-11-22 10:44:27
 * @FilePath: \newpark_native\src\config\im\Im-init-config.tsx
 * @Description: desc
 */
export default {
  /**
   * 平台号: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, 小程序 6，linux 7
   * 工资=月薪÷21.75×月计薪天数×(出勤天数比例)
   * 月计薪天数=(月出勤天数 + 法定节假日天数)
   * 出勤天数比例= 21.75÷(当月应出勤天数+法定节假日天数)
   */
  platformID: 2,
  /**
   * IM api 地址，一般为http://xxx:10002或https://xxx/api
   */
  apiAddr: 'http://192.168.2.252:10002',
  /**
   * IM ws 地址，一般为ws://xxx:10001或wss://xxx/message_gateway
   */
  wsAddr: 'ws://192.168.2.252:10001',
  /**
   * 	SDK 日志打印级别
   */
  logLevel: 6,
  /**
   * 是否输入日志到控制台
   */
  isLogStandardOutput: true,
  dataDir: '/tmp'
};
