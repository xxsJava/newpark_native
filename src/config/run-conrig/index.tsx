/*
 * @Author: xxs
 * @Date: 2023-10-28 21:58:06
 * @LastEditTime: 2024-01-09 17:18:14
 * @FilePath: \newpark_native\src\config\run-conrig\index.tsx
 * @Description: 全局自行导入依赖
 */
import 'react-native-gesture-handler';
import {LogBox, Platform} from 'react-native';
import '../listener';
import {initListener} from '../listener';
import IMSDKRN from '../../plugins/IMSDKRN';
import DateTimeUtils from '../../utils/DateTimeUtils';
import { createDirs, writeFileData } from '../../utils/FilesUtiles';
import { GROUP_MSG_DIR, INDEX_MSG_DIR, MSG_FILE_DIR, PRITIVE_MSG_DIR } from '../paramStatic';
import RNFS from 'react-native-fs';
console.log('项目开始启动运行', Platform.OS);

IMSDKRN.initSDK();
if (Platform.OS === 'android') {
  console.log('android------>加载监听器');
  initListener();
}

//根据时间格式化目录
createDirs(GROUP_MSG_DIR);
createDirs(PRITIVE_MSG_DIR);
//创建文件路径写入文件地址
RNFS.exists(INDEX_MSG_DIR).then((fileExists) => {
  if (!fileExists) {
    console.log('创建写入文件')
    //不存在创建写入文件
    writeFileData(INDEX_MSG_DIR,MSG_FILE_DIR);
  }
})

console.log('IM-INIT------->初始化完毕');
LogBox.ignoreAllLogs(true); //关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);
