/*
 * @Author: xxs
 * @Date: 2023-10-07 17:40:28
 * @LastEditTime: 2023-12-22 10:23:16
 * @FilePath: \newpark_native\src\views\home\HomeView.tsx
 * @Description: 推荐 Home展示页
 */
import React, { Component } from 'react';
import BellView from '../../components/Bell';
import HomeComponents from '../../components/Home';
import HomeNav from '../../components/Nav';

export default class HomeView extends Component {
  
  render() {
    return (
      <>
        <HomeNav />
        <HomeComponents />
        <BellView></BellView>
      </>
    );
  }
}
