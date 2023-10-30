/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-30 09:56:08
 * @FilePath: \newpark_native\App.tsx
 * @Description: desc
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import 'intl-pluralrules';
import './src/hooks/i18/i18next';
import APPNewPark from './src/routes/main';
import {NativeBaseProvider} from 'native-base';
import { navigationRef } from './src/config/routs/lib/routs';

export default function App(): JSX.Element {
  console.log('开始加载APP');

  return (
    <NavigationContainer ref={navigationRef}>
      <NativeBaseProvider>
        <APPNewPark />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
