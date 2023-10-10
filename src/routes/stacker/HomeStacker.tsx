/*
 * @Author: xxs
 * @Date: 2023-10-07 18:27:52
 * @LastEditTime: 2023-10-07 23:48:38
 * @FilePath: \newpark_native\src\routes\stacker\HomeStacker.tsx
 * @Description: Home路由
 */
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HomeView from '../../views/home/HomeView'

const Stack = createStackNavigator();

export default class HomeStacker extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='HomeStack' component={HomeView}
              options={
                {
                  title:'首页',
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
