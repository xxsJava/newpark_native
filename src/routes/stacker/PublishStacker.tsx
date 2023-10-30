/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:50
 * @LastEditTime: 2023-10-30 11:59:20
 * @FilePath: \newpark_native\src\routes\stacker\PublishStacker.tsx
 * @Description: Publish路由管理
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PublishView from '../../views/publish/PublishView';

const Stack = createNativeStackNavigator();


export default class PublishStacker extends Component {
  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PublishStacker' component={PublishView}
              options={
                {
                  title:'发布',
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