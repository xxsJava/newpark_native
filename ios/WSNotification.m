

#import "WSNotification.h"

@interface WSNotification()
@end

@implementation WSNotification

RCT_EXPORT_MODULE();

- (NSDictionary<NSString *, NSString *> *)constantsToExport {
  return @{@"name": @"OCSendToRN"};
}

-(NSArray<NSString *> *)supportedEvents {
  NSLog(@"----------->supportedEvents--->%@  self-->%@",self.bridge, self);
  return@[@"OCSendToRN"];
}

-(void)startObserving {
  NSLog(@"startObserving------>%@  self--->%@",self.bridge,self);
}

-(void)stopObserving {
  
}

-(void)OCsendMessageToReactNative:(NSDictionary *)dictionary {
  NSLog(@"OCsendMessageToReactNative------>%@  self--->%@",self.bridge, self);
  [self sendEventWithName:@"OCSendToRN" body:dictionary];
  NSLog(@"oc发送RN----->OCSendToRN");
}
@end