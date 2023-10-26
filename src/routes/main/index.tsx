/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-26 15:42:56
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 路由
 */
import React, { useEffect, useState } from 'react';
import { isLogin } from '../../views/login/controller';
import { Splash } from '../../views/system/splash/SplashScreen';
import SplashScreen from 'react-native-splash-screen';


const index = () => {

  useEffect(() => {
    SplashScreen.hide()
    // 模拟加载过程
  }, []);
  //登录状态
  // return isLogin();
  return Splash();
  
};

export default index;
