/*
 * @Author: xxs
 * @Date: 2023-10-31 17:25:19
 * @LastEditTime: 2024-01-23 18:30:03
 * @FilePath: \newpark_native\src\views\login\components\ForgetPass\index.tsx
 * @Description: desc
 */
import notifee, {
  AndroidImportance,
  AndroidStyle,
  AuthorizationStatus,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType
} from '@notifee/react-native';
import Alipay from '@uiw/react-native-alipay';
import React from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';
// import { getNotification } from '../../../../api/notificationApi';
import { getNotification } from '../../../../api/NotificationApi';
import IMSDKRN from '../../../../plugins/IMSDKRN/ANDROIDSDK';

import { postList } from '../../../../api/sys/home';
import { rewardListType } from '../../../../api/sys/reward/types';
import { INDEX_MSG_DIR, MSG_FILE_DIR } from '../../../../config/paramStatic';
import {
  readFileData,
  writeFileData
} from '../../../../utils/FilesUtiles';
Alipay.setAlipaySandbox(true);

// var callManager = NativeModules.CallManager;
// const subscribeStreamEvt = new NativeEventEmitter(callManager);
// const {WSNotification} = NativeModules;
// console.log('接收OC定义的常量--->'+WSNotification.name+' -------->'+WSNotification.ocName);
// const calendarManagerEmitter = new NativeEventEmitter(WSNotification);

async function aliPay() {
  // 支付宝端支付
  // payInfo 是后台拼接好的支付参数
  // return_url=
  /**
   * 9000	订单支付成功
   * 8000	正在处理中，支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
   * 4000	订单支付失败
   * 5000	重复请求
   * 6001	用户中途取消
   * 6002	网络连接出错
   * 6004	支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
   */
  const payInfo =
    'alipay_sdk=alipay-sdk-java-4.38.149.ALL&app_id=9021000122673887&biz_content=%7B%22out_trade_no%22%3A%22202312061538511732303576384540672%22%2C%22total_amount%22%3A0.01%2C%22subject%22%3A%22%E8%8F%A0%E8%90%9D%E6%89%8B%E6%9C%BA%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&sign=SVjU6punRMSnDRdc2TSvXZJvspvmIFV45X87iDraWcWPLUXWRSi7hQknRu%2FB6LP3hcs%2B1ItLOcTmqGgG1Go6S4Nk1XbwdXM%2BE9trI5AiSPLRV3poLEKyJB3j%2BIy7AlGGN%2BpoTOq%2Fa1k4kxIfZnP%2BIU7tURBc3n9UqVTtym7F%2BO2ox7OLmsrmWjThBupz8aFpXAtD3Dm3emx0CDvmFiWTfdSEFTfpUiWlWfWPAeeY6fb7oZTB2zy4%2BLeTaMsiOB27rM2iba%2F%2FxHtomUhgWSl0ndZvwSBksTdw07HfY1lbZOxvO3K9Vn5%2FmmjSjdZw3WuaK%2FPZwezgXbouvxVptm9AKA%3D%3D&sign_type=RSA2&timestamp=2023-12-06+15%3A38%3A51&version=1.0';
  const resule = await Alipay.alipay(payInfo);
  console.log('alipay:resule-->>>', resule);
}

async function checkNotificationPermission(channelId?: undefined | string) {
  const settings = await notifee.getNotificationSettings();

  if (settings.authorizationStatus == AuthorizationStatus.AUTHORIZED) {
    console.log('通知权限已授权');
  } else if (settings.authorizationStatus == AuthorizationStatus.DENIED) {
    console.log('通知权限未授权');
    const openMsg = await notifee.openNotificationSettings(channelId);
    console.log('通知权限已授权------>', openMsg);
  }
}

//本地通知
async function onDisplayNotification() {
  // Request permissions (required for iOS)

  console.log('执行通知');

  checkNotificationPermission('default');
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default1',
    name: 'Default1',
    importance: AndroidImportance.HIGH,
    sound: 'msg',
  });

  notifee.displayNotification({
    title: 'NewPark',
    body: '我是一条消息，点我一下下',
    android: {
      sound: 'msg',
      smallIcon: 'ic_launcher',
      largeIcon:
        'https://new-by-video.oss-cn-beijing.aliyuncs.com/2023/12/01/logo.png',
      channelId,
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1638355971556795.jpg',
      },
      importance: AndroidImportance.HIGH,
    },
  });
}

// 远程通知
async function onNotificationRemote() {
  console.log('获取通知');

  const notifStr = await getNotification();

  console.log(notifStr);

  const channelId = await notifee.createChannel({
    id: 'default2',
    name: 'Default2',
    importance: AndroidImportance.HIGH,
    sound: 'msg',
  });

  notifee.displayNotification({
    title: notifStr.data.title,
    body: notifStr.data.body,
    android: {
      sound: 'msg',
      smallIcon: 'ic_launcher',
      largeIcon:
        'https://new-by-video.oss-cn-beijing.aliyuncs.com/2023/12/01/logo.png',
      channelId,
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1638355971556795.jpg',
      },
      importance: AndroidImportance.HIGH,
    },
  });
}

//定时通知
async function onCreateTriggerNotification() {
  const date = new Date(Date.now());
  date.setHours(11);
  date.setMinutes(10);

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency: RepeatFrequency.WEEKLY,
  };

  await notifee.createTriggerNotification(
    {
      id: '123',
      title: 'Meeting with Jane',
      body: 'Today at 11:20am',
      android: {
        channelId: 'your-channel-id',
      },
    },
    trigger,
  );
}
const onPressFunction = (str: string) => {
  console.log(str);
};

//添加监听
function componentDidMount(this: any) {
  // this.listener = subscribeStreamEvt.addListener('CallIncoming', this._callIncoming.bind(this));
}

//清除监听
function componentWillUnmount(this: any) {
  // this.listener && this.listener.remove();
  // this.listener = null;
}

// const subscription = calendarManagerEmitter.addListener('OCSendToRN',(reminder) => console.log('RN收到OC发来---->'+reminder.name))

const ForgetPass: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      {/* <MyComponent/> */}
      <Button title="支付宝支付" onPress={aliPay} />
      <Button title="微信支付" color="#24C78C" />
      <Button title="通知" onPress={onDisplayNotification} />
      <Button title="远程通知" onPress={onNotificationRemote} />
      <Button title="定时通知" onPress={onCreateTriggerNotification} />
      {/* <Button title="添加监听" onPress={componentDidMount} /> */}
      {/* <Button title="清除监听" onPress={componentWillUnmount} /> */}

      <Button
        title="获取群组信息"
        onPress={async () => {
          // const groupParam = ['1944979969'];

          // const getGroup = await getGroupsInfo(
          //   groupParam,
          //   'token_pr_newpark_19f86bd4281dc1de',
          // );
          // console.log(getGroup);
        }}
      />

      <Button
        title="IM初始化-Android"
        onPress={() => {
          console.log('调用原生代码');
          // let result = ToastExample.Constant;
          // console.log('原生传递的参数--->',result)
          console.log(IMSDKRN);
          IMSDKRN.inItSDK();
        }}
      />

      <Button
        title="IM登录-Android"
        onPress={() => {
          console.log('调用login');

          const loginParams = {
            usrId: '1742430171993788416',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxNzQyNDMwMTcxOTkzNzg4NDE2IiwiUGxhdGZvcm1JRCI6MiwiZXhwIjoxNzEyMDQ0ODQ3LCJuYmYiOjE3MDQyNjg1NDcsImlhdCI6MTcwNDI2ODg0N30.t9bHspkEgkB49EkiByczmyECf4OnmejZRpvR9_QqHfk',
          };
          IMSDKRN.login(loginParams.usrId, loginParams.token);
        }}
      />

      <Button
        title="IM-Android退出"
        onPress={() => {
          IMSDKRN.doMethod('logout');
        }}
      />

      <Button
        title="IOS-接口测试"
        onPress={async () => {
          console.log('test');
          const data: rewardListType = {
            pageNo: 1,
            pageSize: 5,
          };
          const res = await postList(data);
          console.log(res);
        }}
      />

      {/* <Button
        title="IOS-IM"
        onPress={() => {
          const OPEMIMIOS = NativeModules.OpenIM;
          console.log('调用IOS');
          var cat = require('react-native').NativeModules.OpenIM;
          console.log(cat);
          const res = cat.whoName('RN-传参至IOS');
          console.log(OPEMIMIOS.passDataToRN('ios 传参数至RN'));
        }}
      /> */}

      {/* <Button
        title="IOS-Promises"
        onPress={async () => {
          try {
            var events =
              await require('react-native').NativeModules.OpenIM.testCallbackEventTwo();
            console.log(events);
          } catch (e) {
            console.error(e);
          }
        }}
      /> */}

      {/* <Button
        title="IOS-OpenIM初始化"
        onPress={async () => {
          const {OpenIM} = NativeModules;
          OpenIM.init();
        }}
      /> */}

      <Button
        title="IOS开启监听"
        onPress={() => {
          console.log('获取ios方法------>', IMSDKRN);
          // const testIos = new NativeEventEmitter(IMSDKRN);
          // console.log(testIos);
          // testIos.addListener('ItemAdded',res =>{
          //   console.log('接收ios-监听----->',res)
          // })
        }}
      />

      <Button
        title="IOS--登录"
        onPress={() => {
          console.log("IOS 登录----------->");
          IMSDKRN.login("1742430171993788416","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxNzQyNDMwMTcxOTkzNzg4NDE2IiwiUGxhdGZvcm1JRCI6MSwiZXhwIjoxNzEyNjQ1MDY2LCJuYmYiOjE3MDQ4Njg3NjYsImlhdCI6MTcwNDg2OTA2Nn0.pp1P6ZyNaSFL0gWpSwM3_CqdY_PzCxoW1jX3rcfc-GI");
        }}
      />

      <Button
        title="IOS事件监听测试"
        onPress={() => {
          console.log('点击ios监听事件');

          IMSDKRN.testEvent();
        }}
      />

      <Button
        title="json文件写"
        onPress={async () => {
          //写入json数据
          const jsonData = [{groupId: 'value', path: ''}];
          const jsonString = JSON.stringify(jsonData);

          // 从上面的路径中写文件
          //创建一个json文件
          writeFileData(INDEX_MSG_DIR, jsonString);
        }}
      />

      <Button
        title="json文件读"
        onPress={() => {
          // 开始读取文件
          readFileData(INDEX_MSG_DIR)
            .then(res => {
              console.log('读取原始数据----->', res);
              res.data.push({groupId: 'value1', path: '11'});
              console.log('数据更新----->', res);
              writeFileData(INDEX_MSG_DIR, JSON.stringify(res));
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />

      <Button
        title="json合并"
        onPress={() => {
          writeFileData(INDEX_MSG_DIR, MSG_FILE_DIR);
        }}
      />
      {/* <Button title='IOS OPEN-IM' onPress={() => {
        IMSDKRN.logout();
        // console.log(IMSDKRN);
      }}>
        
      </Button> */}
      {/* <LottieView style={{width:200,height:200}} source={require("../../../../assets/json/sex0.json")} autoPlay loop /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ForgetPass;
