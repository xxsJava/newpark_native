import {DeviceEventEmitter} from 'react-native';
import {GROUP_MSG_DIR, INDEX_MSG_DIR, MSG_FILE_DIR} from '../paramStatic';
import {readFileData, writeFileData} from '../../utils/FilesUtiles';
import RNFS from 'react-native-fs';
/*
 * @Author: xxs
 * @Date: 2024-01-04 09:28:14
 * @LastEditTime: 2024-01-09 18:24:19
 * @FilePath: \newpark_native\src\config\listener\index.tsx
 * @Description: desc
 */
type groupData = {groupId: string; groupPath: string};
type privateData = {sendId: string; privatePath: string};
export const initListener = () => {
  console.log('--------------->监听器初始化');
  DeviceEventEmitter.addListener('onSuccessLogin', resp => {
    console.log('登录成功----->', resp);
  });

  DeviceEventEmitter.addListener('onErrorLogin', resp => {
    console.log('登录失败----->', resp);
  });

  DeviceEventEmitter.addListener('onRecvNewMessage', resp => {
    const msg = JSON.parse(resp.message);
    console.log('消息监听1----->', msg);

    //存群聊消息文件地址
    readFileData(INDEX_MSG_DIR).then(res => {
      console.log(res);
      if (msg.groupID != undefined) {
        console.log('............ 群聊 ..............')
        const groupFile: groupData = {
          groupId: msg.groupID,
          groupPath: res.groupPath + '/' + msg.groupID + '.json',
        };

        const jsonFlag = res.data.some((item: any) => {
          console.log('--------------->开始查找数据', item.groupId);
          return item.groupId === groupFile.groupId;
        });

        //不存在存入群聊数据
        if (!jsonFlag) {
          console.log('群组数据文件更新----->');
          res.data.push(groupFile);
          console.log('插入数据后----->', res.data);
          writeFileData(INDEX_MSG_DIR, JSON.stringify(res));
          console.log('............ 群聊数据地址已写入 ..............')
          return;
        }
        //群聊数据文件写入
        
      }

      //写入单聊文件地址
      if (msg.recvID != undefined) {
        console.log('............ 单聊 ..............')
        const privateFile: privateData = {
          sendId: msg.sendID,
          privatePath: res.privatePath + '/' + msg.sendID + '.json',
        };

        const jsonFlag = res.data.some((item: any) => {
          console.log('--------------->开始查找数据', item.sendId);
          return item.sendId === privateFile.sendId;
        });

        //不存在写入数据
        if (!jsonFlag) {
          console.log('单聊数据文件更新----->');
          res.data.push(privateFile);
          console.log('插入数据后----->', res.data);
          writeFileData(INDEX_MSG_DIR, JSON.stringify(res));
          console.log('............ 单聊数据地址已写入 ..............')
          return;
        }
        //单聊消息数据写入
        
      }
    });
  });

  DeviceEventEmitter.addListener('onConnectFailed', resp => {
    console.log('服务链接监听---------->', resp);
  });

  DeviceEventEmitter.addListener('onConnectServer', resp => {
    console.log('服务链接监听---------->', resp);
  });

  console.log('监听器初始化完毕<------------');
};
