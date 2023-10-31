/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:50
 * @LastEditTime: 2023-10-31 16:49:40
 * @FilePath: \newpark_native\src\routes\stacker\PublishStacker.tsx
 * @Description: Publish路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import PublishStackerRout from '../../config/routs-config/StackerRout/PublishStackerRout';

const Stack = createNativeStackNavigator();

export default class PublishStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(PublishStackerRout).map(
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
