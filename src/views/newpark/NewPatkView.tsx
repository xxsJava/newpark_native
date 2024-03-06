/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2024-03-06 10:04:55
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet
} from 'react-native';
import TabNav from './components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class NewPatkView extends Component {
  render(){
    return (
      <TabNav />
    )
  } 
}

const styles = StyleSheet.create({

});
