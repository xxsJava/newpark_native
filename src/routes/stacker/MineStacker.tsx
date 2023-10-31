/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:36
 * @LastEditTime: 2023-10-31 16:53:01
 * @FilePath: \newpark_native\src\routes\stacker\MineStacker.tsx
 * @Description: Mine路由跳转
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import MineStackerRout from '../../config/routs-config/StackerRout/MineStackerRout';

const Stack = createNativeStackNavigator();

export default class MineStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(MineStackerRout).map(
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

