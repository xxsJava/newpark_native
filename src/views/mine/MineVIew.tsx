/*
 * @Author: xxs
 * @Date: 2023-10-07 17:41:24
 * @LastEditTime: 2023-10-08 00:44:20
 * @FilePath: \newpark_native\src\views\mine\MineVIew.tsx
 * @Description: 我的
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class MineVIew extends Component {
  render() {
    return (
      <View style={styles.centerText}>
        <Text> MineVIew </Text>
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

