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

RCT_EXPORT_MODULE();

//传递参数至rn
RCT_EXPORT_METHOD(passDataToRN:(NSString *)data) {
//  [self.bridge.eventDispatcher sendAppEventWithName:@"DataFromiOS" body:@{@"data": data}];
  // 在这里可以将 data 传递给 React Native 的组件
}

RCT_EXPORT_METHOD(initSDK){
  NSLog(@"Success");
};

// 返回的数组为支持的事件名列表
//- (NSArray<NSString *> *)supportedEvents
//{
//    return @[@"ItemAdded"];
//}

RCT_EXPORT_METHOD(testEvent){
  [self sendEventWithName:@"ItemAdded" body:@"hello"];
}

//RCT_EXPORT_METHOD(init{
//  
//})

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

//RCT_EXPORT_METHOD(init{
  
  //初始化IM
//  NSString*documentPath =NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask,YES).firstObject;
//  
//  NSLog(@"OpenIM初始化----->%@",documentPath);
////  NSLog(@"OpenIM初始化----->");
//  OIMInitConfig *config = [OIMInitConfig new];
//  config.apiAddr = @"http://www.newpark.sougouhihg.top:10002/";
//  config.wsAddr = @"ws://www.newpark.sougouhihg.top:10001";
//  config.dataDir = documentPath;
//
//  BOOL success = [OIMManager.manager initSDKWithConfig:config
//                                          onConnecting:^{
//
//  } onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {
//      // Callback function for connection failure
//      // code error code
//      // error error message
//    NSLog(@"Open-IM-连接-server---->失败,%li---%@",code,msg);
//  } onConnectSuccess:^{
//      // SDK has successfully connected to the IM server
//    NSLog(@"Open-IM-server---->成功");
//  } onKickedOffline:^{
//      // SDK is connecting to the IM server
//    NSLog(@"Open-IM-server---->被踢");
//  } onUserTokenExpired:^{
//      // Token has expired while online: at this point, you need to generate a new token and call the login() function again to log in.
//    NSLog(@"Open-IM-server---->token错误");
//  }];
//  
//  if (success) {
//    NSLog(@"Open-IM-初始化---->成功");
//  } else {
//    NSLog(@"Open-IM-初始化---->失败");
//  }
//  
//  //登录IM
//  [OIMManager.manager login:@"9689784708" // userID obtained from your own business server
//                      token:@"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI5Njg5Nzg0NzA4IiwiUGxhdGZvcm1JRCI6MSwiZXhwIjoxNzExNzA3ODc4LCJuYmYiOjE3MDM5MzE1NzgsImlhdCI6MTcwMzkzMTg3OH0.mfY6ZiYMW5vcBZ69VagKaLLv_N4ockcy-NKiKw_GHJM"  // token acquired by business server from OpenIM server
//                  onSuccess:^(NSString * _Nullable data) {
//    NSLog(@"Open-IM-login---->成功");
//  } onFailure:^(NSInteger code, NSString * _Nullable msg) {
//    NSLog(@"Open-IM-login---->失败");
//  }];
  
//})

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

- (void)inItSDK {
}

@end
