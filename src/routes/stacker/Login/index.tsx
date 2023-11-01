/*
 * @Author: xxs
 * @Date: 2023-10-27 09:11:12
 * @LastEditTime: 2023-11-01 14:14:08
 * @FilePath: \newpark_native\src\routes\stacker\Login\index.tsx
 * @Description: 登录路由管理 LoginStacker
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import ROOTStackerRoute from '../../../config/routs-config/StackerRout/ROOTStackerRoute';

const Stack = createNativeStackNavigator();

export default class LoginStacker extends Component {

  render() {
    const {route}: any = this.props;
    console.log('查看路由入口地址-->>>',route.params.routName)

    return (
      <Stack.Navigator initialRouteName={route.params.routName}>
        {Object.entries(ROOTStackerRoute).map(([key, value]) => {
          return (
            <Stack.Screen
              name={key}
              key={key}
              component={value.component}
              options={value.options}
            />
          );
        })}
      </Stack.Navigator>
    );
  }
}
