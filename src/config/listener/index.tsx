import { DeviceEventEmitter, NativeEventEmitter, Platform } from 'react-native';
import { getGroupsInfo } from '../../api/imApi';
import IMSDKRN from '../../plugins/IMSDKRN';
import Storage from '../../utils/AsyncStorageUtils';
import { isFile, readFileData, writeFileData } from '../../utils/FilesUtiles';
import { FILE_PATH, GROUP_MSG_DIR, INDEX_MSG_DIR, PRITIVE_MSG_DIR } from '../paramStatic';
/*
 * @Author: xxs
 * @Date: 2024-01-04 09:28:14
 * @LastEditTime: 2024-02-18 16:51:37
 * @FilePath: \newpark_native\src\config\listener\index.tsx
 * @Description: desc
 */
type msgData = {id: string; path: string};
const DevenIOS = new NativeEventEmitter(IMSDKRN);
export const DeviceEvent = Platform.OS == 'ios' ? DevenIOS : DeviceEventEmitter;
export const initListener = () => {
  console.log('--------------->监听器初始化');
  DeviceEvent.addListener('onSuccessLogin', resp => {
    console.log('登录成功----->', resp);
  });

  DeviceEvent.addListener('onErrorLogin', resp => {
    console.log('登录失败----->', resp);
  });
  
  DeviceEvent.addListener('onRecvNewMessage', async resp => {
    console.log('消息监听resp----->', resp);

    const msg = Platform.OS === 'ios' ? resp.message : JSON.parse(resp.message);
    console.log('消息监听1----->', msg);

    const uId = await Storage.get('uid');

    let filePath = FILE_PATH + uId + INDEX_MSG_DIR;
    //存群聊消息文件地址
    readFileData(filePath).then(async res => {
      console.log(res);
      if (msg.groupID != undefined) {
        console.log('............ 群聊 ..............');
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
          writeFileData(filePath, JSON.stringify(res));
          console.log('............ 群聊数据地址已写入 ..............');
        }
        //群聊数据文件写入
        if (msg.typingElem === undefined) {
          const newArr: any[] = [];
          const newObj: any = {};
          console.log('............ 群聊数据已写入 ..............');
          console.log('获取圈ID------>', msg.groupID);
          let stringArray: string[] = [];
          stringArray.push(msg.groupID);
          console.log('群组数据1----->', stringArray);
          const groupInfo = await getGroupsInfo(stringArray);
          console.log('群组消息数据----->', groupInfo.data.groupInfos);
          // setData(groupInfo.data.groupInfos);
          Object.assign(newObj, msg, groupInfo.data.groupInfos[0]);
          //设置群组状态
          newObj.stateMsg = 2;
          newArr.push(newObj);
          //数据合并
          // newArr = data.concat(newArr)
          console.log(newArr);
          const fileGroupPath = FILE_PATH + uId + GROUP_MSG_DIR + '/' + msg.groupID + '.json';
          jsonDataRead(fileGroupPath, newArr);
        }
        return;
      }

      const usrFlag = uId === msg.sendID?msg.recvID:msg.sendID;
      
      //写入单聊文件地址
      console.log('............ 单聊 ..............');
      
      const privateFile: msgData = {
        id: usrFlag,
        path: res.privatePath + '/' + usrFlag + '.json',
      };

      console.log('res----->',res);

      const jsonFlag = res.data.some((item: any) => {
        console.log('--------------->开始查找数据', privateFile.id);
        return item.id === privateFile.id;
      });

      //不存在写入数据
      if (!jsonFlag) {
        console.log('单聊数据文件更新----->');
        res.data.push(privateFile);
        console.log('插入数据后----->', res.data);
        writeFileData(filePath, JSON.stringify(res));
        console.log('............ 单聊数据地址已写入 ..............');
      }
      //单聊消息数据写入
      const filePrivatePath = FILE_PATH + uId + PRITIVE_MSG_DIR + '/' + usrFlag + '.json';
      //设置单聊状态
      msg.stateMsg = 1;
      let newMsgArr = [];
      newMsgArr.push(msg);
      if (msg.typingElem === undefined) {
        console.log('............ 单聊数据已写入 ..............');
        jsonDataRead(filePrivatePath, newMsgArr);
      }
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

/**
 * 数据文件写入
 * @param filePath 文件地址
 * @param data 数据
 * @returns
 */
const jsonDataRead = async (filePath: string, data?: any) => {
  console.log('——----------------->执行数据写入', data);
  //写入MSG数据
  if (await isFile(filePath)) {
    //查找到文件直接写入
    readFileData(filePath).then(res => {
      console.log('读取到数据----->', res);
      res.push(data[0]);
      writeFileData(filePath, JSON.stringify(res));
    });
    return;
  }
  console.log('----------->创建文件写入数据');
  writeFileData(filePath, JSON.stringify(data));
};
