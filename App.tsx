/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-12-22 10:20:48
 * @FilePath: \newpark_native\App.tsx
 * @Description: 第二入口文件
 */
import React from 'react';
import { View,Text } from  'react-native'
import {NavigationContainer} from '@react-navigation/native';
import 'intl-pluralrules';
import './src/hooks/i18/i18next';
import APPNewPark from './src/routes/main';
import {navigationRefs} from './src/config/routs/NavigationContainer';
import {CounterProvider} from './src/hooks/state';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './src/config/axios/config';

export default function App(): JSX.Element {
  console.log('开始加载APP');

  return (
    <NavigationContainer ref={navigationRefs}>
      <GluestackUIProvider config={config}>
        <CounterProvider>
          <APPNewPark />
            {/* <Registered/> */}
            {/* <SchoolIndex></SchoolIndex> */}
            {/* <Gender></Gender> */}
            {/* <InterestsHobbies></InterestsHobbies> */}
        </CounterProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
