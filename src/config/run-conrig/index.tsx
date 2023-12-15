/*
 * @Author: xxs
 * @Date: 2023-10-28 21:58:06
 * @LastEditTime: 2023-12-15 09:59:53
 * @FilePath: \newpark_native\src\config\run-conrig\index.tsx
 * @Description: 全局自行导入依赖
 */
import 'react-native-gesture-handler';
// import OpenIMSDKRN, {OpenIMEmitter} from 'open-im-sdk-rn';
// import ImInitConfig from '../im/Im-init-config';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(true); //关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

// const Init = async () => {
//   console.log('1、IM初始化');
//   try {
//     const opid = '123456'; //唯一id
//     const result = await OpenIMSDKRN.initSDK(ImInitConfig, opid);
//     console.log('初始化--->',result)
//   } catch (error) {
//     console.error('Error initializing SDK:', error); // Log the error
//   }
// };

// Init();
