/*
 * @Author: xxs
 * @Date: 2023-10-07 17:40:28
 * @LastEditTime: 2023-10-16 14:09:47
 * @FilePath: \newpark_native\src\views\home\HomeView.tsx
 * @Description: 推荐
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import HomeNav from '../../components/Nav';
import HomeComponents from '../../components/Home';

const Load = () => {
  return <ActivityIndicator animating={false} color={MD2Colors.red800} />;
};


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
