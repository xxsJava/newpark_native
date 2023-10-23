/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-23 14:35:50
 * @FilePath: \newpark_native\App.tsx
 * @Description: desc
 */

import React,{useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Index from './src/routes/main'
import Login from './src/views/login'
import 'intl-pluralrules'
import './src/hooks/i18/i18next'
import { Text } from 'react-native-paper';

// import {test,login} from './src/api/test'

// const tests =async () => {
//   const findAll = await test();
//   const data = {
//     userName: "xxs",
//     password: "123456"
//   }
//   const logins = await login(data,'test')
//   console.log(logins)
// }

// console.log('开始发送请求')
// tests()
// console.log('请求结束')

export default function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Login/>
      {/* <Index /> */}
    </NavigationContainer>
  );
}
