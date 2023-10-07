/*
 * @Author: xxs
 * @Date: 2023-10-07 17:44:34
 * @LastEditTime: 2023-10-08 00:46:23
 * @FilePath: \newpark_native\src\views\socializing\SocializingView.tsx
 * @Description: desc
 */
import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'

export default class SocializingView extends Component {
  render() {
    return (
      <View style={styles.centerText}>
        <Text> SocializingView </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});