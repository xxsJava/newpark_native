import {PermissionsAndroid} from 'react-native';
import {createDirs, writeFileData} from '../../utils/FilesUtiles';
import {
  GROUP_MSG_DIR,
  PRITIVE_MSG_DIR,
  INDEX_MSG_DIR,
  MSG_FILE_DIR,
} from '../paramStatic';
import RNFS from 'react-native-fs';
let PERM_NAME = 'Newpak';

export const requestPermissionStorage = async () => {
  const permissArr = [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];

  const granted = await PermissionsAndroid.requestMultiple(permissArr);

  if (
    granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
    PermissionsAndroid.RESULTS.GRANTED
  ) {
    console.log('已获取权限');
    initDataDir();
  } else {
    console.log('部分权限未获取到');
  }
};

export const initDataDir = () => {
  //根据时间格式化目录
  createDirs(GROUP_MSG_DIR);
  createDirs(PRITIVE_MSG_DIR);
  //创建文件路径写入文件地址
  RNFS.exists(INDEX_MSG_DIR).then(fileExists => {
    if (!fileExists) {
      console.log('创建写入文件');
      //不存在创建写入文件
      writeFileData(INDEX_MSG_DIR, MSG_FILE_DIR);
    }
  });
};
