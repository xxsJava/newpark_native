import {BommonTab} from '../../../routes/stacker';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '..';
import Storage from '../../../utils/AsyncStorageUtils';

/*
 * @Author: xxs
 * @Date: 2023-10-24 17:48:22
 * @LastEditTime: 2023-10-25 10:31:47
 * @FilePath: \newpark_native\src\views\login\controller\index.tsx
 * @Description: 登录控制器
 */
console.log("进入登录控制器")

const Stack = createNativeStackNavigator();

let isFlag = false

const loginVal = async () =>{
    const login = await Storage.isGet("usr-login")
    isFlag = login;
    return login
}
loginVal()

export const isLogin =  () =>  {
  
  console.log("查看登录状态"+isFlag)
  return isFlag ? (
    BommonTab()
  ) : (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginHome"
        component={BommonTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
