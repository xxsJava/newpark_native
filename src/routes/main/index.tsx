/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-27 09:17:00
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 启动屏幕
 */
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Splash } from '../../views/system/splash/SplashScreen';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    //隐藏初始屏幕
    SplashScreen.hide();
  }, []);
  return Splash();
};

export default index;
