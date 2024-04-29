//
//  WSNotification.h
//  newpark_native
//
//  ios监听
//

@interface CallManager : RCTEventEmitter<RCTBridgeModule>

 NSDictionary *dic = @{@"peerNumber":peerNumber};
  [self sendEventWithName:@"CallIncoming" body:dic];

-(NSArray<NSString *> *)supportedEvents {
  return @[@"CallIncoming"];
}

@end

