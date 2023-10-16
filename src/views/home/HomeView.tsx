/*
 * @Author: xxs
 * @Date: 2023-10-07 17:40:28
 * @LastEditTime: 2023-10-16 16:09:03
 * @FilePath: \newpark_native\src\views\home\HomeView.tsx
 * @Description: 推荐
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import HomeNav from '../../components/Nav';
import HomeComponents from '../../components/Home';

export default class HomeView extends Component {
  
  render() {
    return (
      <View>
        <HomeNav />
        <HomeComponents/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wd:{
    width: 150,
    height: 80,
    backgroundColor: "#24C78C",
    borderRadius: 7
  }
});
