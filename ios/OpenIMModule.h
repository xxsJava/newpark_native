//
//  OpenIMModule.h
//  newpark_native
//
//  Created by 新园建业集团 on 2023/12/29.
//

#ifndef OpenIMModule_h
#define OpenIMModule_h
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <OIMManager.h>

@interface IMSDKRN : RCTEventEmitter <RCTBridgeModule>
@property (nonatomic, weak) RCTBridge *bridge;

- (void)passDataToRN:(NSString *)data;

- (void)initSDK;



@end


#endif /* OpenIMModule_h */
