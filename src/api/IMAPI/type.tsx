/**
 * 消息类型
 */
export interface MsgInfo {
    content: Content;
    contentType: number;
    groupID: string;
    isOnlineOnly: boolean;
    notOfflinePush: boolean;
    offlinePushInfo: OfflinePushInfo;
    recvID: string;
    senderFaceURL: string;
    senderNickname: string;
    senderPlatformID: number;
    sendID: string;
    sendTime: number;
    sessionType: number;
    [property: string]: any;
}

export interface Content {
    content: string;
    [property: string]: any;
}

export interface OfflinePushInfo {
    desc: string;
    ex: string;
    iOSBadgeCount: boolean;
    iOSPushSound: string;
    title: string;
    [property: string]: any;
}