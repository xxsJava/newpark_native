/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:36
 * @LastEditTime: 2023-10-30 11:59:12
 * @FilePath: \newpark_native\src\routes\stacker\MineStacker.tsx
 * @Description: Mine路由跳转
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import StackerRouterConfig from '../../config/routs-config/StackerRouter-config';

const Stack = createNativeStackNavigator();

export default class MineStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(StackerRouterConfig.MineStackerRout).map(
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

