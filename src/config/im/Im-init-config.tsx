export default {
  /**
   * 平台号: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, 小程序 6，linux 7
   */
  platformID: 5,
  /**
   * IM api 地址，一般为http://xxx:10002或https://xxx/api
   */
  apiAddr: 'http://xxx:10002',
  /**
   * IM ws 地址，一般为ws://xxx:10001或wss://xxx/message_gateway
   */
  wsAddr: 'ws://xxx:10001',
  /**
   * IM 用户 userID
   */
  userID: '',
  /**
   * OpenIM 用户令牌，业务后台验证用户账号密码后，通过 user_token 来获取
   */
  token: '',
  /**
   * 	SDK 日志打印级别
   */
  logLevel: 'Info',
  /**
   * 是否输入日志到控制台
   */
  isLogStandardOutput: false,
  /**
   * 	是否自动 parse 返回值，默认为 true
   */
  tryParse: true,
};
