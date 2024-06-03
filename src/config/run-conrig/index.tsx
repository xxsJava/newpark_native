/*
 * @Author: xxs
 * @Date: 2023-10-28 21:58:06
 * @LastEditTime: 2024-06-03 15:01:11
 * @FilePath: \newpark_native\src\config\run-conrig\index.tsx
 * @Description: 全局自行导入依赖
 */
import { LogBox, Platform } from 'react-native';
import 'react-native-gesture-handler';
import IMSDKRN from '../../plugins/IMSDKRN';
import '../listener';
import { initListener } from '../listener';
import { requestPermissionStorage } from '../storagePermissionStatus';

console.log('项目开始启动运行', Platform.OS);

//关闭指定警告
const warnList = ['If you do not provide children, you must specify an aria-label for accessibility']
const originalWarn = console.warn;
console.warn = (message) => {
  if(!message.includes(warnList)){
    originalWarn(message);
  }
};

//关闭指定错误
const errorList = ['ViewPropTypes will be removed from React Native']
const originalError = console.error;
console.error = (error) => {
  if(!error.includes(errorList)){
    originalError(error);
  }
};

IMSDKRN.initSDK();
initListener();

if (Platform.OS === 'android') {
  //获取存储权限
  requestPermissionStorage();
} 

console.log('IM-INIT------->初始化完毕');
LogBox.ignoreAllLogs(true); //关闭全部黄色警告


