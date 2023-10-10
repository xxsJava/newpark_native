/*
 * @Author: xxs
 * @Date: 2023-10-07 17:40:28
 * @LastEditTime: 2023-10-10 22:03:18
 * @FilePath: \newpark_native\src\views\home\HomeView.tsx
 * @Description: 推荐
 */
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { ActivityIndicator, MD2Colors,PaperProvider } from 'react-native-paper';

const Load = () =>{
  return <ActivityIndicator animating={true} color={MD2Colors.red800} />;
}

export default class HomeView extends Component {

  render() {
    return (
      
      <PaperProvider><Load /></PaperProvider>
      // <View style={styles.centerText}>
      //   <Text> HomeView </Text>
        
      // </View>
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
