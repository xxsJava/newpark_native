/*
 * @Author: xxs
 * @Date: 2023-10-07 18:28:21
 * @LastEditTime: 2023-10-24 16:19:12
 * @FilePath: \newpark_native\src\routes\stacker\NewPatkStacker.tsx
 * @Description: desc
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NewPatkView from '../../views/newpark/NewPatkView';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default class NewPatkStacker extends Component {

  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='NewPatk' component={NewPatkView}
              options={
                {
                  title:'新园',
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