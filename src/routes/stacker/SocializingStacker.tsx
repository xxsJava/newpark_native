/*
 * @Author: xxs
 * @Date: 2023-10-07 18:29:15
 * @LastEditTime: 2023-10-07 23:45:36
 * @FilePath: \newpark_native\src\routes\stacker\SocializingStacker.tsx
 * @Description: desc
 */
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SocializingView from '../../views/socializing/SocializingView';

const Stack = createStackNavigator();


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