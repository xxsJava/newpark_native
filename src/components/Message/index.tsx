/*
 * @Author: xxs
 * @Date: 2023-12-16 22:15:33
 * @LastEditTime: 2023-12-25 17:36:01
 * @FilePath: \newpark_native\src\components\Message\index.tsx
 * @Description: 消息通知
 */
import React, { useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Alipay from '@uiw/react-native-alipay';
import notifee, { AndroidImportance, AndroidStyle, AuthorizationStatus, EventType, RepeatFrequency, TimestampTrigger, TriggerType } from '@notifee/react-native';
import { getNotification } from '../../api/NotificationApi';




Alipay.setAlipaySandbox(true);

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
async function onDisplayNotification(body:any) {
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
    body: '我是一条消息，点我一下',
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





export default onDisplayNotification;
