/*
 * @Author: xxs
 * @Date: 2023-10-07 18:29:15
 * @LastEditTime: 2023-10-25 10:37:20
 * @FilePath: \newpark_native\src\routes\stacker\SocializingStacker.tsx
 * @Description: Socializing路由管理
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SocializingView from '../../views/socializing/SocializingView';

const Stack = createNativeStackNavigator();


export default class SocializingStacker extends Component {
  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Socializing' component={SocializingView}
              options={
                {
                  title:'社交',
                  headerStyle:{
                    backgroundColor:'tomato'
                  }
                }
              }
            />
        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})