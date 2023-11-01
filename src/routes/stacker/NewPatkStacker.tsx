/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:21
 * @LastEditTime: 2023-11-01 09:05:00
 * @FilePath: \newpark_native\src\routes\stacker\NewPatkStacker.tsx
 * @Description: NewPatk路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NewPatkStackerRout from '../../config/routs-config/StackerRout/NewPatkStackerRout';

const Stack = createNativeStackNavigator();

export default class NewPatkStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(NewPatkStackerRout).map(
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
