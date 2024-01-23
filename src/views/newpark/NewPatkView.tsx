/*
 * @Author: xxs
 * @Date: 2023-10-07 17:42:15
 * @LastEditTime: 2023-11-02 19:00:31
 * @FilePath: \newpark_native\src\views\newpark\NewPatkView.tsx
 * @Description: desc
 */
import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import TabNav from './components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class NewPatkView extends Component {
  render() {
    if(Platform.OS == 'ios') {
      return (
        <SafeAreaView style={styles.safeStyle}>
          <TabNav></TabNav>
        </SafeAreaView>
      );
    }
    if(Platform.OS == 'android') {
      return (
        <View style = {styles.AndroidSafeArea}>
            <TabNav></TabNav>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  safeStyle: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFFFFF'
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

});
