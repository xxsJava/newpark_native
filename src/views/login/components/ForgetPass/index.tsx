/*
 * @Author: xxs
 * @Date: 2023-10-31 17:25:19
 * @LastEditTime: 2023-12-16 17:32:39
 * @FilePath: \newpark_native\src\views\login\components\ForgetPass\index.tsx
 * @Description: desc
 */
import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, View,Pressable} from 'react-native';
import Alipay from '@uiw/react-native-alipay';
import notifee, { AndroidImportance, AndroidStyle, AuthorizationStatus, EventType, RepeatFrequency, TimestampTrigger, TriggerType } from '@notifee/react-native';
import { getNotification } from '../../../../api/NotificationApi';


Alipay.setAlipaySandbox(true);

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
    console.log('通知权限已授权------>',openMsg);
  }
}

//本地通知
async function onDisplayNotification() {
  // Request permissions (required for iOS)
  
  console.log('执行通知')

  checkNotificationPermission("default")
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
      largeIcon: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/2023/12/01/logo.png',
      channelId,
      style: { type: AndroidStyle.BIGPICTURE, picture: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1638355971556795.jpg' },
      importance: AndroidImportance.HIGH,
    },
  });
}

// 远程通知
async function onNotificationRemote(){

  console.log('获取通知')

  const notifStr = await getNotification('token_pr_newpark_ae9784cad54a970f');

  console.log(notifStr)

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
      largeIcon: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/2023/12/01/logo.png',
      channelId,
      style: { 
        type: AndroidStyle.BIGPICTURE, picture: 'https://new-by-video.oss-cn-beijing.aliyuncs.com/userImage/1638355971556795.jpg' 
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
 const onPressFunction = (str:string)=>{
  console.log(str)
 }


const ForgetPass: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      {/* <MyComponent/> */}
      <Button title="支付宝支付" onPress={aliPay} />
      <Button title="微信支付" color="#24C78C" />
      <Button title="通知" onPress={onDisplayNotification} />
      <Button title="远程通知" onPress={onNotificationRemote} />
      <Button title="定时通知" onPress={onCreateTriggerNotification} />
      <Button title="测试"  onPress={
        () => {
          onPressFunction('1')
        }
      } />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ForgetPass;
