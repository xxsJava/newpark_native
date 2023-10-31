/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:21
 * @LastEditTime: 2023-10-31 16:34:11
 * @FilePath: \newpark_native\src\routes\stacker\NewPatkStacker.tsx
 * @Description: NewPatk路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import NewPatkView from '../../views/newpark/NewPatkView';
import StackerRouterConfig from '../../config/routs-config/StackerRouter-config';

const Stack = createNativeStackNavigator();

export default class NewPatkStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(StackerRouterConfig.NewPatkStackerRout).map(
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
