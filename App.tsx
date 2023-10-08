/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-07 23:47:32
 * @FilePath: \newpark_native\App.tsx
 * @Description: desc
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Index from './src/routes/main'
import 'intl-pluralrules'
import './src/hooks/i18/i18next'

export default function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Index/>
    </NavigationContainer>
  );
}
