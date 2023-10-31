/*
 * @Author: xxs
 * @Date: 2023-10-31 14:21:25
 * @LastEditTime: 2023-10-31 14:44:33
 * @FilePath: \newpark_native\src\config\routs\NavigationContainer.tsx
 * @Description: 全局跳转
 */

import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

// 创建一个全局的导航引用
export const navigationRefs = React.createRef<NavigationContainerRef<any>>();

// 封装统一的跳转函数
export function navigate(name: string, params?: any) {
  navigationRefs.current?.navigate(name, params);
}