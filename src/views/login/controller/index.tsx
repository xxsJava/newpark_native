import {BommonTab} from '../../../routes/stacker';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Storage from '../../../utils/AsyncStorageUtils';
import LoginStacker from '../../../routes/stacker/Login';

/*
 * @Author: xxs
 * @Date: 2023-10-24 17:48:22
 * @LastEditTime: 2023-10-27 09:14:38
 * @FilePath: \newpark_native\src\views\login\controller\index.tsx
 * @Description: 登录控制器
 */
console.log('进入登录控制器');

const Stack = createNativeStackNavigator();

let isFlag = false;

const loginVal = async () => {
  const login = await Storage.isGet('usr-login');
  isFlag = login;
  return login;
};
loginVal();

export const isLogin = () => {
  console.log('查看登录状态' + isFlag);
  return isFlag ? (
    BommonTab()
  ) : (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginStacker}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
