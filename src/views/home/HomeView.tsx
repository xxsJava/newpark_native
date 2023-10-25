/*
 * @Author: xxs
 * @Date: 2023-10-07 17:40:28
 * @LastEditTime: 2023-10-25 11:51:26
 * @FilePath: \newpark_native\src\views\home\HomeView.tsx
 * @Description: 推荐 Home展示页
 */
import React, {Component} from 'react';
import HomeNav from '../../components/Nav';
import HomeComponents from '../../components/Home';
import {SafeAreaView} from 'react-native-safe-area-context';
import StylesALL from '../../styles';

export default class HomeView extends Component {
  render() {
    return (
      <SafeAreaView style={StylesALL.CONTAINER}>
        <HomeNav />
        <HomeComponents />
      </SafeAreaView>
    );
  }
}
