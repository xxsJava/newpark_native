import {DeviceEventEmitter, NativeEventEmitter, Platform} from 'react-native';
import {INDEX_MSG_DIR} from '../paramStatic';
import {readFileData, writeFileData} from '../../utils/FilesUtiles';
import IMSDKRN from '../../plugins/IMSDKRN';
/*
 * @Author: xxs
 * @Date: 2024-01-04 09:28:14
 * @LastEditTime: 2024-01-11 15:22:03
 * @FilePath: \newpark_native\src\config\listener\index.tsx
 * @Description: desc
 */
type msgData = {id: string; path: string};
const DevenIOS = new NativeEventEmitter(IMSDKRN);
export const DeviceEvent = Platform.OS == 'ios'?DevenIOS:DeviceEventEmitter;
export const initListener = () => {
  console.log('--------------->监听器初始化');
  DeviceEvent.addListener('onSuccessLogin', resp => {
    console.log('登录成功----->', resp);
  });

  DeviceEvent.addListener('onErrorLogin', resp => {
    console.log('登录失败----->', resp);
  });

  DeviceEvent.addListener('onRecvNewMessage', resp => {
    console.log('消息监听resp----->',resp);
    
    const msg = Platform.OS === 'ios'?resp.message:JSON.parse(resp.message);
    console.log('消息监听1----->', msg);

    //存群聊消息文件地址
    readFileData(INDEX_MSG_DIR).then(res => {
      console.log(res);
      if (msg.groupID != undefined) {
        console.log('............ 群聊 ..............')
        const groupFile: msgData = {
          id: msg.groupID,
          path: res.groupPath + '/' + msg.groupID + '.json',
        };

        const jsonFlag = res.data.some((item: any) => {
          console.log('--------------->开始查找数据', groupFile.id);
          return item.id === groupFile.id;
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
        console.log('............ 单聊 ..............')
        const privateFile: msgData = {
          id: msg.sendID,
          path: res.privatePath + '/' + msg.sendID + '.json',
        };

        const jsonFlag = res.data.some((item: any) => {
          console.log('--------------->开始查找数据', privateFile.id);
          return item.id === privateFile.id;
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
    });
  });

  DeviceEvent.addListener('onConnectFailed', resp => {
    console.log('服务链接监听---------->', resp);
  });

  DeviceEvent.addListener('onConnectServer', resp => {
    console.log('服务链接监听---------->', resp);
  });
  
  DeviceEvent.addListener('onTest', resp => {
    console.log('接收ios消息---------->', resp);
  });

  DeviceEvent.addListener('onErrorLogin', resp => {
    console.log('接收ios消息---------->', resp);
  });
  
  console.log('监听器初始化完毕<------------');
};
