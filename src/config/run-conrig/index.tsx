/*
 * @Author: xxs
 * @Date: 2023-10-28 21:58:06
 * @LastEditTime: 2024-01-04 17:36:09
 * @FilePath: \newpark_native\src\config\run-conrig\index.tsx
 * @Description: 全局自行导入依赖
 */
import 'react-native-gesture-handler';
import {LogBox, Platform} from 'react-native';
import '../listener'
import { initListener } from '../listener';
import IMSDKRN from '../../plugins/IMSDKRN';

console.log("项目开始启动运行",Platform.OS)
initListener()
IMSDKRN.inItSDK();
console.log('IM-INIT------->初始化完毕')
LogBox.ignoreAllLogs(true); //关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);
