/*
 * @Author: xxs
 * @Date: 2023-10-07 17:40:28
 * @LastEditTime: 2023-10-08 00:43:09
 * @FilePath: \newpark_native\src\views\home\HomeView.tsx
 * @Description: 推荐
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.centerText}>
        <Text > HomeView </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
