/*
 * @Author: xxs
 * @Date: 2023-10-27 09:11:12
 * @LastEditTime: 2023-10-31 15:45:14
 * @FilePath: \newpark_native\src\routes\stacker\Login\index.tsx
 * @Description: 登录路由管理 LoginStacker
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import LoginView from '../../../views/login';
import {BommonTab} from '..';
import Verification from '../../../views/login/components/Verification';
import Registered from '../../../views/login/components/Registered';
import {StyleSheet} from 'react-native';
import StylesALL from '../../../styles';
import StackerRouterConfig from '../../../config/routs-config/StackerRouter-config';

const Stack = createNativeStackNavigator();

const test = () => {
  Object.entries(StackerRouterConfig.LoginStackerRout).map(
    ([key, value]) => {
      
    },
  );
};

export default class LoginStacker extends Component {
  componentDidMount(): void {
    test();
  }

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

