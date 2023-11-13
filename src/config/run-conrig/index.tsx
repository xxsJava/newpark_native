/*
 * @Author: xxs
 * @Date: 2023-10-28 21:58:06
 * @LastEditTime: 2023-10-28 22:53:35
 * @FilePath: \newpark_native\src\config\runConrig\index.tsx
 * @Description: 全局自行导入依赖
 */
import 'react-native-gesture-handler';

import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(true); //关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.'
]);
