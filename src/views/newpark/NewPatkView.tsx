/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-10-08 00:44:41
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class NewPatkView extends Component {
  render() {
    return (
      <View style={styles.centerText}>
        <Text> NewPatkView </Text>
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