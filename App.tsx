/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-11-01 10:59:01
 * @FilePath: \newpark_native\App.tsx
 * @Description: 第二入口文件
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import 'intl-pluralrules';
import './src/hooks/i18/i18next';
import APPNewPark from './src/routes/main';
import {NativeBaseProvider} from 'native-base';
import {navigationRefs} from './src/config/routs/NavigationContainer';
import { CounterProvider } from './src/hooks/state';

export default function App(): JSX.Element {
  console.log('开始加载APP');

  return (
    <NavigationContainer ref={navigationRefs}>
      <NativeBaseProvider>
        <CounterProvider>
          <APPNewPark />
        </CounterProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
