/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-27 09:17:00
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 启动屏幕
 */
import {useEffect} from 'react';
import {Splash} from '../../views/system/Splash/SplashScreen';
import SplashScreen from 'react-native-splash-screen';

const index = () => {
  useEffect(() => {
    //隐藏初始屏幕
    SplashScreen.hide();
  }, []);
  return Splash();
};

export default index;
