/*
 * @Author: xxs
 * @Date: 2023-10-07 17:43:58
 * @LastEditTime: 2023-10-25 10:07:50
 * @FilePath: \newpark_native\src\views\publish\PublishView.tsx
 * @Description: desc
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class PublishView extends Component {
  render() {
    return (
      <View style={styles.centerText}>
        <Text> PublishView </Text>
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
