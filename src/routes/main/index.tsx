/*
 * @Author: xxs
 * @Date: 2023-10-05 12:52:53
 * @LastEditTime: 2023-10-24 17:57:37
 * @FilePath: \newpark_native\src\routes\main\index.tsx
 * @Description: 路由
 */
import React from 'react';
import { isLogin } from '../../views/login/controller';

const index = () => {
  //登录状态
  return isLogin();
};

export default index;
