/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:36
 * @LastEditTime: 2023-10-07 23:46:42
 * @FilePath: \newpark_native\src\routes\stacker\MineStacker.tsx
 * @Description: desc
 */
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MineVIew from '../../views/mine/MineVIew';

const Stack = createStackNavigator();


export default class MineStacker extends Component {
  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Mine' component={MineVIew}
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