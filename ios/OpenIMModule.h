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

@interface OpenIM : NSObject <RCTBridgeModule>

- (void)passDataToRN:(NSString *)data;

@end

#endif /* OpenIMModule_h */
