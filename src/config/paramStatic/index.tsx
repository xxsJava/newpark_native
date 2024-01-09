import DateTimeUtils from '../../utils/DateTimeUtils';
import RNFS from 'react-native-fs';
/**
 * 代码描述:
 * 作者: xxs
 * 创建时间:2024/01/09 11:46:02
 */

export let FROMA_DATE_DIR = DateTimeUtils.formattedDateTime(
  DateTimeUtils.timestamps(),
  'yyyy-MM-DD',
);

//消息数据目录
let filePathMsg = RNFS.DocumentDirectoryPath + '/' + FROMA_DATE_DIR;
//群聊消息目录
export let GROUP_MSG_DIR = filePathMsg + '/group';
//单聊消息目录
export let PRITIVE_MSG_DIR = filePathMsg + '/private';
//文件索引
export let INDEX_MSG_DIR = filePathMsg + '/index.json';
//消息文件路径数据
export let MSG_FILE_DIR = JSON.stringify({"groupPath":GROUP_MSG_DIR,"privatePath":PRITIVE_MSG_DIR,"data":[]});