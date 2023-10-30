/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:36
 * @LastEditTime: 2023-10-30 11:59:12
 * @FilePath: \newpark_native\src\routes\stacker\MineStacker.tsx
 * @Description: Mine路由跳转
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MineVIew from '../../views/mine/MineVIew';

const Stack = createNativeStackNavigator();


export default class MineStacker extends Component {
  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MineStacker' component={MineVIew}
              options={
                {
                  title:'我的',
                  headerShown: false,
                }
              }
            />
        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})