/*
 * @Author: xxs
 * @Date: 2024-01-12 09:23:48
 * @LastEditTime: 2024-02-18 16:05:16
 * @FilePath: \newpark_native\src\config\storagePermissionStatus\index.tsx
 * @Description: desc
 */
import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import Storage from '../../utils/AsyncStorageUtils';
import { createDirs, writeFileData } from '../../utils/FilesUtiles';
import {
  FILE_PATH,
  GROUP_MSG_DIR,
  INDEX_MSG_DIR,
  PRITIVE_MSG_DIR
} from '../paramStatic';
let PERM_NAME = 'Newpak';

export const requestPermissionStorage = async () => {
  const permissArr = [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];

  const granted = await PermissionsAndroid.requestMultiple(permissArr);

  if (
    granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
    PermissionsAndroid.RESULTS.GRANTED
  ) {
    console.log('已获取权限');
    const uid = await Storage.get('uid') + '';
    initDataDir(uid);
  } else {
    console.log('部分权限未获取到');
  }
};

export const initDataDir = (uid:string) => {
  //根据时间格式化目录
  createDirs(FILE_PATH + uid + GROUP_MSG_DIR);
  createDirs(FILE_PATH + uid + PRITIVE_MSG_DIR);
  //创建文件路径写入文件地址
  let msgDir = JSON.stringify({"groupPath":FILE_PATH + uid +GROUP_MSG_DIR,"privatePath":FILE_PATH + uid +PRITIVE_MSG_DIR,"data":[]});
  RNFS.exists(FILE_PATH + uid +INDEX_MSG_DIR).then(fileExists => {
    if (!fileExists) {
      console.log('创建写入文件');
      //不存在创建写入文件
      writeFileData(FILE_PATH + uid +INDEX_MSG_DIR, msgDir);
    }
  });
};
