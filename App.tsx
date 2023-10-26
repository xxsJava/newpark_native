/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-26 18:33:56
 * @FilePath: \newpark_native\App.tsx
 * @Description: desc
 */

import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import 'intl-pluralrules';
import './src/hooks/i18/i18next';
import APPNewPark from './src/routes/main';
import {NativeBaseProvider} from 'native-base';

export default function App(): JSX.Element {
  console.log('开始加载APP');

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <APPNewPark />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
