//
//  OpenIMModule.m
//  newpark_native
//
//  Created by 新园建业集团 on 2023/12/29.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import <React/RCTBridge.h>
#import "OpenIMModule.h"
#import <React/RCTEventDispatcher.h>

@import OpenIMSDK;

@implementation IMSDKRN

@synthesize bridge = _bridge;
RCT_EXPORT_MODULE();

//传递参数至rn
RCT_EXPORT_METHOD(passDataToRN:(NSString *)data) {
//  [self.bridge.eventDispatcher sendAppEventWithName:@"DataFromiOS" body:@{@"data": data}];
  // 在这里可以将 data 传递给 React Native 的组件
}

/**
 初始化IM
 */
RCT_EXPORT_METHOD(initSDK){
    NSString*documentPath =NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask,YES).firstObject;
  //初始化IM
  NSLog(@"OpenIM初始化----->%@",documentPath);
//  NSLog(@"OpenIM初始化----->");
  OIMInitConfig *config = [OIMInitConfig new];
  config.apiAddr = @"http://www.newpark.sougouhihg.top:10002/";
  config.wsAddr = @"ws://www.newpark.sougouhihg.top:10001";
  config.dataDir = documentPath;

  BOOL success = [OIMManager.manager initSDKWithConfig:config
                                          onConnecting:^{

  } onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {
      // Callback function for connection failure
      // code error code
      // error error message
    NSLog(@"Open-IM-连接-server---->失败,%li---%@",code,msg);
    [self sendEventWithName:@"onConnectFailed" body:@{@"msg":msg}];
  } onConnectSuccess:^{
    NSLog(@"事件------>%@  self--->%@",self.bridge, self);
   
    [self sendEventWithName:@"onTest" body:@{@"msg": @"test监听运行中！！！"}];
      // SDK has successfully connected to the IM server
    NSLog(@"Open-IM-server---->成功");
    [self sendEventWithName:@"onConnectServer" body:@{@"msg":@"Open-IM-server---->成功"}];
  } onKickedOffline:^{
      // SDK is connecting to the IM server
    NSLog(@"Open-IM-server---->被踢");
    [self sendEventWithName:@"onConnectServer" body:@{@"msg":@"Open-IM-server---->被踢"}];
  } onUserTokenExpired:^{
      // Token has expired while online: at this point, you need to generate a new token and call the login() function again to log in.
    NSLog(@"Open-IM-server---->token错误");
    [self sendEventWithName:@"onConnectServer" body:@{@"msg":@"Open-IM-server---->token错误"}];
  }];

  if (success) {
    NSLog(@"Open-IM-初始化---->成功");
    
    IMSDKRN *imsdk = [[IMSDKRN alloc]init];
    [imsdk initListeners:self.bridge];
    
  } else {
    NSLog(@"Open-IM-初始化---->失败");
  }
};

RCT_EXPORT_METHOD(testEvent){
  NSLog(@"发送监听事件");
  [self sendEventWithName:@"ItemAdded" body:@{@"key":@"val"}];
}

/**
openIM 登录
 */
RCT_EXPORT_METHOD(login:(NSString *)userID tokenStr:(NSString *)token){
//  NSLog(@"usrID----->%@,token---->%@",userID,token);
  [OIMManager.manager login:userID // userID来自于自身业务服务器
                      token:token  // token需要业务服务器向OpenIM服务端交换获取
                  onSuccess:^(NSString * _Nullable data) {
    NSLog(@"登录msg----->%@",data);
    
    [self sendEventWithName:@"onSuccessLogin" body:data];
  } onFailure:^(NSInteger code, NSString * _Nullable msg) {
    [self sendEventWithName:@"onErrorLogin" body:msg];
  }];
}



//接收RN传的参数
//RCT_EXPORT_METHOD(whoName:(NSString *)name){
//  NSLog(@"接收RN----->%@",name);
//  [self testCallbackEventTwoWithResolver:^(NSArray *result) {
//      // 在这里处理成功的情况，result 是回调返回的数据
//      NSLog(@"Success: %@", result);
//  } rejecter:^(NSString *code, NSString *message, NSError *error) {
//      // 在这里处理失败的情况，code 是错误码，message 是错误信息，error 是错误对象
//      NSLog(@"Error: %@ - %@, %@", code, message, error);
//  }];
//}

//Promises
//  对外提供调用方法,演示Promise使用
//RCT_REMAP_METHOD(testCallbackEventTwo,
//                 resolver:(RCTPromiseResolveBlock)resolve
//                 rejecter:(RCTPromiseRejectBlock)reject)
//{
//  NSArray *events =@[@"one ",@"two ",@"three"];//准备回调回去的数据
//  if (events) {
//    resolve(events);
//  } else {
//    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
//    reject(@"no_events", @"There were no events", error);
//  }
//}


//- (void)testCallbackEventTwoWithResolver:(RCTPromiseResolveBlock)resolve
//                                rejecter:(RCTPromiseRejectBlock)reject {
//    NSArray *events = @[@"one", @"two", @"three"]; // 准备回调回去的数据
//    if (events) {
//        resolve(events);
//    } else {
//        NSError *error = [NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
//        reject(@"no_events", @"There were no events", error);
//    }
//}

- (void)sendRNEven{
  NSLog(@"执行数据传输");
  
  NSLog(@"sendRNEven事件------>%@  self--->%@",self.bridge, self);

  [self sendEventWithName:@"onTest" body:@{@"name": @"TEST"}];
}

// 返回的数组为支持的事件名列表
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"onSuccessLogin",@"onErrorLogin",@"onRecvNewMessage",@"onConnectFailed",@"onConnectServer",@"onTest"];
}


- (void)initListeners:(RCTBridge *)bridge{
  
  //用户信息监听
//  [OIMManager.callbacker setSelfUserInfoUpdateListener:^(OIMUserInfo * _Nullable userInfo) {
//          
//  }];
//  //会话相关监听
//  [OIMManager.callbacker setConversationListenerWithOnSyncServerStart:^{
//          
//  } onSyncServerFinish:^{
//          
//  } onSyncServerFailed:^{
//          
//  } onConversationChanged:^(NSArray<OIMConversationInfo *> * _Nullable conversations) {
//          
//  } onNewConversation:^(NSArray<OIMConversationInfo *> * _Nullable conversations) {
//          
//  } onTotalUnreadMessageCountChanged:^(NSInteger number) {
//          
//  }];
//  //关系链相关监听
//  [OIMManager.callbacker setFriendListenerWithOnBlackAdded:^(OIMBlackInfo * _Nullable blackInfo) {
//          
//  } onBlackDeleted:^(OIMBlackInfo * _Nullable blackInfo) {
//          
//  } onFriendApplicationAccepted:^(OIMFriendApplication * _Nullable friendApplication) {
//          
//  } onFriendApplicationAdded:^(OIMFriendApplication * _Nullable friendApplication) {
//      
//  } onFriendApplicationDeleted:^(OIMFriendApplication * _Nullable friendApplication) {
//          
//  } onFriendApplicationRejected:^(OIMFriendApplication * _Nullable friendApplication) {
//          
//  } onFriendInfoChanged:^(OIMFriendInfo * _Nullable friendInfo) {
//          
//  } onFriendAdded:^(OIMFriendInfo * _Nullable friendInfo) {
//          
//  } onFriendDeleted:^(OIMFriendInfo * _Nullable friendInfo) {
//          
//  }];
//  //群组相关监听
//  [OIMManager.callbacker setGroupListenerWithOnGroupInfoChanged:^(OIMGroupInfo * _Nullable groupInfo) {
//    
//  } onJoinedGroupAdded:^(OIMGroupInfo * _Nullable groupInfo) {
//  
//  } onJoinedGroupDeleted:^(OIMGroupInfo * _Nullable groupInfo) {
//  
//  } onGroupMemberAdded:^(OIMGroupMemberInfo * _Nullable groupMemberInfo) {
//  
//  } onGroupMemberDeleted:^(OIMGroupMemberInfo * _Nullable groupMemberInfo) {
//    
//  } onGroupMemberInfoChanged:^(OIMGroupMemberInfo * _Nullable groupMemberInfo) {
//    
//  } onGroupApplicationAdded:^(OIMGroupApplicationInfo * _Nullable groupApplication) {
//  
//  } onGroupApplicationDeleted:^(OIMGroupApplicationInfo * _Nullable groupApplication) {
//  
//  } onGroupApplicationAccepted:^(OIMGroupApplicationInfo * _Nullable groupApplication) {
//  
//  } onGroupApplicationRejected:^(OIMGroupApplicationInfo * _Nullable groupApplication) {
//  
//  } onGroupDismissed:^(OIMGroupInfo * _Nullable groupInfo) {
//  
//  }];
//  // 消息相关监听器
  [OIMManager.callbacker setAdvancedMsgListenerWithOnRecvMessageRevoked:^(OIMMessageRevokedInfo * _Nullable msgRovoked) {
    
  } onRecvC2CReadReceipt:^(NSArray<OIMReceiptInfo *> * _Nullable msgReceiptList) {
    
  } onRecvGroupReadReceipt:^(NSArray<OIMReceiptInfo *> * _Nullable msgReceiptList) {
    
  } onRecvNewMessage:^(OIMMessageInfo * _Nullable message) {
    NSLog(@"----- ios新消息监听 ------");
    // 在这里发送事件给 React Native
    NSDictionary *dict = message.mj_keyValues;
//    NSLog(@"idct----->%@",dict);
    [bridge.eventDispatcher sendAppEventWithName:@"onRecvNewMessage" body:@{@"message":dict}];
  }];
}

@end

