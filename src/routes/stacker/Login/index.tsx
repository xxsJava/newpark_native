/*
 * @Author: xxs
 * @Date: 2023-10-27 09:11:12
 * @LastEditTime: 2023-10-28 23:59:18
 * @FilePath: \newpark_native\src\routes\stacker\Login\index.tsx
 * @Description: 登录路由管理
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import LoginView from '../../../views/login';
import {BommonTab} from '..';
import Verification from '../../../views/login/components/Verification';
import Registered from '../../../views/login/components/Registered';
import {StyleSheet} from 'react-native';
import StylesALL from '../../../styles';
import { background } from 'native-base/lib/typescript/theme/styled-system';

const Stack = createNativeStackNavigator();

export default class LoginStacker extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="LoginStacker">
        <Stack.Screen
          name="LoginStacker"
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
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            title: '短信验证',
            headerTitleAlign: 'center',
            headerTitleStyle: styles.navText,
            headerStyle:StylesALL.BGCOLOR
          }}
        />
        <Stack.Screen
          name="Registered"
          component={Registered}
          options={{
            title: '注册信息填写',
            headerTitleAlign: 'center',
            headerTitleStyle: styles.navText,
            headerStyle:StylesALL.BGCOLOR
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"#fff"
  },
});
