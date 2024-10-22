/*
 * @Author: xxs
 * @Date: 2023-10-07 18:29:15
 * @LastEditTime: 2023-10-31 16:51:18
 * @FilePath: \newpark_native\src\routes\stacker\SocializingStacker.tsx
 * @Description: Socializing路由管理
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {StyleSheet,Dimensions,} from 'react-native';
import SocializingStackerRout from '../../config/routs-config/StackerRout/SocializingStackerRout';

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let tabVal = '1';


export default class SocializingStacker extends Component {
  render() {
    return (
      <Stack.Navigator>
        {Object.entries(SocializingStackerRout).map(
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

