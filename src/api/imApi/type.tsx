import { number, object } from "prop-types";
import { Platform } from "react-native";

/*
 * @Author: xxs
 * @Date: 2024-01-23 10:27:13
 * @LastEditTime: 2024-01-25 17:14:24
 * @FilePath: \newpark_native\src\api\imApi\type.tsx
 * @Description: desc
 */
export type MsgInfoSend = {
  sendID: string;
  recvID: string;
  groupID: string;
  senderNickname: string;
  senderFaceURL: string;
  senderPlatformID: number;
  content: content;
  contentType: number;
  sessionType: number;
  isOnlineOnly: boolean;
  notOfflinePush: boolean;
  sendTime: number;
  offlinePushInfo: offlinePushInfo;
  textElem:any
};

type content = {
  content: string;
}

type offlinePushInfo = {
  title: string;
  desc: string;
  ex: string;
  iOSPushSound: string;
  iOSBadgeCount: boolean;
}

export const MsgInfoSendJson:MsgInfoSend = {
  sendID: "",
  recvID: "",
  groupID: "",
  senderNickname: "",
  senderFaceURL: "",
  senderPlatformID: Platform.OS === 'ios' ? 1 : 2,
  content: {
    content: ""
  },
  contentType: 101,
  sessionType: 1,
  isOnlineOnly: false,
  notOfflinePush: false,
  sendTime: Date.now(),
  offlinePushInfo: {
    title: "send message",
    desc: "",
    ex: "",
    iOSPushSound: "default",
    iOSBadgeCount: true
  },
  textElem: {
    content: ''
  }
}

 type pagination =  {
  pageNumber: number;
    showNumber: number
}

export type ContextList = {
  pagination:pagination
} 

export const contextListJson:ContextList = {
  pagination:{
    pageNumber:1,
    showNumber:100
  }
}

export type handleFriendType = {
  fromUserID:string,
  toUserID:string,
  handleResult:number,
  handleMsg:string
}
