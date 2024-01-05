//
//  WSNotification.h
//  newpark_native
//
//  ios监听
//

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface WSNotification : RCTEventEmitter <RCTBridgeModule>

-(void)OCsendMessageToReactNative:(NSDictionary *)dictionary;

@end
