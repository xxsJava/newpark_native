/*
 * @Author: xxs
 * @Date: 2024-01-23 10:27:13
 * @LastEditTime: 2024-01-23 18:28:51
 * @FilePath: \newpark_native\src\api\IMAPI\type.tsx
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
  senderPlatformID: 0,
  content: {
    content: ""
  },
  contentType: 0,
  sessionType: 0,
  isOnlineOnly: false,
  notOfflinePush: false,
  sendTime: 0,
  offlinePushInfo: {
    title: "",
    desc: "",
    ex: "",
    iOSPushSound: "",
    iOSBadgeCount: false
  }
}
