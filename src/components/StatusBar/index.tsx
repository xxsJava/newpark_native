import React from 'react';
import {Component} from 'react';
import {StatusBar, View} from 'react-native';
/*
 * @Author: xxs
 * @Date: 2023-10-26 17:43:39
 * @LastEditTime: 2023-10-26 17:45:41
 * @FilePath: \newpark_native\src\components\StatusBar\index.tsx
 * @Description: 隐藏状态栏
 */

export default class MainPage extends Component {
  render() {
    return (
      <StatusBar
        backgroundColor="#ff0000"
        translucent={true}
        hidden={true}
        animated={true}
      />
    );
  }
  // render() {
  //   return (
  //     <View >
  //       <StatusBar backgroundColor="#F8B032"  />
  //       <View>
  //         <StatusBar hidden={false} />
  //       </View>
  //     </View>
  //   ); 
  // };

}
