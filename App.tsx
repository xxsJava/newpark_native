/*
 * @Author: xxs
 * @Date: 2023-10-04 23:22:00
 * @LastEditTime: 2023-10-24 17:10:37
 * @FilePath: \newpark_native\App.tsx
 * @Description: desc
 */

import React, {useState, useEffect} from 'react';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Index from './src/routes/main';

import 'intl-pluralrules';
import './src/hooks/i18/i18next';
import LoginView from './src/views/login';

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
  const [login, loginSucceed] = useState(true);

  console.log('开始加载APP');

  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}
