import {DeviceEventEmitter} from 'react-native';

/*
 * @Author: xxs
 * @Date: 2024-01-04 09:28:14
 * @LastEditTime: 2024-01-05 17:06:39
 * @FilePath: \newpark_native\src\config\listener\index.tsx
 * @Description: desc
 */

export const initListener = () =>{
    console.log('--------------->监听器初始化');
    DeviceEventEmitter.addListener('onSuccessLogin', resp => {
      console.log('登录成功----->', resp);
    });
    
    DeviceEventEmitter.addListener('onErrorLogin', resp => {
      console.log('登录失败----->', resp);
    });
    
    DeviceEventEmitter.addListener('onRecvNewMessage', resp => {
      // const msg = JSON.parse(resp.message);
      // console.log('消息监听1----->', msg);
      // console.log('消息监听2----->', msg.textElem);
    });

    DeviceEventEmitter.addListener('onConnectFailed', resp => {
        console.log('服务链接监听---------->',resp)
    });

    DeviceEventEmitter.addListener('onConnectServer', resp => {
        console.log('服务链接监听---------->',resp)
    });
      
    console.log('监听器初始化完毕<------------');
}
