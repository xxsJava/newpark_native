/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-11-02 19:00:31
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import TabNav from './components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class NewPatkView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeStyle}>
        <TabNav></TabNav>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFFFFF',
  }

});
