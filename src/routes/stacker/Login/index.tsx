/*
 * @Author: xxs
 * @Date: 2023-10-27 09:11:12
 * @LastEditTime: 2023-10-31 16:27:59
 * @FilePath: \newpark_native\src\routes\stacker\Login\index.tsx
 * @Description: 登录路由管理 LoginStacker
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import StackerRouterConfig from '../../../config/routs-config/StackerRouter-config';

const Stack = createNativeStackNavigator();



export default class LoginStacker extends Component {

  render() {
    return (
      <Stack.Navigator>
        {Object.entries(StackerRouterConfig.LoginStackerRout).map(
          ([key, value]) => {
            return (
              <Stack.Screen
                name={key}
                key={key}
                component={value.component}
                options={value.options}
              />
            );
          },
        )}
      </Stack.Navigator>
    );
  }
}

