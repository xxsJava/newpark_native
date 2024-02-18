/*
 * @Author: xxs
 * @Date: 2023-10-28 21:58:06
 * @LastEditTime: 2024-02-18 15:01:23
 * @FilePath: \newpark_native\src\config\run-conrig\index.tsx
 * @Description: 全局自行导入依赖
 */
import { LogBox, Platform } from 'react-native';
import 'react-native-gesture-handler';
import IMSDKRN from '../../plugins/IMSDKRN';
import '../listener';
import { initListener } from '../listener';

console.log('项目开始启动运行', Platform.OS);

IMSDKRN.initSDK();
initListener();

console.log('IM-INIT------->初始化完毕');
LogBox.ignoreAllLogs(true); //关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);
