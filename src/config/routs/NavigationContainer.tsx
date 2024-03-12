/*
 * @Author: xxs
 * @Date: 2023-10-31 14:21:25
 * @LastEditTime: 2024-02-22 18:09:17
 * @FilePath: \newpark_native\src\config\routs\NavigationContainer.tsx
 * @Description: 全局跳转
 */

import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import Router from './lib/routs';

export const navigationRefs = React.createRef<NavigationContainerRef<any>>();

// 封装统一的跳转函数
export function navigate(name: string, params?: any) {
  const router = new Router();
  // console.log(name);
  router.navigateRout(name, params);
}
