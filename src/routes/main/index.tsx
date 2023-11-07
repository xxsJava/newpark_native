/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-11-02 18:53:36
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 启动屏幕
 */
import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen';
import Splashs from "../../views/system/splash/SplashScreen";

const index = () => {
  useEffect(() => {
    //隐藏初始屏幕
    SplashScreen.hide();
  }, []);

  return <Splashs />;
};

export default index;
