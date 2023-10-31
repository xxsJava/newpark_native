/*
 * @Author: xxs
 * @Date: 2023-10-07 18:27:52
 * @LastEditTime: 2023-10-31 16:43:18
 * @FilePath: \newpark_native\src\routes\stacker\HomeStacker.tsx
 * @Description: Home路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import HomeStackerRout from '../../config/routs-config/StackerRout/HomeStackerRout';

const Stack = createNativeStackNavigator();

export default class HomeStacker extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        {Object.entries(HomeStackerRout).map(
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
