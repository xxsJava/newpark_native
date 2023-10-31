/*
 * @Author: xxs
 * @Date: 2023-10-07 18:29:15
 * @LastEditTime: 2023-10-30 11:59:24
 * @FilePath: \newpark_native\src\routes\stacker\SocializingStacker.tsx
 * @Description: Socializing路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import StackerRouterConfig from '../../config/routs-config/StackerRouter-config';

const Stack = createNativeStackNavigator();

export default class SocializingStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(StackerRouterConfig.SocializingStackerRout).map(
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

const styles = StyleSheet.create({});
