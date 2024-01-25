/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-11-13 15:33:14
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 启动屏幕
 */
import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen';
import Splashs from "../../views/system/Splash/SplashScreens";
const index = () => {
  useEffect(() => {
    //隐藏初始屏幕
    SplashScreen.hide();
  }, []);
// // 判断是否是首次登录
// let firstDate = Storage.get('firstDate')
// // 获取当前时间（年月日）
// let now = new Date().toLocaleDateString()
// // 转换成时间戳
// let time = Date.parse(new Date(now))
// if (Storage.get('firstDate')) {
//   if (time > firstDate) {
//     // Storage.set
//     Storage.set('firstDate', JSON.stringify(time))
//       return <Splashs />;
//   }
// } else {
// // 首次加载
// Storage.set('firstDate', JSON.stringify(time))
//   return <BeginOne />;
// }
return <Splashs />;

};


export default index;
