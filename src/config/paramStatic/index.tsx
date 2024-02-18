/*
 * @Author: xxs
 * @Date: 2024-01-09 11:44:57
 * @LastEditTime: 2024-02-18 16:00:27
 * @FilePath: \newpark_native\src\config\paramStatic\index.tsx
 * @Description: desc
 */
import RNFS from 'react-native-fs';
import DateTimeUtils from '../../utils/DateTimeUtils';
/**
 * 代码描述:
 * 作者: xxs
 * 创建时间:2024/01/09 11:46:02
 */

export let FROMA_DATE_DIR = DateTimeUtils.formattedDateTime(
  DateTimeUtils.timestamps(),
  'yyyy-MM-DD',
);

//数据文件存储主目录
export let FILE_PATH  = RNFS.DocumentDirectoryPath +'/';
//群聊消息目录
export const GROUP_MSG_DIR ='/' + FROMA_DATE_DIR + '/group';
//单聊消息目录
export let PRITIVE_MSG_DIR = '/' + FROMA_DATE_DIR + '/private';
//文件索引
export let INDEX_MSG_DIR = '/' + FROMA_DATE_DIR + '/index.json';
//消息文件路径数据
export let MSG_FILE_DIR = JSON.stringify({"groupPath":GROUP_MSG_DIR,"privatePath":PRITIVE_MSG_DIR,"data":[]});
//文件后缀
export let FILE_SUFFIX = '.json';